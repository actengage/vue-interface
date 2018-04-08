<template>
    <div class="alert" :class="$mergeClasses(variantClass, {show: isVisible, fade: fade})" role="alert">
        <slot/>
        <alert-close v-if="dismissible" @click="dismiss()"/>
        <progress-bar v-if="typeof show === 'number'" :variant="variant" :height="5" :value="dismissCount" :max="show" class="my-3"/>
    </div>
</template>

<script>
import Variant from '@/Mixins/Variant/Variant';
import transition from '@/Helpers/Transition/Transition';

export default {

    name: 'alert',

    mixins: [
        Variant
    ],

    props: {

        /**
         * Is the alert dismissible
         *
         * @property Boolean
         */
        dismissible: Boolean,

        /**
         * Should the alert fade when hidden
         *
         * @property Boolean
         */
        fade: {
            type: Boolean,
            default: true
        },

        /**
         * Should the alert be visible by default. If passed a number, alert
         * will be shown for the number of seconds that are passed.
         *
         * @property Boolean
         */
        show: {
            type: [Number, Boolean],
            default: true
        }

    },

    methods: {

        dismiss() {
            transition(this.$el).then(delay => {
                this.$emit('dismissed');
            });

            this.$emit('update:visible', this.isVisible = false);
        }

    },

    mounted() {
        if(typeof this.show === 'number') {
            const el = this.$el.querySelector('.progress-bar');

            this.$emit('dismiss-countdown', this.dismissCount = this.show);

            const interval = setInterval(() => {
                this.$emit('dismiss-countdown', this.dismissCount -= 1);

                if(!this.dismissCount) {
                    clearInterval(interval);
                    transition(el).then(delay => this.dismiss());
                }
            }, 1000);
        }
    },

    data() {
        return {
            dismissCount: this.show,
            isVisible: this.show
        }
    }

}
</script>
