<template>

    <img :class="className" :src="src" :alt="alt"/>

</template>

<script>


export default {

    name: 'card-img',

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
        src: String

    },

    computed: {

        className() {
            return this.$options.name
        }

    }

}

</script>
