<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <breadcrumb-item
                v-if="items.length"
                v-for="(item, i) in items"
                v-bind="item"
                :key="i"
                :current="i === item.length - 1"
            />
            <slot/>
        </ol>
    </nav>
</template>

<script>
import BreadcrumbItem from './BreadcrumbItem';

export default {

    name: 'breadcrumb',

    components: {
        BreadcrumbItem
    },

    props: {

        /**
         * An array of breadcrumbs
         *
         * @prop {Array}
         */
        items: Array

    }

};
</script>
