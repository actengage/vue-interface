<template>

    <form-group>

        <slot name="label">
            <form-label v-if="label" :for="id" v-html="label"/>
        </slot>

        <slot name="control">
            <select
                :id="id"
                :name="name"
                :value="value"
                :required="required"
                :disabled="disabled || readonly"
                :readonly="readonly"
                :pattern="pattern"
                :class="mergeClasses(controlClasses, colorableClasses)"
                @input="$emit('input', $event.target.value)">
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
import HelpText from '../HelpText';
import FormGroup from '../FormGroup';
import FormLabel from '../FormLabel';
import FormFeedback from '../FormFeedback';
import Colorable from '../../Mixins/Colorable';
import FormControl from '../../Mixins/FormControl';
import MergeClasses from '../../Mixins/MergeClasses';

const CUSTOM_SELECT_PREFIX = 'custom-select-'

export default {

    name: 'select-field',

    components: {
        HelpText,
        FormGroup,
        FormLabel,
        FormFeedback
    },

    extends: FormControl,

    mixins: [
        Colorable,
        FormControl,
        MergeClasses
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
