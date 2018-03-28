<template>

    <div :class="{'form-group': group}">

        <slot name="label" :label="label" :id="id" :class="labelClass">
            <label :for="id" :class="[labelClass, hideLabel ? 'sr-only' : ''].join(' ')" v-html="label"></label>
        </slot>

        <slot name="control" :type="type" :id="id" :value="value" :placeholder="placeholder" :required="required" :readonly="readonly" :pattern="pattern" :class="controlClasses">
            <input v-bind-events="bindEvents" :type="type" :id="id" :value="value" :placeholder="placeholder" :required="required" :readonly="readonly" :pattern="pattern" :class="controlClasses" v-on:input="updated($event.target.value)">
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

export default {

    name: 'input-field',

    extends: BaseField,

    mixins: [FormControl],

    props: {

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
