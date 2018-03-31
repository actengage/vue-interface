<template>
    <div class="progress" :style="{'height': formattedHeight}">
        <div role="progressbar" :style="{'width': progress + '%'}" class="progress-bar" :class="mergeClasses(progressClasses, colorableClasses)" :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100">
            <span v-if="label">{{progress}}%</span>
        </div>
    </div>
</template>

<script>

import { isNumber } from 'lodash';
import Colorable from '@/Mixins/Colorable/Colorable';

export default {

    name: 'progress-bar',

    mixins: [
        Colorable
    ],

    props: {

        /**
         * The progress bar percentage value
         *
         * @property String
         */
        progress: {
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
        animated: Boolean

    },

    computed: {

        formattedHeight() {
            return !this.height ? null : (
                isNumber(this.height) ? this.height + 'px' : this.height
            );
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
