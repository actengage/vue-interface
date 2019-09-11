import Request from '../Request';
import { each, isNull, pickBy, isArray, isObject, isUndefined } from '../../Helpers/Functions';

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
        this.$files = this.files();
        this.$properties = this.properties();

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
        return [
            (this.endpoint() || ''),
            (this.exists() ? this.id() : null)
        ]
            .filter(value => !!value)
            .concat([].slice.call(arguments))
            .map(part => {                
                Object.entries(this.attributes)
                    .forEach(([key, value]) => {
                        part = part.toString().replace(new RegExp(`\:${key}`), value);
                    });

                return part;
            })
            .join('/');
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
        if(isArray(key)) {
            return this.getAttributes().filter((value, i) => {
                return key.indexOf(i) !== -1;
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
    get attributes() {
        return this.$attributes;
    }

    /**
     * Get all the defined attributes.
     *
     * @return array
     */
    getAttributes() {
        return this.attributes;
    }

    /**
     * Get the changed attributes
     *
     * @return array
     */
    getChangedAttributes() {
        return Object.keys(this.$changed);
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
     * Get the Request object.
     *
     * @return {mixed}
     */
    getRequest() {
        return this.$request;
    }

    /**
     * Get the unchanged attributes
     *
     * @return array
     */
    getUnchangedAttributes() {
        return Object.keys(this.$attributes).filter(key => !(key in this.$changed));
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
     * Set the attributes property.
     *
     * @return array
     */
    set attributes(value) {
        return this.$attributes = value;
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
        this.handleAttributeChange(key, value);

        if(isUndefined(value)) {
            delete this.$attributes[key];
        }
        else {
            this.$attributes[key] = value;
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
        return !key ? this.getChangedAttributes().length > 0 : !isUndefined(this.$changed[key]);
    }

    /**
     * Does the model have any File objects. If so, need to send as multipart.
     *
     * @return bool
     */
    hasFiles() {
        function count(files, total = 0) {
            return Object.keys(files).reduce((carry, key) => {
                const value = files[key];

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
     * Save the model to the database
     *
     * @param data object
     * @return bool
     */
    save(fill = {}, config = {}) {
        this.fill(fill);

        return new Promise((resolve, reject) => {
            const data = !this.hasFiles() ?
                this.toJSON() :
                this.toFormData();
            
            const method = config.method || (
                !this.exists() || this.hasFiles() ? 'post' : 'put'
            );

            this.$request = this.constructor.request(method, config.uri || this.uri(), config);

            if(this.hasFiles()) {
                this.$request.headers['Content-Type'] = 'multipart/form-data';
            }
            
            this.$request
                .send({data})
                .then(response => {
                    resolve(this.fill(response.data));
                }, reject);
        });
    }

    /**
     * Delete an existing model
     *
     * @param  {object} config
     * @return {bool}
     */
    delete(config = {}) {
        return new Promise((resolve, reject) => {
            if(!this.exists()) {
                reject(new Error('The model must have a primary key before it can be delete.'));
            }

            this.$request = this.constructor.request('delete', config.uri || this.uri(), config);
            this.$request.send().then(response => {
                resolve(response);
            }, reject);
        });
    }

    /**
     * Cancel the current HTTP request if one exists.
     *
     * @return {self}
     */
    cancel() {
        if(this.$request) {
            this.$request.cancel();
        }

        return this;
    }

    /**
     * Convert the Model instance to a FormData instance
     *
     * @return Object
     */
    toFormData() {
        const form = new FormData();

        each(this.toJSON(), (value, key) => {
            if(isArray(value)) {
                each(value, item => {
                    if(!(item instanceof Blob) && (isObject(item) || isArray(item))) {
                        item = JSON.stringify(item);
                    }

                    form.append(key.replace(/(.+)(\[.+\]?)$/, '$1') + '[]', item);
                });
            }
            else if(!(value instanceof Blob) && isObject(value)) {
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
     * @return Object
     */
    toJSON() {
        return pickBy(this.$attributes, (value, key) => {
            return !this.$properties.length || (
                key === this.key() || this.$properties.indexOf(key) !== -1
            );
        });
    }

    /**
     * Convert the model to a string
     *
     * @return String
     */
    toString() {
        return JSON.stringify(this.toJSON());
    }

    /**
     * Alias for toJSON
     *
     * @return Object
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
    static search(query = {}, config = {}) {
        const model = new this();

        config = Object.assign({
            params: query,
        }, config);

        return new Promise((resolve, reject) => {
            model.$request = this.request('get', (config.uri || model.uri()), config);
            model.$request.send().then(response => {
                resolve(response);
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
    static find(data, config = {}) {
        return new Promise((resolve, reject) => {
            const model = new this();

            model.fill(typeof data === 'object' ? data : {
                [(new this).key()]: data
            });

            model.$request = this.request('get', (config.uri || model.uri()), config);
            model.$request.send().then(response => {
                resolve(model.initialize(response.data));
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
    static request(method, url, config = {}) {
        return Request.make(method, url, config);
    }
}
