<template>
    <form @submit.prevent="onSubmit" :class="{'form-inline': inline}" :novalidate="novalidate">
        <slot></slot>
    </form>
</template>

<script>

import { isFunction } from 'lodash';
import Model from '@/Http/Model/Model';

export default {

    props: {

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
        inline: {
            type: Boolean,
            default: false
        },

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
         * A URI or URL used to redirect user after form submits successfully.
         *
         * @property Function|String
         */
        redirect: [String, Function],

        /**
         * A callback function for the `submit` event
         *
         * @property Function
         */
        onSubmit: {
            type: Function,
            default(event) {
                this.$emit('submit', event);

                if(this.model) {
                    console.log('data', this.data);
                    
                    this.model.save(this.data, {
                        onUploadProgress: event => {
                            this.$emit('submit:progress', event);
                        }
                    }).then((data) => {
                        this.onSubmitSuccess(event, data);
                    }, (errors) => {
                        this.onSubmitFailed(event, errors);
                    });
                }
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

                if(this.redirect && isFunction(this.redirect)) {
                    this.redirect(this);
                }
                else if(this.redirect) {
                    window.location = this.redirect;
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

    data() {
        return {
            errors: {}
        }
    }

}

</script>
