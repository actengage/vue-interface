<template>
    <span class="navigation-error fa-stack fa-md" :title="error">
        <i class="fa fa-stack-2x fa-certificate" />
        <i class="fa fa-stack-1x fa-exclamation fa-inverse" />
    </span>
</template>

<script>
export default {

    name: 'NavigationError',

    props: {

        error: {
            type: String,
            required: true
        }

    }

};
</script>

<style lang="scss">
@import './node_modules/bootstrap/scss/_functions.scss';
@import './node_modules/bootstrap/scss/_variables.scss';

.navigation-error {
    color: $danger;
}
</style>
