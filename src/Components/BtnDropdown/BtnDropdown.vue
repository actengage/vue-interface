<template>
    <btn-group v-if="split">
        <template v-if="!dropleft">
            <a v-if="href" :href="href" :class="actionClasses" @click="onClick">
                <slot name="label">
                    <icon v-if="icon" :icon="icon" /> {{ label }}
                </slot>
            </a>
            <button v-else :type="type" :class="actionClasses" @click="onClick">
                <slot name="label-wrapper">
                    <icon v-if="icon" :icon="icon" />
                    <slot name="label">
                        {{ label }}
                    </slot>
                </slot>
            </button>
        </template>
        <btn-group :class="{'dropup': dropup, 'dropright': dropright, 'dropleft': dropleft}">
            <button
                :id="$attrs.id"
                type="button"
                aria-haspopup="true"
                :aria-expanded="isDropdownShowing"
                :class="toggleClasses"
                @click.prevent="!isDropdownShowing ? show() : hide()"
                @blur="onBlur" />
            <dropdown-menu
                :id="$attrs.id"
                :align="align"
                :show.sync="isDropdownShowing"
                @click="onMenuClick"
                @item:click="onItemClick">
                <slot />
            </dropdown-menu>
        </btn-group>
        <template v-if="dropleft">
            <a v-if="href" :href="href" :class="actionClasses" @click="onClick">
                <slot name="label">
                    <icon v-if="icon" :icon="icon" /> {{ label }}
                </slot>
            </a>
            <button v-else :type="type" :class="actionClasses" @click="onClick">
                <slot name="label-wrapper">
                    <icon v-if="icon" :icon="icon" />
                    <slot name="label">
                        {{ label }}
                    </slot>
                </slot>
            </button>
        </template>
    </btn-group>

    <btn-group v-else :class="{'dropup': dropup, 'dropright': dropright, 'dropleft': dropleft}" @click="onClick">
        <button
            :id="$attrs.id"
            aria-haspopup="true"
            :aria-expanded="isDropdownShowing"
            :type="type"
            :class="toggleClasses"
            @click.prevent="!isDropdownShowing ? show() : hide()"
            @blur="onBlur">
            <slot name="label">
                <icon v-if="icon" :icon="icon" /> {{ label }}
            </slot>
        </button>

        <dropdown-menu
            :id="$attrs.id"
            :align="align"
            :show.sync="isDropdownShowing"
            @click="onMenuClick"
            @item:click="onItemClick">
            <slot />
        </dropdown-menu>
    </btn-group>
</template>

<script>
import Btn from '../Btn';
import Popper from 'popper.js';
import BtnGroup from '../BtnGroup';
import uuid from '../../Helpers/Uuid';
import prefix from '../../Helpers/Prefix';
import DropdownMenu from '../DropdownMenu';
import { each } from '../../Helpers/Functions';

const TAB_KEYCODE = 9;
const LEFT_ARROW_KEYCODE = 37;
const RIGHT_ARROW_KEYCODE = 39;
const UP_ARROW_KEYCODE = 38;
const DOWN_ARROW_KEYCODE = 40;

let ignoreBlurEvent = false;

export default {

    name: 'BtnDropdown',

    components: {
        BtnGroup,
        DropdownMenu
    },

    extends: Btn,

    props: {

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

    data() {
        return {
            isDropdownShowing: false
        };
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
                (this.split ? 'dropdown-toggle-split' : '')
            ].join(' ');
        }
    },

    mounted() {
        each(this.$el.querySelectorAll('[type=submit], input, select, textarea, [tabindex]:not([tabindex="-1"]'), el => {
            if(el && el.addEventListener) {
                el.addEventListener('blur', event => {
                    if(!ignoreBlurEvent) {
                        this.focus();
                    }

                    ignoreBlurEvent = false;
                });

                el.addEventListener('focus', event => {
                    ignoreBlurEvent = false;
                });

                el.addEventListener('keydown', event => {
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
                });

                el.addEventListener('mousedown', event => {
                    ignoreBlurEvent = true;
                });
            }
        });
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
            this.$emit('toggle', this.isDropdownShowing = true);
            this.$emit('show');
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

    }

};
</script>
