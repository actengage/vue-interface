<template>

    <btn class="btn-file" :type="type" :variant="variant" :block="block" :size="size" :disabled="disabled" :active="active">
        <slot/>

        <input
            v-bind-events
            type="file"
            :class="controlClasses"
            :id="id"
            :width="width"
            :height="height"
            :required="required"
            :multiple="multiple"
            :readonly="readonly"
            v-on:change="$emit('change', $event.target.file)">
    </btn>

</template>

<script>

import Btn from '../Btn/Btn';
import FileField from '../FileField/FileField';

export default {

    name: 'btn-file',

    mixins: [
        Btn,
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

}

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
