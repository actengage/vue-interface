<template>
    <container class="overlay-content">
        <slot/>
    </container>
</template>

<script>
import Container from '../Container';

export default {

    name: 'overlay-content',

    components: {
        Container
    }

};
</script>

<style lang="scss">
@import './node_modules/bootstrap/scss/functions.scss';
@import './node_modules/bootstrap/scss/variables.scss';

.overlay-content {
    margin: 0 auto;
    overflow-y: auto;
    position: relative;

    /*
    &.overlay-content-center {
        display: flex;
        justify-content: center;
        align-items: center;

        .overlay-body {
            flex: 1;
        }
    }
    */

    &.overlay-content-fixed {
        top: 0;
        left: 0;
        padding: 0;
        height: 100%;
        position: fixed;
        max-width: none;
    }

    .overlay-controls {
        float: right;
        position: relative;
        top: 4px;
        padding-right: 0;
        padding-bottom: $font-size-base;

        &.left {
            left: 0;
        }
        &.right {
            right: 0;
        }

        & + * {
            clear: both;
        }
    }
}
</style>
