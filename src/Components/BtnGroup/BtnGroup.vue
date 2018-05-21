<template>
    <div :class="classes" :data-toggle="toggle ? 'buttons' : false" role="group">
        <btn v-if="buttons" v-for="(button, i) in buttons" :key="i" v-bind="button" />
        <slot/>
    </div>
</template>

<script>
import Btn from '../Btn';
import Colorable from '../../Mixins/Colorable/Colorable';

export default {

    name: 'btn-group',

    components: {
        Btn
    },

    mixins: [
        Colorable
    ],

    props: {

        /**
         * An array of buttons
         *
         * @type {Array}
         */
        buttons: Array,

        /**
         * Denote the button group as toggle buttons
         *
         * @type {Boolean}
         */
        toggle: Boolean,

        /**
         * Display the buttons vertically
         *
         * @type {Boolean}
         */
        vertical: Boolean

    },

    computed: {

        classes() {
            return this.$mergeClasses(
                this.colorableClasses, {
                    'btn-group': !this.vertical,
                    'btn-group-toggle': this.toggle,
                    'btn-group-vertical': this.vertical
                }
            );
        }

    }

}
</script>
