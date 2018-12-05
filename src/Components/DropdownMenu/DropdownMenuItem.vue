<template>
    <component
        :is="component"
        :to="to"
        :href="href || (component === 'a' ? '#' : false)"
        :type="component === 'button' ? 'button' : false"
        :class="{'active': active}"
        class="dropdown-item"
        @click="onClick">
        <i v-if="icon" :class="icon"/>
        <slot>{{label}}</slot>
    </component>
</template>

<script>
import Proxy from '../../Mixins/Proxy/Proxy';

export default {

    name: 'dropdown-menu-item',

    mixins: [
        Proxy
    ],

    props: {

        /**
         * Is the menu item active.
         *
         * @property Object
         */
        active: Boolean,

        /**
         * Is the menu item a button
         *
         * @property Object
         */
        button: Boolean,

        /**
         * The `element` attribute.
         *
         * @property Object
         */
        element: String,

        /**
         * The `href` attribute.
         *
         * @property Object
         */
        href: String,

        /**
         * The icon of the dropdown menu item.
         *
         * @property Object
         */
        icon: String,

        /**
         * The label of the dropdown menu item.
         *
         * @property Object
         */
        label: String,

        /**
         * If an to is passed, button is an router-link element
         *
         * @property Boolean
         */
        to: [Object, String]

    },

    computed: {

        component() {
            return this.element || (this.to ? 'router-link' : (this.button ? 'button' : 'a'));
        }

    },

    methods: {

        /**
         * A callback function for the `click` event.
         *
         * @property Object
         */
        onClick(event) {
            this.$emit('click', event);
        }

    }

};
</script>
