<template>

    <div :class="mergeClasses(controlClass, customControlClass, sizeableClass, inline ? inlineClass : '')">

        <template v-if="custom && id">
            <input
                v-bind-events
                type="radio"
                :name="name"
                :id="id"
                :value="value"
                :required="required"
                :disabled="disabled || readonly"
                :readonly="readonly"
                :pattern="pattern"
                :checked="checkedValue === value || checked"
                :class="mergeClasses(inputClass, (invalidFeedback ? 'is-invalid' : ''))"
                @change="$emit('change', $event.target.value)">

            <label :for="id" :class="mergeClasses(labelClass, colorableClasses)">
                <slot>{{label}}</slot>
                <slot name="feedback">
                    <form-feedback v-if="validFeedback" v-html="validFeedback" valid />
                    <form-feedback v-if="invalidFeedback" v-html="invalidFeedback" invalid />
                </slot>
            </label>

        </template>
        <template v-else>
            <label :for="id" :class="mergeClasses(labelClass, colorableClasses)">
                <input
                    v-bind-events
                    type="radio"
                    :name="name"
                    :id="id"
                    :value="value"
                    :required="required"
                    :disabled="disabled || readonly"
                    :readonly="readonly"
                    :pattern="pattern"
                    :checked="checkedValue === value || checked"
                    :class="mergeClasses(inputClass, (invalidFeedback ? 'is-invalid' : ''))"
                    @change="$emit('change', $event.target.value)">

                <slot>{{label}}</slot>

                <slot name="feedback">
                    <form-feedback v-if="validFeedback" v-html="validFeedback" valid />
                    <form-feedback v-if="invalidFeedback" v-html="invalidFeedback" invalid />
                </slot>
            </label>
        </template>

        <slot name="help">
            <help-text v-if="helpText" v-html="helpText" />
        </slot>
    </div>

</template>

<script>
import HelpText from '../HelpText';
import FormFeedback from '../FormFeedback';
import prefix from '../../Helpers/Prefix';
import Colorable from '../../Mixins/Colorable';
import FormControl from '../../Mixins/FormControl';
import MergeClasses from '../../Mixins/MergeClasses';

export default {

    name: 'radio-field',

    components: {
        HelpText,
        FormFeedback
    },

    mixins: [
        Colorable,
        FormControl,
        MergeClasses
    ],

    model: {
        event: 'change',
        prop: 'checkedValue'
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
         * Is this a custom element
         *
         * @property String
         */
        custom: Boolean,

        /**
         * Display the form field and label inline
         *
         * @property Function
         */
        inline: Boolean,

        /**
         * The checked values
         *
         * @property String
         */
        checked: Boolean,

        /**
         * The checked value
         *
         * @property String
         */
        checkedValue: [Boolean, Number, String, Object],

        /**
         * The class name assigned to the control element
         *
         * @property String
         */
        defaultControlClass: {
            type: String,
            default: 'form-check'
        }

    },

    computed: {

        labelClass() {
            return prefix('label', this.controlClass);
        },

        inputClass() {
            return prefix('input', this.controlClass);
        },

        inlineClass() {
            return prefix('inline', this.controlClass);
        },

        controlClass() {
            return this.custom ? 'custom-control' : this.defaultControlClass;
        },

        customControlClass() {
            return this.custom ? prefix(this.$options.name.replace('-field', ''), 'custom') : '';
        },

        sizeableClass() {
            return prefix(this.size, 'form-control');
        }

    }

};
</script>
