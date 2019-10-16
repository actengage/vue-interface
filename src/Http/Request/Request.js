import Axios from 'axios';
import Response from './Response';
import BaseClass from '../../Support/BaseClass';
import { deepExtend, isObject, pickBy } from '../../Helpers/Functions';

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

        if(isObject(attributes)) {
            this.setAttribute(attributes);
        }
    }

    send(attributes) {
        this.sentAt = new Date();
        this.setAttributes(attributes);

        return new Promise((resolve, reject) => {
            Axios(this.options).then(
                response => resolve(this.response = new Response(response)),
                error => reject(this.response = new Response(error))
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
        const defaults = pickBy(DEFAULTS, value => {
            if(typeof value === 'array') {
                return !!value.length;
            }
            else if(typeof value === 'object') {
                return !!Object.entries(value).length;
            }
            else {
                return !!value;
            }
        });

        const merged = deepExtend({
            cancelToken: new Axios.CancelToken(cancel => {
                this.cancel = cancel;

                return cancel;
            })
        }, defaults, this.getPublicAttributes());

        if(this.data instanceof FormData) {
            merged.data = this.data;
        }

        return merged;
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

    get error() {
        return this.$error;
    }

    set error(value) {
        this.$error = value;
    }

    get passed() {
        return !!this.response && !this.error;
    }

    get failed() {
        return !!this.response && !!this.error;
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
        Object.assign(DEFAULTS, value);
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

    static patch(url, attributes) {
        return this.make('path', url, attributes).send();
    }

    static delete(url, attributes) {
        return this.make('delete', url, attributes).send();
    }

    static make(method, url, attributes) {
        return new this(method, url, attributes);
    }
}
