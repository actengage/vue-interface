<template>

    <div class="card"><slot/></div>

</template>

<script>
import Colorable from '@/Mixins/Colorable/Colorable';

export default {

    name: 'card',

    mixins: [
        Colorable
    ]

}

</script>
