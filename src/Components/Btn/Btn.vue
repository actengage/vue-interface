<template>
    <router-link v-if="to" :to="to" :disabled="disabled" :class="classes" @click="onClick">
        <slot/>
    </router-link>
    <a v-else-if="href" :href="href" :disabled="disabled" :class="classes" @click="onClick">
        <slot/>
    </a>
    <label v-else-if="label" :disabled="disabled" :class="classes" @click="onClick">
        <slot/>
    </label>
    <button v-else :type="type" :disabled="disabled" :class="classes" @click="onClick">
        <slot/>
    </button>
</template>

<script>
import Variant from '../../Mixins/Variant';
import Sizeable from '../../Mixins/Sizeable';
import Colorable from '../../Mixins/Colorable';
import transition from '../../Helpers/Transition/Transition';

export default {

    name: 'btn',

    mixins: [
        Variant,
        Sizeable,
        Colorable
    ],

    props: {

        /**
         * Display button with active state
         *
         * @property String
         */
        active: Boolean,

        /**
         * Display button with blocked state
         *
         * @property String
         */
        block: Boolean,

        /**
         * Display button with disabled state
         *
         * @property String
         */
        disabled: Boolean,

        /**
         * If an href is passed, button is an router-link element
         *
         * @property Boolean
         */
        href: String,

        /**
         * Should use <label> as the element for the button. Used for inputs
         * wrappers (toggles).
         *
         * @property Boolean
         */
        label: Boolean,

        /**
         * Display as an outline button
         *
         * @property String
         */
        outline: Boolean,

        /**
         * If an to is passed, button is an router-link element
         *
         * @property Boolean
         */
        to: [Object, String],

        /**
         * The type attribute for the button. Not applied if an anchor
         *
         * @property String
         */
        type: {
            type: String,
            default: 'submit'
        }

    },

    methods: {

        onClick(event) {
            this.$emit('click', event, this);
        }

    },

    computed: {

        variantClassPrefix() {
            return this.$options.name + (this.outline ? '-outline' : '');
        },

        classes() {
            return this.$mergeClasses(
                'btn',
                this.variantClass,
                this.sizeableClass,
                this.colorableClasses,
                this.block ? 'btn-block' : '',
                this.active ? 'active' : ''
            );
        }

    }

}
</script>
