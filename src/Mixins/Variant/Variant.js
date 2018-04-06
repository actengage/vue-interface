import prefix from '@/Helpers/Prefix/Prefix';

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
            return this.$options.name;
        },

        variantClass() {
            return prefix(this.variant, this.variantClassPrefix);
        }

    }

}
