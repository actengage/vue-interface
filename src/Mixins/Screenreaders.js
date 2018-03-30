export default {

    props: {

        /**
         * Should show only for screenreaders
         *
         * @property Number
         */
        srOnly: Boolean,

        /**
         * Should be focusable for screenreaders
         *
         * @property Number
         */
        srOnlyFocusable: Boolean

    },

    computed: {
        screenreaderClasses() {
            return {
                'sr-only': this.srOnly,
                'sr-only-focusable': this.srOnlyFocusable,
            };
        }
    }

}
