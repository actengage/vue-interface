<template>

    <component :is="element" class="card-header"><slot/></component>

</template>

<script>

export default {

    name: 'card-header',

    props: {

        /**
         * The alt attribute
         *
         * @property String
         */
        element: {
            type: String,
            default: 'div'
        }

    }

}

</script>
