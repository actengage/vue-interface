<template>
    <div class="progress" :style="{'height': formattedHeight}">
        <div class="progress-bar" role="progressbar" :style="{'width': offsetValue + '%'}" :class="mergeClasses(progressClasses, variantClass)" :aria-valuenow="offsetValue" :aria-valuemin="min" :aria-valuemax="max">
            <span v-if="label">{{offsetValue}}%</span>
        </div>
    </div>
</template>

<script>
import { isNumber } from 'lodash-es'
import unit from '../../Helpers/Unit';
import Variant from '../../Mixins/Variant';
import MergeClasses from '../../Mixins/MergeClasses';

export default {

    name: 'progress-bar',

    mixins: [
        Variant,
        MergeClasses
    ],

    props: {

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
        label: Boolean,

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
        }

    }

}

</script>
