<template>
    <component :is="component" :href="href" :to="to" :class="classes">
        <slot />
    </component>
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
        href: String,

        /**
         * The component HTML tag
         *
         * @prop {String}
         */
        tag: String,

        /**
         * The to attribute, will be passed to router-link.
         *
         * @prop {String}
         */
        to: [Object, String],

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
            return this.tag || (this.to ? 'router-link' : 'a');
        },

        classes() {
            this.$nextTick(() => {
                if(!this.isItem) {
                    this.isItem = !this.$parent.$el.classList.contains('nav-item');
                }
            });

            return {
                'nav-link': this.href,
                'nav-item': this.item,
                'active': this.active,
                'disabled': this.disabled
            }
        }

    }

}
</script>
