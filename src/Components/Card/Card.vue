<template>

    <div :class="mergeClasses(className, colorableClasses)">
        <slot/>
    </div>

</template>

<script>
import HasSlots from '../../Mixins/HasSlots';
import Colorable from '../../Mixins/Colorable';
import MergeClasses from '../../Mixins/MergeClasses';

export default {

    name: 'card',

    mixins: [
        HasSlots,
        Colorable,
        MergeClasses
    ],

    computed: {

        className() {
            return this.$options.name;
        }

    }

};
</script>
