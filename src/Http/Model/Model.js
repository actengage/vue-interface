import { map } from 'lodash-es';
import { each } from 'lodash-es';
import { keys } from 'lodash-es';
import { size } from 'lodash-es';
import { extend } from 'lodash-es';
import { filter } from 'lodash-es';
import { isNull } from 'lodash-es';
import { pickBy } from 'lodash-es';
import { reduce } from 'lodash-es';
import { isArray } from 'lodash-es';
import { isObject } from 'lodash-es';
import { isUndefined } from 'lodash-es'
import Request from '../Request';

export default class Model {

    /**
     * Construct the model instance
     *
     * @param data object
     * @return void
     */
    constructor(data = {}, params = {}) {
        this.$request = null;
        this.$key = this.key();
        this.$properties = this.properties();
        this.$files = this.files();

        each(params, (value, key) => {
            this[key] = value;
        });

        this.initialize(data);
    }

    /**
     * Initialize the model with the given data without considering the data
     * as "changed".
     *
     * @param data object
     * @return this
     */
    initialize(data) {
        this.$exists = false;
        this.$changed = {};
        this.$attributes = {};
        this.fill(data);
        this.$initialized = true;

        return this;
    }

    /**
     * Define the corresponding API endpoint slug
     *
     * @return string
     */
    endpoint() {
        //
    }

    /**
     * Define the corresponding uri schema.
     *
     * @return string
     */
    uri() {
        return filter([
            (this.endpoint() || ''),
            (this.exists() ? this.id() : null)
        ].concat([].slice.call(arguments)))
        .join('/')
        .replace(/^\//, '');
    }

    /**
     * Return the primary key value for the model
     *
     * @return {Number}
     */
    id() {
        return this.get(this.key());
    }

    /**
     * Define a primary key. This is used to determine if the model exists and
     * which endpoint to use.
     *
     * @return string
     */
    key() {
        return 'id';
    }

    /**
     * Return an array of properties that are sent to the API. If no properties
     * are defined, then all the attributes will be included in the request.
     *
     * @return array
     */
    properties() {
        return [];
    }

    /**
     * Return an array of file properties that are sent to the API. If no fies
     * are defined, then request will always be sent with JSON vs. multipart.
     *
     * @return array
     */
    files() {
        return [];
    }

    /**
     * Set the attributes in the model with the data given.
     *
     * @param data object
     * @return this
     */
    fill(data) {
        this.setAttributes(data);

        return this;
    }

    /**
     * Get one or more attributes from the model.
     *
     * @param data string|array
     * @return array|mixed
     */
    get(key) {
        if(isArray(key) || isObject(key)) {
            return this.getAttributes().filter((value) => {
                return data.indexOf(value) !== -1;
            });
        }
        else {
            return this.getAttribute(key);
        }
    }

    /**
     * Alias for setAttributes() except this method returns `this`. This method
     * also accepts an array of values or key/value pair.
     *
     * @return this
     */
    set(key, value = undefined) {
        if(isArray(key) || isObject(key)) {
            this.setAttributes(key);
        }
        else {
            this.setAttribute(key, value);
        }

        return this;
    }

    /**
     * Get all the defined attributes.
     *
     * @return array
     */
    getAttributes() {
        return this.$attributes;
    }

    /**
     * Get the changed attributes
     *
     * @return array
     */
    getChangedAttributes() {
        return keys(this.$changed);
    }

    /**
     * Get the changed attributes
     *
     * @return array
     */
    getOriginalValue(key) {
        return this.$changed[key] || this.$attributes[key];
    }

    /**
     * Get the unchanged attributes
     *
     * @return array
     */
    getUnchangedAttributes() {
        return filter(keys(this.$attributes), key => !(key in this.$changed));
    }

    /**
     * Get an attribute with a given key. If no key is defined
     *
     * @param key string
     * @param default undefined|mixed
     * @return array
     */
    getAttribute(key, value = undefined) {
        return this.$attributes[key] || value;
    }

    /**
     * Set an array or object of data as attributes.
     *
     * @param attributes array|object
     * @return void
     */
    setAttributes(data) {
        if(isArray(data) || isObject(data)) {
            each(data, (value, key) => {
                this.setAttribute(key, value);
            });
        }
    }

    /**
     * Set an attribute with a given key/value pair. This will track the changes
     * in the model within the `this.$changed` property. If the primary key
     * is set, it will also change the `this.$exists` property.
     *
     * @param key string
     * @param value mixed
     * @return void
     */
    setAttribute(key, value) {
        if(this.getAttribute(key) !== value) {
            this.handleAttributeChange(key, value);

            if(isUndefined(value)) {
                delete this.$attributes[key];
            }
            else {
                this.$attributes[key] = value;
            }
        }
    }

    /**
     * Revert the model to its original state.
     *
     * @return bool
     */
    revert() {
        each(this.$changed, (value, key) => {
            if(!isUndefined(value)) {
                this.$attributes[key] = value;
            }
            else {
                delete this.$attributes[key];
            }
        });

        this.$changed = {};
    }

    /**
     * Returns if the model has a primary key set.
     *
     * @return bool
     */
    exists() {
        return !!this.$exists;
    }

    /**
     * Returns the model been changed or not.
     *
     * @return bool
     */
    hasChanged(key) {
        return !key ? size(this.$changed) > 0 : !isUndefined(this.$changed[key]);
    }

    /**
     * Does the model have any File objects. If so, need to send as multipart.
     *
     * @return bool
     */
    hasFiles() {
        function count(files, total = 0) {
            return reduce(files, (carry, value) => {
                if(isArray(value)) {
                    return carry + count(value, total);
                }
                else if(value instanceof File || value instanceof FileList) {
                    return carry + 1;
                }
                else {
                    return carry;
                }
            }, total);
        }

        return count(this.toJSON()) !== 0;
    }

    /**
     * Handle settings the $changed attributes when an attribute value is set.
     *
     * @param key string
     * @param value mixed
     * @return void
     */
    handleAttributeChange(key, value) {
        if(this.$initialized) {
            if(this.$changed[key] === value) {
                delete this.$changed[key];
            }
            else if(!(key in this.$changed)) {
                this.$changed[key] = this.getAttribute(key);
            }
        }

        this.handlePrimaryKeyChange(key, value);
    }

    /**
     * Set an array or object of data as attributes.
     *
     * @param key string
     * @param value mixed
     * @return void
     */
    handlePrimaryKeyChange(key, value) {
        if(this.$key === key) {
            this.$exists = !isUndefined(value) && !isNull(value);
        }
    }

    /**
     * Cancel the current request
     *
     * @param data object
     * @return bool
     */
    cancel() {
        this.$request && this.$request.cancel();
    }

    /**
     * Save the model to the database
     *
     * @param data object
     * @return bool
     */
    save(data = {}, config = {}) {
        return !this.exists() ? this.create(data, config) : this.update(data, config);
    }

    /**
     * Create a new model
     *
     * @param data object
     * @return bool
     */
    create(data = {}, config = {}) {
        this.fill(data);

        return new Promise((resolve, reject) => {
            const data = !this.hasFiles() ? this.toJson() : this.toFormData();

            this.$request = this.constructor.request(this.uri(), extend({}, config));
            this.$request.post(data).then(response => {
                this.$request = null;
                resolve(this.fill(response));
            }, reject);
        });
    }

    /**
     * Update an existing model
     *
     * @param data object
     * @return bool
     */
    update(data = {}, config = {}) {
        this.fill(data);

        return new Promise((resolve, reject) => {
            const data = !this.hasFiles() ? this.toJson() : this.toFormData();

            this.$request = this.constructor.request(this.uri(), config);
            this.$request[(this.hasFiles() ? 'post' : 'put')](data).then(response => {
                this.$request = null;
                resolve(this.fill(response));
            }, reject);
        });
    }

    /**
     * Delete an existing model
     *
     * @param data object
     * @return bool
     */
    delete(config = {}) {
        return new Promise((resolve, reject) => {
            if(!this.exists()) {
                reject(new Error('The model must have a primary key before it can be delete.'));
            }

            this.$request = this.constructor.request(this.uri(), config);
            this.$request.delete().then(response => {
                this.$request = null;
                resolve(response);
            }, reject);
        });
    }

    /**
     * Convert the Model instance to a FormData instance
     *
     * @return object
     */
    toFormData() {
        const form = new FormData();

        each(this.toJSON(), (value, key) => {
            if(isArray(value)) {
                each(value, item => {
                    if(!(item instanceof File) && (isObject(item) || isArray(item))) {
                        item = JSON.stringify(item);
                    }

                    form.append(key.replace(/(.+)(\[.+\]?)$/, '$1')+'[]', item);
                });
            }
            else if(!(value instanceof File) && isObject(value)) {
                form.append(key, JSON.stringify(value));
            }
            else if(!isNull(value)) {
                form.append(key, value);
            }
        });

        return form;
    }

    /**
     * Convert the instance to JSON payload
     *
     * @return object
     */
    toJSON() {
        return pickBy(this.$attributes, (value, key) => {
            return !this.$properties.length || (
                key === this.key() || this.$properties.indexOf(key) !== -1
            );
        });
    }

    /**
     * Alias for toJSON
     *
     * @return object
     */
    toJson() {
        return this.toJSON();
    }

    /**
     * Search for a collection of models
     *
     * @param data object
     * @return bool
     */
    static search(uri, params = {}, config = {}) {
        const model = new this;

        if(!uri) {
            uri = model.uri();
        }

        return new Promise((resolve, reject) => {
            model.$request = this.request(uri, config);
            model.$request.get(params).then(response => {
                model.$request = null;
                resolve(map(response.data, data => {
                    return new this(data);
                }));
            }, errors => {
                reject(errors);
            });
        });
    }

    /**
     * Find an existing model by id
     *
     * @param data object
     * @return bool
     */
    static find(id, config = {}) {
        return new Promise((resolve, reject) => {
            const model = new this;
            model.$request = this.request(model.uri(id), config);
            model.$request.get().then(response => {
                model.$request = null;
                resolve(model.initialize(response));
            }, error => {
                reject(error);
            });
        });
    }

    /**
     * Create a request from the model data
     *
     * @param data object
     * @return bool
     */
    static request(url, config = {}) {
        return new Request(url, config);
    }

}
