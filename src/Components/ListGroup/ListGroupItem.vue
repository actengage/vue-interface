<template>
    <a v-if="href" :href="href" class="list-group-item" :class="classes" @click="onClick">
        <slot>{{label}}</slot> <badge v-if="badge" v-bind="badgeOptions"></badge>
    </a>
    <a v-else-if="action" href="#" class="list-group-item" :class="classes" @click.prevent="onClick">
        <slot>{{label}}</slot> <badge v-if="badge" v-bind="badgeOptions"></badge>
    </a>
    <div v-else class="list-group-item" :class="classes" @click="onClick">
        <slot>{{label}}</slot> <badge v-if="badge" v-bind="badgeOptions"></badge>
    </div>
</template>

<script>

import { isObject } from 'lodash';
import Badge from '../Badge';
import prefix from '@/Helpers/Prefix';

export default {

    components: {
        Badge
    },

    props: {

        /**
         * The list item label.
         *
         * @property Object
         */
        label: {
            type: [Number, String],
            value: null
        },

        /**
         * The list group item an action, or clickable item.
         *
         * @property Boolean
         */
        action: {
            type: Boolean,
            default: false
        },

        /**
         * The list group item active.
         *
         * @property Boolean
         */
        active: {
            type: Boolean,
            default: false
        },

        /**
         * The list group item disabled.
         *
         * @property Boolean
         */
        disabled: {
            type: Boolean,
            default: false
        },

        /**
         * The list group item color.
         *
         * @property String
         */
        color: String,

        /**
         * The list group item href attribute.
         *
         * @property String
         */
        href: String,

        /**
         * The badge label (if number or string) or object of options to pass to
         * the component.
         *
         * @property String|Object
         */
        badge: [Number, String, Object]

    },

    computed: {

        classes() {
            const classes = prefix({
                'action': this.action,
            }, 'list-group-item');

            classes['active'] = this.isActive;
            classes['disabled'] = this.isDisabled;

            if(this.color) {
                classes[prefix(this.color, 'list-group-item')] = true;
            }

            return classes;
        },

        badgeOptions() {
            return isObject(this.badge) ? this.badge : {
                label: this.badge
            };
        }

    },

    methods: {

        /**
         * Toggle the list item's active class.
         *
         * @return void
         */
        toggle() {
            this.isActive = !this.isActive;
        },

        /**
         * Activate the list item.
         *
         * @return void
         */
        activate() {
            this.isActive = true;
        },

        /**
         * Deactivate the list item.
         *
         * @return void
         */
        deactivate() {
            this.isActive = false;
        },

        /**
         * Activate the list item.
         *
         * @return void
         */
        disable() {
            this.isDisabled = false;
        },

        /**
         * Deactivate the list item.
         *
         * @return void
         */
        enable() {
            this.isDisabled = false;
        },

        /**
         * The callback function for the `click` event.
         *
         * @return void
         */
        onClick(event) {
            this.$emit('click', event, this);
        }

    },

    watch: {

        isActive(value, prevValue) {
            this.$emit('update:active', this.isActive);
            this.$emit('toggle', this.isActive, this);
            this.$emit(value ? 'activate' : 'deactivate', this);
        }

    },

    data() {
        return {
            isActive: this.active,
            isDisabled: this.disabled
        };
    }

}

</script>
