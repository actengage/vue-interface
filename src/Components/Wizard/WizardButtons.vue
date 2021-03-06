<template>
    <div class="wizard-buttons">
        <btn-group ref="left" class="wizard-buttons-left">
            <slot name="buttons-left" />
            <btn
                ref="back"
                type="button"
                :variant="backVariant"
                :disabled="backButton === false || (active === 0 && backButton !== true)"
                :size="sizeableClass"
                @click="onClickBack">
                <font-awesome-icon icon="long-arrow-alt-left" /> {{ backLabel || 'Back' }}
            </btn>
        </btn-group>
        <btn-group ref="right" class="wizard-buttons-right">
            <slot name="buttons-right" />
            <btn-activity
                v-if="active === steps.length - 1"
                ref="finish"
                :activity="activity"
                :size="sizeableClass"
                :variant="finishVariant"
                :disabled="finishButton === false"
                type="button"
                @click="onClickFinish">
                {{ finishLabel || 'Finish' }}
            </btn-activity>
            <btn-activity
                v-else
                ref="next"
                :activity="activity"
                :size="sizeableClass"
                :variant="nextVariant"
                :disabled="nextButton === false"
                type="button"
                @click="onClickNext">
                {{ nextLabel || 'Next' }} <font-awesome-icon icon="long-arrow-alt-right" />
            </btn-activity>
        </btn-group>
    </div>
</template>

<script>
import Btn from '../Btn';
import BtnGroup from '../BtnGroup';
import BtnActivity from '../BtnActivity';
import Sizeable from '../../Mixins/Sizeable';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons/faLongArrowAltLeft';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons/faLongArrowAltRight';

library.add(faCheck);
library.add(faLongArrowAltLeft);
library.add(faLongArrowAltRight);

export default {

    name: 'WizardButtons',

    components: {
        Btn,
        BtnGroup,
        BtnActivity,
        FontAwesomeIcon
    },

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
         * Override the "Back" button label.
         *
         * @type {String}
         */
        backLabel: String,

        /**
         * The "Back" button variable.
         *
         * @type {String}
         */
        backVariant: {
            type: String,
            default: 'secondary'
        },

        /**
         * Show should the "Finish" button.
         *
         * @type {Boolean}
         */
        finishButton: Boolean,

        /**
         * Override the "Finish" button label.
         *
         * @type {String}
         */
        finishLabel: String,

        /**
         * The "Finish" button variable.
         *
         * @type {String}
         */
        finishVariant: {
            type: String,
            default: 'success'
        },

        /**
         * Show should the "Next" button.
         *
         * @type {Boolean}
         */
        nextButton: Boolean,

        /**
         * Override the "Next" button label.
         *
         * @type {String}
         */
        nextLabel: String,

        /**
         * The "Next" button variable.
         *
         * @type {String}
         */
        nextVariant: {
            type: String,
            default: 'primary'
        },

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
            if(this.backButton !== false) {
                this.$emit('click:back', event);
            }
        },

        onClickFinish(event) {
            if(this.finishButton !== false) {
                this.$emit('click:finish', event);
            }
        },

        onClickNext(event) {
            if(this.nextButton !== false) {
                this.$emit('click:next', event);
            }
        }

    }

};
</script>

<style lang="scss">
.wizard-buttons {
    display: flex;
    justify-content: space-between;
}
</style>
