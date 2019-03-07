<template>
    <div class="wizard">
        <wizard-header v-if="header && !isFinished" ref="header" v-html="header" />

        <wizard-progress
            v-if="!isFinished"
            ref="progress"
            :active="currentStep"
            :highest-step="highestStep"
            :steps="steps"
            @click="onProgressClick" />

        <div ref="content" class="wizard-content">
            <slot v-if="!isFinished" name="content" />

            <slide-deck
                v-if="!isFinished"
                ref="slideDeck"
                :active="currentStep"
                :resize-model="resizeMode"
                @before-enter="onBeforeEnter"
                @enter="onEnter"
                @leave="onLeave">
                <slot />
            </slide-deck>

            <slot v-else-if="isFinished && !hasFailed" name="success">
                <wizard-success ref="success" />
            </slot>

            <slot v-else-if="isFinished && hasFailed" name="error">
                <wizard-error ref="error" :errors="errors" @back="onClickTest" />
            </slot>
        </div>

        <slot v-if="!isFinished" name="buttons">
            <hr>

            <wizard-buttons
                ref="buttons"
                size="lg"
                :steps="steps"
                :active="currentStep"
                :activity="activity"
                :back-button="!isBackButtonDisabled"
                :next-button="!isNextButtonDisabled"
                :finish-button="!isFinishButtonDisabled"
                @click:back="onClickBack"
                @click:finish="onClickFinish"
                @click:next="onClickNext" />
        </slot>
    </div>
</template>

<script>
import SlideDeck from '../SlideDeck';
import WizardButtons from './WizardButtons';
import WizardError from './WizardError';
import WizardHeader from './WizardHeader';
import WizardProgress from './WizardProgress';
import WizardSuccess from './WizardSuccess';
import { find } from '../../Helpers/Functions';

export default {

    name: 'Wizard',

    components: {
        SlideDeck,
        WizardButtons,
        WizardError,
        WizardHeader,
        WizardProgress,
        WizardSuccess
    },

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
         * The the index or key of the max completed step.
         *
         * @type {String|Number}
         */
        completed: [String, Number],

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
        backButton: {
            type: [Function, Boolean],
            default() {
                return this.currentStep > 0;
            }
        },

        /**
         * Show should the "Finish" button.
         *
         * @type {Boolean}
         */
        finishButton: {
            type: Boolean,
            default: true
        },

        /**
         * Pass a header as a string.
         *
         * @type {String}
         */
        header: String,

        /**
         * Show should the "Next" button.
         *
         * @type {Boolean}
         */
        nextButton: {
            type: Boolean,
            default: true
        },

        /**
         * The mode determines how the popover content will flex based on the
         * varying heights of the slides.
         *
         * @type Boolean
         */
        resizeMode: {
            type: [Function, Boolean, String],
            default: 'auto',
            validate(value) {
                return ['auto', 'initial', 'inherit'].indexOf(value) !== 1;
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

    data() {
        return {
            steps: [],
            errors: null,
            hasFailed: false,
            isFinished: false,
            currentStep: this.index(),
            highestStep: this.index(this.completed),
            isBackButtonDisabled: this.backButton === false,
            isNextButtonDisabled: this.nextButton === false,
            isFinishButtonDisabled: this.finishButton === false
        };
    },

    watch: {

        active() {
            this.currentStep = this.index();
        },

        currentStep(value) {
            this.$emit('update:active', value);
        }

    },

    mounted() {
        const slide = this.$refs.slideDeck.slide(this.currentStep);

        if(slide) {
            (slide.componentInstance || slide.context).$refs.wizard = this;
            (slide.componentInstance || slide.context).$emit('enter');
            this.$emit('enter', slide);
        }

        this.steps = this.$refs.slideDeck.slides();
    },

    methods: {

        back() {
            this.currentStep = Math.max(this.currentStep - 1, 0);
        },

        disableButtons() {
            this.isBackButtonDisabled = true;
            this.isFinishButtonDisabled = true;
            this.isNextButtonDisabled = true;
        },

        disableBackButton() {
            this.isBackButtonDisabled = true;
        },

        disableFinishButton() {
            this.isFinishButtonDisabled = true;
        },

        disableNextButton() {
            this.isNextButtonDisabled = true;
        },

        emitBubbleEvent(key, ...args) {
            this.$refs.slideDeck.slide(this.currentStep).componentInstance.$emit.apply(
                this.$refs.slideDeck.slide(this.currentStep).componentInstance, args = [key].concat(args)
            );

            this.$emit.apply(this, args);
        },

        enableButtons() {
            this.isBackButtonDisabled = false;
            this.isFinishButtonDisabled = false;
            this.isNextButtonDisabled = false;
        },

        enableBackButton() {
            this.isBackButtonDisabled = false;
        },

        enableFinishButton() {
            this.isFinishButtonDisabled = false;
        },

        enableNextButton() {
            this.isNextButtonDisabled = false;
        },

        finish(status, errors = null) {
            this.errors = errors;
            this.hasFailed = status === false;
            this.isFinished = true;
        },

        index(key = null) {
            return Math.max(0, this.$slots.default.indexOf(
                find(this.$slots.default, ['key', key || this.active]) || this.$slots.default[key || this.active]
            ));
        },

        next() {
            this.$emit('update:active', this.currentStep = Math.min(this.currentStep + 1, this.$refs.slideDeck.slides().length - 1));
        },

        onBeforeEnter(slide, prev) {
            slide.context.$emit('before-enter', slide, prev);
            this.$emit('before-enter', slide, prev);
        },

        onClickTest(event) {
            this.isFinished = false;
        },

        onClickBack(event) {
            this.emitBubbleEvent('back', event);

            if(event.defaultPrevented !== true) {
                this.back();
            }
        },

        onClickFinish(event) {
            this.emitBubbleEvent('finish', event);

            if(event.defaultPrevented !== true) {
                this.finish(true);
            }
        },

        onClickNext(event) {
            this.emitBubbleEvent('next', event);

            if(event.defaultPrevented !== true) {
                this.next();
            }
        },

        onEnter(slide, prev) {
            this.highestStep = Math.max(this.highestStep, this.$refs.slideDeck.$refs.slides.getSlideIndex(slide));
            slide.componentInstance.$refs.wizard = this;
            slide.context.$emit('enter', slide, prev);
            this.$emit('enter', slide, prev);
        },

        onLeave(slide, prev) {
            slide.context.$emit('leave', slide, prev);
            this.$emit('leave', slide, prev);
        },

        onProgressClick(event, slide) {
            if(this.$refs.slideDeck) {
                this.currentStep = this.$refs.slideDeck.$refs.slides.getSlideIndex(slide);
            }
            else {
                this.isFinished = false;
                this.currentStep = this.index(slide.key);
            }
        }

    }

};
</script>

<style lang="scss">
@import './node_modules/bootstrap/scss/functions.scss';
@import './node_modules/bootstrap/scss/variables.scss';

.wizard {
    .slide-deck-content {
        margin: 1rem;
    }

    .wizard-content {
        overflow: hidden;
        padding: .5rem;

        & + hr {
            margin-bottom: 0;
        }
    }

    .wizard-buttons {
        padding: 1rem;
    }
}

</style>
