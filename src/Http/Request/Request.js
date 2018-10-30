import axios from 'axios';
import moment from 'moment';
// import { bind } from '../../Helpers/Functions';
import { each } from '../../Helpers/Functions';
import { first } from '../../Helpers/Functions';
import { extend } from '../../Helpers/Functions';
import { isArray } from '../../Helpers/Functions';
import { isObject } from '../../Helpers/Functions';
import { cloneDeep } from '../../Helpers/Functions';
import { camelCase } from '../../Helpers/Functions';
//import { mergeWith } from '../../Helpers/Functions';
import RequestOptions from './RequestOptions';
import transformRequest from './TransformRequest';
import transformResponse from './TransformResponse';

const PROXY_OPTION_PROPERTIES = [
    'headers',
    'params',
    'data'
];

const PROXY_OPTION_METHODS = {
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

function merge() {
    const args = [].slice.call(arguments);
    const items = args.splice(1);
    let subject = first(args);

    for(let i in items) {
        subject = mergeWith(subject, items[i], (subject, value) => {
            if(isArray(subject)) {
                return subject.concat(value);
            }
            else if(isObject(subject)) {
                return extend(subject, value);
            }

            return value;
        });
    }

    return subject;
}

export default class Request {

    constructor(url, options = {}) {
        this.$options = merge({
            url: url,
            data: {},
            headers: {},
            params: {},
        }, cloneDeep(RequestOptions), options, {
            cancelToken: new axios.CancelToken(cancel => {
                this.$cancel = cancel;
            })
        });

        each(PROXY_OPTION_METHODS, (callback, key) => {
            this[method(key, 'option')] = bind(callback)('$options', this);
        });

        each(PROXY_OPTION_PROPERTIES, (prop) => {
            each(PROXY_OPTION_METHODS, (callback, key) => {
                this[method(key, prop)] = bind(callback)(prop, this.$options);
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

    cancel() {
        !this.$response && this.$cancel();
    }

    get(params = {}, headers = {}) {
        return this.params(params).headers(headers).send('get');
    }

    post(data = {}, headers = {}) {
        return this.data(data).headers(headers).send('post');
    }

    put(data = {}, headers = {}) {
        return this.data(data).headers(headers).send('put');
    }

    delete(headers = {}) {
        return this.headers(headers).send('delete');
    }

    send(method) {
        this.reset();
        this.$requestSentAt = moment();
        this.addOption('method', method);

        return new Promise((resolve, reject) => {
            axios(this.$options).then(response => {
                this.$response = response;
                this.$responseReceivedAt = moment();
                this.$status = response.status;
                this.$statusText = response.statusText;

                resolve(response.data);
            }, error => {
                this.$error = error;
                this.$response = error.response;
                this.$responseReceivedAt = moment();
                this.$status = error.response ? error.response.status : null;
                this.$statusText = error.response ? error.response.statusText : null;

                reject(error.response || error);
            });
        });
    }

    transformRequest(transformer) {
        if(!this.$options.transformRequest) {
            this.$options.transformRequest = [];
        }

        transformRequest(transformer, this.$options.transformRequest);
    }

    transformResponse(transformer) {
        if(this.$options.transformResponse) {
            this.$options.transformResponse = [];
        }

        transformResponse(transformer, this.$options.transformResponse);
    }

    static interceptRequest(success, error) {
        this.interceptors().request.use(success, error);
    }

    static interceptResponse(success, error) {
        this.interceptors().response.use(success, error);
    }

    static interceptors() {
        return axios.interceptors;
    }

    static option(key, value) {
        if(isObject(key)) {
            merge(RequestOptions, key);
        }
        else {
            const option = {};
            option[key] = value;
            merge(RequestOptions, option);
        }
    }

    static make(url, params = {}) {
        return new this(url, params);
    }
}
