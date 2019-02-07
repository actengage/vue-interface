<template>
    <th scope="col">
        <template v-if="id && request">
            <a href="#"
                class="sort"
                :data-id="id"
                @click.prevent="$emit('order', id)">
                <template v-if="!$slots.default">
                    {{ label || name || id }}
                </template>
                <slot />
            </a>
            <font-awesome-icon v-if="request.params.order === id && request.params.sort === 'asc'" class="sort-icon" icon="sort-up" />
            <font-awesome-icon v-if="request.params.order === id && request.params.sort === 'desc'" class="sort-icon" icon="sort-down" />
        </template>
        <template v-else>
            <template v-if="!$slots.default">
                {{ label || name || id }}
            </template>
            <slot />
        </template>
    </th>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSortUp } from '@fortawesome/free-solid-svg-icons/faSortUp';
import { faSortDown } from '@fortawesome/free-solid-svg-icons/faSortDown';

library.add(faSortUp);
library.add(faSortDown);

export default {

    name: 'TableViewHeader',

    components: {
        FontAwesomeIcon
    },

    props: {

        id: [Number, String],

        label: [Number, String],

        name: [Number, String],

        request: Object

    }

};
</script>
