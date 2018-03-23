<template>
    <a :href="href" class="dropdown-item" :class="{'active': active}" @click="proxy(onClick, $event);onClicked($event);">
        <i v-if="icon" :class="icon"/> <slot><span v-html="label"/></slot>
    </a>
</template>

<script>

import Proxy from '@/Toolbox/Mixins/Proxy';

export default {

    mixins: [Proxy],

    props: {

        /**
         * Is the menu item active.
         *
         * @property Object
         */
        active: {
            type: Boolean,
            default: false
        },

        /**
         * The `href` attribute.
         *
         * @property Object
         */
        href: {
            type: String,
            default: '#'
        },

        /**
         * The label of the dropdown menu item.
         *
         * @property Object
         */
        label: String,

        /**
         * The icon of the dropdown menu item.
         *
         * @property Object
         */
        icon: String,

        /**
         * A callback function for the `click` event.
         *
         * @property Object
         */
        onClick: Function

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
