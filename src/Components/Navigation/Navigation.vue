<template>
    <nav class="nav" :class="classes" :role="role">
        <slot />
    </nav>
</template>

<script>
import prefix from '../../Helpers/Prefix';
import Colorable from '../../Mixins/Colorable';
import MergeClasses from '../../Mixins/MergeClasses';

export default {

    name: 'Navigation',

    mixins: [
        Colorable,
        MergeClasses
    ],

    props: {

        /**
         * Helper to add the justify-content-X class.
         *
         * @prop {Array}
         */
        align: String,

        /**
         * An array of buttons
         *
         * @prop {Array}
         */
        buttons: Array,

        /**
         * The navigation inside a card
         *
         * @prop {Boolean}
         */
        card: Boolean,

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
        justified: Boolean,

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

    data() {
        return {
            isCard: this.card
        };
    },

    computed: {

        classes() {
            return this.mergeClasses(
                this.align ? prefix(this.align, 'justify-content') : null,
                this.colorableClasses, {
                    'card-header-tabs': this.isCard && this.tabs,
                    'card-header-pills': this.isCard && this.pills,
                    'nav-justified': this.justified,
                    'nav-fill': this.fill,
                    'nav-pills': this.pills,
                    'nav-tabs': this.tabs,
                    'flex-column': this.vertical
                }
            );
        }

    },

    updated() {
        if(!this.isCard) {
            this.isCard = this.$parent.$el.classList.contains('card-header');
        }
    }

};
</script>
