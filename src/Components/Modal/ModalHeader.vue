<template>
    <div class="modal-header">
        <modal-title><slot/></modal-title>

        <button v-if="closeable" type="button" class="close" aria-label="ariaLabel" @click="$emit('close')">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
</template>

<script>
export default {

    name: 'modal-header',

    props: {

        ariaLabel: {
            type: String,
            default: 'Close'
        },

        closeable: {
            type: Boolean,
            default: true
        }

    }

}
</script>
