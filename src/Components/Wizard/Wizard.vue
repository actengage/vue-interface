<template>
    <div class="wizard">

        <wizard-header v-if="header" v-html="header"/>

        <wizard-progress v-if="$refs.slideDeck" :highest-step="highestStep" :steps="steps" :active="currentStep" @click="onProgressClick"/>

        <div class="wizard-content">
            <slot name="content"/>

            <slide-deck ref="slideDeck" :overflow="$vnode" :active="currentStep" @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
                <slot ref="test"/>
            </slide-deck>
        </div>

        <slot name="buttons">
            <wizard-buttons
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
import { extend } from 'lodash-es';
import { filter } from 'lodash-es';
import SlideDeck from '../SlideDeck';
import WizardButtons from './WizardButtons';
import WizardHeader from './WizardHeader';
import WizardProgress from './WizardProgress';

export default {

    name: 'wizard',

    components: {
        SlideDeck,
        WizardButtons,
        WizardHeader,
        WizardProgress
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
            type: Boolean,
            default: true
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
            console.log('asd');

            this.isBackButtonDisabled = true;
        },

        disableFinishButton() {
            this.isFinishButtonDisabled = true;
        },

        disableNextButton() {
            this.isNextButtonDisabled = true;
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

        finish() {
            console.log('finish');
        },

        next() {
            this.$emit('update:step', this.currentStep = Math.min(this.currentStep + 1, this.$refs.slideDeck.$refs.slides.slides().length - 1));
            this.$emit('next');
        },

        onBeforeEnter(slide, last) {
            //
        },

        onClickBack(event) {
            this.$refs.slideDeck.$refs.slides.slide(this.currentStep).componentInstance.$emit('back', event);

            if(event.defaultPrevented !== true) {
                this.back();
            }
        },

        onClickFinish(event) {
            this.finish();
        },

        onClickNext(event) {
            this.next();
        },

        onEnter(slide, last) {
            this.highestStep = Math.max(this.highestStep, this.$refs.slideDeck.$refs.slides.getSlideIndex(slide));
            slide.context.$emit('enter');
        },

        onLeave(slide) {
            slide.context.$emit('leave');
        },

        onProgressClick(event, slide) {
            this.currentStep = this.$refs.slideDeck.$refs.slides.getSlideIndex(slide);
        }

    },

    mounted() {
        const slide = this.$refs.slideDeck.$refs.slides.findSlideByKey(this.currentStep);

        if(slide) {
            (slide.componentInstance || slide.context).$emit('enter');
        }

        this.steps = this.$refs.slideDeck.$refs.slides.slides();
    },

    data() {
        return {
            steps: [],
            currentStep: this.active,
            highestStep: this.active,
            isBackButtonDisabled: !this.backButton,
            isFinishButtonDisabled: !this.finishButton,
            isNextButtonDisabled: !this.nextButton
        };
    }

}
</script>

<style lang="scss">

.wizard {
    .slide-deck-content {
        margin: 1rem;
    }

    .wizard-buttons {
        border-top: 1px solid #7d7d7d;
        padding-top: 1rem;
        margin-top: 1rem;
    }
}

</style>
