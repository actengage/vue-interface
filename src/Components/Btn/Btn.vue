<template>
    <router-link v-if="to" :to="to" :disabled="disabled" :class="classes" @click="onClick" role="button">
        <slot/>
    </router-link>
    <a v-else-if="href" :href="href" :disabled="disabled" :class="classes" @click="onClick" role="button">
        <slot/>
    </a>
    <label v-else-if="label" :disabled="disabled" :class="classes" @click="onClick" role="button">
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

<style lang="scss">
@import './node_modules/bootstrap/scss/mixins.scss';
@import './node_modules/bootstrap/scss/functions.scss';
@import './node_modules/bootstrap/scss/variables.scss';

@mixin button-block($size) {
    width: 100%;
    display: block;
}

@include media-breakpoint-up(xs) {
    .btn-xs-block {
        @include button-block(xs);

        + .btn-xs-block {
            margin-top: $btn-block-spacing-y;
        }
    }
}

@include media-breakpoint-up(sm) {
    .btn-sm-block {
        @include button-block(sm);

        + .btn-xs-block,
        + .btn-sm-block {
            margin-top: $btn-block-spacing-y;
        }
    }
}

@include media-breakpoint-up(md) {
    .btn-md-block {
        @include button-block(md);

        + .btn-xs-block,
        + .btn-sm-block,
        + .btn-md-block {
            margin-top: $btn-block-spacing-y;
        }
    }
}

@include media-breakpoint-up(lg) {
    .btn-lg-block {
        @include button-block(lg);

        + .btn-xs-block,
        + .btn-sm-block,
        + .btn-md-block,
        + .btn-lg-block {
            margin-top: $btn-block-spacing-y;
        }
    }
}

@include media-breakpoint-up(xl) {
    .btn-xl-block {
        @include button-block(xl);

        + .btn-xs-block,
        + .btn-sm-block,
        + .btn-md-block,
        + .btn-lg-block,
        + .btn-xl-block {
            margin-top: $btn-block-spacing-y;
        }
    }
}

</style>
