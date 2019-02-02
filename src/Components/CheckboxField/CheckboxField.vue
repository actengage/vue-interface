<template>
    <div :class="mergeClasses(custom ? 'custom-checkbox' : '', controlClass, inline ? inlineClass : '')">
        <input
            :id="$attrs.id || hash"
            v-bind-events
            v-bind="controlAttributes"
            type="checkbox"
            :value="value"
            :checked="checkedValues.indexOf(value) !== -1"
            @input="update">

        <label :for="$attrs.id || hash" :class="mergeClasses(labelClass)">
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
        }

    },

    methods: {

        update(event) {
            const value = event.target.value;
            const checked = this.checkedValues.slice(0);
            const index = this.checkedValues.indexOf(value);

            if(index === -1) {
                checked.push(value);
            }
            else {
                checked.splice(index, 1);
            }

            this.$emit('change', checked);
            this.$emit('input', event);
        }

    }
};
</script>
