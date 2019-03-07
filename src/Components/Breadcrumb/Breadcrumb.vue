<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <breadcrumb-item
                v-for="(item, i) in items"
                :key="i"
                v-bind="item"
                :current="i === item.length - 1" />
            <slot />
        </ol>
    </nav>
</template>

<script>
import BreadcrumbItem from './BreadcrumbItem';

export default {

    name: 'Breadcrumb',

    components: {
        BreadcrumbItem
    },

    props: {

        /**
         * An array of breadcrumbs
         *
         * @prop {Array}
         */
        items: {
            type: Array,
            default() {
                return [];
            }
        }

    }

};
</script>
