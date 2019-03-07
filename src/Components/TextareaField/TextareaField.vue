<template>
    <form-group :group="group" :class="formGroupClasses">
        <slot name="label">
            <form-label v-if="label" ref="label" :for="$attrs.id" v-html="label" />
        </slot>

        <slot name="control">
            <div class="position-relative">
                <textarea
                    v-autogrow="autogrow"
                    v-bind-events
                    v-bind="controlAttributes"
                    :value="value"
                    @input="$emit('input', $event.target.value)" />
                <slot name="feedback">
                    <form-feedback v-if="validFeedback" valid v-html="validFeedback" />
                    <form-feedback v-if="invalidFeedback" invalid v-html="invalidFeedback" />
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
import autogrow from '../../Directives/Autogrow';
import FormControl from '../../Mixins/FormControl';
import MergeClasses from '../../Mixins/MergeClasses';

export default {

    name: 'TextareaField',

    components: {
        HelpText,
        FormGroup,
        FormLabel,
        FormFeedback
    },

    directives: {
        autogrow
    },

    mixins: [
        Colorable,
        FormControl,
        MergeClasses
    ],

    props: {
        
        /**
         * The autogrow attribute
         *
         * @property Boolean
         */
        autogrow: [Number, String, Boolean]

    }

};
</script>
