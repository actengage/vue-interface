<template>

    <div :class="mergeClasses(this.custom ? 'custom-radio' : '', controlClass, inline ? inlineClass : '')">

        <label :for="$attrs.id" :class="mergeClasses(labelClass)">
            <input
                v-bind-events
                v-bind="controlAttributes"
                type="radio"
                :value="value"
                :checked="checkedValue === value"
                @change="update"
            />
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
        prop: 'checkedValue',
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

        controlClasses() {
            return this.mergeClasses(
                (this.spacing || ''),
                this.inputClass,
                (this.validFeedback ? 'is-valid' : ''),
                (this.invalidFeedback ? 'is-invalid' : '')
            );
        },

        labelClass() {
            return prefix('label', this.controlClass);
        },

        inputClass() {
            return prefix('input', this.controlClass);
        },

        inlineClass() {
            return this.inline ? prefix('inline', this.controlClass) : '';
        }

    },

    methods: {

        update(event) {
            this.$emit('change', event.target.value);
            this.$emit('input', event);
        }

    }

};
</script>
