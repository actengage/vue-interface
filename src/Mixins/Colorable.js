import { map } from 'lodash';
import { each } from 'lodash';
import { filter } from 'lodash';
import { isNull } from 'lodash';
import { omitBy } from 'lodash';
import { camelCase } from 'lodash';
import prefix from '@/Helpers/Prefix';

const COLORS = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'white'
];

const props = {};

each(['text', 'bg', 'bg-gradient'], namespace => {
    each(COLORS, color => {
        props[camelCase(prefix(color, namespace))] = Boolean;
    });
});

function classes(instance, namespace) {
    return filter(map(COLORS, color => {
        return instance[camelCase(color = prefix(color, namespace))] ? color : null;
    }));
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

        bgGradientColor() {
            return classes(this, 'bg-gradient');
        }

    },

    computed: {

        textColorClasses() {
            return this.textColor().join(' ').trim() || null;
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
            classes[this.bgColorClasses] = !!this.bgColorClasses;
            classes[this.bgGradientColorClasses] = !!this.bgGradientColorClasses;

            return omitBy(classes, (key, value) => {
                return !key || !value;
            });
        }

    }

}
