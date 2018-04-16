<template>
    <div class="thumbnail-list-item" :style="{width: unit(width)}">
        <img :src="src" :alt="alt" :class="{'img-fluid': fluid}" />
    </div>
</template>

<script>
import unit from '../../Helpers/Unit';

export default {

    props: {

        alt: String,

        src: String,

        width: [String, Number],

        fluid: {
            type: Boolean,
            default: true
        }

    },

    methods: {

        unit: unit

    }

}
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
