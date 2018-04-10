<template>

    <img class="card-img-bottom" :src="src" :alt="alt"/>

</template>

<script>


export default {

    name: 'card-img-bottom',

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
