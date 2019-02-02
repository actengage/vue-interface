<template>
    <div :class="mergeClasses(className, colorableClasses)">
        <slot />
    </div>
</template>

<script>
import HasSlots from '../../Mixins/HasSlots';
import Colorable from '../../Mixins/Colorable';
import MergeClasses from '../../Mixins/MergeClasses';
import kebabCase from '../../Helpers/Functions/kebabCase';

export default {

    name: 'Card',

    mixins: [
        HasSlots,
        Colorable,
        MergeClasses
    ],

    computed: {

        className() {
            return kebabCase(this.$options.name);
        }

    }

};
</script>
