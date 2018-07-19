<template>
    <router-link v-if="to" :to="to" :class="classes" @click="onClick">
        <slot>{{label}}</slot> <badge v-if="badge" v-bind="badgeOptions"></badge>
    </router-link>
    <a v-elseif="href" :href="href" :class="classes" @click="onClick">
        <slot>{{label}}</slot> <badge v-if="badge" v-bind="badgeOptions"></badge>
    </a>
    <button v-else-if="action" type="button" :class="classes" @click.prevent="onClick">
        <slot>{{label}}</slot> <badge v-if="badge" v-bind="badgeOptions"></badge>
    </button>
    <div v-else :class="classes" @click="onClick">
        <slot>{{label}}</slot> <badge v-if="badge" v-bind="badgeOptions"></badge>
    </div>
</template>

<script>

import { isObject } from 'lodash-es';
import Badge from '../Badge';
import prefix from '../../Helpers/Prefix/Prefix';

export default {

    components: {
        Badge
    },

    props: {

        /**
         * The badge label (if number or string) or object of options to pass to
         * the component.
         *
         * @property String|Object
         */
        badge: [Number, String, Object],

        /**
         * The list group item href attribute.
         *
         * @property String
         */
        href: String,

        /**
         * The list group item variant.
         *
         * @property String
         */
        variant: String,

        /**
         * Optionally pass the item as a object to use programmatically later.
         *
         * @property String
         */
        item: Object,

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
         * The list item label.
         *
         * @property Object
         */
        label: {
            type: [Number, String],
            value: null
        },

        /**
         * The to attribute to be passed to a <router-link> component.
         *
         * @property String
         */
        to: [String, Object]

    },

    computed: {

        classes() {
            const classes = prefix({
                'action': this.action,
            }, 'list-group-item');

            classes['list-group-item'] = true;
            classes['active'] = this.isActive;
            classes['disabled'] = this.isDisabled;

            if(this.variant) {
                classes[prefix(this.variant, 'list-group-item')] = true;
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
            this.$emit('click', event);
        }

    },

    watch: {

        isActive(value, prevValue) {
            this.$emit('update:active', this.isActive);
            this.$emit('toggle', this.isActive);
            this.$emit(value ? 'activate' : 'deactivate');
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
