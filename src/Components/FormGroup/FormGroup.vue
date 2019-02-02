<template>
    <div :class="{'form-group': !!group}">
        <slot />
    </div>
</template>

<script>
export default {

    name: 'FormGroup',

    props: {

        group: {
            type: Boolean,
            default: true
        }

    }

};
</script>

<style lang="scss">
.form-group {
    &, .form-group-inner {
        position: relative;
    }

    .activity-indicator {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate(-1rem, -50%);
        transition: all .25s ease-in;
    }
}
</style>
