<template>
    <h5 class="dropdown-header">
        <slot>{{header}}</slot>
    </h5>
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
        header: String

    }

};
</script>
