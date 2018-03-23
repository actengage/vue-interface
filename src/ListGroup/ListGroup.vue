<template>
    <div class="list-group" :class="classes">
        <slot>
            <list-group-item v-for="(item, key) in items" :key="key" v-bind="item"/>
        </slot>
    </div>
</template>

<script>

import { each } from 'lodash';
import ListGroupItem from './ListGroupItem';
import prefix from '@/Toolbox/Helpers/Prefix';

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
                child.$off('click', this.onClickChild);
                child.$on('click', this.onClickChild);
                child.$off('activate', this.onActivate);
                child.$on('activate', this.onActivate);
                child.$off('deactivate', this.onDeactivate);
                child.$on('deactivate', this.onDeactivate);
            });
        },

        onClickChild(event, child) {
            if(this.activateable) {
                child.toggle();
            }

            this.$emit('click:child', event, child);
        },

        onActivate(item) {
            if(!this.multiple && this.activeItem !== item) {
                if(this.activeItem) {
                    this.activeItem.deactivate();
                }

                this.activeItem = item;
            }
        },

        onDeactivate(item) {
            if(!this.multiple && this.activeItem === item) {
                this.activeItem = null;
            }
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
