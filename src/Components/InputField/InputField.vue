<template>

    <form-group>

        <slot name="label">
            <form-label v-if="label || hasDefaultSlot" :for="id" v-html="label"/>
        </slot>

        <slot name="control">
            <input
                :id="id"
                :type="type"
                :value="value"
                :placeholder="placeholder"
                :required="required"
                :disabled="disabled || readonly"
                :readonly="readonly"
                :pattern="pattern"
                :class="$mergeClasses(controlClasses, colorableClasses)"
                :aria-label="label"
                :aria-describedby="id"
                :autocomplete="autocomplete"
                v-bind-events="bindEvents"
                v-on:input="updated($event.target.value)"
            />
        </slot>

        <slot/>

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

export default {

    name: 'input-field',

    mixins: [
        Colorable,
        FormControl
    ],

    components: {
        HelpText,
        FormGroup,
        FormLabel,
        FormFeedback
    },

    props: {

        /**
         * The type attribute
         *
         * @property String
         */
        type: {
            type: String,
            default: 'text'
        }

    }

}

</script>
