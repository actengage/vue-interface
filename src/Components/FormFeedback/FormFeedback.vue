<template>

    <div :class="{'invalid-feedback': invalid, 'valid-feedback': valid && !invalid}">
        <slot>{{label}}</slot>
    </div>

</template>

<script>

import Colorable from '@/Mixins/Colorable';

export default {

    name: 'form-feedback',

    mixins: [
        Colorable
    ],

    props: {

        /**
         * The value of label element. If no value, no label will appear.
         *
         * @property String
         */
        label: String,

        /**
         * Should the feedback marked as invalid
         *
         * @property String
         */
        invalid: Boolean,

        /**
         * Should the feedback marked as invalid
         *
         * @property String
         */
        valid: Boolean

    }

}

</script>
