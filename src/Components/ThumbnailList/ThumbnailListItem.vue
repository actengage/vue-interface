<template>
    <div class="thumbnail-list-item" :style="{height: unit(height), width: unit(width), minHeight: unit(minHeight), maxHeight: unit(maxHeight), minWidth: unit(minWidth), maxWidth: unit(maxWidth)}">
        <img v-if="src" :src="src" :alt="alt" :class="{'img-fluid': fluid}">
        <slot />
    </div>
</template>

<script>
import unit from '../../Helpers/Unit';

export default {

    props: {

        alt: String,

        src: String,

        width: [String, Number],

        height: [String, Number],

        minHeight: [String, Number],

        maxHeight: [String, Number],

        minWidth: [String, Number],

        maxWidth: [String, Number],

        fluid: {
            type: Boolean,
            default: true
        }

    },

    methods: {

        unit: unit

    }

};
</script>

<style lang="scss">
.thumbnail-list-item {
    max-width: 100%;
    max-height: 100%;

    & > img {
        max-width: 100%;

        &.img-fluid {
            width: 100%;
        }
    }

    /*
    &:not(:only-child) {
        margin-right: 10px;
        margin-bottom: 10px;
    }

    &:nth-child(2n) {
        opacity: .25;
    }
    */
}
</style>
