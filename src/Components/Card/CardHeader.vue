<template>

    <component :is="tag" :class="$mergeClasses(className, colorableClasses)">
        <slot/>
    </component>

</template>

<script>
import Card from './Card';

export default {

    name: 'card-header',

    extends: Card,

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

}

</script>
