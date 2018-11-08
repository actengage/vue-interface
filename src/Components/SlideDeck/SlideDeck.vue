<template>
    <div class="slide-deck" :class="{'slide-deck-flex': center}">
        <div ref="content" class="slide-deck-content" :style="{width: width, height: height}">
            <keep-alive>
                <transition
                    :name="`slide-${direction}`"
                    @after-enter="onSlideAfterEnter"
                    @before-enter="onSlideBeforeEnter"
                    @enter="onSlideEnter"
                    @after-leave="onSlideAfterLeave"
                    @before-leave="onSlideBeforeLeave"
                    @leave="onSlideLeave">
                    <slides ref="slides" :key="currentSlide" :active="currentSlide">
                        <slot/>
                    </slides>
                </transition>
            </keep-alive>
        </div>
        <slot name="controls">
            <slide-deck-controls v-if="controls" ref="controls" :slides="slides()" :active="currentSlide" @click="onClickControl" />
        </slot>
    </div>
</template>

<script>
import Slides from './Slides';
import transition from '../../Helpers/Transition';
import SlideDeckControls from './SlideDeckControls';
import { isFunction } from '../../Helpers/Functions';

export default {

    name: 'slide-deck',

    components: {
        Slides,
        SlideDeckControls
    },

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
         * Center the slide-deck.
         *
         * @type Boolean
         */
        center: {
            type: Boolean,
            default: true
        },

        /**
         * Show the slide-deck controls to change the slide.
         *
         * @type Boolean
         */
        controls: Boolean,

        /**
         * Flex the content within the popover.
         *
         * @type Boolean
         */
        flex: {
            type: Boolean,
            default: true
        },

        /**
         * Give a selector or Element to use apply a hidden overflow. If false,
         * no overflow will be applied. Defaults to the slide deck's container.
         *
         * @type {String|Element|Boolean}
         */
        overflow: {
            type: [Object, String, Element, Boolean],
            default: true
        },

        /**
         * The mode determines how the popover content will flex based on the
         * varying heights of the slides.
         *
         * @type Boolean
         */
        resizeMode: {
            type: [Function, Boolean, String],
            default: 'auto',
            validate(value) {
                return ['auto', 'initial', 'inherit'].indexOf(value) !== 1;
            }
        }

    },

    watch: {

        active(value, oldValue) {
            this.lastSlide = oldValue;
            this.currentSlide = value;
        },

        currentSlide(value, oldValue) {
            this.direction = this.$refs.slides.getSlideIndex(oldValue) > this.$refs.slides.getSlideIndex(value) ? 'backward' : 'forward';
        }

    },

    methods: {

        resize(el) {
            if(isFunction(this.resizeMode)) {
                this.resizeMode(el || this.$el);
            }
            else {
                const style = getComputedStyle(el);

                if(!el.style.width) {
                    el.width = el.style.width = `calc(${style.width} + ${style.marginLeft} + ${style.marginRight})`;
                }

                if(!el.style.height) {
                    el.height = el.style.height = `calc(${style.height} + ${style.marginTop} + ${style.marginBottom})`;
                }
            }
        },

        slide(index) {
            return this.$refs.slides ? this.$refs.slides.slide(index || this.active) : null;
        },

        slides() {
            return this.$refs.slides ? this.$refs.slides.slides() : [];
        },

        onClickControl(event, vnode) {
            this.currentSlide = vnode.data ? vnode.data.key : vnode.key;
        },

        onSlideAfterEnter(el) {
            if(el.width) {
                el.width = el.style.width = null;
            }

            if(el.height) {
                el.height = el.style.height = null;
            }

            this.width = null;
            this.height = null;
            this.$emit(
                'after-enter', this.$refs.slides.slide(this.currentSlide), this.$refs.slides.slide(this.lastSlide)
            );
        },

        onSlideBeforeEnter(el) {
            this.$emit(
                'before-enter', this.$refs.slides.slide(this.currentSlide), this.$refs.slides.slide(this.lastSlide)
            );
        },

        onSlideEnter(el, done) {
            this.resize(el);
            this.width = el.style.width;
            this.height = el.style.height;

            transition(el).then(delay => {
                this.$nextTick(done);
            });

            this.$emit(
                'enter', this.$refs.slides.slide(this.currentSlide), this.$refs.slides.slide(this.lastSlide)
            );
        },

        onSlideAfterLeave(el) {
            if(el.width) {
                el.width = el.style.width = null;
            }

            if(el.height) {
                el.height = el.style.height = null;
            }

            this.$nextTick(() => {
                this.$emit(
                    'after-leave', this.$refs.slides.slide(this.lastSlide), this.$refs.slides.slide(this.currentSlide)
                );
            });
        },

        onSlideBeforeLeave(el) {
            this.resize(el);
            this.$emit(
                'before-leave', this.$refs.slides.slide(this.lastSlide), this.$refs.slides.slide(this.currentSlide)
            );
        },

        onSlideLeave(el, done) {
            transition(el).then(delay => {
                this.$nextTick(done);
            });

            this.$emit(
                'leave', this.$refs.slides.slide(this.lastSlide), this.$refs.slides.slide(this.currentSlide)
            );
        }

    },

    computed: {

        overflowElement() {
            if(this.overflow === true) {
                return this.$el;
            }
            else if(this.overflow instanceof Element) {
                return this.overflow;
            }
            else if(this.overflow && this.overflow.elm) {
                return this.overflow.elm;
            }
            else if(this.overflow) {
                return document.querySelector(this.overflow);
            }

            return null;
        },

        nodes() {
            return this.$slots.default;
        }

    },

    mounted() {
        if(this.overflowElement) {
            this.overflowElement.style.overflow = 'hidden';
        }
    },

    data() {
        return {
            height: null,
            width: null,
            lastSlide: null,
            currentSlide: this.active,
            direction: 'forward'
        };
    }

};
</script>

<style lang="scss">
.slide-deck {
    height: auto;
    position: relative;

    &.slide-deck-flex {
        display: flex;
        align-items: center;
        justify-content: center;

        .slide-deck-content {
            flex: 1;
        }
    }

    .slide-deck-content {
        position: relative;
        transition: all .333s ease;
    }

    /*
    display: flex;
    justify-content: center;
    align-items: center;
    */

    .slide-deck-controls {
        position: absolute;
        left: 50%;
        bottom: 1rem;
        transform: translateX(-50%);
    }

    .slide-forward-enter-active,
    .slide-forward-leave-active,
    .slide-backward-enter-active,
    .slide-backward-leave-active {
        opacity: 0;
        transition: all .333s ease-out;
        position: absolute;
        top: 0;
    }

    .slide-forward-enter-active,
    .slide-backward-enter-active {
        transition: all .333s ease-out;
        width: 100%;
    }

    .slide-forward-enter-active {
        left: 0;
    }

    .slide-backward-enter-active {
        right: 0;
    }

    .slide-forward-enter-active,
    .slide-backward-leave-to {
        transform: translateX(115%);
    }

    .slide-forward-leave-to,
    .slide-backward-enter-active {
        transform: translateX(-115%);
    }

    .slide-forward-enter-to,
    .slide-backward-enter-to {
        opacity: 1;
        transform: translateX(0);
    }

}
</style>
