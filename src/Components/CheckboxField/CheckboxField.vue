<template>

    <div :class="$mergeClasses(controlClass, customControlClass, sizeableClass, inline ? inlineClass : '')">

        <template v-if="custom && id">
            <input
                v-bind-events
                type="checkbox"
                :name="name"
                :id="id"
                :value="value"
                :required="required"
                :disabled="disabled || readonly"
                :readonly="readonly"
                :pattern="pattern"
                :checked="checkedValue === value || checked"
                :class="$mergeClasses(inputClass, (invalidFeedback ? 'is-invalid' : ''))"
                @change="updated($event.target.value, 'change')">

            <label :for="id" :class="$mergeClasses(labelClass, colorableClasses)">
                <slot>{{label}}</slot>
                <slot name="feedback">
                    <form-feedback v-if="validFeedback" v-html="validFeedback" valid />
                    <form-feedback v-if="invalidFeedback" v-html="invalidFeedback" invalid />
                </slot>
            </label>

        </template>
        <template v-else>
            <label :for="id" :class="$mergeClasses(labelClass, colorableClasses)">
                <input
                    v-bind-events
                    type="checkbox"
                    :name="name"
                    :id="id"
                    :value="value"
                    :required="required"
                    :disabled="disabled || readonly"
                    :readonly="readonly"
                    :pattern="pattern"
                    :checked="checkedValue === value || checked"
                    :class="$mergeClasses(inputClass, (invalidFeedback ? 'is-invalid' : ''))"
                    @change="updated($event.target.value, 'change')">

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
    <!--
    <div class="form-check" :class="$mergeClasses({'form-check-inline': inline}, controlSizeClass)">
        <label :for="id" :class="$mergeClasses('form-check-label', colorableClasses)">
            <input
                type="checkbox"
                :name="name"
                :id="id"
                :value="value"
                :required="required"
                :disabled="disabled || readonly"
                :readonly="readonly"
                :pattern="pattern"
                :checked="checkedValue.indexOf(value) !== -1"
                :class="$mergeClasses(controlClass, (invalidFeedback ? 'is-invalid':''), !(label ? 'position-static' : ''))"
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
-->
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
        checkedValue: {
            type: Array,
            default() {
                return [];
            }
        }

    },

    methods: {

        updated(value) {
            const checked = this.checkedValue.slice(0);
            const index = this.checkedValue.indexOf(value);

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
