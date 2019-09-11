<template>
    <form-group :group="group" :class="formGroupClasses">
        <slot name="label">
            <form-label v-if="label" ref="label" :for="$attrs.id" v-html="label" />
        </slot>

        <div class="form-group-inner">
            <slot name="control">
                <input
                    v-bind-events
                    v-bind="controlAttributes"
                    ref="field"
                    :value="value"
                    @input="$emit('input', $event.target.value)">
            </slot>

            <slot name="activity">
                <transition name="slide-fade">
                    <activity-indicator v-if="activity" key="test" ref="activity" type="dots" :size="size" />
                </transition>
            </slot>
        </div>

        <slot name="feedback">
            <form-feedback v-if="validFeedback" ref="feedback" valid v-html="validFeedback" />
            <form-feedback v-else-if="invalidFeedback" ref="feedback" invalid v-html="invalidFeedback" />
        </slot>

        <slot name="help">
            <help-text v-if="helpText" ref="help" v-html="helpText" />
        </slot>
    </form-group>
</template>

<script>
import HelpText from '../HelpText';
import FormGroup from '../FormGroup';
import FormLabel from '../FormLabel';
import FormFeedback from '../FormFeedback';
import Colorable from '../../Mixins/Colorable';
import ActivityIndicator from '../ActivityIndicator';
import FormControlMixin from '../../Mixins/FormControl';

export default {

    name: 'InputField',

    components: {
        HelpText,
        FormGroup,
        FormLabel,
        FormFeedback,
        ActivityIndicator
    },

    mixins: [
        Colorable,
        FormControlMixin
    ]

};
</script>

<style lang="scss">
@import '../../scss/custom-fields';

.input-field {
    .slide-fade-enter,
    .slide-fade-leave-to {
        opacity: 1;
        transform: translate(25%, -50%);
    }

    &.is-valid .valid-feedback,
    &.is-invalid .invalid-feedback {
        display: flex;
    }
}
</style>
