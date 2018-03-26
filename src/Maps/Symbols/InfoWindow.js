import Vue from 'vue';
import { each } from 'lodash';
import { filter } from 'lodash';
import { isUndefined } from 'lodash';
import Symbol from '@/Toolbox/Maps/Symbols/Symbol';
import GoogleMapInfoWindow from '@/Toolbox/Maps/GoogleMapInfoWindow';

export default class InfoWindow extends Symbol {

    initialize() {
        const InfoWindowVue = Vue.extend(GoogleMapInfoWindow);

        this.$template = new InfoWindowVue({
            propsData: this.$data || {}
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
        if(isUndefined(data)) {
            return;
        }

        const map = {
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
