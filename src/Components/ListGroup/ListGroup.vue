<template>
    <div class="list-group" :class="classes">
        <slot>
            <list-group-item v-for="(item, key) in items" :key="key" v-bind="item"/>
        </slot>
    </div>
</template>

<script>

import each from 'lodash-es/each';
import ListGroupItem from './ListGroupItem';
import prefix from '../../Helpers/Prefix/Prefix';

export default {

    components: {
        ListGroupItem
    },

    props: {

        /**
         * An array of list item objects.
         *
         * [{label: 'Some Label', badge: 1}]
         *
         * @property Object
         */
        items: Array,

        /**
         * Can the list items be activated.
         *
         * @property Boolean
         */
        activateable: {
            type: Boolean,
            default: false
        },

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
                child.$off('click', this.onClickItem);
                child.$on('click', this.onClickItem);
                child.$off('activate', this.onActivate);
                child.$on('activate', this.onActivate);
                child.$off('deactivate', this.onDeactivate);
                child.$on('deactivate', this.onDeactivate);
            });
        },

        onClickItem(event, child) {
            if(this.activateable) {
                child.toggle();
            }

            this.$emit('item:click', event, child);
        },

        onActivate(item) {
            if(!this.multiple && this.activeItem !== item) {
                if(this.activeItem) {
                    this.activeItem.deactivate();
                }

                this.activeItem = item;
            }

            this.$emit('item:activate', event, item);
        },

        onDeactivate(item) {
            if(!this.multiple && this.activeItem === item) {
                this.activeItem = null;
            }

            this.$emit('item:deactivate', event, item);
        }
    },

    data() {
        return {
            activeItem: null
        }
    },

    mounted() {
        this.bindEventsToChildren();
    },

    updated() {
        this.bindEventsToChildren();
    }

}

</script>
