<template>

    <span class="input-group-text" :id="id">
        <slot>{{ text }}</slot>
    </span>

</template>

<script>

export default {

    name: 'input-group-text',

    props: {

        /**
         * The id attribute
         *
         * @property String
         */
        id: String,

        /**
         * The type attribute
         *
         * @property String
         */
        text: [Array, Number, String]

    }

}

</script>
