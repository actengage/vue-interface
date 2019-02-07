<template>
    <div class="overlay"
        :class="triggerableClasses"
        :style="{'background': background, 'display': isDisplaying ? 'flex' : 'none'}"
        role="dialog"
        tabindex="-1"
        @keydown.esc="onEsc">
        <button v-if="closeable && !hideCloseButton" type="button" class="btn btn-link overlay-close" @click="onClickClose">
            <font-awesome-icon icon="times-circle" />
        </button>

        <overlay-content :class="{'overlay-content-fixed': fixedContent, 'overlay-content-center': center}" :style="{minHeight: minHeight}">
            <slot name="body">
                <overlay-body class="my-4">
                    <slot />
                </overlay-body>
            </slot>
        </overlay-content>
    </div>
</template>

<script>
import OverlayBody from './OverlayBody';
import OverlayContent from './OverlayContent';
import Triggerable from '../../Mixins/Triggerable';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons/faTimesCircle';

library.add(faTimesCircle);

export default {

    name: 'Overlay',

    components: {
        OverlayBody,
        OverlayContent,
        FontAwesomeIcon
    },

    mixins: [
        Triggerable
    ],

    props: {

        /**
         * The overlay background color.
         *
         * @property String
         */
        background: {
            type: String,
            default: 'rgba(255, 255, 255, .925)'
        },

        /**
         * Is the overlay content fixed position
         *
         * @property Boolean
         */
        closeable: {
            type: Boolean,
            default: true
        },

        /**
         * Center the overlay content on the screen using flex box.
         *
         * @type {Boolean}
         */
        center: {
            type: Boolean,
            default: true
        },

        /**
         * Is the overlay content fixed position
         *
         * @property Boolean
         */
        fixedContent: Boolean,

        /**
         * Is the overlay close button hidden but still closeable.
         *
         * @property Boolean
         */
        hideCloseButton: Boolean,

        /**
         * Is the overlay content minimum height.
         *
         * @property Boolean
         */
        minHeight: [String, Number]

    },

    methods: {

        /**
         * The callback for the `click` event on the close button.
         *
         * @return void
         */
        onClickClose(event) {
            this.$emit('click:close', event);
            this.close();
        },

        onEsc(event) {
            this.closeable && this.close();
        }

    }

};
</script>

<style lang="scss">
@import './node_modules/bootstrap/scss/functions.scss';
@import './node_modules/bootstrap/scss/variables.scss';

.overlay {
    position: fixed;
    display: flex;
    min-height: 0;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-direction: column;

    &.fade {
        transition: opacity 333ms ease-out;
    }

    &.show {
        z-index: 1030;
        opacity: 1;
    }

    .overlay-content {
        flex: 1;
    }

    .overlay-header {
        margin-top: $font-size-base * 1.5;
    }

    .overlay-close {
        font-size: $font-size-base * 1.25;
        color: $gray-700;
        position: absolute;
        top: $font-size-base;
        right: $font-size-base;
        z-index: 1;
    }
}
</style>
