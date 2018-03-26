import { each } from 'lodash';
import { isObject } from 'lodash';
import { isFunction } from 'lodash';

export default class Symbol {

    constructor(vue, params, callback) {
        if(isFunction(params)) {
            callback = params;
            params = {};
        }

        if(!isObject(params)) {
            params = {};
        }

        this.$vue = vue;
        this.$params = params || {};
        this.$model = this.$params.model;
        this.$data = this.$params.data || {};

        if(isFunction(callback)) {
            callback.apply(this, [this, this.$params]);
        }

        this.$symbol = this.initialize.call(this, this.$params);

        if(!(this.$symbol instanceof google.maps.MVCObject)) {
            throw new Error('The initialize() method must return an instance google.maps.MVCObject.');
        }

        if(!isObject(this.$events = this.events())) {
            throw new Error('The events() method must return an objects with key/value pairs.');
        }

        each(this.$events, (callback, event) => {
            this.on(event, callback);
        });

        this.$vue.$emit(`${this.namespace()}:created`, this);
    }

    events() {
        return [];
    }

    initialize() {
        //
    }

    namespace() {
        return this.constructor.name.toLowerCase();
    }

    on(event, callback) {
        this.$symbol.addListener(event, callback);
    }

    off(event, callback) {
        this.$symbol.removeListener(event, callback);
    }

    save() {
        //
    }

    update() {
        //
    }

    delete() {
        //
    }

    cancel() {
        //
    }

}
