<template>
    <div class="input-list">
        <div v-for="(value, i) in items" :key="i" v-bind-events>
            <slot :index="i" />
        </div>
    </div>
</template>

<script>
import { get, isNull, isEmpty, isUndefined, isArray } from '../../Helpers/Functions';

const TAB = 9;

export default {

    directives: {
        
        bindEvents: {

            inserted(el, binding, vnode) {
                const children = Array.from(vnode.elm.children);

                children.forEach((child) => {
                    child.querySelectorAll('input, textarea, select')
                        .forEach(input => {
                            vnode.context.bindEvents(input, el);
                        });
                });
            }

        }

    },

    props: {

        total: {
            type: Number,
            default: 1
        },

        validate: {
            type: Function,
            default(el, parent) {
                const nodes = parent.querySelectorAll('input, textarea, select');

                return Array.from(nodes).reduce((carry, input) => {
                    return !input.value ? false : carry;
                }, true);
            }
        },

        validateEmpty: {
            type: Function,
            default(el, parent) {
                const nodes = Array.from(parent.querySelectorAll('input, textarea, select'));
                
                // If one item left in the list, it should not be removed.
                if(parent.parentElement.children.length === 1) {
                    return false;
                } 
                
                return nodes.reduce((carry, input) => {
                    return input.value ? false : carry;
                }, true);
            }
        }

    },

    data() {
        const items = [];

        for(let i = 0; i < this.total; i++) {
            items.push(i.toString());
        };

        return {
            items
        };
    },

    methods: {

        indexOf(el) {
            return [...el.parentElement.children].indexOf(el);
        },

        isLastChild(el) {
            return this.indexOf(el) === el.parentElement.children.length - 1;
        },

        isFirstChild(el) {
            return this.indexOf(el) === 0;
        },

        bindEvents(input, parent) {
            this.bindBlurEvent(input, parent);
            this.bindKeydownEvent(input, parent);
        },

        bindBlurEvent(input, parent) {
            input.addEventListener('blur', e => {
                const i = this.indexOf(parent);

                if(!this.isLastChild(parent) && this.validateEmpty(input, parent)) {
                    this.items.splice(i, 1);
                    this.$emit('remove', parent, i);
                }
            });
        },

        bindKeydownEvent(input, parent) {
            input.addEventListener('keydown', e => {
                const i = this.indexOf(parent);
                const nodes = Array.from(parent.querySelectorAll('input, select, textarea'));

                // If the keycode is not a tab, or the shift key is held
                // then ignore the event.
                if(e.shiftKey || e.keyCode !== TAB) {
                    return false;
                }

                if(this.isLastChild(parent) && this.validate(input, parent)) {
                    if(this.items.indexOf(i + 1) === -1) {
                        this.items.push(this.items.length.toString());
                    }
                }
            });
        },

        add(input, parent) {
            return new Promise((resolve, reject) => {
                const i = this.indexOf(parent);

                this.$nextTick(() => {
                    this.$emit('add', parent.nextSiblingElement, i + 1);
                    this.$nextTick(() => resolve(parent.nextSibling));
                });
            });
        }

    }

};
</script>