<template>
    <nav class="nav" :class="classes" :role="role">
        <navigation-item v-if="items" v-for="(item, i) in items" v-bind="item" :key="i"/>
        <slot/>
    </nav>
</template>

<script>
import NavigationItem from './NavigationItem';
import prefix from '../../Helpers/Prefix/Prefix';
import Colorable from '../../Mixins/Colorable/Colorable';

export default {

    name: 'navigation',

    components: {
        NavigationItem
    },

    mixins: [
        Colorable
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

    computed: {

        classes() {
            this.$nextTick(() => {
                if(!this.isCard) {
                    this.isCard = this.$parent.$el.classList.contains('card-header');
                }
            });

            return this.$mergeClasses(
                prefix(this.align, 'justify-content'),
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

    data() {
        return {
            isCard: this.card
        };
    }

}
</script>
