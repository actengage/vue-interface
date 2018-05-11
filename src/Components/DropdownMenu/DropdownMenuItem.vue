<template>
    <component
        :is="component"
        :href="href || (component === 'a' ? '#' : false)"
        class="dropdown-item"
        :class="{'active': active}"
        :type="component === 'button' ? 'button' : false"
        @click="onClick">
        <i v-if="icon" :class="icon"/>
        <slot>{{label}}</slot>
    </component>
</template>

<script>
import { isFunction } from 'lodash-es';
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
        label: String

    },

    computed: {

        component() {
            return this.element || (this.button ? 'button' : 'a');
        }

    },

    methods: {

        /**
         * A callback function for the `click` event.
         *
         * @property Object
         */
        onClick(event) {
            if(isFunction(this.$attrs.onClick)) {
                this.$attrs.onClick(event, this);
            }
            
            this.$emit('click', event, this);
        }

    }

}

</script>
