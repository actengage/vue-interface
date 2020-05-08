export default {

    props: {

        shadow: {
            type: [String, Boolean],
            default: false,
            validate(value) {
                return value === true || [
                    'shadow-sm', 'shadow', 'shadow-lg'
                ].indexOf(`shadow-${value}`) > -1;
            }
        }

    },
    
    computed: {

        shadowClassName() {
            return this.shadow === true ? 'shadow' : `shadow-${this.shadow}`;
        }

    }

};