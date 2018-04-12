<template>

    <div :class="$mergeClasses(className, colorableClasses)">
        <slot/>
    </div>

</template>

<script>
import HasSlots from '../../Mixins/HasSlots/HasSlots';
import Colorable from '../../Mixins/Colorable/Colorable';

export default {

    name: 'card',

    mixins: [
        HasSlots,
        Colorable
    ],

    computed: {

        className() {
            return this.$options.name
        }

    }

}

</script>
