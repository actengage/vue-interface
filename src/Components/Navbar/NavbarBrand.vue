<template>
    <component class="navbar-brand" :class="{'h1': h1}" :is="component" :to="to" :href="href">
        <img v-if="src" class="d-inline-block align-center" :src="src" :width="unit(width)" :height="unit(height)" :alt="alt"/>
        <slot/>
    </component>
</template>

<script>
import unit from '../../Helpers/Unit';

export default {

    props: {

        /**
         * The img `alt` attribute. `src` must be define before this prop has
         * any affect.
         *
         * @property Object
         */
        alt: String,

        /**
         * The HTML wrapping tag.
         *
         * @property Object
         */
        tag: String,

        /**
         * The img `width` attribute. `src` must be define before this prop has
         * any affect.
         *
         * @property Object
         */
        width: [Number, String],

        /**
         * The img `height` attribute. `src` must be define before this prop has
         * any affect.
         *
         * @property Object
         */
        height: [Number, String],

        /**
         * The `to` attribute that is passed to the component.
         *
         * @property Object
         */
        to: [Object, String],

        /**
         * The `href` attribute that is passed to the component.
         *
         * @property Object
         */
        href: String,

        /**
         * Append the `h1` class to increase the display size
         *
         * @property Object
         */
        h1: Boolean,

        /**
         * If a `src` attribute is passed, then use it to add an img tag
         *
         * @property Object
         */
        src: String,

    },

    computed: {

        component() {
            return this.tag || (this.to ? 'router-link' : 'a');
        }

    },

    methods: {
        unit(value) {
            return unit(value);
        }
    }

}

</script>
