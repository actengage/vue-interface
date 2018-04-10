<template>

    <h5 class="card-title" :class="colorableClasses">
        <slot/>
    </h5>

</template>

<script>
import Colorable from '@/Mixins/Colorable/Colorable';

export default {

    name: 'card-title',

    mixins: [
        Colorable
    ]

}

</script>
