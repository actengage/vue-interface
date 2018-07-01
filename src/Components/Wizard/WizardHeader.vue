<template>
    <component :is="tag" class="wizard-header" :class="{'text-center': center}">
        <slot/>
    </component>
</template>

<script>
export default {

    name: 'wizard-header',

    props: {

        center: {
            type: Boolean,
            default: true
        },

        /**
         * The HTML tag
         *
         * @type {String}
         */
        tag: {
            type: String,
            default: 'h2'
        }

    }

}
</script>

<style lang="scss">
.card > .wizard {
    .wizard-header {
        margin-top: 1rem;
    }
}
</style>
