<template>
    <div id="navbarCollapse" class="navbar-collapse" :class="{'collapse': collapse}">
        <slot />
    </div>
</template>

<script>
export default {

    name: 'NavbarCollapse',

    props: {

        collapse: {
            type: Boolean,
            default: true
        }

    }

};
</script>
