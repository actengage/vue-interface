<template>
    <h5 :class="mergeClasses(className, colorableClasses)">
        <slot />
    </h5>
</template>

<script>
import Card from './Card';
import MergeClasses from '../../Mixins/MergeClasses';

export default {

    name: 'CardTitle',

    mixins: [
        Card,
        MergeClasses
    ]

};
</script>
