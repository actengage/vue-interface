<template>
    <nav :class="classes">
        <slot/>
    </nav>
</template>

<script>
import prefix from '../../Helpers/Prefix';
import Variant from '../../Mixins/Variant';
import Colorable from '../../Mixins/Colorable';
import NavbarBrand from './NavbarBrand';
import NavbarCollapse from './NavbarCollapse';
import NavbarText from './NavbarText';
import NavbarToggler from './NavbarToggler';
import NavbarTogglerIcon from './NavbarTogglerIcon';
import MergeClasses from '../../Mixins/MergeClasses';
import { isBoolean } from '../../Helpers/Functions';

export default {

    name: 'navbar',

    components: {
        NavbarBrand,
        NavbarCollapse,
        NavbarText,
        NavbarToggler,
        NavbarTogglerIcon
    },

    mixins: [
        Variant,
        Colorable,
        MergeClasses
    ],

    props: {

        /**
         * Expand the navbar. If true, applies to all size, otherwise pass a string.
         *
         * @property Object
         */
        expand: {
            type: [Boolean, String],
            default: 'lg',
            validate(value) {
                ['xs', 'sm', 'md', 'lg', 'xl'].indexOf(value) !== -1 || isBoolean(value);
            }
        },

        /**
         * The should the navbar be fixed at the top.
         *
         * @property String
         */
        fixed: {
            type: [String, Boolean],
            validate(value) {
                ['top', 'bottom'].indexOf(value) !== -1 || isBoolean(value);
            }
        },

        /**
         * The should the navbar be stickied at the top.
         *
         * @property String
         */
        sticky: {
            type: [String, Boolean],
            validate(value) {
                ['top', 'bottom'].indexOf(value) !== -1 || isBoolean(value);
            }
        },

        /**
         * The variant attribute
         *
         * @property String
         */
        variant: {
            type: String,
            default: 'light',
            validate(value) {
                return ['light', 'dark'].indexOf(value) !== -1;
            }
        }

    },

    computed: {

        expandedClass() {
            if(isBoolean(this.expand)) {
                return this.expand;
            }

            return prefix(prefix(this.expand, 'expand'), 'navbar');
        },

        classes() {
            return this.mergeClasses(
                'navbar',
                prefix(this.sticky === true ? 'top' : this.sticky, 'sticky'),
                prefix(this.fixed === true ? 'top' : this.fixed, 'fixed'),
                this.expandedClass,
                this.variantClass,
                this.colorableClasses
            );
        }
    },

    data() {
        return {};
    }

};
</script>
