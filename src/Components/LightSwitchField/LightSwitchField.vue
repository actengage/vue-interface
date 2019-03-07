<template>
    <form-group :group="group" :class="formGroupClasses">
        <slot name="label">
            <form-label v-if="label" :for="$attrs.id" v-html="label" />
        </slot>

        <div
            :class="controlClasses"
            tabindex="0"
            @click="toggle()"
            @keyup.32="toggle()"
            @keyup.37="toggle(offValue)"
            @keyup.39="toggle(onValue)">
            <div class="light-switch-handle" />
            <div class="light-switch-container">
                <div class="light-switch-label on-value" />
                <div class="light-switch-label off-value" />
            </div>
        </div>

        <input
            v-bind-events
            v-bind="controlAttributes"
            :value="value"
            class="d-none"
            @input="$emit('input', $event.target.value)">

        <slot name="feedback">
            <form-feedback v-if="validFeedback" valid v-html="validFeedback" />
            <form-feedback v-if="invalidFeedback" invalid v-html="invalidFeedback" />
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
import { isUndefined } from '../../Helpers/Functions';
import FormControlMixin from '../../Mixins/FormControl';

export default {

    name: 'LightSwitchField',

    components: {
        HelpText,
        FormGroup,
        FormLabel,
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
            default: 'form-control light-switch'
        },

        /**
         * The class name assigned to the control element
         *
         * @property String
         */
        activeClass: {
            type: String,
            default: 'on'
        },

        /**
         * The class name assigned to the control element
         *
         * @property String
         */
        onValue: {
            type: [String, Number, Boolean, Object, Array],
            default: 1
        },

        /**
         * The class name assigned to the control element
         *
         * @property String
         */
        offValue: {
            type: [String, Number, Boolean, Object, Array],
            default: 0
        }

    },

    data() {
        return {
            dragging: false
        };
    },

    computed: {

        isActive: function() {
            return this.value === this.onValue;
        },

        controlClasses() {
            return [
                this.controlClass,
                this.controlSizeClass,
                (this.spacing || ''),
                (this.invalidFeedback ? 'is-invalid' : ''),
                (this.dragging ? 'is-dragging' : ''),
                (this.isActive ? 'is-active' : '')
            ].join(' ');
        }

    },

    watch: {
        value() {
            this.dragging = true;

            setTimeout(() => {
                this.dragging = false;
            }, this.getTransitionInMilliseconds());
        }
    },

    methods: {

        getTransitionInMilliseconds() {
            const duration = getComputedStyle(this.$el.querySelector('.light-switch-handle')).transitionDuration;
            const numeric = parseFloat(duration, 10);
            const unit = duration.match(/m?s/);

            switch (unit[0]) {
            case 's':
                return numeric * 1000;
            case 'ms':
                return numeric;
            }

            throw new Error(`"${unit[0]}" is not a valid unit of measure. Unit must be "s" (seconds) or "ms" (milliseconds).`);
        },

        toggle(value) {
            this.$emit('input', !isUndefined(value) ? value : (this.isActive ? this.offValue : this.onValue));
        }

    }

};
</script>

<style lang="scss">
@import './node_modules/bootstrap/scss/functions.scss';
@import './node_modules/bootstrap/scss/variables.scss';
@import './node_modules/bootstrap/scss/mixins.scss';

$light-switch-animation-easing: ease;
$light-switch-animation-length: 1s / 3;
$light-switch-handle-width: $font-size-base * 2;
$light-switch-handle-height: $light-switch-handle-width;
$light-switch-size-width: $light-switch-handle-width * 1.5;
$light-switch-size-height: $light-switch-handle-height;
$light-switch-label-width: $light-switch-handle-width;
$light-switch-label-height: $light-switch-handle-height;

@mixin light-switch-size($size, $modifier) {
    $handle-width: $light-switch-handle-width * $modifier;
    $handle-height: $handle-width;
    $size-width: $handle-width * 1.5;
    $size-height: $handle-height;
    $label-width: $handle-width;
    $label-height: $handle-height;

    &.light-switch-#{$size} {
        padding: 0;
    	width: $size-width;
    	height: $handle-height;
    	border-radius: $handle-width;

        .light-switch-handle {
            width: $handle-width;
            height: $handle-height;
        }

        .light-switch-container {
            left: -$handle-width / 2;
            width: $label-width * 2;
            height: $label-height;
        }

        &.is-active {
            .light-switch-handle {
                left: $handle-width / 2;
            }
        }

        .light-switch-label {
            width: $label-width;
            height: $label-height;

            &.on-value {
                //border-radius: $handle-width 0 0 $handle-width;
            }

            &.off-value {
                //border-radius: 0 $handle-width $handle-width 0;
            }
        }
    }
}

.light-switch {
    padding: 0;
	position: relative;
	border: none;
	width: $light-switch-size-width;
	height: $light-switch-handle-height;
	border-radius: $light-switch-handle-width;
	overflow: hidden;
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	overflow: hidden;

    @include light-switch-size('xs', .5);
    @include light-switch-size('sm', .75);
    @include light-switch-size('md', 1);
    @include light-switch-size('lg', 1.5);
    @include light-switch-size('xl', 2);

    @include form-validation-state("valid", $form-feedback-valid-color, 'none');
    @include form-validation-state("invalid", $form-feedback-invalid-color, 'none');

    &.is-invalid {
        border: 1px solid $form-feedback-invalid-color;

        & .light-switch-handle {


        }

        &:not(.is-active) .light-switch-handle {
            background: $form-feedback-invalid-color;
        }

        .light-switch-label {
            &.on-value {
                left: 0;
            }
            &.off-value {
                right: 0;
            }
        }
    }

    .light-switch-handle {
        top: 0;
        left: 0;
        z-index: 1;
        position: absolute;
        border-radius: 100%;
        transition: left $light-switch-animation-length $light-switch-animation-easing;
        width: $light-switch-handle-width;
        height: $light-switch-handle-height;
        background: white;
        background-image: radial-gradient(white, rgb(250, 250, 250) 50%, white 75%);
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.1);
    }

    .light-switch-container {
        position: relative;
        left: -$light-switch-handle-width / 2;
        top: ($light-switch-handle-height -  $light-switch-label-height) / 2;
        width: $light-switch-label-width * 2;
        height: $light-switch-label-height;
        transition: left $light-switch-animation-length $light-switch-animation-easing;
    }

    &:not(.is-active) {
        &:not(.is-dragging) .on-value {
            visibility: hidden;
        }
    }

    &.is-active {
        &:not(.is-dragging) .off-value {
            visibility: hidden;
        }

        .light-switch-handle {
            left: $light-switch-handle-width / 2;
        }

        .light-switch-container {
            left: 0;
        }
    }

    .light-switch-label {
        position: absolute;
        width: $light-switch-label-width;
        height: $light-switch-label-height;
        //box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);

        &.on-value {
            left: 0;
            background: #00b007;
            //border-radius: $light-switch-handle-width 0 0 $light-switch-handle-width;
        }

        &.off-value {
            right: 0;
            background: #ebedef;
            //border-radius: 0 $light-switch-handle-width $light-switch-handle-width 0;
        }
    }


}

</style>
