<template>

    <form-group>

        <slot name="label">
            <form-label v-if="label" :for="id" v-html="label" />
        </slot>

        <slot name="control">
            <select
                :id="id"
                :value="value"
                :required="required"
                :disabled="disabled || readonly"
                :readonly="readonly"
                :pattern="pattern"
                :class="$mergeClasses(controlClasses, colorableClasses)"
                v-on:input="updated($event.target.value)">
                <slot />
            </select>
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

//import BaseField from './BaseField';
import Colorable from '@/Mixins/Colorable/Colorable';
import FormControl from '@/Mixins/FormControl/FormControl';

const CUSTOM_SELECT_PREFIX = 'custom-select-'

export default {

    name: 'select-field',

    extends: FormControl,

    mixins: [
        FormControl,
        Colorable
    ],

    props: {

        /**
         * Add `custom-select` to the form control if true.
         *
         * @property String
         */
        custom: Boolean

    },

    computed: {

        controlClass() {
            const controlClass = this.custom ? 'custom-select' : this.defaultControlClass;
            return this.plaintext ? `${controlClass}-plaintext` : controlClass;
        },

        customSelectClasses() {
            return [
                CUSTOM_SELECT_PREFIX.replace(/\-$/, '') + (this.plaintext ? '-plaintext' : ''),
                this.customSelectSizeClass,
                (this.spacing || '')
            ].join(' ');
        }
    }

}
</script>
