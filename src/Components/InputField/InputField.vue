<template>

    <form-group :group="group" :class="formGroupClasses">

        <slot name="label">
            <form-label ref="label" v-if="label || hasDefaultSlot" :for="$attrs.id" v-html="label"/>
        </slot>

        <div class="form-group-inner">
            <slot name="control">
                <input
                    v-bind-events
                    v-bind="controlAttributes"
                    :value="value"
                    @input="$emit('input', $event.target.value)"
                />
            </slot>

            <slot name="activity">
                <transition name="slide-fade">
                    <activity-indicator key="test" v-if="activity" ref="activity" type="dots" :size="size"/>
                </transition>
            </slot>
        </div>

        <slot name="feedback">
            <form-feedback v-if="validFeedback" ref="feedback" v-html="validFeedback" valid />
            <form-feedback v-else-if="invalidFeedback" ref="feedback" v-html="invalidFeedback" invalid />
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
import FormControl from '../FormControl';
import FormFeedback from '../FormFeedback';
import Colorable from '../../Mixins/Colorable';
import ActivityIndicator from '../ActivityIndicator';
import FormControlMixin from '../../Mixins/FormControl';

export default {

    name: 'input-field',

    mixins: [
        Colorable,
        FormControlMixin
    ],

    components: {
        HelpText,
        FormControl,
        FormGroup,
        FormLabel,
        FormFeedback,
        ActivityIndicator
    }

};
</script>

<style lang="scss">
.input-field {
    .slide-fade-enter,
    .slide-fade-leave-to {
        opacity: 1;
        transform: translate(25%, -50%);
    }

    .is-valid + .valid-feedback,
    .is-invalid + .invalid-feedback {
        display: block;
    }
}
</style>
