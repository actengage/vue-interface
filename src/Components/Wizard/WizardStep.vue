<script>
import { isFunction } from '../../Helpers/Functions';

export default {

    name: 'WizardStep',

    props: {

        /**
         * The parent wizard component instance.
         *
         * @type {String}
        wizard: {
            //required: true,
            type: Object
        },
        */

        /**
         * The step's label in the progress bar.
         *
         * @type {String}
         */
        label: String,

        /**
         * A predicate function to determine if the back button should show.
         * Can also be a boolean value.
         *
         * @type {Function|Boolean}
         */
        backButton: {
            type: [Function, Boolean],
            default() {
                return null;
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

    updated() {
        this.performValidityChecks();
    },

    mounted() {
        this.$nextTick(this.performValidityChecks);
    },

    methods: {

        checkValidity(prop) {
            // Validate the property for the step first.
            if(isFunction(this[prop]) ? this[prop](this) === false : this[prop] === false) {
                return false;
            }

            // Then validate the property of the wizard, this is the global validator
            if(this.$refs.wizard) {
                if(isFunction(this.$refs.wizard[prop])
                    ? this.$refs.wizard[prop](this) === false
                    : this.$refs.wizard[prop] === false) {
                    return false;
                }
            }

            return true;
        },

        performValidityChecks() {
            if(this.$refs.wizard) {
                this.checkValidity('validate') ? this.enable() : this.disable();
                this.checkValidity('backButton') ? this.$refs.wizard.enableBackButton() : this.$refs.wizard.disableBackButton();
            }
        },

        disable() {
            if(this.$refs.wizard) {
                this.$refs.wizard.disableNextButton();
                this.$refs.wizard.disableFinishButton();
            }
        },

        enable() {
            if(this.$refs.wizard) {
                this.$refs.wizard.enableNextButton();
                this.$refs.wizard.enableFinishButton();
            }
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
