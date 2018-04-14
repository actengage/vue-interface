<template>
    <component
        :is="component"
        :href="href"
        class="dropdown-item"
        :class="{'active': active}"
        :type="component === 'button' ? 'button' : false"
        @click="proxy(onClick, $event);onClicked($event);">
        <i v-if="icon" :class="icon"/>
        <slot>{{label}}</slot>
    </component>
</template>

<script>

import Proxy from '../../Mixins/Proxy/Proxy';

export default {

    mixins: [Proxy],

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
         * A callback function for the `click` event.
         *
         * @property Object
         */
        onClick: Function

    },

    computed: {

        component() {
            return this.element || (this.href ? 'a' : (this.button ? 'button' : 'div'));
        }

    },

    methods: {

        /**
         * A callback function for the `click` event.
         *
         * @property Object
         */
        onClicked(event) {
            this.$emit('click', event);
        }

    }

}

</script>
