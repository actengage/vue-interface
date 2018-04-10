<template>

    <img class="card-img-top" :src="src" :alt="alt"/>

</template>

<script>


export default {

    name: 'card-img-top',

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

    }

}

</script>
