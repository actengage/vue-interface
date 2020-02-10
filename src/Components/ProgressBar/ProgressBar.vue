<template>
    <div class="progress" :style="{'height': formattedHeight}">
        <div
        class="progress-bar"
        role="progressbar"
        :style="styles"
        :class="mergeClasses(progressClasses, variantClass)"
        :aria-valuenow="offsetValue"
        :aria-valuemin="min"
        :aria-valuemax="max">
            <span v-if="!!label">
                <template v-if="label !== true">
                    {{ label }}
                </template> {{ offsetValue }}%
            </span>
            <span v-else>
                <slot />
            </span>
        </div>
    </div>
</template>

<script>
import unit from '../../Helpers/Functions/unit';
import Variant from '../../Mixins/Variant';
import MergeClasses from '../../Mixins/MergeClasses';

export default {

    name: 'ProgressBar',

    mixins: [
        Variant,
        MergeClasses
    ],

    props: {

        /**
         * A custom color to be applied inline in the styles vs a contextual
         * variant.
         *
         * @property String
         */
        color: String,

        /**
         * The progress bar percentage value
         *
         * @property String
         */
        value: {
            type: Number,
            required: true
        },

        /**
         * The height of the progress bar
         *
         * @property String
         */
        height: [Number, String],

        /**
         * Show the progress bar value as a label inside the bar
         *
         * @property String
         */
        label: [String, Boolean],

        /**
         * Should the progress bar appear with stripes
         *
         * @property String
         */
        striped: Boolean,

        /**
         * Should the progress bar appear with animated stripes
         *
         * @property String
         */
        animated: Boolean,

        /**
         * The minimum value
         *
         * @property String
         */
        min: {
            type: Number,
            default: 0
        },

        /**
         * The max value
         *
         * @property String
         */
        max: {
            type: Number,
            default: 100
        }

    },

    computed: {

        variantClassPrefix() {
            return 'bg';
        },

        offsetValue() {
            return this.value / this.max * 100;
        },

        formattedHeight() {
            return this.height ? unit(this.height) : null;
        },

        progressClasses() {
            return {
                'progress-bar-striped': this.striped,
                'progress-bar-animated': this.animated
            };
        },

        styles() {
            return {
                width: `${this.offsetValue}%`,
                background: `${this.color} !important`
            };
        }

    }

};
</script>

<style lang="scss">
.progress {
    position: relative;
    
    .progress-bar > span {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
}
</style>
