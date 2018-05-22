<template>

    <component
        :name="name"
        :id="id"
        :is="!select ? 'input' : 'select'"
        :type="!select ? type : false"
        :value="value"
        :pattern="pattern"
        :required="required"
        :readonly="readonly"
        :placeholder="placeholder"
        :disabled="disabled || readonly"
        :class="$mergeClasses(controlClasses, colorableClasses)"
        :aria-label="label"
        :aria-describedby="id"
        v-bind-events="bindEvents"
        v-on:input="updated"/>

</template>

<script>

import Colorable from '../../Mixins/Colorable/Colorable';
import FormControl from '../../Mixins/FormControl/FormControl';

export default {

    name: 'form-control',

    mixins: [
        Colorable,
        FormControl
    ],

    props: {

        /**
         * Is the element a select?
         *
         * @property String
         */
        select: Boolean,

        /**
         * The type attribute
         *
         * @property String
         */
        type: {
            type: String,
            default: 'text'
        }

    }

}

</script>
