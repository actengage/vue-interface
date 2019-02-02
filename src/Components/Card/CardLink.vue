<template>
    <router-link :to="href" :class="mergeClasses(className, colorableClasses)" @click="onClick">
        <slot />
    </router-link>
</template>

<script>
import Card from './Card';
import MergeClasses from '../../Mixins/MergeClasses';

export default {

    name: 'CardLink',

    extends: Card,

    mixins: [
        MergeClasses
    ],

    props: {

        /**
         * The alt attribute
         *
         * @property String
         */
        alt: String,

        /**
         * The href attribute
         *
         * @property String
         */
        href: String,

        /**
         * The to attribute
         *
         * @property String
         */
        to: [Object, String]

    },

    methods: {

        onClick(event) {
            this.$emit('click', event);
        }

    }

};
</script>
