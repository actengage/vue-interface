<template>

    <div class="btn-group" :class="{'dropup': dropup, 'dropright': dropright, 'dropleft': dropleft}">

        <slot name="button">
            <template v-if="split">
                <a v-if="href" :href="href" :class="actionClasses" @click="onClick">
                    <slot name="label-wrapper"><i v-if="icon" :class="icon"></i> <slot name="label">{{label}}</slot></slot>
                </a>
                <button v-else :type="type" :class="actionClasses" @click="onClick">
                    <slot name="label-wrapper"><i v-if="icon" :class="icon"></i> <slot name="label">{{label}}</slot></slot>
                </button>
                <button type="button" aria-haspopup="true" :aria-expanded="isDropdownShowing" :id="id" :class="toggleClasses" @click.prevent="!isDropdownShowing ? showDropdown() : hideDropdown()" @blur="onBlur"></button>
            </template>
            <template v-else>
                <button aria-haspopup="true" :aria-expanded="isDropdownShowing" :type="type" :id="id" :class="toggleClasses" @click.prevent="!isDropdownShowing ? showDropdown() : hideDropdown()" @blur="onBlur">
                    <slot name="label-wrapper"><i v-if="icon" :class="icon"></i> <slot name="label">{{label}}</slot></slot>
                </button>
            </template>
        </slot>

        <slot name="dropdown-menu">
            <dropdown-menu
                :id="id"
                :items="items"
                :align="align"
                :show.sync="isDropdownShowing"
                @item:click="onItemClick"
                v-transform-position>
                <slot/>
            </dropdown-menu>
        </slot>
    </div>

</template>

<script>

import uuid from '@/Helpers/Uuid/Uuid';
import prefix from '@/Helpers/Prefix/Prefix';
import DropdownMenu from '../DropdownMenu';

export default {

    name: 'button-dropdown',

    components: {
        DropdownMenu
    },

    directives: {
        transformPosition: {
            update(el, binding, vnode) {
                let top = null, bottom = null, left = null, right = null, x = 0, y = 0;

                const offsetElement = getComputedStyle(vnode.context.$el.querySelector(
                    vnode.context.split ? '.btn:not(.dropdown-toggle)' : '.btn.dropdown-toggle'
                ));

                //if(vnode.context.split) {
                    if(vnode.context.split && vnode.context.align === 'left') {
                        x = offsetElement.width;
                    }
                    else {
                        right = 0;
                        left = null
                    }
                //}

                el.style.left = left === null ? 'auto' : left;
                el.style.right = right === null ? 'auto' : right;
                el.style.transform = `translate(${x}, ${y})`;
            }
        }
    },

    props: {

        /**
         * An array of dropdown items. If an key/value pair isn't defined, the
         * default value will be used. If no items are defined, then the slot
         * named "items" can be used to define the options with HTML.
         *
         * [{
         *      type: 'item', // String [item|header|divider]
         *      href: '#', // String
         *      label: 'Some label', // String
         *      onClick: (event) => {} // Function
         * }]
         *
         * @property Array
         */
        items: Array,

        /**
         * The `href` attribute on the action button (if a split button).
         *
         * @property String
         */
        href: String,

        /**
         * The button icon that appears before the label.
         *
         * @property String
         */
        icon: String,

        /**
         * The toggle button's label. If not defined as an attribute,
         * you can override with the component's slot (inner html).
         *
         * @property String
         */
        label: String,

        /**
         * The `id` attribute on the toggle button and aria label. If no `id` is
         * defined, then a UUID will be generated instead.
         *
         * @property String
         */
        id: {
            type: String,
            default: uuid
        },

        /**
         * The `type` attribute on the toggle button
         *
         * @property String
         */
        type: {
            type: String,
            default: 'button'
        },

        /**
         * The size class of the toggle button
         *
         * @property String
         */
        size: {
            type: String,
            default: 'md'
        },

        /**
         * The toggle button's variant class.
         *
         * @property String
         */
        variant: {
            type: String,
            default: 'primary'
        },

        /**
         * Display the dropdown menu aligned left or right
         *
         * @property String
         */
        align: {
            type: String,
            default: 'left',
            validate(value) {
                return ['left', 'right'].indexOf(value.toLowerCase()) !== -1;
            }
        },

        /**
         * Display the dropdown button with a split toggle button.
         *
         * @property Boolean
         */
        split: {
            type: Boolean,
            default: false
        },

        /**
         * Display as a dropup instead of a dropdown.
         *
         * @property Boolean
         */
        dropup: {
            type: Boolean,
            default: false
        },

        /**
         * Display as a dropright instead of a dropdown.
         *
         * @property Boolean
         */
        dropright: {
            type: Boolean,
            default: false
        },

        /**
         * Display as a dropleft instead of a dropdown.
         *
         * @property Boolean
         */
        dropleft: {
            type: Boolean,
            default: false
        }

    },

    methods: {

        /**
         * Show the dropdown menu
         *
         * @return void
         */
        showDropdown() {
            this.$emit('toggle', this.isDropdownShowing = true);
            this.$emit('show');
        },

        /**
         * Hide the dropdown menu
         *
         * @return void
         */
        hideDropdown() {
            this.$emit('toggle', this.isDropdownShowing = false);
            this.$emit('hide');
        },

        /**
         * A callback function for the `click` event for the action button
         *
         * @return void
         */
        onClick(event) {
            this.hideDropdown();
            this.$emit('click', event);
        },

        /**
         * A callback function for the `blur` event for the action button
         *
         * @return void
         */
        onBlur(event) {
            if(!this.$el.contains(event.relatedTarget)) {
                this.hideDropdown();
            }
        },

        /**
         * A callback function for the `item:click` event for the action button
         *
         * @return void
         */
        onItemClick(event, child) {
            this.$emit('item:click', event, child);
        }

    },

    computed: {

        actionClasses() {
            return [
                'btn',
                prefix(this.size, 'btn'),
                prefix(this.variant, 'btn')
            ].join(' ');
        },

        toggleClasses() {
            return [
                'btn',
                'dropdown-toggle',
                prefix(this.size, 'btn'),
                prefix(this.variant, 'btn'),
                (this.split ? 'dropdown-toggle-split' : ''),
            ].join(' ');
        }
    },

    data() {
        return {
            isDropdownShowing: false
        };
    }

}

</script>
