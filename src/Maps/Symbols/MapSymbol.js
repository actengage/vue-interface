import Vue from 'vue';
import { map } from 'lodash';
import { each } from 'lodash';
import { find } from 'lodash';
import { clone } from 'lodash';
import { extend } from 'lodash';
import { indexOf } from 'lodash';
import { isArray } from 'lodash';
import { filter } from 'lodash';
import { pull } from 'lodash';
import Symbol from '@/Toolbox/Maps/Symbols/Symbol';
import InfoWindow from '@/Toolbox/Maps/Symbols/InfoWindow';
import InfoWindowForm from '@/Toolbox/Maps/InfoWindowForm';

export default class MapSymbol extends Symbol {

    constructor(vue, params, callback) {
        super(vue, params, (instance) => {
            instance.$places = null;
            instance.$results = null;
            instance.$drawingPoints = [];
            instance.$geocoder = new google.maps.Geocoder;

            if(!!params.drawingMode) {
                instance.$vue.drawingMode = instance;
            }

            instance.$infoWindow = new InfoWindow(vue, {
                data: instance.$data
            });

            instance.$infoWindow.$template.activity = true;
            instance.$infoWindow.$template.$on('click:edit', event => instance.update());
            instance.$infoWindow.$template.$on('click:delete',  event => instance.delete());
        });
    }

    save() {
        this.$drawingPoints = [];
        this.$vue.drawingMode = false;
        this.$infoWindow.open(this.$symbol);

        if(this.$symbol.setDraggable) {
            this.$symbol.setDraggable(false);
        }

        google.maps.event.removeListener(this.$listener);

        this.$vue.$emit(`${this.namespace()}:save`, this);
    }

    update() {
        const FormComponent = Vue.extend(InfoWindowForm);

        const form = new FormComponent({
            propsData: {
                symbol: this
            }
        });

        form.$on('hide', () => {
            form.$el.remove();
            form.$destroy();
        });

        form.$on('submit', (event, data) => {
            data = extend(this.$data, data);

            each(data, (value, prop) => {
                this.$infoWindow.$template[prop] = value;
            });

            this.$vue.$emit(`${this.namespace()}:updated`, this, form, data);
        });

        form.show();

        google.maps.event.removeListener(this.$listener);

        this.$vue.$emit(`${this.namespace()}:update`, this, form);
    }

    cancel() {
        this.$vue.drawingMode = false;
        this.$drawingPoints = [];
        this.$infoWindow.close();

        if(!this.$originalValue) {
            this.$symbol.setMap(null);
            this.delete();
        }

        google.maps.event.removeListener(this.$listener);

        this.$vue.$emit(`${this.namespace()}:cancel`, this);
    }

    delete() {
        this.$drawingPoints = [];
        this.$symbol.setMap(null);
        this.$vue.drawingMode = false;

        if(find(this.$vue.value, this)) {
            this.$vue.$emit('update:value', pull(clone(this.$vue.value), this));
            this.$vue.$emit(`${this.namespace()}:delete`, this);
        }

        google.maps.event.removeListener(this.$listener);
    }

    data() {
        const data = {};

        each(this.$infoWindow.$template.$options.props, (value, key) => {
            if(this.$infoWindow.$template[key]) {
                data[key] = this.$infoWindow.$template[key];
            }
        });

        return extend(data, this.$data);
    }

    updateInfoWindow(position) {
        this.$infoWindow.activity = true;

        this.$vue.geocode(position).then(results => {
            this.$results = results;
            this.$infoWindow.update(results[0]);
            this.nearbyPlaces(results[0].geometry.location);
            this.$vue.$emit(`${this.namespace()}:geocode`, this, results);
        });
    }

    nearbyPlaces(position) {
        this.$infoWindow.$template.activity = true;
        const nearbyPlaces = result => {
            this.$infoWindow.update(result);
            this.$vue.nearbyPlaces(result.geometry ? result.geometry.location : result).then(places => {
                places = places.length !== 1 ? places.filter(result => {
                    return indexOf(result.types, 'locality') === -1;
                }) : places;

                this.$places = places;
                this.$infoWindow.update(places[0] || {});
                this.$infoWindow.$template.activity = false;
                this.$vue.$emit(`${this.namespace()}:places`, this, places);
            }, status => {
                this.$places = [];
                this.$infoWindow.$template.activity = false;
            });
        };

        this.$vue.geocode(position).then(results => {
            nearbyPlaces(results[0]);
        }, status => {
            nearbyPlaces(position);
        });
    }

    extendBounds(bounds) {
        //
    }

}
