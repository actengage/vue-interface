import { isArray } from 'lodash';
import { isObject } from 'lodash';

export default {

    props: {

        /**
         * The class name assigned to the control element
         *
         * @property String
         */
        controlClass: {
            type: String,
            default: 'form-control'
        },

        /**
         * The value of label element. If no value, no label will appear.
         *
         * @property String
         */
        label: String,

        /**
         * The class for the label element.
         *
         * @property String
         */
        labelClass: {
            type: String,
            default: ''
        },

        /**
         * Hide the label for browsers, but leave it for screen readers.
         *
         * @property String
         */
        hideLabel: {
            type: Boolean,
            default: false
        },

        /**
         * Additional margin/padding classes for fine control of spacing
         *
         * @property String
         */
        spacing: String,

        /**
         * Add form-group to the wrapping element
         *
         * @property String
         */
        group: {
            type: Boolean,
            default: true
        },

        /**
         * Display the form field inline
         *
         * @property String
         */
        inline: {
            type: Boolean,
            default: false
        },

        /**
         * If the form control is readonly, display only as text?
         *
         * @property String
         */
        plaintext: {
            type: Boolean,
            default: false
        },

        /**
         * Is the form control readonly?
         *
         * @property String
         */
        readonly: {
            type: Boolean,
            default: false
        },

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
         * Some instructions to appear under the field label
         *
         * @property String
         */
        helpText: String,

        /**
         * Some instructions to appear under the field label
         *
         * @property String
         */
        helpTextClass: {
            type: String,
            default: 'form-text text-muted'
        }

    },

    methods: {

        getInputField() {
            return this.$el.querySelector('.form-control, input, select, textarea');
        },

        getFieldErrors() {
            let errors = this.error || this.errors;

            if(isObject(this.errors)) {
                errors = this.errors[this.name || this.id];
            }

            return !errors || isArray(errors) || isObject(errors) ? errors : [errors];
        },

        /*
        setValidity(validity, message) {
            console.log('stop setValidity');
            return;

            const element = this.getInputField();

            if(element) {
                element.setCustomValidity(message)
                element.checkValidity();
            }
        },
        */

        updated(value, event) {
            this.$emit(event || 'input', value);
        }

    },

    /*
    watch: {
        error: function (value) {
            this.setValidity(false, error);
        },
        errors: function (errors) {
            this.setValidity((errors = this.getFieldErrors()) && errors.length, errors ? errors[0] : '');
        }
    },
    */

    computed: {

        controlClasses() {
            return [
                this.controlClass + (this.plaintext ? '-plaintext' : ''),
                this.controlSizeClass,
                (this.spacing || ''),
                (this.invalidFeedback ? 'is-invalid' : '')
            ].join(' ');
        },

        controlSizeClass() {
            let prefix;

            return (prefix = this.controlClass + '-') + this.size.replace(new RegExp(`^${prefix}`), '');
        }

    }

}
