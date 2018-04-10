<template>

    <h6 :class="$mergeClasses(className, colorableClasses)">
        <slot/>
    </h6>

</template>

<script>
import Card from './Card';

export default {

    name: 'card-subtitle',

    extends: Card

}

</script>
