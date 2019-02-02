<template>
    <div class="input-group-prepend">
        <input-group-text v-if="text">
            <slot />
        </input-group-text>
        <slot v-else />
    </div>
</template>

<script>
import InputGroupText from './InputGroupText';

export default {

    name: 'InputGroupPrepend',

    components: {
        InputGroupText
    },

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
