<template>
    <form-group :group="group" :class="formGroupClasses">
        <slot name="label">
            <form-label v-if="label || hasDefaultSlot" :for="$attrs.id">
                <slot>{{ label }}</slot>
            </form-label>
        </slot>

        <div class="custom-file">
            <slot name="placeholder">
                <form-label :class="mergeClasses(colorableClasses, 'custom-file-label')" :for="$attrs.id" v-html="$attrs.placeholder || 'Choose file'" />
            </slot>

            <input
                v-bind-events
                v-bind="controlAttributes"
                ref="field"
                type="file"
                :value="value"
                @change="$emit('change', $event.target.files)">
                
            <slot name="help">
                <help-text v-if="helpText" v-html="helpText" />
            </slot>

            <slot name="feedback">
                <form-feedback v-if="validFeedback" valid v-html="validFeedback" />
                <form-feedback v-if="invalidFeedback" invalid v-html="invalidFeedback" />
            </slot>
        </div>
    </form-group>
</template>

<script>
import HelpText from '../HelpText';
import FormGroup from '../FormGroup';
import FormLabel from '../FormLabel';
import FormFeedback from '../FormFeedback';
import InputField from '../InputField';
import MergeClasses from '../../Mixins/MergeClasses';

export default {

    name: 'FileField',

    components: {
        HelpText,
        FormGroup,
        FormLabel,
        FormFeedback
    },

    extends: InputField,

    mixins: [
        MergeClasses
    ],

    model: {
        event: 'change'
    },

    props: {

        /**
         * An array of event names that correlate with callback functions
         *
         * @property Function
         */
        bindEvents: {
            type: Array,
            default() {
                return ['focus', 'blur', 'input', 'click', 'keyup', 'keydown', 'progress'];
            }
        },

        /**
         * The class name assigned to the control element
         *
         * @property String
         */
        defaultControlClass: {
            type: String,
            default: 'custom-file-input'
        },

        /**
         * An array of valid extensions
         *
         * @property String
         */
        extensions: Array,

        /**
         * The type attribute
         *
         * @property String
         */
        multiple: Boolean,

        /**
         * The height attribute for the control element
         *
         * @property String
         */
        height: [Number, String],

        /**
         * The width attribute for the control element
         *
         * @property String
         */
        width: [Number, String]

    }

};
</script>
