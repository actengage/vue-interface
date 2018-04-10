<template>

    <h6 class="card-subtitle" :class="colorableClasses">
        <slot/>
    </h6>

</template>

<script>
import Colorable from '@/Mixins/Colorable/Colorable';

export default {

    name: 'card-subtitle',

    mixins: [
        Colorable
    ]

}

</script>
