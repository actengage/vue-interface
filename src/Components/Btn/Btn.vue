<template>
    <label v-if="label" class="btn" :disabled="disabled" :class="classes" @click="onClick">
        <slot/>
    </label>
    <a v-else-if="href" class="btn" :href="href" :disabled="disabled" :class="classes" @click="onClick">
        <slot/>
    </a>
    <button v-else class="btn" :type="type" :disabled="disabled" :class="classes" @click="onClick">
        <slot/>
    </button>
</template>

<script>
import Variant from '../../Mixins/Variant/Variant';
import Sizeable from '../../Mixins/Sizeable/Sizeable';
import transition from '../../Helpers/Transition/Transition';

export default {

    name: 'btn',

    mixins: [
        Variant,
        Sizeable
    ],

    props: {

        /**
         * Should use <label> as the element for the button. Used for inputs
         * wrappers (toggles).
         *
         * @property Boolean
         */
        label: Boolean,

        /**
         * If an href is passed, button is an anchor element
         *
         * @property Boolean
         */
        href: String,

        /**
         * The type attribute for the button. Not applied if an anchor
         *
         * @property String
         */
        type: {
            type: String,
            default: 'submit'
        },

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
         * Display as an outline button
         *
         * @property String
         */
        outline: Boolean

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
                this.variantClass,
                this.sizeableClass,
                this.block ? 'btn-block' : '',
                this.active ? 'active' : ''
            );
        }

    }

}
</script>
