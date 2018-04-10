<template>
    <nav class="nav" :class="classes" :role="role">
        <navigation-item v-if="items" v-for="(item, i) in items" v-bind="item" :key="i"/>
        <slot/>
    </nav>
</template>

<script>
import prefix from '@/Helpers/Prefix/Prefix';
import Colorable from '@/Mixins/Colorable/Colorable';

export default {

    name: 'navigation',

    mixins: [
        Colorable
    ],

    props: {

        /**
         * An array of buttons
         *
         * @prop {Array}
         */
        buttons: Array,

        /**
         * Helper to add the justify-content-X class.
         *
         * @prop {Array}
         */
        align: String,

        /**
         * Justify nav items to fill the width equally (using flex).
         *
         * @prop {Array}
         */
        fill: Boolean,

        /**
         * Add `nav-justified` class to the component.
         *
         * @prop {Array}
         */
        justfied: Boolean,

        /**
         * Display items as pill shapes
         *
         * @prop {Array}
         */
        pills: Boolean,

        /**
         * Display items as tab shapes
         *
         * @prop {Array}
         */
        tabs: Boolean,

        /**
         * Display the buttons vertically
         *
         * @prop {Boolean}
         */
        vertical: Boolean,

        /**
         * The role attribute
         *
         * @prop {String}
         */
        role: String

    },

    computed: {

        classes() {
            return this.$mergeClasses(
                prefix(this.align, 'justify-content'),
                this.colorableClasses, {
                    'nav-justfied': this.justfied,
                    'nav-fill': this.fill,
                    'nav-pills': this.pills,
                    'nav-tabs': this.tabs,
                    'flex-column': this.vertical
                }
            );
        }

    }

}
</script>
