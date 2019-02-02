<template>
    <component
        :is="element"
        v-bind="$attrs"
        :aria-label="label || name || id"
        :aria-describedby="id || name"
        @input="$emit('input', $event.target.value)">
        <slot />
    </component>
</template>

<script>
import Colorable from '../../Mixins/Colorable';
import FormControl from '../../Mixins/FormControl';

export default {

    name: 'FormControl',

    mixins: [
        Colorable,
        FormControl
    ],

    props: {

        element: {
            type: String,
            required: true
        }

    }

};
</script>
