<template>

    <div class="input-group-append">
        <input-group-text v-if="text">
            <slot/>
        </input-group-text>
        <slot v-else/>
    </div>

</template>

<script>

export default {

    name: 'input-group-append',

    props: {

        /**
         * The type attribute
         *
         * @property String
         */
        text: Boolean

    }

};
</script>
