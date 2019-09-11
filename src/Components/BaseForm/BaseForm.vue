<template>
    <form :class="{'form-inline': inline}" :novalidate="novalidate" @submit.prevent="onSubmit">
        <slot />
    </form>
</template>

<script>
import Model from '../../Http/Model/Model';
import { isFunction, pickBy, deepExtend } from '../../Helpers/Functions';

export default {

    props: {

        /**
         * The Model method used to send the request.
         *
         * @property Boolean
         */
        method: {
            type: String,
            default: 'save',
            validate(value) {
                return this.model && isFunction(this.model[value]);
            }
        },

        /**
         * An object of form data
         *
         * @property Object
         */
        data: {
            type: Object,
            default: () => {
                return {};
            }
        },

        /**
         * A JSON object of request headers
         *
         * @property Object
         */
        headers: Object,

        /**
         * A JSON object of default request object
         *
         * @property Object
         */
        request: {
            type: Object,
            default() {
                return {};
            }
        },

        /**
         * Display the form fields inline
         *
         * @property Object
         */
        model: {
            type: Object,
            validate(value) {
                return value instanceof Model;
            }
        },

        /**
         * Display the form fields inline
         *
         * @property Boolean
         */
        inline: Boolean,

        /**
         * A callback function for the `submit` event
         *
         * @property Boolean
         */
        novalidate: {
            type: Boolean,
            default: true
        },

        /**
         * A JSON object of key/value pairs to build the query string.
         *
         * @property Object
         */
        query: Object,

        /**
         * A URI or URL used to redirect user after form submits successfully.
         *
         * @property Function|String
         */
        redirect: [Object, String, Function]

    },

    data() {
        return {
            errors: {}
        };
    },

    methods: {

        submit(event) {
            this.$emit('submit', event, this.model);

            return this.model[this.method](this.data, pickBy(deepExtend(this.request, {
                params: this.query,
                headers: this.headers,
                onUploadProgress: event => {
                    this.$emit('submit:progress', event);
                    this.$emit('submit-progress', event);
                }
            }), value => !!value)).then((data) => {
                this.onSubmitSuccess(event, data);
            }, (errors) => {
                this.onSubmitFailed(event, errors);
            });
        },

        /**
         * A callback function for the `submit` event
         *
         * @property Function
         */
        onSubmit(event) {
            this.model && this.submit(event);
        },

        /**
         * A callback function for the `submit:success` event
         *
         * @property Function
         */
        onSubmitSuccess(event, data) {
            this.$emit('submit:success', event, data);
            this.$emit('submit-success', event, data);
            this.$emit('submit:complete', event, true, data);
            this.$emit('submit-complete', event, true, data);

            if(this.redirect && isFunction(this.redirect)) {
                this.redirect(this);
            }
            else if(this.redirect && this.$router) {
                this.$router.push(this.redirect);
            }
        },

        /**
         * A callback function for the `submit:success` event
         *
         * @property Function
         */
        onSubmitFailed(event, errors) {
            this.$emit('submit:failed', event, errors);
            this.$emit('submit-failed', event, errors);
            this.$emit('submit:complete', event, false, errors);
            this.$emit('submit-complete', event, false, errors);
        }

    }

};
</script>
