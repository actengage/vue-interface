<template>
    <li class="breadcrumb-item" :class="{'active': active}" :aria-current="active ? 'page' : false">
        <a v-if="!active && href" :href="href">
            <slot>{{label}}</slot>
        </a>
        <router-link v-else-if="!active && to" :to="to">
            <slot>{{label}}</slot>
        </router-link>
        <template v-else>
            <slot>{{label}}</slot>
        </template>
    </li>
</template>

<script>
export default {

    name: 'breadcrumb-item',

    props: {

        /**
         * Is the item active?
         *
         * @prop {Boolean}
         */
        active: Boolean,

        /**
         * An href attribute
         *
         * @prop {String}
         */
        href: String,

        /**
         * An breadcrumb label
         *
         * @prop {String}
         */
        label: String,

        /**
         * The to attribute which is passed to the <router-link> component.
         *
         * @prop {Object}
         */
        to: [String, Object]

    }

};
</script>
