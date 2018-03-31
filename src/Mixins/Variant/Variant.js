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

        variantClass() {
            return prefix(this.variant, this.$options.name);
        }

    }

}
