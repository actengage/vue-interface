<template>

    <table class="table" :class="{'table-hover': hover && !loading && data.length}">

        <thead slot="thead">
            <tr v-if="columns.length || $slots.columns" slot="columns">
                <table-view-header
                    v-for="(column, key) in tableColumns"
                    v-bind="column.props || column"
                    v-on="column.events"
                    :request="request"
                    :key="key"
                    @order="id => $emit('order', id)"
                />
            </tr>
        </thead>

        <tbody>
            <tr v-if="loading">
                <td :colspan="tableColumns.length" class="position-relative" :style="{'height': height(minHeight)}">
                    <activity-indicator :center="true"></activity-indicator>
                </td>
            </tr>

            <tr v-else-if="!data.length">
                <td :colspan="tableColumns.length" class="position-relative">
                    <alert variant="warning" class="my-3">
                        <i class="fa fa-warning"/> There are no results found.
                    </alert>
                </td>
            </tr>

            <slot v-else :data="data" :columns="tableColumns">
                <tr v-for="(row, i) in data">
                    <td v-for="column in tableColumns" v-html="row[column.id] || row[column.name]"></td>
                </tr>
            </slot>
        </tbody>

        <slot name="tfoot">
            <tfoot v-if="paginate && response">
                <td :colspan="tableColumns.length || 1" class="table-view-footer">
                    <slot name="pagination">
                        <pagination
                            align="center"
                            :page="response.current_page"
                            :total-pages="response.last_page"
                            @paginate="$emit('paginate')"
                        />
                    </slot>
                </td>
            </tfoot>
        </slot>

    </table>

</template>

<script>
import Alert from '../Alert';
import { each } from '../../Helpers/Functions';
import { isObject } from '../../Helpers/Functions';
import unit from '../../Helpers/Unit';
import Pagination from '../Pagination';
import TableViewHeader from './TableViewHeader';
import ActivityIndicator from '../ActivityIndicator';

export default {

    components: {
        Alert,
        Pagination,
        TableViewHeader,
        ActivityIndicator
    },

    props: {

        // (array) An array of table column
        // [{id: 'database_id', name: 'Database id', width: '20%'}]
        columns: {
            type: Array,
            default: () => { return []; }
        },

        data: {
            type: Array,
            required: true
        },

        // (string) Add table-hover to the table element
        hover: {
            type: Boolean,
            default: true
        },

        loading: Boolean,

        // (integer) The minimum height of the row when loading data
        minHeight: {
            type: Number,
            default: 400
        },

        // (bool) Should show the pagination for this table
        paginate: {
            type: Boolean,
            default: true
        }

    },

    methods: {

        height(min) {
            const elements = [
                // this.$el.querySelector('thead'),
                this.$el.querySelector('tbody')
            ];

            let height = 0;

            each(elements, el => {
                height += el.getBoundingClientRect().height;
            });

            return unit(Math.max(min, height));
        }

    },

    computed: {
        tableColumns() {
            let columns = this.columns;

            if(!columns || !columns.length) {
                columns = Object.keys(this.data[0]);
            }

            return columns.map(column => {
                return isObject(column) ? column : {
                    name: column
                };
            });
        }
    }

}

</script>
