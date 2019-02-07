import wrap from '../Functions/wrap';

export default class EventEmitter {

    constructor() {
        this.reset();
    }

    on(key, fn) {
        if(!this.events[key]) {
            this.events[key] = [];
        }

        this.events[key].push(fn);
    }

    once(key, fn) {
        const wrapper = wrap(fn, (fn, ...args) => {
            fn(...args);

            this.off(key, wrapper);
        });

        this.on(key, wrapper);
    }
    
    off(key, fn) {
        if(this.events[key] && fn) {
            this.events[key] = this.events[key].filter(event => event !== fn);
        }
        else {
            this.events[key] = [];
        }
    }

    emit(key, ...args) {
        if(this.events[key]) {
            this.events[key].forEach(fn => fn(...args));
        }
    }

    reset() {
        this.events = {};
    }

    set events(data) {
        this.$events = data || {};
    }

    get events() {
        return this.$events;
    }

}