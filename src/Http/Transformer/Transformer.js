import { each } from '../../Helpers/Functions';
import { isArray } from '../../Helpers/Functions';
import { isObject } from '../../Helpers/Functions';

export default class Transformer {

    /**
     * Initialize the transformer instance using an HTTP response object.
     *
     * @param data object
     * @return void
     */
    constructor(response) {
        if(!isObject(this.$originalResponse = response)) {
            throw new Error('The transformer must be instantiated with a response object.');
        }

        if(!isArray(this.$required = this.required()) || !this.$required.length) {
            throw new Error('A transformer must have at least one required property.');
        }

        this.$transformedResponse = this.transform(response);
        this.validate();
        this.initialize();
    }

    /**
     * A method to override to perform logic to finished initializing.
     *
     * @return void
     */
    initialize() {
        //
    }

    /**
     * Define an array of required properties with at least one value.
     *
     * @return void
     */
    required() {
        //
    }

    /**
     * Tranform the Response object
     *
     * @property String
     */
    transform(response) {
        return response.data;
    }

    /**
     * Get the tranformed response
     *
     * @property String
     */
    response() {
        return this.$transformedResponse;
    }

    /**
     * Validate the tranformed response.
     *
     * @return void
     */
    validate() {
        if(!isObject(this.$transformedResponse)) {
            throw new Error('The transformed response must be an object.');
        }

        each(this.$required, key => {
            if(!(key in this.$transformedResponse)) {
                throw new Error(`"${key}" is a required property and does not exist in the tranformed response.`);
            }
        });
    }

}
