import Vue from 'vue';
import { each } from 'lodash';
import { filter } from 'lodash';
import MapSymbol from './MapSymbol';
import { isUndefined } from 'lodash';
import GoogleMapInfoWindow from '@/Toolbox/Maps/GoogleMapInfoWindow';

export default class InfoWindow extends MapSymbol {

    initialize(position, options) {
        const InfoWindowVue = Vue.extend(GoogleMapInfoWindow);

        this.$template = new InfoWindowVue({
            propsData: options || {}
        }).$mount();

        return new google.maps.InfoWindow({
            template: this.$template,
            content: this.$template.$el
        });
    }

    open(anchor) {
        this.$symbol.open(this.$vue.map, anchor);
    }

    close() {
        this.$symbol.close();
    }

    update(data) {
        const map = {
            'title': 'name',
            'address': 'formatted_address',
            'phone': 'formatted_phone_number'
        };

        each(this.$template.$props, (value, prop) => {
            if(isUndefined(this.$data[prop]) && !isUndefined(value = data[map[prop]] || data[prop])) {
                this.$template[prop] = value;
            }
        });
    }

    delete() {
        this.close();
    }


}
