<template>
    <component :is="tag" class="popover-header">
        <slot />
    </component>
</template>

<script>
export default {

    name: 'PopoverHeader',

    props: {

        /**
         * The component HTML element
         *
         * @type {String}
         */
        tag: {
            type: String,
            default: 'h3'
        }

    }

};
</script>
