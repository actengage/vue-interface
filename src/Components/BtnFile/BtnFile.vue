<template>
    <btn
        class="btn-file"
        :type="type"
        :variant="variant"
        :block="block"
        :size="size"
        :disabled="disabled"
        :active="active">
        <slot />
        <input
            v-bind-events
            v-bind="controlAttributes"
            :value="value"
            type="file"
            @input="$emit('change', multiple ? $event.target.files : $event.target.files[0])">
    </btn>
</template>

<script>
import Btn from '../Btn';
import FileField from '../FileField';

export default {

    name: 'BtnFile',

    components: {
        Btn
    },

    extends: Btn,

    mixins: [
        FileField
    ],

    model: {
        event: 'change'
    },

    props: {

        /**
         * The type attribute for the button. Not applied if an anchor
         *
         * @property String
         */
        type: {
            type: String,
            default: 'button'
        }

    }

};
</script>

<style lang="scss">
.btn-file {
    cursor: pointer;
    position: relative;

    input {
        z-index: 1;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}
</style>
