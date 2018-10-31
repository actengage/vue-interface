<template>
    <div class="modal-backdrop" :class="{'fade': fade, 'show': show}">
        <slot/>
    </div>
</template>

<script>
export default {

    name: 'modal-backdrop',

    props: {

        /**
         * Show the modal with a fade effect.
         *
         * @property Boolean
         */
        fade: {
            type: Boolean,
            default: true
        },

        /**
         * Is the modal showing.
         *
         * @property Boolean
         */
        show: {
            type: Boolean,
            default: true
        }

    }

};
</script>
