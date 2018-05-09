<template>
    <div :class="classes" role="group">
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
         * @prop {Array}
         */
        buttons: Array,

        /**
         * Display the buttons vertically
         *
         * @prop {Boolean}
         */
        vertical: Boolean

    },

    computed: {

        classes() {
            return this.$mergeClasses(
                this.colorableClasses, {
                    'btn-group': !this.vertical,
                    'btn-group-vertical': this.vertical
                }
            );
        }

    }

}
</script>
