<template>
    <div class="thumbnail-list" :class="classes">
        <thumbnail-list-item v-if="!!images" v-for="image in images" :src="image" :width="width" />
        <slot/>
    </div>
</template>

<script>
import ThumbnailListItem from './ThumbnailListItem';

export default {

    components: {
        ThumbnailListItem
    },

    props: {

        fill: Boolean,

        flex: Boolean,

        noFlex: Boolean,

        grid: Boolean,

        wrap: Boolean,

        images: Array,

        width: {
            type: [String, Number],
            default: 75
        }

    },

    computed: {

        classes() {
            return {
                'thumbnail-list-fill': this.fill,
                'thumbnail-list-flex': this.flex,
                'thumbnail-list-noflex': this.noFlex,
                'thumbnail-list-grid': this.grid,
                'thumbnail-list-wrap': this.wrap
            }
        }

    }

}
</script>

<style lang="scss">
.thumbnail-list {
    width: 100%;
    display: flex;

    &:not(.thumbnail-list-grid) > *:not {
        padding-right: 10px;
        padding-bottom: 10px;
    }

    &:not(.thumbnail-list-grid) > *:first-child:last-child {
        padding: 0;
    }

    &.thumbnail-list-fill,
    &.thumbnail-list-wrap {
        flex-flow: row wrap;
    }

    &.thumbnail-list-noflex > * {
        flex: 0;
    }

    &.thumbnail-list-fill > * {
        flex: 1 0 auto;
    }

    &.thumbnail-list-wrap > * {
        flex: 0 0 auto;
    }

    &.thumbnail-list-flex > * {
        flex: 1;
    }

}
</style>
