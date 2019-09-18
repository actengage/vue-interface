<template>
    <div :class="mergeClasses(custom ? 'custom-checkbox' : '', controlClass, inline ? inlineClass : '')">
        <input
            v-bind-events
            v-bind="controlAttributes"
            ref="field"
            type="checkbox"
            :value="value"
            :id="$attrs.id || hash"
            :checked="checked || isChecked(value)"
            @input="update">

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
import RadioField from '../RadioField';
import MergeClasses from '../../Mixins/MergeClasses';

export default {

    name: 'CheckboxField',

    extends: RadioField,

    mixins: [
        MergeClasses
    ],

    model: {
        prop: 'checkedValues',
        event: 'change'
    },

    props: {

        checked: Boolean,

        /**
         * The checked values
         *
         * @property String
         */
        checkedValues: {
            type: Array,
            default() {
                return [];
            }
        },

        transform: {
            type: Function,
            default: value => value
        },

        /**
         * Determine if the value is checked.
         *
         * @property String
         */
        isChecked:{
            type: Function,
            default(value) {
                if(this.checkedValues.indexOf(value) !== -1) {
                    return true;
                }

                const matches = this.checkedValues.filter(checkedValue => {
                    if(this.compareValues(this.transform(value), checkedValue)) {
                        return true;
                    }
                });
                
                return matches.length > 0;
            }
        },


    },

    methods: {

        stringify(value) {
            try {
                return JSON.stringify(value);
            }
            catch {
                return value;
            }
        },

        compareValues(a, b) {
            if(typeof a === 'object') {
                a = this.stringify(a);
            }
            
            if(typeof b === 'object') {
                b = this.stringify(b);
            }

            return a === b;
        },

        update(event) {
            const value = this.transform(event.target.value);
            const checked = this.checkedValues.slice(0);
            const index = this.checkedValues.findIndex(item => {
                return this.compareValues(value, item);
            });

            if(index === -1) {
                checked.push(value);
            }
            else {
                checked.splice(index, 1);
            }
            
            this.$emit('change', checked);
        }

    }
};
</script>
