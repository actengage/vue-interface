<template>
    <router-link v-if="to" :to="to" :class="classes" @click="$emit('click', $event)">
        <slot>{{label}}</slot> <badge v-if="badge" v-bind="badgeOptions"></badge>
    </router-link>
    <a v-else-if="href" :href="href" :class="classes" @click="$emit('click', $event)">
        <slot>{{label}}</slot> <badge v-if="badge" v-bind="badgeOptions"></badge>
    </a>
    <button v-else-if="action" type="button" :class="classes" @click.prevent="$emit('click', $event)">
        <slot>{{label}}</slot> <badge v-if="badge" v-bind="badgeOptions"></badge>
    </button>
    <div v-else :class="classes" @click="$emit('click', $event)">
        <slot>{{label}}</slot> <badge v-if="badge" v-bind="badgeOptions"></badge>
    </div>
</template>

<script>
import Badge from '../Badge';
import prefix from '../../Helpers/Prefix/Prefix';
import { isObject } from '../../Helpers/Functions';

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
                'action': this.action
            }, 'list-group-item');

            classes['list-group-item'] = true;
            classes['active'] = this.active;
            classes['disabled'] = this.disabled;

            if (this.variant) {
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

    watch: {

        active(value, prevValue) {
            this.$emit('toggle', value);
            this.$emit(value ? 'activate' : 'deactivate');
        }

    }

};
</script>
