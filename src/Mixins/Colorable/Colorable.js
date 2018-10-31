import prefix from '../../Helpers/Prefix';
import { each, omitBy, camelCase } from '../../Helpers/Functions';

const COLORS = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'white',
    'muted'
];

const props = {};

each(['border', 'text', 'bg', 'bg-gradient'], namespace => {
    each(COLORS, color => {
        props[camelCase(prefix(color, namespace))] = Boolean;
    });
});

function classes(instance, namespace) {
    return COLORS.map(color => {
        return instance[camelCase(color = prefix(color, namespace))] ? color : null;
    })
        .filter(value => !!value);
}

export default {

    props: props,

    methods: {

        textColor() {
            return classes(this, 'text');
        },

        bgColor() {
            return classes(this, 'bg');
        },

        borderColor() {
            return classes(this, 'border');
        },

        bgGradientColor() {
            return classes(this, 'bg-gradient');
        }

    },

    computed: {

        textColorClasses() {
            return this.textColor().join(' ').trim() || null;
        },

        borderColorClasses() {
            return this.borderColor().join(' ').trim() || null;
        },

        bgColorClasses() {
            return this.bgColor().join(' ').trim() || null;
        },

        bgGradientColorClasses() {
            return this.bgGradientColor().join(' ').trim() || null;
        },

        colorableClasses() {
            const classes = {};

            classes[this.textColorClasses] = !!this.textColorClasses;
            classes[this.borderColorClasses] = !!this.borderColorClasses;
            classes[this.bgColorClasses] = !!this.bgColorClasses;
            classes[this.bgGradientColorClasses] = !!this.bgGradientColorClasses;

            return omitBy(classes, (key, value) => {
                return !key || !value;
            });
        }

    }

};
