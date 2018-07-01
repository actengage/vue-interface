<template>
    <div class="wizard">

        <wizard-header v-if="header" v-html="header"/>

        <wizard-progress
            v-if="$refs.slideDeck && !isFinished && !hasFailed"
            :active="currentStep"
            :highest-step="highestStep"
            :steps="steps"
            @click="onProgressClick"
        />

        <div class="wizard-content" ref="content">
            <slot name="content"/>

            <slide-deck
                v-if="!isFinished"
                ref="slideDeck"
                :active="currentStep"
                @before-enter="onBeforeEnter"
                @enter="onEnter"
                @leave="onLeave">
                <slot />
            </slide-deck>

            <slot v-else-if="isFinished && !hasFailed" name="success">
                <wizard-success/>
            </slot>

            <slot v-else-if="isFinished && hasFailed" name="error">
                <wizard-error/>
            </slot>
        </div>

        <slot name="buttons">
            <hr>

            <wizard-buttons
                v-if="!isFinished && !hasFailed"
                size="lg"
                :steps="steps"
                :active="currentStep"
                :back-button="!isBackButtonDisabled"
                :next-button="!isNextButtonDisabled"
                :finish-button="!isFinishButtonDisabled"
                @click:back="onClickBack"
                @click:finish="onClickFinish"
                @click:next="onClickNext"
            />
        </slot>
    </div>
</template>

<script>
import { map } from 'lodash-es';
import { each } from 'lodash-es';
import { extend } from 'lodash-es';
import { filter } from 'lodash-es';
import SlideDeck from '../SlideDeck';
import WizardButtons from './WizardButtons';
import WizardError from './WizardError';
import WizardHeader from './WizardHeader';
import WizardProgress from './WizardProgress';
import WizardSuccess from './WizardSuccess';

export default {

    name: 'wizard',

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
         * Pass a header as a string.
         *
         * @type {String}
         */
        header: String,

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
         * Show should the "Next" button.
         *
         * @type {Boolean}
         */
        nextButton: {
            type: Boolean,
            default: true
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

        back() {
            this.$emit('update:step', this.currentStep = Math.max(this.currentStep - 1, 0));
            this.$emit('back');
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

        emitEventOnCurrentSlide(key, ...args) {
            this.$refs.slideDeck.slide(this.currentStep).componentInstance.$emit.apply(
                this.$refs.slideDeck.slide(this.currentStep).componentInstance, [key].concat(args)
            );
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

        finish(success) {
            this.hasFailed = !success;
            this.isFinished = true;
            this.$emit('finish');
        },

        next() {
            this.$emit('update:step', this.currentStep = Math.min(this.currentStep + 1, this.$refs.slideDeck.slides().length - 1));
            this.$emit('next');
        },

        onBeforeEnter(slide, last) {
            this.$emit('before-enter', slide, last);
        },

        onClickBack(event) {
            this.emitEventOnCurrentSlide('back', event);

            if(event.defaultPrevented !== true) {
                this.back();
            }
        },

        onClickFinish(event) {
            this.emitEventOnCurrentSlide('finish', event);

            if(event.defaultPrevented !== true) {
                this.finish(true);
            }
        },

        onClickNext(event) {
            this.emitEventOnCurrentSlide('next', event);

            if(event.defaultPrevented !== true) {
                this.next();
            }
        },

        onEnter(slide, last) {
            this.highestStep = Math.max(this.highestStep, this.$refs.slideDeck.$refs.slides.getSlideIndex(slide));
            slide.componentInstance.$refs.wizard = this;
            slide.context.$emit('enter');
        },

        onLeave(slide) {
            slide.context.$emit('leave');
        },

        onProgressClick(event, slide) {
            this.currentStep = this.$refs.slideDeck.$refs.slides.getSlideIndex(slide);
        }

    },

    created() {
        //each(filter(this.$slots.default, vnode => !vnode.text), vnode => {
            //console.log(vnode);
        //});
    },

    mounted() {
        const slide = this.$refs.slideDeck.slide(this.currentStep);

        if(slide) {
            (slide.componentInstance || slide.context).$refs.wizard = this;
            (slide.componentInstance || slide.context).$emit('enter');
        }

        this.steps = this.$refs.slideDeck.slides();
    },

    data() {
        return {
            steps: [],
            currentStep: this.active,
            highestStep: this.active,
            hasFailed: false,
            isFinished: false,
            isBackButtonDisabled: !this.backButton,
            isFinishButtonDisabled: !this.finishButton,
            isNextButtonDisabled: !this.nextButton
        };
    }

}
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
