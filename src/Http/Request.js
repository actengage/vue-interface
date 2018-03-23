import axios from 'axios';
import moment from 'moment';
import { bind } from 'lodash';
import { each } from 'lodash';
import { extend } from 'lodash';
import { isObject } from 'lodash';
import { camelCase } from 'lodash';

const PROXY_CONFIG_PROPERTIES = ['headers', 'params', 'data'];

const PROXY_CONFIG_METHODS = {
    get(prop, context) {
        return () => {
            return context[prop];
        };
    },
    set(prop, context) {
        return (value) => {
            context[prop] = value;
        };
    },
    add(prop, context) {
        return (key, value) => {
            context[prop][key] = value;
        };
    },
    remove(prop, context) {
        return (key) => {
            delete context[prop][key];
        };
    },
    merge(prop, context) {
        return (key, values) => {
            extend(context[prop], key);
        };
    }
};

const method = function(action, prop) {
    return camelCase([action, prop].join(' '));
};

const chainable = function(prop) {
    return (key, value) => {
        if(key instanceof FormData) {
            this[method('set', prop)](key);
        }
        else if(isObject(key)) {
            this[method('merge', prop)](key);
        }
        else {
            this[method('add', prop)](key, value);
        }

        return this;
    };
};

export default class Request {

    constructor(url, config = {}) {
        this.$config = extend({
            url: url,
            headers: {},
            params: {},
            data: {}
        }, config);

        each(PROXY_CONFIG_METHODS, (callback, key) => {
            this[method(key, 'config')] = bind(callback)('$config', this);
        });

        this['config'] = bind(chainable, this)('config');

        each(PROXY_CONFIG_PROPERTIES, (prop) => {
            each(PROXY_CONFIG_METHODS, (callback, key) => {
                this[method(key, prop)] = bind(callback)(prop, this.$config);
            });

            this[prop] = bind(chainable, this)(prop);
        });

        this.reset();
    }

    reset() {
        this.$error = null;
        this.$status = null;
        this.$statusText = null;
        this.$response = null;
        this.$requestSentAt = null;
        this.$responseReceivedAt = null;
    }

    hasSent() {
        return !!this.$requestSentAt;
    }

    hasResponse() {
        return !!this.$responseReceivedAt;
    }

    passed() {
        return this.hasResponse() && !this.$error;
    }

    failed() {
        return this.hasResponse() && !!this.$error;
    }

    getUrl() {
        return this.$url;
    }

    setUrl(url) {
        this.$url = url;
    }

    get(params = {}, headers = {}) {
        return this.params(params).headers(headers).request('get');
    }

    post(data = {}, headers = {}) {
        return this.data(data).headers(headers).request('post');
    }

    put(data = {}, headers = {}) {
        return this.data(data).headers(headers).request('put');
    }

    delete(headers = {}) {
        return this.headers(headers).request('delete');
    }

    request(method) {
        this.reset();
        this.$requestSentAt = moment();
        this.addConfig('method', method);

        const promise = new Promise((resolve, reject) => {
            axios.request(this.$config).then(response => {
                this.$response = response;
                this.$responseReceivedAt = moment();
                this.$status = response.status;
                this.$statusText = response.statusText;

                resolve(response.data);
            }, error => {
                this.$error = error;
                this.$response = error.response;
                this.$responseReceivedAt = moment();
                this.$status = error.response.status;
                this.$statusText = error.response.statusText;

                reject(error.response.data.errors);
            });
        });

        return promise;
    }

}
