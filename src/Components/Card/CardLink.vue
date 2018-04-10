<template>

    <a :href="href" :class="$mergeClasses(className, colorableClasses)" @click="onClick">
        <slot/>
    </h6>

</template>

<script>
import Card from './Card';

export default {

    name: 'card-title',

    extends: Card,

    props: {

        /**
         * The alt attribute
         *
         * @property String
         */
        alt: String,

        /**
         * The src attribute
         *
         * @property String
         */
        href: String

    },

    methods: {

        onClick(event) {
            this.$emit('click', event, this);
        }

    }

}

</script>
