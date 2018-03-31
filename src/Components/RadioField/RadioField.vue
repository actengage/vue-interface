<template>
    <div class="form-check" :class="mergeClasses({'form-check-inline': inline}, controlSizeClass)">
        <label :for="id" :class="mergeClasses('form-check-label', colorableClasses)">
            <input
                type="radio"
                :name="name"
                :id="id"
                :value="value"
                :required="required"
                :disabled="disabled || readonly"
                :readonly="readonly"
                :pattern="pattern"
                :checked="value === checked"
                :class="mergeClasses(controlClass, (invalidFeedback ? 'is-invalid':''), !(label ? 'position-static' : ''))"
                v-bind-events="bindEvents"
                v-on:change="updated($event.target.value, 'change')">

            <slot>{{label}}</slot>

            <slot name="feedback">
                <form-feedback v-if="validFeedback" v-html="validFeedback" valid />
                <form-feedback v-if="invalidFeedback" v-html="invalidFeedback" invalid />
            </slot>
        </label>

        <slot name="help">
            <help-text v-if="helpText" v-html="helpText" />
        </slot>
    </div>
</template>

<script>

import prefix from '@/Helpers/Prefix/Prefix';
import Colorable from '@/Mixins/Colorable/Colorable';
import FormControl from '@/Mixins/FormControl/FormControl';

export default {

    name: 'radio-field',

    mixins: [
        Colorable,
        FormControl
    ],

    model: {
        prop: 'checked',
        event: 'change'
    },

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
        defaultControlClass: {
            type: String,
            default: 'form-check-input'
        }

    },

    computed: {

        controlClass() {
            return this.defaultControlClass;
        },

        controlSizeClass() {
            return prefix(this.size, 'form-control');
        }

    }

}

</script>
