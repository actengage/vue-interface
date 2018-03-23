import Vue from 'vue';
import { each } from 'lodash';
import { indexOf } from 'lodash';

export default class MapSymbol {

    constructor(vue) {
        this.$data = {};
        this.$vue = vue;
        this.$geocoder = new google.maps.Geocoder;
        this.$symbol = this.initialize.apply(this, [].slice.call(arguments).splice(1));

        if(!(this.$symbol instanceof google.maps.MVCObject)) {
            throw new Error('The initialize() method must return an instance google.maps.MVCObject.');
        }

        if(!((this.$events = this.events()) instanceof Object)) {
            throw new Error('The events() method must return an object with key/callback pairs.');
        }

        each(this.$events, (callback, event) => {
            this.on(event, callback);
        });
    }

    events() {
        return {};
    }

    initialize() {
        //
    }

    on(event, callback) {
        this.$symbol.addListener(event, callback);
    }

    off(event, callback) {
        this.$symbol.removeListener(event, callback);
    }

    update() {
        //
    }

    delete() {
        const index = indexOf(this.$vue.mapData, this);

        if(index !== -1) {
            this.$vue.mapData.splice();
        }

        if(this.$symbol.setMap) {
            this.$symbol.setMap(null);
        }
    }

    extendBounds(bounds) {
        //
    }

}
