<template>
    <div :class="mergeClasses(custom ? 'custom-radio' : '', controlClass, inline ? inlineClass : '')">
        <input
            :id="$attrs.id || hash"
            ref="field"
            v-bind-events
            v-bind="controlAttributes"
            type="radio"
            :value="value"
            :checked="checkedValue === value"
            @change="update">

        <label :for="$attrs.id || hash" :class="mergeClasses(computedLabelClass, labelClass)">
            <slot>{{ label }}</slot>
            <slot name="feedback">
                <form-feedback v-if="validFeedback" valid v-html="validFeedback" />
                <form-feedback v-if="invalidFeedback" invalid v-html="invalidFeedback" />
            </slot>
        </label>

        <slot name="help">
            <help-text v-if="helpText" v-html="helpText" />
        </slot>
    </div>
</template>

<script>
import HelpText from '../HelpText';
import hash from '../../Helpers/Hash';
import FormFeedback from '../FormFeedback';
import prefix from '../../Helpers/Prefix';
import Colorable from '../../Mixins/Colorable';
import FormControl from '../../Mixins/FormControl';
import MergeClasses from '../../Mixins/MergeClasses';

export default {

    name: 'RadioField',

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
        },

        /**
         * Display the form field and label inline
         *
         * @property Function
         */
        inline: Boolean

    },

    computed: {

        controlClasses() {
            return this.mergeClasses(
                (this.spacing || ''),
                this.inputClass,
                ((this.valid || this.validFeedback) ? 'is-valid' : ''),
                ((this.invalid || this.invalidFeedback) ? 'is-invalid' : '')
            );
        },

        hash() {
            return hash(this._uid.toString());
        },

        computedLabelClass() {
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
