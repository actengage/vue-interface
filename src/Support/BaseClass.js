import { isObject } from '../Helpers/Functions';

export default class BaseClass {
    constructor(attributes) {
        this.setAttribute(attributes);
    }

    getAttribute(key) {
        return this.hasOwnProperty(key) ? this[key] : null;
    }

    getAttributes() {
        const attributes = {};

        Object.getOwnPropertyNames(this).forEach(key => {
            attributes[key] = this.getAttribute(key);
        });

        return attributes;
    }

    getPublicAttributes() {
        return Object.keys(this.getAttributes())
            .filter(key => {
                return !key.match(/^\$/);
            })
            .reduce((obj, key) => {
                obj[key] = this.getAttribute(key);

                return obj;
            }, {});
    }

    setAttribute(key, value) {
        if (isObject(key)) {
            this.setAttributes(key);
        }
        else {
            this[key] = value;
        }
    }

    setAttributes(values) {
        for (const i in values) {
            this.setAttribute(i, values[i]);
        }
    }
}
