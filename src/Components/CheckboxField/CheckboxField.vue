<template>
    <div class="form-check" :class="mergeClasses({'form-check-inline': inline}, controlSizeClass)">
        <label :for="id" :class="mergeClasses('form-check-label', colorableClasses)">
            <input
                type="checkbox"
                :name="name"
                :id="id"
                :value="value"
                :required="required"
                :disabled="disabled || readonly"
                :readonly="readonly"
                :pattern="pattern"
                :checked="checked.indexOf(value) !== -1"
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

import RadioField from '@/Components/RadioField/RadioField';

export default {

    name: 'checkbox-field',

    extends: RadioField,

    props: {
        /**
         * The checked values
         *
         * @property String
         */
        checked: {
            type: Array,
            default() {
                return [];
            }
        }
    },

    methods: {
        updated(value) {
            const checked = this.checked.slice(0);
            const index = this.checked.indexOf(value);

            if(index === -1) {
                checked.push(value);
            }
            else {
                checked.splice(index, 1);
            }

            this.$emit('change', checked);
        }
    }
}

</script>
