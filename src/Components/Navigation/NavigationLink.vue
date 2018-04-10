<template>
    <a :href="href" :class="classes">
        <slot />
    </a>
</template>

<script>
export default {

    name: 'navigation-link',

    props: {

        /**
         * Is the navigation item active
         *
         * @prop {Boolean}
         */
        active: Boolean,

        /**
         * Is the navigation item disabled
         *
         * @prop {Boolean}
         */
        disabled: Boolean,

        /**
         * The href attribute
         *
         * @prop {String}
         */
        href: String

        /**
         * Add the nav-item class to the link
         *
         * @prop {Boolean}
        item: {
            type: Boolean,
            default: true
        }
        */

    },

    computed: {

        classes() {
            this.$nextTick(() => {
                if(!this.$attrs.item) {
                    this.item = !this.$parent.$el.classList.contains('nav-item');
                }
            });

            return {
                'nav-link': this.href,
                'nav-item': this.item,
                'active': this.active,
                'disabled': this.disabled
            }

        }

    },

    data() {
        return {
            item: !!this.$attrs.item
        }
    }

}
</script>
