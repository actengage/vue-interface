<template>
    <div class="thumbnail-list" :class="classes">
        <thumbnail-list-item v-if="!!images" v-for="image in images" :src="image.url || image" :width="width" />
        <slot/>
    </div>
</template>

<script>
export default {

    props: {

        fill: Boolean,

        flex: Boolean,

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

    &:not(.thumbnail-list-grid) > * {
        padding-right: 10px;
        padding-bottom: 10px;
    }

    &.thumbnail-list-flex > * {
        flex: 1;
    }

    &.thumbnail-list-fill > * {
        flex: 1 0 auto;
    }

    &.thumbnail-list-wrap > * {
        flex: 0 0 auto;
    }

    &.thumbnail-list-fill,
    &.thumbnail-list-wrap {
        flex-flow: row wrap;
    }

    /*
    &.thumbnail-list-grid {
        display: grid;
        grid-gap: 10px;
    }
    */
}
</style>
