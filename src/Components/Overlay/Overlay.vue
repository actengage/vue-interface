<template>
    <div class="overlay" :class="{'show': isVisible}" :style="{background: background}" @keyup.esc="event => closeable && hide()">
        <button v-if="closeable || !hideCloseButton" type="button" class="btn btn-link overlay-close" @click="onClickClose">
            <i class="fa fa-times-circle"></i>
        </button>

        <div class="overlay-content container" :class="{'fixed': fixedContent}" :style="{minHeight: minHeight}">
            <slot/>
        </div>
    </div>
</template>

<script>
export default {

    name: 'overlay',

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
         * Is the overlay close button hidden but still closeable.
         *
         * @property Boolean
         */
        hideCloseButton: Boolean,

        /**
         * Is the overlay showing.
         *
         * @property Boolean
         */
        visible: Boolean,

        /**
         * Is the overlay content fixed position
         *
         * @property Boolean
         */
        fixedContent: Boolean,

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
         * Is the overlay content minimum height.
         *
         * @property Boolean
         */
        minHeight: [String, Number]

    },

    watch: {
        visible(value) {
            (this.isVisible = value) && this.focus();
        }
    },

    methods: {

        focus() {
            const el = this.$el.querySelector('.form-control, input, select, textarea');

            if(el) {
                el.focus();
            }
        },

        /**
         * Show the overlay
         *
         * @return void
         */
        show(contents, options) {
            this.$mount(document.body.appendChild(document.createElement('div')));

            if(contents.$mount) {
                contents.$parent = this;
                contents.$mount(
                    this.$el.querySelector('.overlay-content').appendChild(document.createElement('div'))
                );
            }

            this.focus();
            this.$emit('show');
            this.$emit('update:visible', this.isVisible = true);
        },

        /**
         * Hide the overlay
         *
         * @return void
         */
        hide() {
            this.$emit('hide');
            this.$emit('update:visible', this.isVisible = false);
        },

        /**
         * The callback for the `click` event on the close button.
         *
         * @return void
         */
        onClickClose() {
            this.$emit('click:close');
            this.hide();
        }

    },

    mounted() {
        this.visible && this.focus();
    },

    data() {
        return {
            isVisible: this.visible
        }
    }

}

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
    transition: all 333ms ease-out;

    &.show {
        z-index: 10000;
        opacity: 100;
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

    .overlay-content {
        overflow-y: auto;
        position: relative;
        width: 100%;
        margin: 0 auto;
        padding-bottom: $font-size-base * 6;

        &.fixed {
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
}
</style>
