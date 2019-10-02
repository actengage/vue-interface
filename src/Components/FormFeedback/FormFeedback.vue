<template>
    <div v-if="!label || typeof label === 'string'" :class="classes">
        <slot>{{ label }}</slot>
    </div>
</template>

<script>
import Colorable from '../../Mixins/Colorable/Colorable';

export default {

    name: 'FormFeedback',

    mixins: [
        Colorable
    ],

    props: {

        /**
         * The value of label element. If no value, no label will appear.
         *
         * @property String
         */
        label: [Boolean, String],

        /**
         * Should the feedback marked as invalid
         *
         * @property String
         */
        invalid: Boolean,

        /**
         * Should the feedback marked as invalid
         *
         * @property String
         */
        valid: Boolean

    },

    computed: {

        classes() {
            return {
                'invalid-feedback': this.invalid,
                'valid-feedback': this.valid && !this.invalid
            };
        }

    }

};
</script>
