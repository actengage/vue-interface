<template>
    <div class="modal-backdrop" :class="{'fade': fade, 'show': show}">
        <slot />
    </div>
</template>

<script>
export default {

    name: 'ModalBackdrop',

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

    },

    data() {
        return {
            isShowing: false
        };
    },

    mounted() {
        this.$nextTick(() => {
            this.isShowing = this.show;
        });
    }

};
</script>
