import prefix from '../../Helpers/Prefix/Prefix';
import kebabCase from '../../Helpers/Functions/kebabCase';

export default {

    props: {

        /**
         * The variant attribute
         *
         * @property String
         */
        variant: {
            type: String,
            default: 'primary'
        }

    },

    computed: {

        variantClassPrefix() {
            return kebabCase(this.$options.name);
        },

        variantClass() {
            return prefix(this.variant, this.variantClassPrefix);
        }

    }

};
