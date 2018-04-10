<template>

    <div :class="$mergeClasses(className, colorableClasses)">
        <slot/>
    </div>

</template>

<script>
import Colorable from '@/Mixins/Colorable/Colorable';

export default {

    name: 'card',

    mixins: [
        Colorable
    ],

    computed: {

        className() {
            return this.$options.name
        }

    }

}

</script>
