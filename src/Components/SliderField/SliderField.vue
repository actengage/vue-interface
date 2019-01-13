<template>

    <form-group :group="group" :class="formGroupClasses">

        <slot name="label">
            <form-label v-if="label" :for="$attrs.id" v-html="label" />
        </slot>

        <div :class="controlClasses">
            <div class="slider-rail">
                <div class="slider-rail-active" />
            </div>
            <div v-drag-handle class="slider-handle slider-min-value" tabindex="0" />
            <div v-drag-handle class="slider-handle slider-max-value" tabindex="0" />
            <div v-drag-handle class="slider-handle slider-value" tabindex="0" />
        </div>

        <slot name="feedback">
            <form-feedback v-if="validFeedback" v-html="validFeedback" valid />
            <form-feedback v-if="invalidFeedback" v-html="invalidFeedback" invalid />
        </slot>

        <slot name="help">
            <help-text v-if="helpText" v-html="helpText" />
        </slot>

    </form-group>

</template>

<script>
import HelpText from '../HelpText';
import FormGroup from '../FormGroup';
import FormLabel from '../FormLabel';
import FormFeedback from '../FormFeedback';
import FormControl from '../FormControl';
import FormControlMixin from '../../Mixins/FormControl';

export default {

    name: 'slider-field',

    components: {
        HelpText,
        FormGroup,
        FormLabel,
        FormControl,
        FormFeedback
    },

    mixins: [
        FormControlMixin
    ],

    props: {

        /**
         * The class name assigned to the control element
         *
         * @property String
         */
        defaultControlClass: {
            type: String,
            default: 'form-control slider-field'
        }

    },

    directives: {

        dragHandle: {

            inserted(el, binding, vnode) {
                let initialX; let initialY; let currentX; let currentY; let isDragging = false;

                const isTouch = e => {
                    return e.type.match(/^touch/);
                };

                const clientX = e => {
                    return isTouch(e) ? e.touches[0].clientX : e.clientX;
                };

                const clientY = e => {
                    return isTouch(e) ? e.touches[0].clientX : e.clientX;
                };

                const dragStart = e => {
                    if(e.target === el) {
                        isDragging = true;
                        initialX = clientX(e);
                        initialY = clientY(e);
                    }
                };

                const dragEnd = e => {
                    isDragging = false;
                };

                const drag = e => {
                    if(isDragging) {
                        currentX = clientX(e);

                        console.log(currentX);

                        el.style.transform = `translateX(${currentX - initialX}px)`;
                    }
                };

                window.addEventListener('touchstart', dragStart, false);
                window.addEventListener('touchend', dragEnd, false);
                window.addEventListener('touchmove', drag, false);

                window.addEventListener('mousedown', dragStart, false);
                window.addEventListener('mouseup', dragEnd, false);
                window.addEventListener('mousemove', drag, false);
            }

        }

    }

};
</script>

<style lang="scss">
@import '../../scss/slider';

</style>
