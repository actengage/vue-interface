<script>
import { isFunction } from 'lodash-es';
import { isUndefined } from 'lodash-es';

export default {

    name: 'wizard-step',

    props: {

        /**
         * Show should the "Back" button.
         *
         * @type {Function|Boolean}
         */
        backButton: {
            type: [Function, Boolean],
            default: undefined
        },

        /**
         * Set the disabled status on the wizard.
         *
         * @type {Function|Boolean}
         */
        disable: {
            type: [Function, Boolean],
            default(step) {
                step.$parent.$parent.$parent.disableNextButton();
                step.$parent.$parent.$parent.disableFinishButton();
            }
        },

        /**
         * Set the enabled status on the wizard.
         *
         * @type {Function|Boolean}
         */
        enable: {
            type: [Function, Boolean],
            default(step) {
                step.$parent.$parent.$parent.enableNextButton();
                step.$parent.$parent.$parent.enableFinishButton();
            }
        },

        /**
         * Validate if the data input for the step is valid. Required Boolean
         * or a predicate function.
         *
         * @type {Function|Boolean}
         */
        validate: {
            type: [Function, Boolean],
            default() {
                return true;
            }
        }

    },

    methods: {

        checkValidity(prop) {
            if(isFunction(this[prop])) {
                return this[prop](this);
            }
            else if(isUndefined(this[prop])) {
                return true;
            }
            else {
                return this[prop];
            }
        }

    },

    updated() {
        const backButton = this.checkValidity('backButton');

        if(backButton === true) {
            this.$parent.$parent.$parent.enableBackButton();
        }
        else if(backButton === false) {
            this.$parent.$parent.$parent.disableBackButton();
        }

        if(this.checkValidity('validate')) {
            this.enable(this);
        }
        else {
            this.disable(this);
        }
    },

    render(h) {
        if(this.$slots.default.length !== 1) {
            throw new Error('The <wizard-slot> must contain a single parent DOM node.');
        }

        return this.$slots.default[0];
    }

};
</script>
