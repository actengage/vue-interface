<template>
    <component :is="tag" :class="mergeClasses(className, colorableClasses)">
        <slot />
    </component>
</template>

<script>
import Card from './Card';
import MergeClasses from '../../Mixins/MergeClasses';

export default {

    name: 'CardHeader',

    extends: Card,

    mixins: [
        MergeClasses
    ],

    props: {

        /**
         * The component's HTML tag name
         *
         * @property String
         */
        tag: {
            type: String,
            default: 'h5'
        }

    }

};
</script>
