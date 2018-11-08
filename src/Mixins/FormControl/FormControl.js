import prefix from '../../Helpers/Prefix';
import Colorable from '../../Mixins/Colorable';
import MergeClasses from '../../Mixins/MergeClasses';
import { each, isArray, isObject } from '../../Helpers/Functions';

export default {

    inheritAttrs: false,

    mixins: [
        Colorable,
        MergeClasses
    ],

    props: {

        /**
         * The autocomplete attribute value.
         *
         * @property String
         */
        // autocomplete: String,

        /**
         * The field id attribute value.
         *
         * @property String
         */
        // id: [Number, String],

        /**
         * The value of label element. If no value, no label will appear.
         *
         * @property String
         */
        label: [Number, String],

        /**
         * The field name attribute value.
         *
         * @property String
         */
        // name: String,

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
        // placeholder: String,

        /**
         * Is the field required.
         *
         * @property String
         */
        // required: Boolean,

        /**
         * Add form-group wrapper to input
         *
         * @property String
         */
        group: {
            type: Boolean,
            value: true
        },

        /**
         * The regex pattern for validation.
         *
         * @property String
         */
        // pattern: String,

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
        errors: {
            type: Object,
            default() {
                return {};
            }
        },

        /**
         * Some feedback to add to the field once the field is successfully
         * valid.
         *
         * @property String
         */
        feedback: [String, Array],

        /**
         * An array of event names that correlate with callback functions
         *
         * @property Function
         */
        bindEvents: {
            type: Array,
            default() {
                return ['focus', 'blur', 'change', 'click', 'keyup', 'keydown', 'progress', 'paste'];
            }
        },

        /**
         * The default class name assigned to the control element
         *
         * @property String
         */
        defaultControlClass: {
            type: String,
            default: 'form-control'
        },

        /**
         * Hide the label for browsers, but leave it for screen readers.
         *
         * @property String
         */
        hideLabel: Boolean,

        /**
         * Additional margin/padding classes for fine control of spacing
         *
         * @property String
         */
        spacing: String,

        /**
         * The size of the form control
         *
         * @property String
         */
        size: {
            type: String,
            default: 'md',
            validate: value => ['sm', 'md', 'lg'].indexOf(value) !== -1
        },

        /**
         * Display the form field inline
         *
         * @property String
         */
        inline: Boolean,

        /**
         * If the form control is readonly, display only as text?
         *
         * @property String
         */
        // plaintext: Boolean,

        /**
         * Is the form control readonly?
         *
         * @property String
         */
        // readonly: Boolean,

        /**
         * Is the form control disabled?
         *
         * @property String
         */
        // disabled: Boolean,

        /**
         * Some instructions to appear under the field label
         *
         * @property String
         */
        helpText: [Number, String],

        /**
         * The maxlength attribute
         *
         * @property String
         */
        maxlength: [Number, String]

    },

    directives: {
        bindEvents: {
            bind(el, binding, vnode) {
                const emptyClass = 'is-empty';

                // Add/remove the has-focus class from the form control
                el.addEventListener('focus', event => event.target.classList.add('has-focus'));
                el.addEventListener('blur', event => event.target.classList.remove('has-focus'));
                el.addEventListener('input', e => {
                    el.classList[!el.value ? 'add' : 'remove'](emptyClass);
                });

                if(!el.value) {
                    el.classList.add(emptyClass);
                }

                // Bubble the native events up to the vue component.
                each(vnode.context.bindEvents, name => {
                    el.addEventListener(name, event => {
                        vnode.context.$emit(name, event);
                    });
                });
            }
        }
    },

    methods: {

        blur() {
            if(this.getInputField()) {
                this.getInputField().blur();
            }
        },

        focus() {
            if(this.getInputField()) {
                this.getInputField().focus();
            }
        },

        getInputField() {
            return this.$el.querySelector(
                '.form-control, input, select, textarea'
            );
        },

        getFieldErrors() {
            let errors = this.error || this.errors;

            if(isObject(this.errors)) {
                errors = this.errors[this.name || this.id];
            }

            return !errors || isArray(errors) || isObject(errors) ? errors : [errors];
        }

    },

    computed: {

        id() {
            return this.$attrs.id;
        },

        name() {
            return this.$attrs.name;
        },

        controlAttributes() {
            const classes = this.mergeClasses(
                this.controlClasses, this.colorableClasses
            );

            return Object.keys(this.$attrs)
                .concat([['class', classes]])
                .reduce((carry, key) => {
                    if(isArray(key)) {
                        carry[key[0]] = key[1];
                    }
                    else {
                        carry[key] = this[key] || this.$attrs[key];
                    }

                    return carry;
                }, {});
        },

        controlClass() {
            return this.defaultControlClass + (this.plaintext ? '-plaintext' : '');
        },

        controlSizeClass() {
            return prefix(this.size, this.controlClass);
        },

        controlClasses() {
            return [
                (this.spacing || ''),
                this.controlClass,
                this.controlSizeClass,
                (this.invalidFeedback ? 'is-invalid' : '')
            ].join(' ');
        },

        hasDefaultSlot() {
            return !!this.$slots.default;
        },

        invalidFeedback() {
            const errors = this.getFieldErrors();

            return this.error || (
                isArray(errors) ? errors.join('<br>') : errors
            );
        },

        validFeedback() {
            return isArray(this.feedback) ? this.feedback.join('<br>') : this.feedback;
        }

    }

};
