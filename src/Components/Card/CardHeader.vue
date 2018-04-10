<template>

    <component :is="element" :class="$mergeClasses(className, colorableClasses)">
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
         * The alt attribute
         *
         * @property String
         */
        element: {
            type: String,
            default: 'div'
        }

    }

}

</script>
