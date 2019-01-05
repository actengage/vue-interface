<template>
    <ul class="navbar-nav" role="nav">
        <slot/>
    </ul>
</template>

<script>
import Navigation from '../Navigation';

export default {

    name: 'navbar-nav',

    components: {
        Navigation
    }

};
</script>
