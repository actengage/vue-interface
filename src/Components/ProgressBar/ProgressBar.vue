<template>
    <div class="progress" :style="{'height': formattedHeight}">
        <div role="progressbar" :style="{'width': progress + '%'}" class="progress-bar" :class="progressClasses" :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100">
            <span v-if="label">{{progress}}%</span>
        </div>
    </div>
</template>

<script>

import { isNumber } from 'lodash';

export default {

    name: 'progress-bar',

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
         * The style of the form control
         *
         * @property String
         */
        type: {
            type: String,
            validate: value => ['success', 'info', 'warning', 'danger'].indexOf(value) !== -1
        },

        /**
         * Show the progress bar value as a label inside the bar
         *
         * @property String
         */
        label: {
            type: Boolean,
            default: false
        },

        /**
         * Should the progress bar appear with stripes
         *
         * @property String
         */
        striped: {
            type: Boolean,
            default: false
        },

        /**
         * Should the progress bar appear with animated stripes
         *
         * @property String
         */
        animated: {
            type: Boolean,
            default: false
        }

    },

    computed: {

        formattedHeight() {
            return !this.height ? null : (
                isNumber(this.height) ? this.height + 'px' : this.height
            );
        },

        progressClasses() {
            const classes = {
                'progress-bar-striped': this.striped,
                'progress-bar-animated': this.animated
            };

            if(this.type) {
                classes[`bg-${this.type}`] = true;
            }

            return classes;
        }

    }

}

</script>
