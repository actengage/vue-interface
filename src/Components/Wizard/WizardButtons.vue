<template>
    <div class="wizard-buttons">
        test
    </div>
</template>

<script>
import Btn from '../Btn';
import BtnActivity from '../BtnActivity';
import BtnGroup from '../BtnGroup';
import Sizeable from '../../Mixins/Sizeable';

export default {

    name: 'wizard-buttons',

    mixins: [
        Btn,
        BtnActivity,
        BtnGroup,
        Sizeable
    ],

    props: {

        /**
         * The index or key of the active step.
         *
         * @type {String|Number}
         */
        active: {
            type: [String, Number],
            default: 0
        },

        /**
         * Show the activity indicator in the next or finish button.
         *
         * @type {Boolean}
         */
        activity: Boolean,

        /**
         * Show should the "Back" button.
         *
         * @type {Boolean}
         */
        backButton: Boolean,

        /**
         * Show should the "Finish" button.
         *
         * @type {Boolean}
         */
        finishButton: Boolean,

        /**
         * Show should the "Next" button.
         *
         * @type {Boolean}
         */
        nextButton: Boolean,

        /**
         * An array of steps passed from the parent.
         *
         * @type {Array}
         */
        steps: {
            type: Array,
            required: true
        }

    },

    computed: {

        /**
         * Override the class prefix with an empty string...
         * @return {String}
         */
        sizeableClassPrefix() {
            return '';
        }

    },

    methods: {

        onClickBack(event) {
            this.$emit('click:back', event);
        },

        onClickFinish(event) {
            this.$emit('click:finish', event);
        },

        onClickNext(event) {
            this.$emit('click:next', event);
        }

    }

}
</script>

<style lang="scss">
.wizard-buttons {
    display: flex;
    justify-content: space-between;
}
</style>
