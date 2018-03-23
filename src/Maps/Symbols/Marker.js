import Vue from 'vue';
import { each } from 'lodash';
import { extend } from 'lodash';
import { indexOf } from 'lodash';
import { isUndefined } from 'lodash';
import MapSymbol from './MapSymbol';
import InfoWindow from './InfoWindow';
import MarkerForm from '@/Toolbox/Maps/Forms/MarkerForm';

export default class Marker extends MapSymbol {

    initialize(position, options) {
        const marker = new google.maps.Marker(extend({
            map: this.$vue.map,
            draggable: true,
            position: position
        }, options));

        this.$places = null;
        this.$results = null;
        this.$infoWindow = new InfoWindow(this.$vue, position);
        this.$infoWindow.$data = this.$data;
        this.$infoWindow.$template.activity = true;
        this.$infoWindow.$template.$on('click:edit', event => this.update());
        this.$infoWindow.$template.$on('click:delete',  event => this.delete());

        this.$vue.geocode(position).then(results => {
            this.$results = results;
            this.$infoWindow.update(results[0]);
            this.nearbyPlaces(position);
        });

        return marker;
    }

    events() {
        return {
            'click': event => {
                // Open the InfoWindow
                this.$infoWindow.open(this.$symbol);

                // Trigger the marker:click event on the parent Vue instance.
                this.$vue.$emit('marker:click', event, this);
            },
            'dragstart': event => {
                this.$vue.$isDragging = true;
            },
            'dragend': event => {
                this.$vue.$isDragging = false;
                this.nearbyPlaces(event.latLng);
            }
        }
    }

    nearbyPlaces(position) {
        this.$infoWindow.$template.activity = true;

        const nearbyPlaces = result => {
            this.$infoWindow.update(result);
            this.$vue.nearbyPlaces(result.geometry.position || this.$symbol.getPosition()).then(places => {
                places = places.length !== 1 ? places.filter(result => {
                    return indexOf(result.types, 'locality') === -1;
                }) : places;

                this.$places = places;
                this.$infoWindow.update(places[0] || {});
                this.$infoWindow.$template.activity = false;
            }, status => {
                this.$places = [];
                this.$infoWindow.$template.activity = false;
            });
        };

        this.$vue.geocode(position).then(results => {
            nearbyPlaces(results[0]);
        }, status => {
            nearbyPlaces();
        });
    }

    extendBounds(bounds) {
        bounds.extend(this.$symbol.getPosition());
    }

    update() {
        const FormComponent = Vue.extend(MarkerForm);

        const form = new FormComponent({
            propsData: {
                symbol: this
            }
        });

        form.$on('submit', () => {
            each(extend(this.$data, form.data), (value, prop) => {
                this.$infoWindow.$template[prop] = value;
            });

            this.$vue.$emit('marker:updated', this);
        });

        form.$on('hide', () => {
            form.$el.remove();
            form.$destroy();
        });

        form.show();
    }

    delete() {
        this.$symbol.setMap(null);
        this.$vue.mapData.splice(indexOf(this.$vue.mapData, this));
        this.$vue.$emit('marker:removed', this);
    }


}
