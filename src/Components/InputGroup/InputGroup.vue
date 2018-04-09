<template>

    <div class="input-group" :class="$mergeClasses(colorableClasses, sizeableClass)">

        <slot name="prepend">
            <template v-if="prepend instanceof Array">
                <input-group-prepend>
                    <input-group-text v-for="value in prepend" :text="value"/>
                </input-group-prepend>
            </template>
            <template v-else-if="prepend">
                <input-group-prepend text>{{prepend}}</input-group-prepend>
            </template>
        </slot>

        <slot/>

        <slot name="append">
            <template v-if="append instanceof Array">
                <input-group-append>
                    <input-group-text v-for="value in append" :text="value"/>
                </input-group-append>
            </template>
            <template v-else-if="append">
                <input-group-append text>{{append}}</input-group-append>
            </template>
        </slot>
    </div>

</template>

<script>

import HasSlots from '@/Mixins/HasSlots/HasSlots';
import Sizeable from '@/Mixins/Sizeable/Sizeable';
import Colorable from '@/Mixins/Colorable/Colorable';

export default {

    name: 'input-group',

    mixins: [
        HasSlots,
        Sizeable,
        Colorable
    ],

    props: {

        append: [Array, Number, String],

        prepend: [Array, Number, String]

    }

}

</script>
