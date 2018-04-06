<template>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="onClick">
        <span aria-hidden="true">&times;</span>
    </button>
</template>

<script>
export default {

    name: 'alert-close',

    methods: {

        onClick(event) {
            this.$emit('click', event);
        }
        
    }

}
</script>
