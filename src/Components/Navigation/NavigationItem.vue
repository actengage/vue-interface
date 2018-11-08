<template>
    <component :is="component" :class="classes" @click="$emit('click', $event)">
        <slot />
    </component>
</template>

<script>
import NavigationLink from './NavigationLink';

export default {

    name: 'navigation-item',

    extends: NavigationLink,

    props: {

        /**
         * The HTML element
         *
         * @prop {String}
         */
        element: String,

        /**
         * Is the component a list element
         *
         * @prop {Boolean}
         */
        list: Boolean,

        /**
         * Add the nav-item class to the link
         *
         * @prop {Boolean}
         */
        item: {
            type: Boolean,
            default: true
        }

    },

    computed: {

        component() {
            if(this.element) {
                return this.element;
            }
            else if(this.href) {
                return 'a';
            }
            else if(this.list) {
                return 'li';
            }

            return 'div';
        }

    }

};
</script>
