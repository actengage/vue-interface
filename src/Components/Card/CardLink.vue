<template>

    <a :href="href" class="card-link" :class="colorableClasses" @click="onClick">
        <slot/>
    </h6>

</template>

<script>
import Colorable from '@/Mixins/Colorable/Colorable';

export default {

    name: 'card-title',

    mixins: [
        Colorable
    ],

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
