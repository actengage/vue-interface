export default {

    computed: {

        colorableClasses() {
            const classes = {};

            for(let i in this.$attrs) {
                if(i.match(/^bg|text|border|bg-gradient-/) && !!this.$attrs[i] || this.$attrs[i] === undefined) {
                    classes[i] = true;
                }
            }

            return classes;
        }

    }

};
