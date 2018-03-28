<template>

    <div :class="{'form-group': group}">

        <slot name="label" :label="label" :id="id" :class="labelClass">
            <label :for="id" :class="[labelClass, hideLabel ? 'sr-only' : ''].join(' ')" v-html="label"></label>
        </slot>

        <div class="custom-file">
            <label :for="id" class="custom-file-label">Choose file</label>

            <input v-bind-events type="file" :class="controlClasses" :id="id" :placeholder="placeholder" :width="width" :height="height" :required="required" :multiple="multiple" :readonly="readonly" v-on:change="updated($event.target.files)">

            <slot name="help-text" :help-text="helpText" :help-text-class="helpTextClass">
                <small v-if="helpText" :class="helpTextClass" v-html="helpText"></small>
            </slot>

            <slot name="feedback" :invalidFeedback="invalidFeedback" :validFeedback="validFeedback">
                <div v-if="invalidFeedback" :class="invalidFeedbackClass" v-html="invalidFeedback"></div>
                <div v-if="validFeedback" :class="validFeedbackClass" v-html="validFeedback"></div>
            </slot>
        </div>

    </div>

</template>

<script>

import InputField from './InputField';

export default {

    name: 'file-field',

    extends: InputField,

    props: {

        /**
         * The class name assigned to the control element
         *
         * @property String
         */
        controlClass: {
            type: String,
            default: 'custom-file-input'
        },

        /**
         * An array of valid extensions
         *
         * @property String
         */
        extensions: {
            type: Array
        },

        /**
         * The type attribute
         *
         * @property String
         */
        multiple: {
            type: Boolean,
            default: false
        },

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

    },

    methods: {


    },

    model: {
        event: 'change'
    }

}

</script>
