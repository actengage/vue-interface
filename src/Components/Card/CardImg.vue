<template>

    <div :class="$mergeClasses(className)" class="d-flex justify-content-center align-items-center" :style="{height: unit(height)}">
        <div v-if="background" class="card-img-bg" :style="{background: background ? `url(${this.src})` : null, overflow: blur ? 'hidden' : 'inherit', filter: blur ? `blur(${unit(blur)})` : null}"/>
        <img v-if="!background && src" :src="src" :alt="alt" class="img-fluid"/>
        <div class="card-img-content" :class="{'text-truncate': textTruncate}">
            <slot/>
        </div>
    </div>

</template>

<script>
import Card from './Card';
import unit from '../../Helpers/Unit';

export default {

    name: 'card-img',

    extends: Card,

    props: {

        /**
         * The alt attribute
         *
         * @property String
         */
        alt: String,

        /**
         * Display the image as a background image fit with CSS cover.
         *
         * @property String
         */
        background: Boolean,

        /**
         * The amount to blur the background image.
         *
         * @property String
         */
        blur: [Number, String],

        /**
         * The height attribute
         *
         * @property String
         */
        height: [Number, String],

        /**
         * Truncate the text in the content
         *
         * @property String
         */
        textTruncate: Boolean,

        /**
         * The src attribute
         *
         * @property String
         */
        src: String

    },

    methods: {

        unit(value) {
            return unit(value);
        }

    }

}
</script>

<style lang="scss">
.card-img,
.card-img-top,
.card-img-bottom {
    color: white;
    position: relative;
    text-shadow: 0 0 20px rgba(0, 0, 0, .5);

    .card-img-bg {
        z-index: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover !important;
        background-position: center !important;
        background-repeat: no-repeat !important;

        & > img:first-child {
            position: absolute;
        }
    }

    .card-img-content {
        flex: 1;
        z-index: 1;
        position: relative;
    }

    /*
    & > :not(img) {
        position: absolute;
    }
    */
}
</style>
