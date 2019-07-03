<template>
    <transition
        :mode="mode"
        :duration="duration"
        :enter-class="enterClass"
        :enter-to-class="enterToClass"
        :enter-active-class="enterActiveClassName"
        :leave-class="leaveClass"
        :leave-to-class="leaveToClass"
        :leave-active-class="leaveActiveClassName"
        @before-enter="(...args) => this.$emit('before-enter', ...args)"
        @enter="(...args) => this.$emit('enter', ...args)"
        @after-enter="(...args) => this.$emit('after-enter', ...args)"
        @before-leave="(...args) => this.$emit('before-leave', ...args)"
        @leave="(...args) => this.$emit('leave', ...args)"
        @after-leave="(...args) => this.$emit('after-leave', ...args)">
        <slot />
    </transition>
</template>

<script>
import camelCase from '../../Helpers/Functions/camelCase';

export default {

    props: {

        delay: [String, Number, Function],

        duration: [Object, String, Number],
        
        mode: String,

        enter: String,

        enterClass: String,

        leave: String,

        enterToClass: String,

        enterActiveClass: String,
        
        leaveClass: String,

        leaveToClass: String,

        leaveActiveClass: String,

        x: Boolean,

        y: Boolean,

        big: Boolean,

        up: Boolean,

        down: Boolean,

        left: Boolean,

        right: Boolean,

        animated: {
            type: Boolean,
            default: true
        },

        name: String,

        direction: {
            type: String,
            default() {
                return (
                    this.x && 'x' ||
                    this.y && 'y' ||
                    this.up && 'up' ||
                    this.down && 'down' ||
                    this.left && 'left' ||
                    this.right && 'right'
                ) || undefined;
            },
            validate(value) {
                return ['up', 'down', 'left', 'right'].indexOf(value.toLowerCase()) !== -1;
            }
        },

        directionEffects: {
            type: Array,
            default: () => ([
                'bounce',
                'fade',
                'flip',
                'lightspeed',
                'rotate',
                'roll',
                'slide',
                'zoom'
            ])
        },

        special: {
            type: Boolean,
            default() {
                return this.name && this.directionEffects.indexOf(this.name.toLowerCase()) === -1;
            }
        }

    },

    computed: {

        enterActiveClassName() {
            return this.enter && `${this.enter} ${this.animated && 'animated'}` || 
                this.activeClass('in', this.enterActiveClass);
        },

        leaveActiveClassName() {
            return this.leave && `${this.leave} ${this.animated && 'animated'}` || 
                this.activeClass('out', this.leaveActiveClass);
        }

    },

    methods: {

        activeClass(key, ...classes) {
            return [
                camelCase([
                    this.name,
                    !this.special && key,
                    this.direction,
                    this.big && 'big'
                ].filter(value => !!value).join(' '))
            ]
                .concat([
                    this.animated && 'animated'
                ])
                .concat(classes)
                .join(' ');
        }        

    },

    updated() {
        const delay = this.delay instanceof Function ? this.delay() : this.delay;

        if(delay && this.$slots.default && this.$slots.default.length) {
            const el = this.$slots.default[0].elm;
            
            if(el.style.animatedDelay !== delay) {
                el.style.animationDelay = delay;
            }
        }
    }

};
</script>

<style lang="scss">
@import "~animate.css";
</style>