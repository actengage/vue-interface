<template>
    <div class="form-check" :class="{'form-group': group, 'form-check-inline': inline}">
        <label :for="id" :class="labelClass">
            <input type="checkbox" :name="name" :id="id" :value="value" :class="[controlClass, !label ? 'position-static': ''].join(' ')" :checked="checked.indexOf(value) !== -1" v-on:change="updated($event.target.value)"> {{label}}
        </label>
    </div>
</template>

<script>

import BaseField from './BaseField';
import RadioField from '@/Forms/RadioField';
import FormControl from '@/Mixins/FormControl';

export default {

    name: 'checkbox-field',

    extends: RadioField,

    props: {
        /**
         * The checked values
         *
         * @property String
         */
        checked: Array
    },

    methods: {
        updated(value) {
            const checked = this.checked.slice(0);
            const index = this.checked.indexOf(value);

            if(index === -1) {
                checked.push(value);
            }
            else {
                checked.splice(index, 1);
            }

            this.$emit('change', checked);
        }
    }
}

</script>
