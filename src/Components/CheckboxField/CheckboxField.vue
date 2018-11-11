<template>

    <div :class="mergeClasses(this.custom ? 'custom-checkbox' : '', controlClass, inline ? inlineClass : '')">

        <label :for="$attrs.id" :class="mergeClasses(labelClass)">
            <input
                v-bind-events
                v-bind="controlAttributes"
                type="checkbox"
                :value="value"
                :checked="checkedValues.indexOf(value) !== -1"
                @input="update"
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
import RadioField from '../RadioField';
import MergeClasses from '../../Mixins/MergeClasses';

export default {

    name: 'checkbox-field',

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
