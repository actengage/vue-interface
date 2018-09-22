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
import { extend } from 'lodash-es';
import { isFunction } from 'lodash-es';
import unit from '../../Helpers/Unit';
import transition from '../../Helpers/Transition';
import Slides from './Slides';
import SlideDeckControls from './SlideDeckControls';

const RESIZE_MODES = {
    auto(el) {
        this.width = getComputedStyle(el).width;
        this.height = getComputedStyle(el).height;
    },
    initial(el) {
        if(!this.height && this.$el.clientHeight) {
            this.height = unit(this.$el.clientHeight);
        }

        if(!this.width && this.$el.clientWidth) {
            this.width = unit(this.$el.clientWidth);
        }
    }
};

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
        overflow: [Object, String, Element, Boolean],

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
                this.resizeMode.call(this, el || this.$el);
            }
            else {
                const style = getComputedStyle(el);

                this.width = `calc(${style.width} + ${style.marginLeft} + ${style.marginRight})`;
                this.height = `calc(${style.height} + ${style.marginTop} + ${style.marginBottom})`;


                console.log(this.width, this.height);
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
            this.width = null;
            this.height = null;
            this.$emit('after-enter', this.$refs.slides.slide(this.currentSlide), this.$refs.slides.slide(this.lastSlide));
        },

        onSlideBeforeEnter(el) {
            this.$emit('before-enter', this.$refs.slides.slide(this.currentSlide), this.$refs.slides.slide(this.lastSlide));
        },

        onSlideEnter(el, done) {
            this.resize(el);

            transition(el).then(delay => {
                this.$nextTick(done);
            });

            this.$emit('enter', this.$refs.slides.slide(this.currentSlide), this.$refs.slides.slide(this.lastSlide));
        },

        onSlideAfterLeave(el) {
            this.$nextTick(() => {
                this.$emit('after-leave', this.$refs.slides.slide(this.lastSlide), this.$refs.slides.slide(this.currentSlide));
            });
        },

        onSlideBeforeLeave(el) {
            this.$emit('before-leave', this.$refs.slides.slide(this.lastSlide), this.$refs.slides.slide(this.currentSlide));
        },

        onSlideLeave(el, done) {
            this.resize(el);

            transition(el).then(delay => {
                this.$nextTick(done);
            });

            this.$emit('leave', this.$refs.slides.slide(this.lastSlide), this.$refs.slides.slide(this.currentSlide));
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
                return document.querySelector(this.overflow)
            }

            return null;
        },

        nodes() {
            return this.$slots.default;
        }

    },

    mounted() {
        this.$nextTick(() => {
            if(this.overflowElement) {
                this.overflowElement.style.overflow = 'hidden';
            }
        });
    },

    data() {
        return {
            height: null,
            width: null,
            lastSlide: null,
            currentSlide: this.active,
            direction: 'forward'
        }
    }

};
</script>

<style lang="scss">
.slide-deck {
    height: auto;
    position: relative;
    transition: all .5s ease;

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
        // overflow-y: auto;
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
        transition: all .5s ease;
        position: absolute;
        top: 0;
    }

    .slide-forward-enter-active,
    .slide-backward-enter-active {
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
        transform: translateX(150%);
    }

    .slide-forward-leave-to,
    .slide-backward-enter-active {
        transform: translateX(-150%);
    }

    .slide-forward-enter-to,
    .slide-backward-enter-to {
        opacity: 1;
        transform: translateX(0);
    }

}
</style>
