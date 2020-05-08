<template>
    <form-group :group="group" :class="formGroupClasses">
        <slot name="label">
            <form-label v-if="label" ref="label" :for="$attrs.id" :class="labelClass" v-html="label" />
        </slot>

        <div class="form-group-inner">
            <slot name="control">
                <slot name="icon">
                    <div v-if="icon" class=" mx-2 pl-1">
                        <font-awesome-icon
                            :icon="icon"
                            class="position-absolute h-100"
                            :class="{'text-secondary': !currentValue, 'text-dark': !!currentValue}"
                            @click="focus()" />
                    </div>
                </slot>
                <input
                    ref="field"
                    v-bind-events
                    v-bind="controlAttributes"
                    :value="currentValue"
                    @input="onInput">
            </slot>

            <slot name="activity">
                <transition name="slide-fade">
                    <activity-indicator v-if="activity" key="test" ref="activity" type="dots" :size="size" />
                </transition>
            </slot>
        </div>

        <slot name="feedback">
            <form-feedback v-if="validFeedback" :label="validFeedback" valid />
            <form-feedback v-else-if="invalidFeedback" :label="invalidFeedback" invalid />
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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {

    name: 'InputField',

    components: {
        HelpText,
        FormGroup,
        FormLabel,
        FormFeedback,
        FontAwesomeIcon,
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
    
    .form-control-icon {
        padding-left: 2em;
    }
}
</style>
