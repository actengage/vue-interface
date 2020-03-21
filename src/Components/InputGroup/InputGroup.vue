<template>
    <div class="input-group" :class="mergeClasses(colorableClasses, sizeableClass)">
        <slot name="prepend">
            <template v-if="prepend instanceof Array">
                <input-group-prepend>
                    <input-group-text v-for="value in prepend" :key="value" v-html="value" />
                </input-group-prepend>
            </template>
            <template v-else-if="prepend">
                <input-group-prepend text>
                    {{ prepend }}
                </input-group-prepend>
            </template>
        </slot>

        <slot />

        <slot name="append">
            <template v-if="append instanceof Array">
                <input-group-append>
                    <input-group-text v-for="value in append" :key="value" v-html="value" />
                </input-group-append>
            </template>
            <template v-else-if="append">
                <input-group-append text>
                    {{ append }}
                </input-group-append>
            </template>
        </slot>
    </div>
</template>

<script>
import HasSlots from '../../Mixins/HasSlots';
import Sizeable from '../../Mixins/Sizeable';
import InputGroupText from './InputGroupText';
import Colorable from '../../Mixins/Colorable';
import InputGroupAppend from './InputGroupAppend';
import InputGroupPrepend from './InputGroupPrepend';
import MergeClasses from '../../Mixins/MergeClasses';

export default {

    name: 'InputGroup',

    components: {
        InputGroupText,
        InputGroupAppend,
        InputGroupPrepend
    },

    mixins: [
        HasSlots,
        Sizeable,
        Colorable,
        MergeClasses
    ],

    props: {

        append: [Array, Number, String],

        prepend: [Array, Number, String]

    }

};
</script>

<style lang="scss">
.input-group > div:not(:first-child) .form-control,
.input-group > div:not(:first-child) .custom-control,
.input-group > div:not(:first-child) .custom-select {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.input-group > div:not(:last-child) .form-control,
.input-group > div:not(:last-child) .custom-control,
.input-group > div:not(:last-child) .custom-select {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
</style>
