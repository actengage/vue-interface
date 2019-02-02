<template>
    <!-- TODO: Add tooltip with slide name/key to the control once the tooltip directive has been written. -->
    <div class="slide-deck-controls">
        <a v-for="(slide, i) in slides"
            :key="i"
            href="#"
            class="slide-deck-control-icon"
            :class="{'is-active': (slide.data ? slide.data.key : slide.key) === active}"
            @click.prevent="onClick($event, slide)">
            <i class="fa fa-circle" />
        </a>
    </div>
</template>

<script>
export default {

    name: 'SlideDeckControls',

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

    data() {
        return {};
    },

    computed: {

    },

    methods: {

        onClick(event, slide) {
            this.$emit('click', event, slide);
        }

    }

};
</script>

<style lang="scss">
@import './node_modules/bootstrap/scss/functions.scss';
@import './node_modules/bootstrap/scss/variables.scss';

.slide-deck-controls {
    .slide-deck-control-icon {
        color: $white;
        font-size: $font-size-base;

        &:not(:last-child) {
            margin-right: $font-size-base / 2;
        }
    }

    .slide-deck-control-icon.is-active {
        color: $primary;
    }
}
</style>
