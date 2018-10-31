<template>
    <div class="list-group" :class="classes">
        <slot/>
    </div>
</template>

<script>

import { each } from '../../Helpers/Functions';
import ListGroupItem from './ListGroupItem';
import prefix from '../../Helpers/Prefix/Prefix';

export default {

    components: {
        ListGroupItem
    },

    props: {

        /**
         * The list group appear flush (without some borders).
         *
         * @property Boolean
         */
        flush: {
            type: Boolean,
            default: false
        },

        /**
         * Can activate multiple list items
         *
         * @property Boolean
         */
        multiple: {
            type: Boolean,
            default: false
        }

    },

    computed: {
        classes() {
            return prefix({
                'flush': this.flush
            }, 'list-group');
        }
    },

    methods: {

        bindEventsToChildren() {
            each(this.$children, child => {
                child.$off('click', event => this.onClickItem(event, child));
                child.$on('click', event => this.onClickItem(event, child));
            });
        },

        /**
         * The callback function for the `click` event.
         *
         * @return void
         */
        onClick(event) {
            this.$emit('click', event);
        },

        /**
         * The callback function for the child `click` events.
         *
         * @return void
         */
        onClickItem(event, child) {
            this.$emit('item:click', event, child);
        }

    },

    mounted() {
        this.bindEventsToChildren();
    },

    updated() {
        this.bindEventsToChildren();
    }

};
</script>
