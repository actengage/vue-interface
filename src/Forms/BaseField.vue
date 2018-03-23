<script>

import { each } from 'lodash';
import { isArray } from 'lodash';
import { camelCase } from 'lodash';
import { isUndefined } from 'lodash';

export default {

    directives: {
        bindEvents: {
            bind(el, binding, vnode) {
                const events = binding.value || vnode.context.bindEvents;

                each(events, name => {
                    el.addEventListener(name, event => {
                        vnode.context.$emit(name, event);
                    });
                });
            }
        }
    },

    props: {

        /**
         * The field name attribute value.
         *
         * @property String
         */
        name: String,

        /**
         * The field id attribute value.
         *
         * @property String
         */
        id: String,

        /**
         * The field id attribute value.
         *
         * @property String
         */
        value: {
            default: null
        },

        /**
         * The placeholder attribute value.
         *
         * @property String
         */
        placeholder: String,

        /**
         * Is the field required.
         *
         * @property String
         */
        required: {
            type: Boolean,
            default: false
        },

        /**
         * The regex pattern for validation.
         *
         * @property String
         */
        pattern: String,

        /**
         * An inline field validation error.
         *
         * @property String|Boolean
         */
        error: String,

        /**
         * An inline field validation errors passed as object with key/value
         * pairs. If errors passed as an object, the form name will be used for
         * the key.
         *
         * @property Object|Boolean
         */
        errors: [Object, Array],

        /**
         * Some feedback to add to the field once the field is successfully
         * valid.
         *
         * @property String
         */
        feedback: [String, Array],

        /**
         * The class for the invalid feedback element.
         *
         * @property String
         */
        invalidFeedbackClass: {
            type: String,
            default: 'invalid-feedback'
        },

        /**
         * The class for the valid feedback element.
         *
         * @property String
         */
        validFeedbackClass: {
            type: String,
            default: 'valid-feedback'
        },

        /**
         * An array of event names that correlate with callback functions
         *
         * @property Function
         */
        bindEvents: {
            type: Array,
            default() {
                return ['focus', 'blur', 'change', 'click', 'keyup', 'keydown', 'progress'];
            }
        }
    },

    computed: {
        callbacks() {
            return this.bindEvents.map(event => {
                return {
                    name: event,
                    callback: this[camelCase(['on', event].join(' '))]
                }
            }).filter(event => !isUndefined(event.callback));
        },

        invalidFeedback() {
            if(this.error) {
                return this.error;
            }

            const errors = this.getFieldErrors();

            return isArray(errors) ? errors.join('<br>') : errors;
        },

        validFeedback() {
            return isArray(this.feedback) ? this.feedback.join('<br>') : this.feedback;
        }
    }

}
</script>
