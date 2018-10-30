<template>

    <div class="table-view">

        <div v-if="heading || description || $slots.buttons" class="d-flex justify-content-between align-items-center">
            <slot name="heading"><h2 v-if="heading" v-html="heading"/></slot>
            <slot name="description"><p v-if="description" v-html="description"/></slot>

            <div v-if="$slots.buttons" class="ml-auto my-3">
                <slot name="buttons"/>
            </div>
        </div>

        <card v-if="card">
            <data-table
                :columns="columns"
                :data="data"
                :hover="hover"
                :loading="loading"
                :min-height="minHeight"
                :paginate="paginate"
                @paginate="onPaginate"
                @order="id => orderBy(id)">
                <slot :data="data" :columns="columns"/>
            </data-table/>
        </card>
        <data-table
            v-else
            :columns="columns"
            :data="data"
            :hover="hover"
            :loading="loading"
            :min-height="minHeight"
            :paginate="paginate"
            @paginate="onPaginate"
            @order="id => orderBy(id)">
            <slot :data="data" :columns="columns"/>
        </data-table/>

    </div>

</template>

<script>
import Card from '../Card';
import DataTable from './Table';
import { extend } from '../../Helpers/Functions';
import Proxy from '../../Mixins/Proxy';
import Request from '../../Http/Request';
import TableViewHeader from './TableViewHeader';
import TableViewTransformer from '../../Http/TableViewTransformer';

export default {
    name: 'table-view',

    mixins: [Proxy],

    components: {
        Card,
        DataTable,
        TableViewHeader
    },

    props: {

        // (boolean) Show the table in a card.
        card: Boolean,

        // (string) A relative or absolute endpoint URL used to fetch data
        url: {
            type: String,
            required: true
        },

        // (integer) The starting page of the table
        page: {
            type: Number,
            default: 1
        },

        // (integer) The total number of results per page
        limit: {
            type: Number,
            default: 20
        },

        // (string) The column used to order the data
        order: String,

        // (string) The sort direction (asc|desc)
        sort: {
            type: String,
            validate: (value) => {
                return ['asc', 'desc'].indexOf(value) !== -1;
            }
        },

        // (integer) The minimum height of the row when loading data
        minHeight: {
            type: Number,
            default: 400
        },

        // (array) An array of button objects
        // [{href: 'test-123', label: 'Test 123'}]
        buttons: {
            type: Array,
            default: () => { return []; }
        },

        // (array) An array of table column
        // [{id: 'database_id', name: 'Database id', width: '20%'}]
        columns: {
            type: Array,
            default: () => { return []; }
        },

        // (string) The table heading
        heading: String,

        // (string) Add table-hover to the table element
        hover: {
            type: Boolean,
            default: true
        },

        // (string) The table description
        description: String,

        // (bool) Should show the pagination for this table
        paginate: {
            type: Boolean,
            default: true
        },

        // (object) The HTTP response transformer instance
        transformer: {
            type: Object,
            validate: (value) => {
                return value instanceof TableViewTransformer;
            }
        }
    },

    methods: {

        orderBy(order) {
            const defaultSort = 'desc';
            const currentSort = this.getRequestParam('sort');
            const currentOrder = this.getRequestParam('order');

            this.addRequestParam('order', order);
            this.addRequestParam('sort',
                currentOrder !== order || !currentSort ? defaultSort : (
                    currentSort === defaultSort ? 'asc' : null
                )
            );

            this.fetch();
        },

        getRequestHeader(key, value) {
            return this.request.headers[key] || value
        },

        addRequestHeader(key, value) {
            if(!this.request.headers) {
                this.request.headers = {};
            }

            this.request.headers[key] = value;
        },

        getRequestParam(key, value) {
            return this.request.params[key] || value
        },

        addRequestParam(key, value) {
            if(!this.request.params) {
                this.request.params = {};
            }

            this.request.params[key] = value;
        },

        fetch() {
            const request = new Request(this.url, this.request);

            this.loading = true;

            return request.get().then(response => {
                const transformer = this.transformer || new TableViewTransformer(response);
                this.response = transformer.response();
                this.data = transformer.data();
                this.loading = false;
            }, errors => {
                this.loading = false;
            });
        },

        onPaginate(page, event) {
            if(!this.request.params) {
                this.request.params = {};
            }

            this.request.params.page = page;
            this.fetch();
        }
    },

    data() {
        return {
            // (array) The dataset for the table
            data: this.$attrs.data || [],

            // (bool) Is the table currently loading data
            loading: false,

            // (null|object) The response object
            response: null,

            // (object) The HTTP request object
            request: extend({
                headers: {},
                params: {
                    page: this.page,
                    limit: this.limit,
                    order: this.order,
                    sort: this.sort
                }
            }, this.$attrs.request)
        };
    },

    mounted() {
        this.fetch();
    },

    beforeDestroy() {
        this.$off();
    }
}

</script>

<style lang="scss">
.card > .table {
    margin-bottom: 0;

    thead th {
        border-top: 0;
        border-bottom: 0;
    }

    tfoot .pagination {
        margin-bottom: 0;
    }
}
</style>
