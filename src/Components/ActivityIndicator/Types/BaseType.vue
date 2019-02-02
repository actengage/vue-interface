<template>
    <div class="activity-indicator" :class="classes">
        <div v-for="i in nodes" :key="i" />
    </div>
</template>

<script>
import kebabCase from '../../../Helpers/Functions/kebabCase';

export default {

    props: {
        nodes: {
            type: Number,
            default: 3
        },
        size: {
            type: String,
            default: ''
        },
        prefix: {
            type: String,
            default: 'activity-indicator-'
        }
    },

    computed: {
        classes: function() {
            const classes = {};
            const name = kebabCase(this.$options.name);

            classes[name] = !!name;
            classes[this.prefix + this.size.replace(this.prefix, '')] = !!this.size;

            return classes;
        }
    }

};
</script>
