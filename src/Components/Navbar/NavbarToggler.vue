<template>
    <button
        type="button"
        class="navbar-toggler"
        data-toggle="collapse"
        :data-target="target"
        :aria-controls="target"
        :aria-expanded="expanded"
        :aria-label="label"
        @click="onClick">
        <slot><navbar-toggler-icon/></slot>
    </button>
</template>

<script>
import NavbarTogglerIcon from './NavbarTogglerIcon';

export default {

    name: 'navbar-toggler',

    components: {
        NavbarTogglerIcon
    },

    props: {

        expanded: Boolean,

        label: {
            type: String,
            default: 'Toggle navigation'
        },

        target: {
            type: String,
            default: '.navbar-collapse'
        }

    },

    methods: {

        onClick(event) {
            this.$emit('click', event, this);
        }

    }

}

</script>
