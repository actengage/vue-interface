<template>


    <btn-group v-if="split" @click="onClick">
        <template v-if="!dropleft">
            <a v-if="href" :href="href" :class="actionClasses">
                <slot name="label"><i v-if="icon" :class="icon"></i> {{label}}</slot>
            </a>
            <button v-else :type="type" :class="actionClasses">
                <slot name="label-wrapper"><i v-if="icon" :class="icon"></i> <slot name="label">{{label}}</slot></slot>
            </button>
        </template>
        <btn-group :class="{'dropup': dropup, 'dropright': dropright, 'dropleft': dropleft}">
            <button type="button" aria-haspopup="true" :aria-expanded="isDropdownShowing" :id="id" :class="toggleClasses" @click.prevent="!isDropdownShowing ? show() : hide()" @blur="onBlur"></button>
            <dropdown-menu
                :id="id"
                :items="items"
                :align="align"
                :show.sync="isDropdownShowing"
                @click="onMenuClick"
                @item:click="onItemClick">
                <slot/>
            </dropdown-menu>
        </btn-group>
        <template v-if="dropleft">
            <a v-if="href" :href="href" :class="actionClasses">
                <slot name="label"><i v-if="icon" :class="icon"></i> {{label}}</slot>
            </a>
            <button v-else :type="type" :class="actionClasses">
                <slot name="label-wrapper"><i v-if="icon" :class="icon"></i> <slot name="label">{{label}}</slot></slot>
            </button>
        </template>
    </btn-group>

    <btn-group v-else :class="{'dropup': dropup, 'dropright': dropright, 'dropleft': dropleft}" @click="onClick">
        <button aria-haspopup="true" :aria-expanded="isDropdownShowing" :type="type" :id="id" :class="toggleClasses" @click.prevent="!isDropdownShowing ? show() : hide()" @blur="onBlur">
            <slot name="label"><i v-if="icon" :class="icon"></i> {{label}}</slot>
        </button>

        <dropdown-menu
            :id="id"
            :items="items"
            :align="align"
            :show.sync="isDropdownShowing"
            @click="onMenuClick"
            @item:click="onItemClick">
            <slot/>
        </dropdown-menu>
    </btn-group>

</template>

<script>

import Btn from '../Btn';
import { each } from 'lodash';
import uuid from '../../Helpers/Uuid/Uuid';
import prefix from '../../Helpers/Prefix/Prefix';
import DropdownMenu from '../DropdownMenu';
import Popper from 'popper.js';

const TAB_KEYCODE = 9;
const LEFT_ARROW_KEYCODE = 37;
const RIGHT_ARROW_KEYCODE = 39;
const UP_ARROW_KEYCODE = 38;
const DOWN_ARROW_KEYCODE = 40;

let ignoreBlurEvent = false;

export default {

    name: 'btn-dropdown',

    extends: Btn,

    components: {
        DropdownMenu
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
         * The button icon that appears before the label.
         *
         * @property String
         */
        autoclose: Boolean,

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
         * The button type attribute.
         *
         * @property String
         */
        type: {
            type: String,
            default: 'button'
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
         * Focus on the the dropdown toggle button
         *
         * @return void
         */
        focus() {
            this.$el.querySelector('.dropdown-toggle').focus();
        },

        /**
         * Focus on the the dropdown toggle button
         *
         * @return void
         */
        queryFocusable() {
            return this.$el.querySelector('.dropdown-menu').querySelectorAll('label, input, select, textarea, [tabindex]:not([tabindex="-1"])');
        },

        /**
         * Method to check if the given element is focusable.
         *
         * @return void
         */
        isFocusable(element) {
            const nodes = this.queryFocusable();

            for(let i in nodes) {
                if(element === nodes[i]) {
                    return true;
                }
            }

            return false;
        },

        /**
         * Toggle the dropdown menu
         *
         * @return void
         */
        toggle() {
            !this.isDropdownShowing ? this.show() : this.hide();
        },

        /**
         * Show the dropdown menu
         *
         * @return void
         */
        show() {
            this.isDropdownShowing = true;

            this.$nextTick(() => {
                let side = 'bottom';

                if(this.dropup) {
                    side = 'top'
                }
                else if(this.dropleft) {
                    side = 'left'
                }
                else if(this.dropright) {
                    side = 'right';
                }

                const menu = this.$el.querySelector('.dropdown-menu');
                const toggle = this.$el.querySelector('.dropdown-toggle');
                const position = [side, this.align === 'left' ? 'start' : 'end'];

                new Popper(toggle, menu, {
                    placement: position.join('-')
                });

                if(this.queryFocusable().item(0)) {
                    this.$el.querySelector('input, select, textarea').focus();
                }

                this.$emit('show');
            });
        },

        /**
         * Hide the dropdown menu
         *
         * @return void
         */
        hide() {
            this.$emit('toggle', this.isDropdownShowing = false);
            this.$emit('hide');
        },

        /**
         * A callback function for the `click` event for the action button
         *
         * @return void
         */
        onClick(event) {
            console.log('click');

            this.hide();
            this.$emit('click', event);
        },

        /**
         * A callback function for the `blur` event for the action button
         *
         * @return void
         */
        onBlur(event) {
            if(!this.$el.contains(event.relatedTarget)) {
                this.hide();
            }
        },

        /**
         * A callback function for the `item:click` event for the action button
         *
         * @return void
         */
        onMenuClick(event, item) {
            if(event.target === this.$el.querySelector('.dropdown-menu')) {
                this.focus();
            }
        },

        /**
         * A callback function for the `item:click` event for the action button
         *
         * @return void
         */
        onItemClick(event, item) {
            if(!this.isFocusable(event.target)) {
                this.hide();
            }

            this.$emit('item:click', event, item);
        }

    },

    computed: {

        variantClassPrefix() {
            return 'btn' + (this.outline ? '-outline' : '');
        },

        sizeableClassPrefix() {
            return 'btn';
        },

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
                this.variantClass,
                this.sizeableClass,
                this.active ? 'active' : '',
                this.block ? 'btn-block' : '',
                (this.split ? 'dropdown-toggle-split' : ''),
            ].join(' ');
        }
    },

    data() {
        return {
            isDropdownShowing: false
        };
    },

    mounted() {
        each(this.$el.querySelectorAll('[type=submit], input, select, textarea, [tabindex]:not([tabindex="-1"]'), el => {
            const keydown = event => {
                const ignore = [
                    LEFT_ARROW_KEYCODE,
                    RIGHT_ARROW_KEYCODE,
                    UP_ARROW_KEYCODE,
                    DOWN_ARROW_KEYCODE,
                    TAB_KEYCODE
                ];

                if(ignore.indexOf(event.keyCode) !== -1) {
                    ignoreBlurEvent = true;
                }
            };

            const blur = event => {
                if(!ignoreBlurEvent) {
                    this.focus();
                }

                ignoreBlurEvent = false;
            };

            const focus = event => {
                ignoreBlurEvent = false;
            };

            const mousedown = event => {
                ignoreBlurEvent = true;
            };

            el.addEventListener('blur', blur);
            el.addEventListener('focus', focus);
            el.addEventListener('keydown', keydown);
            el.addEventListener('mousedown', mousedown);
        });
    }

}

</script>