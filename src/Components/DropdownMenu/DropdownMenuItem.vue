<template>
    <a
        :href="href || '#'"
        class="dropdown-item"
        :class="{'active': active}"
        @click="proxy(onClick, $event);onClicked($event);">
        <i v-if="icon" :class="icon"/>
        <slot>{{label}}</slot>
    </a>
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
         * The `href` attribute.
         *
         * @property Object
         */
        href: String,

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
            if(!this.href) {
                event.preventDefault();
            }

            this.$emit('click', event);
        }
    }

}

</script>
