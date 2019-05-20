<template>
    <a :href="src || '#'" class="thumbnail-list-item" :style="style" @click="onClick">
        <img v-if="src" :src="src" :alt="alt" :class="{'img-fluid': fluid}">
        <slot />
    </a>
</template>

<script>
import unit from '../../Helpers/Functions/unit';

export default {

    props: {

        alt: String,

        src: String,

        width: [String, Number],

        minWidth: [String, Number],

        maxWidth: [String, Number],

        height: [String, Number],

        minHeight: [String, Number],

        maxHeight: [String, Number],

        fluid: {
            type: Boolean,
            default: true
        },

        preventDefault: {
            type: Boolean,
            default: true
        }

    },

    computed: {

        style() {
            return {
                height: unit(this.height),
                width: unit(this.width),
                minHeight: unit(this.minHeight),
                maxHeight: unit(this.maxHeight),
                minWidth: unit(this.minWidth),
                maxWidth: unit(this.maxWidth)
            };
        }

    },

    methods: {

        onClick(event) {
            if(this.preventDefault) {
                event.preventDefault();
            }

            this.$emit('click', event);
        }

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
