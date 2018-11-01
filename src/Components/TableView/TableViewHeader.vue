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
                <slot/>
            </a>
			<i v-if="request.params.order === id && request.params.sort === 'asc'" class="sort-icon fa fa-sort-asc"/>
			<i v-if="request.params.order === id && request.params.sort === 'desc'" class="sort-icon fa fa-sort-desc"/>
		</template>
        <template v-else>
            <template v-if="!$slots.default">
                {{ label || name || id }}
            </template>
            <slot/>
        </template>
	</th>

</template>

<script>
export default {

    name: 'table-view-header',

    props: {

        id: [Number, String],

        label: [Number, String],

        name: [Number, String],

        request: Object

    }

};
</script>
