<template>

    <form-group class="input-field" :class="{'has-activity': activity}">

        <slot name="label">
            <form-label ref="label" v-if="label || hasDefaultSlot" :for="id" v-html="label"/>
        </slot>

        <slot name="control">
            <input
                ref="control"
                :id="id"
                :type="type"
                :name="name"
                :value="value"
                :pattern="pattern"
                :readonly="readonly"
                :required="required"
                :maxlength="maxlength"
                :placeholder="placeholder"
                :disabled="disabled || readonly"
                :class="mergeClasses(controlClasses, colorableClasses)"
                :aria-label="label"
                :aria-describedby="id"
                :autocomplete="autocomplete"
                v-bind-events="bindEvents"
                @input="$emit('input', $event.target.value)"
            />
        </slot>

        <slot name="activity">
            <transition name="slide-fade">
                <activity-indicator key="test" v-if="activity" ref="activity" type="dots" :size="size"/>
            </transition>
        </slot>

        <slot/>

        <slot name="help">
            <help-text v-if="helpText" ref="help" v-html="helpText" />
        </slot>

        <slot name="feedback">
            <form-feedback v-if="validFeedback" ref="feedback" v-html="validFeedback" valid />
            <form-feedback v-else-if="invalidFeedback" ref="feedback" v-html="invalidFeedback" invalid />
        </slot>

    </form-group>

</template>

<script>

import HelpText from '../HelpText';
import FormGroup from '../FormGroup';
import FormLabel from '../FormLabel';
import FormFeedback from '../FormFeedback';
import Colorable from '../../Mixins/Colorable';
import FormControl from '../../Mixins/FormControl';
import MergeClasses from '../../Mixins/MergeClasses';
import ActivityIndicator from '../ActivityIndicator';

export default {

    name: 'input-field',

    mixins: [
        Colorable,
        FormControl,
        MergeClasses
    ],

    components: {
        HelpText,
        FormGroup,
        FormLabel,
        FormFeedback,
        ActivityIndicator
    },

    props: {

        /**
         * Show type activity indicator.
         *
         * @property Boolean
         */
        activity: {
            type: Boolean,
            default: false
        },

        /**
         * The type attribute
         *
         * @property String
         */
        type: {
            type: String,
            default: 'text'
        }

    }

}

</script>

<style lang="scss">
.input-field {
    position: relative;

    .activity-indicator {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate(-1rem, -50%);
        transition: all .25s ease-in;
    }

    .activity-indicator {
    }

    .slide-fade-enter {
    }

    .slide-fade-enter-active {
    }

    .slide-fade-leave-active {

    }

    .slide-fade-enter,
    .slide-fade-leave-to {
        opacity: 0;
        transform: translate(25%, -50%);
    }
}
</style>
