<template>
    <component
        v-model="testValue"
        :is="element"
        :aria-label="label || name || id"
        :aria-describedby="id || name"
        @input="$emit('input', $event.target.value)"
        @blur="$el.classList.remove('has-focus')"
        @focus="$el.classList.add('has-focus')"
        v-bind="$attrs">
        <slot/>
    </component>
</div>

</template>

<script>
import Colorable from '../../Mixins/Colorable';
import FormControl from '../../Mixins/FormControl';
// import { extend, omitBy, isNull, isUndefined } from '../../Helpers/Functions';

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

    },

    watch: {

        value(value) {
            const field = this.getInputField();

            if(field) {
                if(value === '' || value === undefined) {
                    field.classList.add('is-empty');
                }
                else {
                    field.classList.remove('is-empty');
                }
            }
        }

    },

    computed: {

        testValue() {
            return this.value;
        }

    }

};
</script>
