<template>

    <form-group>

        <slot name="label">
            <form-label v-if="label || hasDefaultSlot" :for="id">
                <slot>{{label}}</slot>
            </form-label>
        </slot>

        <slot name="control">
            <div class="position-relative">
                <textarea
                    :id="id"
                    :rows="rows"
                    :value="value"
                    :errors="errors"
                    :pattern="pattern"
                    :readonly="readonly"
                    :required="required"
                    :maxlength="maxlength"
                    :placeholder="placeholder"
                    :disabled="disabled || readonly"
                    :class="mergeClasses(controlClasses, colorableClasses)"
                    v-bind-events="bindEvents"
                    @input="$emit('input', $event.target.value)">
                </textarea>

                <slot name="feedback">
                    <form-feedback v-if="validFeedback" v-html="validFeedback" valid />
                    <form-feedback v-if="invalidFeedback" v-html="invalidFeedback" invalid />
                </slot>
            </div>
        </slot>

        <slot name="help">
            <help-text v-if="helpText" v-html="helpText" />
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

export default {

    name: 'textarea-field',

    components: {
        HelpText,
        FormGroup,
        FormLabel,
        FormFeedback
    },

    mixins: [
        Colorable,
        FormControl,
        MergeClasses
    ],

    props: {
        /**
         * The type attribute
         *
         * @property String
         */
        type: {
            type: String,
            default: 'text'
        },

        /**
         * The rows attribute
         *
         * @property String
         */
        rows: [Number, String]
    }

};
</script>
