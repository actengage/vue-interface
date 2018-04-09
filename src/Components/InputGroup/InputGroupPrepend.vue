<template>

    <div class="input-group-prepend">
        <input-group-text v-if="text">
            <slot/>
        </input-group-text>
        <slot v-else/>
    </div>

</template>

<script>

export default {

    name: 'input-group-prepend',

    props: {

        /**
         * The type attribute
         *
         * @property String
         */
        text: Boolean

    }

}

</script>
