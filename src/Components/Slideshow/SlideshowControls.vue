<template>
    <!-- TODO: Add tooltip with slide name/key to the control once the tooltip directive has been written. -->
    <div class="slideshow-controls">
        <a v-for="slide in slides" href="#" @click.prevent="onClick($event, slide)" class="slideshow-control-icon" :class="{'is-active': (slide.data ? slide.data.key : slide.key) === active}">
            <i class="fa fa-circle"/>
        </a>
    </div>
</template>

<script>
import { map } from 'lodash-es';

export default {

    name: 'slideshow-controls',

    props: {

        /**
         * The slide key or index that should show.
         *
         * @type {Number}
         */
        active: {
            type: [String, Number],
            default: 0
        },

        /**
         * An array of slide vnodes
         *
         * @type {Number}
         */
        slides: {
            type: Array,
            required: true
        }

    },

    methods: {

        onClick(event, slide) {
            this.$emit('click', event, slide)
        }

    },

    computed: {

    },

    data() {
        return {}
    }

};
</script>

<style lang="scss">
@import './node_modules/bootstrap/scss/functions.scss';
@import './node_modules/bootstrap/scss/variables.scss';

.slideshow-controls {
    .slideshow-control-icon {
        color: $white;
        font-size: $font-size-base;

        &:not(:last-child) {
            margin-right: $font-size-base / 2;
        }
    }

    .slideshow-control-icon.is-active {
        color: $primary;
    }
}
</style>
