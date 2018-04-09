<template>

    <form-group>

        <slot name="label">
            <form-label v-if="label || hasDefaultSlot" :for="id">
                <slot>{{label}}</slot>
            </form-label>
        </slot>

        <div class="custom-file">

            <slot name="placeholder">
                <form-label :class="$mergeClasses(colorableClasses, 'custom-file-label')" :for="id" v-html="placeholder || 'Choose file'" />
            </slot>

            <input
                v-bind-events
                type="file"
                :class="controlClasses"
                :id="id"
                :width="width"
                :height="height"
                :required="required"
                :multiple="multiple"
                :readonly="readonly"
                @change="updated($event.target.files, 'change')">

            <slot name="help">
                <help-text v-if="helpText" v-html="helpText" />
            </slot>

            <slot name="feedback">
                <form-feedback v-if="validFeedback" v-html="validFeedback" valid />
                <form-feedback v-if="invalidFeedback" v-html="invalidFeedback" invalid />
            </slot>

        </div>

    </form-group>

</template>

<script>

import InputField from '@/Components/InputField/InputField';

export default {

    name: 'file-field',

    extends: InputField,

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

}

</script>
