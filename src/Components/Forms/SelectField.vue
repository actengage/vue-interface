<template>
    <div :class="{'form-group': group}">

        <slot name="label" :label="label" :id="id" :class="labelClass">
            <label :for="id" :class="[labelClass, hideLabel ? 'sr-only' : ''].join(' ')" v-html="label"></label>
        </slot>

        <slot name="control" :id="id" :value="value" :required="required" :readonly="readonly" :pattern="pattern" :class="custom ? customSelectClasses : controlClasses">
            <select :id="id" :value="value" :required="required" :readonly="readonly" :pattern="pattern" :class="custom ? customSelectClasses : controlClasses" v-on:input="updated($event.target.value)">
                <slot/>
            </select>
        </slot>

        <slot name="help-text" :help-text="helpText" :help-text-class="helpTextClass">
            <small v-if="helpText" :class="helpTextClass" v-html="helpText"></small>
        </slot>

        <slot name="feedback" :invalidFeedback="invalidFeedback" :validFeedback="validFeedback">
            <div v-if="invalidFeedback" :class="invalidFeedbackClass" v-html="invalidFeedback"></div>
            <div v-if="validFeedback" :class="validFeedbackClass" v-html="validFeedback"></div>
        </slot>

    </div>
</template>

<script>

import BaseField from './BaseField';
import FormControl from '@/Mixins/FormControl';

const CUSTOM_SELECT_PREFIX = 'custom-select-'

export default {

    name: 'select-field',

    extends: BaseField,

    mixins: [FormControl],

    props: {
        /**
         * Add `custom-select` to the form control if true.
         *
         * @property String
         */
        custom: {
            type: Boolean,
            default: true
        }
    },

    computed: {
        customSelectClasses() {
            return [
                CUSTOM_SELECT_PREFIX.replace(/\-$/, '') + (this.plaintext ? '-plaintext' : ''),
                this.customSelectSizeClass,
                (this.spacing || '')
            ].join(' ');
        },
        customSelectSizeClass() {
            return CUSTOM_SELECT_PREFIX + this.size.replace(new RegExp(`^${CUSTOM_SELECT_PREFIX}`), '');
        }
    }

}

</script>
