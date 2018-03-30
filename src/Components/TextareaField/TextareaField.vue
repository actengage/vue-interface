<template>
    <form-group>

        <slot name="label">
            <form-label v-if="label" :for="id" v-html="label" />
        </slot>

        <slot name="control">
            <textarea
                :id="id"
                :value="value"
                :placeholder="placeholder"
                :required="required"
                :disabled="disabled || readonly"
                :readonly="readonly"
                :pattern="pattern"
                :class="mergeClasses(controlClasses, colorableClasses)"
                v-bind-events="bindEvents"
                v-on:input="updated($event.target.value)">
            </textarea>
        </slot>

        <slot name="help">
            <help-text v-if="helpText" v-html="helpText" />
        </slot>

        <slot name="feedback">
            <form-feedback v-if="validFeedback" v-html="validFeedback" valid />
            <form-feedback v-if="invalidFeedback" v-html="invalidFeedback" invalid />
        </slot>

    </form-group>
</template>

<script>

import Colorable from '@/Mixins/Colorable';
import FormControl from '@/Mixins/FormControl';

export default {

    name: 'textarea-field',

    mixins: [
        Colorable,
        FormControl
    ],

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
