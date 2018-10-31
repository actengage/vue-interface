import axios from 'axios';
import Response from './Response';
import BaseClass from '../../Support/BaseClass';
import { extend, isObject } from '../../Helpers/Functions';

const DEFAULTS = {
    transformRequest: [],
    transformResponse: []
};

export default class Request extends BaseClass {
    constructor(method, url, attributes) {
        super({
            options: {},
            data: {},
            headers: {},
            params: {},
            url: url,
            method: method
        });

        if (isObject(attributes)) {
            this.setAttribute(attributes);
        }
    }

    send(attributes) {
        this.sentAt = new Date();
        this.setAttributes(attributes);

        return new Promise((resolve, reject) => {
            axios(this.options).then(
                data => resolve(this.response = new Response(data)),
                errors => reject(this.errors = errors)
            );
        });
    }

    set cancel(value) {
        this.$cancel = value;
    }

    get cancel() {
        return this.$cancel || (() => {
            throw new Error('The request has not been sent yet.');
        });
    }

    get options() {
        return extend({
            cancelToken: new axios.CancelToken(cancel => {
                this.cancel = cancel;

                return cancel;
            })
        }, DEFAULTS, this.getPublicAttributes());
    }

    set options(attributes) {
        this.setAttribute(attributes);
    }

    get response() {
        return this.$response;
    }

    set response(value) {
        this.$response = value;
    }

    get errors() {
        return this.$errors;
    }

    set errors(value) {
        this.$errors = value;
    }

    get passed() {
        return !!this.response && !this.errors;
    }

    get failed() {
        return !!this.response && !!this.$error;
    }

    static get transform() {
        return {
            request: this.transformRequest,
            response: this.transformResponse
        };
    }

    static get defaults() {
        return DEFAULTS;
    }

    static set defaults(value) {
        extend(DEFAULTS, value);
    }

    static transformRequest(fn) {
        DEFAULTS.transformRequest.push(fn);
    }

    static transformResponse(fn) {
        DEFAULTS.transformResponse.push(fn);
    }

    static get(url, attributes) {
        return this.make('get', url).send(attributes);
    }

    static post(url, attributes) {
        return this.make('post', url, attributes).send();
    }

    static put(url, attributes) {
        return this.make('put', url, attributes).send();
    }

    static patch(url, data, attributes) {
        return this.make('path', url, attributes).send();
    }

    static delete(url, attributes) {
        return this.make('delete', url, attributes).send();
    }

    static make(method, url, attributes) {
        return new this(method, url, attributes);
    }
}
