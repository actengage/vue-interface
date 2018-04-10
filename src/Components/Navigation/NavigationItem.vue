<template>
    <component :is="component" class="nav-item" :class="classes">
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
        list: Boolean

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

}
</script>
