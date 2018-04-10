<template>

    <img v-if="!hasDefaultSlot" :class="className" :src="src" :alt="alt"/>

    <div v-else :class="className">
        <slot/>
    </div>

</template>

<script>
import Card from './Card';

export default {

    name: 'card-img',

    extends: Card,

    props: {

        /**
         * The alt attribute
         *
         * @property String
         */
        alt: String,

        /**
         * The src attribute
         *
         * @property String
         */
        src: String

    }

}

</script>
