<template>

    <h5 :class="$mergeClasses(className, colorableClasses)">
        <slot/>
    </h5>

</template>

<script>
import Card from './Card';

export default {

    name: 'card-title',

    mixins: [
        Card
    ]

}

</script>
