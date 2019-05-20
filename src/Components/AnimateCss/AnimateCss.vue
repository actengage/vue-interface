<template>
    <transition
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
        <slot/>
    </transition>
</template>

<script>
import camelCase from '../../Helpers/Functions/camelCase';

export default {

    props: {

        enterClass: String,

        enterToClass: String,

        enterActiveClass: String,
        
        leaveClass: String,

        leaveToClass: String,

        leaveActiveClass: String,

        animated: {
            type: Boolean,
            default: true
        },

        big: Boolean,

        name: {
            type: [Array, String],
            required: true
        },

        up: Boolean,

        down: Boolean,

        left: Boolean,

        right: Boolean,

        special: Boolean,

        direction: {
            type: String,
            default() {
                return (
                    this.up && 'up' ||
                    this.down && 'down' ||
                    this.left && 'left' ||
                    this.right && 'right'
                ) || undefined;
            },
            validate(value) {
                return ['up', 'down', 'left', 'right'].indexOf(value.toLowerCase()) !== -1;
            }
        }

    },

    computed: {

        enterActiveClassName() {
            const names = this.name instanceof Array && this.name || [this.name];
            
            return names
                .map(name => {
                    return camelCase([
                        name,
                        !this.special && 'in',
                        this.direction,
                        this.big && 'big'
                    ].filter(value => !!value).join(' '))
                })
                .concat([
                    this.animated && 'animated',
                    this.enterActiveClass
                ])
                .join(' ');
        },

        leaveActiveClassName() {
            const names = this.name instanceof Array && this.name || [this.name];
            
            return names
                .map(name => {
                    return camelCase([
                        name,
                        !this.special && 'out',
                        this.direction,
                        this.big && 'big'
                    ].filter(value => !!value).join(' '))
                })
                .concat([
                    this.animated && 'animated',
                    this.leaveActiveClass
                ])
                .join(' ');
        }

    }

};
</script>

<style lang="scss">
@import "~animate.css";
</style>