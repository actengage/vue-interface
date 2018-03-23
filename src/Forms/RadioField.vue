<template>
    <div class="form-check" :class="{'form-group': group, 'form-check-inline': inline}">
        <label :for="id" :class="labelClass">
            <input type="radio" :name="name" :id="id" :value="value" :class="[controlClass, !label ? 'position-static': ''].join(' ')" :checked="value === checked" v-on:change="updated($event.target.value, 'change')"> {{label}}

            <slot name="feedback" :invalidFeedback="invalidFeedback" :validFeedback="validFeedback">
                <div v-if="invalidFeedback" :class="invalidFeedbackClass" v-html="invalidFeedback"></div>
                <div v-if="validFeedback" :class="validFeedbackClass" v-html="validFeedback"></div>
            </slot>
        </label>

        <slot name="help-text" :help-text="helpText" :help-text-class="helpTextClass">
            <small v-if="helpText" :class="helpTextClass" v-html="helpText"></small>
        </slot>
    </div>
</template>

<script>

import BaseField from './BaseField';
import FormControl from '@/Toolbox/Mixins/FormControl';

export default {

    name: 'radio-field',

    extends: BaseField,

    mixins: [FormControl],

    props: {

        /**
         * Add form-group to the wrapping element
         *
         * @property String
         */
        group: {
            type: Boolean,
            default: false
        },

        /**
         * Display the form field and label inline
         *
         * @property Function
         */
        inline: {
            type: Boolean,
            default: false
        },

        /**
         * The checked values
         *
         * @property String
         */
        checked: [Number, String, Object],

        /**
         * The class name assigned to the control element
         *
         * @property String
         */
        controlClass: {
            type: String,
            default: 'form-check-input'
        },

        /**
         * The class name assigned to the label element
         *
         * @property String
         */
        labelClass: {
            type: String,
            default: 'form-check-label'
        }

    },

    model: {
        prop: 'checked',
        event: 'change'
    }

}

</script>
