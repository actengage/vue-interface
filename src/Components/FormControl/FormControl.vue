<template>
    <component
        v-bind="$attrs"
        :is="element"
        :aria-label="label || name || id"
        :aria-describedby="id || name"
        @input="$emit('input', $event.target.value)">
        <slot/>
    </component>
</div>

</template>

<script>
import Colorable from '../../Mixins/Colorable';
import FormControl from '../../Mixins/FormControl';

export default {

    name: 'form-control',

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
