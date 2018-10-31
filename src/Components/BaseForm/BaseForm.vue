<template>
    <form @submit.prevent="onSubmit" :class="{'form-inline': inline}" :novalidate="novalidate">
        <slot></slot>
    </form>
</template>

<script>
import Model from '../../Http/Model/Model';
import { isFunction } from '../../Helpers/Functions';

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
        redirect: [Object, String, Function],

        /**
         * A callback function for the `submit` event
         *
         * @property Function
         */
        onSubmit: {
            type: Function,
            default(event) {
                this.model && this.submit(event);
            }
        },

        /**
         * A callback function for the `submit:success` event
         *
         * @property Function
         */
        onSubmitSuccess: {
            type: Function,
            default(event, data) {
                this.$emit('submit:success', event, data);
                this.$emit('submit:complete', event, true, data);

                if (this.redirect && isFunction(this.redirect)) {
                    this.redirect(this);
                }
                else if (this.redirect && this.$router) {
                    this.$router.push(this.redirect);
                }
            }
        },

        /**
         * A callback function for the `submit:success` event
         *
         * @property Function
         */
        onSubmitFailed: {
            type: Function,
            default(event, errors) {
                this.$emit('submit:failed', event, errors);
                this.$emit('submit:complete', event, false, errors);
            }
        }

    },

    methods: {

        submit(event) {
            this.$emit('submit', event);

            return this.model[this.method](this.data, {
                query: this.query,
                headers: this.headers,
                onUploadProgress: event => {
                    this.$emit('submit:progress', event);
                }
            }).then((data) => {
                this.onSubmitSuccess(event, data);
            }, (errors) => {
                this.onSubmitFailed(event, errors);
            });
        }

    },

    data() {
        return {
            errors: {}
        };
    }

};
</script>
