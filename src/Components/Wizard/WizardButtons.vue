<template>
    <div class="wizard-buttons">
        <btn-group class="wizard-buttons-left">
            <slot name="left">
                <btn type="button" variant="secondary" :disabled="backButton === false || (active === 0 && backButton !== true)" :size="sizeableClass" @click="onClickBack">
                    <i class="fa fa-long-arrow-left"/> Back
                </btn>
            </slot>
        </btn-group>
        <btn-group class="wizard-buttons-right">
            <slot name="right">
                <btn v-if="active === steps.length - 1" :size="sizeableClass" :disabled="finishButton === false" type="button" variant="success" @click="onClickFinish">
                    Finish
                </btn>
                <btn v-if="active < steps.length - 1" :size="sizeableClass" :disabled="nextButton === false" type="button" variant="primary" @click="onClickNext">
                    Next <i class="fa fa-long-arrow-right"/>
                </btn>
            </slot>
        </btn-group>
    </div>
</template>

<script>
import Sizeable from '../../Mixins/Sizeable';

export default {

    name: 'wizard-buttons',

    mixins: [
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