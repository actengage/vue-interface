import prefix from '../../Helpers/Prefix/Prefix';

export default {

    props: {

        /**
         * The size of the form control
         *
         * @property String
         */
        size: {
            type: String,
            default: 'md',
            validate: value => ['sm', 'md', 'lg'].indexOf(value) !== -1
        }

    },

    computed: {

        sizeableClass() {
            return prefix(this.size, this.$options.name);
        }

    }

}
