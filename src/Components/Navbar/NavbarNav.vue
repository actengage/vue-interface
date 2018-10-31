<template>
    <ul class="navbar-nav" :class="classes" :role="role">
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
