<template>

    <form-group :class="{'has-activity': activity}">

        <slot name="label">
            <form-label v-if="label" :for="id" v-html="label"/>
        </slot>

        <div class="form-group-inner">
            <slot name="control">
                <select
                    v-bind-events
                    v-bind="controlAttributes"
                    :value="value"
                    @input="$emit('input', $event.target.value)">
                    <slot/>
                </select>
            </slot>

            <slot name="activity">
                <transition name="slide-fade">
                    <activity-indicator key="test" v-if="activity" ref="activity" type="dots" :size="size"/>
                </transition>
            </slot>

            <slot name="feedback">
                <form-feedback v-if="validFeedback" v-html="validFeedback" valid />
                <form-feedback v-if="invalidFeedback" v-html="invalidFeedback" invalid />
            </slot>
        </div>

        <slot name="help">
            <help-text v-if="helpText" v-html="helpText" />
        </slot>

    </form-group>

</template>

<script>
import HelpText from '../HelpText';
import FormGroup from '../FormGroup';
import FormLabel from '../FormLabel';
import FormControl from '../FormControl';
import FormFeedback from '../FormFeedback';
import Colorable from '../../Mixins/Colorable';
import ActivityIndicator from '../ActivityIndicator';
import MergeClasses from '../../Mixins/MergeClasses';
import FormControlMixin from '../../Mixins/FormControl';

const CUSTOM_SELECT_PREFIX = 'custom-select-';

export default {

    name: 'select-field',

    components: {
        ActivityIndicator,
        HelpText,
        FormControl,
        FormGroup,
        FormLabel,
        FormFeedback
    },

    mixins: [
        Colorable,
        MergeClasses,
        FormControlMixin
    ],

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
         * Add `custom-select` to the form control if true.
         *
         * @property String
         */
        custom: Boolean

    },

    computed: {

        controlClass() {
            const controlClass = this.custom ? 'custom-select' : this.defaultControlClass;
            return this.plaintext ? `${controlClass}-plaintext` : controlClass;
        },

        customSelectClasses() {
            return [
                CUSTOM_SELECT_PREFIX.replace(/-$/, '') + (this.plaintext ? '-plaintext' : ''),
                this.customSelectSizeClass,
                (this.spacing || '')
            ].join(' ');
        }
    }

};
</script>

<style lang="scss">
.has-activity {
    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }

    /* For IE10 */
    select::-ms-expand {
        display: none;
    }
}
</style>
