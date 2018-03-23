<template>
    <h5 class="dropdown-header" v-html="label"><slot></slot></h5>
</template>

<script>

export default {

    name: 'dropdown-menu-header',

    props: {

        /**
         * The value of the header
         *
         * @property Object
         */
        label: String

    }

}

</script>
