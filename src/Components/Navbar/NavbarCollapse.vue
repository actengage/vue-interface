<template>
    <div class="navbar-collapse" :class="{'collapse': collapse}">
        <slot/>
    </div>
</template>

<script>
export default {

    name: 'navbar-collapse',

    props: {

        collapse: {
            type: Boolean,
            default: true
        }

    }

}
</script>
