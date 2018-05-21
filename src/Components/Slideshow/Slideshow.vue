<template>
    <div class="slideshow" :class="{'slideshow-content-center': center}" :style="{height: height, width: width}">
        <div class="slideshow-content">
            <keep-alive>
                <transition :name="`slide-${direction}`" @enter="onSlideEnter" @leave="onSlideLeave">
                    <slideshow-slide :vnode="component"/>
                </transition>
            </keep-alive>
        </div>
        <slot name="controls">
            <slideshow-controls v-if="controls" :slides="slides" :active="currentSlide" @click="onClickControl" />
        </slot>
    </div>
</template>

<script>
import { map } from 'lodash-es';
import { first } from 'lodash-es';
import { filter } from 'lodash-es';
import { extend } from 'lodash-es';
import { findIndex } from 'lodash-es';
import { isFunction } from 'lodash-es';
import unit from '../../Helpers/Unit';
import transition from '../../Helpers/Transition';
import SlideshowSlide from './SlideshowSlide';
import SlideshowControls from './SlideshowControls';

const RESIZE_MODES = {
    auto(el) {
        if(el.clientHeight) {
            this.height = el.style.height = unit(el.clientHeight);
        }

        if(el.clientWidth) {
            this.width = el.style.width = unit(el.clientWidth);
        }
    },
    initial(el) {
        if(!this.height && this.$el.clientHeight) {
            this.height = unit(this.$el.clientHeight);
        }

        el.style.height = this.height;

        if(!this.width && this.$el.clientWidth) {
            this.width = unit(this.$el.clientWidth);
        }

        el.style.width = this.width;
    }
};

export default {

    name: 'slideshow',

    components: {
        SlideshowControls,
        SlideshowSlide
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
         * Center the content within the popover.
         *
         * @type Boolean
         */
        center: {
            type: Boolean,
            default: true
        },

        /**
         * Show the slideshow controls to change the slide.
         *
         * @type Boolean
         */
        controls: Boolean,

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
            this.currentSlide = value;
        },

        currentSlide(value, oldValue) {
            this.direction = this.findSlideIndex(oldValue) > this.findSlideIndex(value) ? 'backward' : 'forward';
        },

        height(value, oldValue) {
            //this.$emit('resize', this, value);
        }

    },

    methods: {

        findSlideByKey(key) {
            return first(filter(this.slides, (vnode, i) => {
                return vnode.data ? vnode.data.key === key : i === key;
            }));
        },

        findSlideByIndex(index) {
            return this.slides[index] || null;
        },

        findSlideIndex(key) {
            return findIndex(this.slides, (vnode, i) => {
                return vnode.data ? vnode.data.key === key : i === key;
            });
        },

        resize(el) {
            if(isFunction(this.resizeMode)) {
                this.resizeMode.call(this, el);
            }
            else if(isFunction(RESIZE_MODES[this.resizeMode])) {
                RESIZE_MODES[this.resizeMode].call(this, el);
            }
        },

        onClickControl(event, vnode) {
            this.currentSlide = vnode.data ? vnode.data.key : vnode.key;
        },

        onSlideEnter(el, done) {
            this.resize(el);

            transition(el).then(delay => {
                this.$nextTick(done);
            });
        },

        onSlideLeave(el, done) {
            this.resize(el);

            transition(el).then(delay => {
                this.$nextTick(done);
            });
        }

    },

    computed: {

        slides() {
            return map(filter(this.$slots.default, (vnode, i) => {
                return !!vnode.tag;
            }), (vnode, i) => {
                if(!vnode.key) {
                    vnode.data = extend(vnode.data, {
                        key: vnode.key = i
                    });
                }

                return vnode;
            });
        },

        component() {
            return this.findSlideByKey(this.currentSlide) || this.findSlideByIndex(this.currentSlide) || first(this.slides);
        }

    },

    mounted() {
        this.$el.parentElement.style.overflow = 'hidden';
        this.resize(this.$el);
    },

    updated() {
    },

    data() {
        return {
            height: null,
            width: null,
            currentSlide: this.active,
            direction: 'forward'
        }
    }

};
</script>

<style lang="scss">
.slideshow {
    height: auto;
    position: relative;
    transition: all .5s ease;

    &.slideshow-content-center {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .slideshow-content {
        overflow-y: auto;
    }

    /*
    display: flex;
    justify-content: center;
    align-items: center;
    */

    .slideshow-controls {
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
    }

    .slide-forward-enter-active,
    .slide-backward-enter-active {
        position: absolute;
        top: 0;
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
        transform: translateX(100%);
    }

    .slide-forward-leave-to,
    .slide-backward-enter-active {
        transform: translateX(-100%);
    }

    .slide-forward-enter-to,
    .slide-backward-enter-to {
        opacity: 1;
        transform: translateX(0);
    }



    /*
    .slide-fade-forward-leave-active,
    .slide-fade-forward-leave-to {
        z-index: 1;
        transform: translateX(-100%);
    }

    .slide-fade-forward-enter-active,
    .slide-fade-backward-enter-active {
        z-index: 2;
        transition: all 2s ease-out;
    }
    .slide-fade-forward-leave-active,
    .slide-fade-backward-leave-active {
        z-index: 1;
        transition: all 2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-forward-enter,
    .slide-fade-forward-leave-to,
    .slide-fade-backward-enter,
    .slide-fade-backward-leave-to {
        position: absolute !important;
        top: 0;
        width: 100%;
        opacity: 0;
    }

    .slide-fade-forward-enter,
    .slide-fade-forward-leave-to {
        right: 0;
    }

    .slide-fade-forward-enter,
    .slide-fade-forward-leave-to {
        transform: translateX(100%);
    }

    .slide-fade-backward-enter,
    .slide-fade-backward-leave-to {
        transform: translateX(100%);
    }
    */
}
</style>
