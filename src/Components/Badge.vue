<template>
    <a v-if="href" :href="href" class="badge" :class="classes">
        <slot>{{label}}</slot>
        <span class="sr-only" v-html="accessibility"/>
    </a>
    <span v-else class="badge" :class="classes">
        <slot>{{label}}</slot>
        <span class="sr-only" v-html="accessibility"/>
    </span>
</template>

<script>

import prefix from '@/Toolbox/Helpers/Prefix';

export default {

    props: {

        /**
         * The screen reader accessibility label.
         *
         * @property String
         */
        accessibility: String,

        /**
         * The badge color.
         *
         * @property String
         */
        color: {
            type: String,
            default: 'primary'
        },

        /**
         * If an href attribute is passed, the badge becomes an anchor.
         *
         * @property String
         */
        href: String,

        /**
         * The badge appear as pill shaped.
         *
         * @property String
         */
        pill: Boolean,

        /**
         * The badge label.
         *
         * @property String
         */
        label: [Number, String],

        /**
         * The badge appear as secondary in size to the parent element.
         *
         * @property String
         */
        secondary: {
            type: Boolean,
            default: false
        }

    },

    computed: {
        classes() {
            const classes = prefix({
                'pill': this.pill,
                'secondary': this.secondary
            }, 'badge');

            classes[prefix(this.color, 'badge')] = !!this.color;

            return classes;
        }
    }
}

</script>
