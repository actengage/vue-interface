<template>
    <table class="table" :class="{'table-hover': hover && !loading && data.length}">
        <thead slot="thead">
            <tr v-if="columns.length || $slots.columns" slot="columns">
                <table-view-header
                    v-for="(column, key) in tableColumns"
                    :key="key"
                    v-bind="column.props || column"
                    :request="request"
                    v-on="column.events"
                    @order="id => $emit('order', id)" />
            </tr>
        </thead>

        <tbody>
            <tr v-if="loading">
                <td :colspan="tableColumns.length" class="position-relative" :style="{'height': height(minHeight)}">
                    <activity-indicator :center="true" />
                </td>
            </tr>

            <tr v-else-if="!data.length">
                <td :colspan="tableColumns.length" class="position-relative">
                    <alert variant="warning" class="my-3">
                        <font-awesome-icon icon="exclamation-triangle" /> There are no results found.
                    </alert>
                </td>
            </tr>

            <slot v-else :data="data" :columns="tableColumns">
                <tr v-for="(row, x) in data" :key="x">
                    <td v-for="(column, y) in tableColumns" :key="y" v-html="row[column.id] || row[column.name]" />
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
                            @paginate="(page, event) => $emit('paginate', page, event)" />
                    </slot>
                </td>
            </tfoot>
        </slot>
    </table>
</template>

<script>
import Alert from '../Alert';
import unit from '../../Helpers/Unit';
import Pagination from '../Pagination';
import TableViewHeader from './TableViewHeader';
import ActivityIndicator from '../ActivityIndicator';
import { each, isObject } from '../../Helpers/Functions';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';

library.add(faExclamationTriangle);

export default {

    components: {
        Alert,
        Pagination,
        FontAwesomeIcon,
        TableViewHeader,
        ActivityIndicator
    },

    props: {

        // (array) An array of table column
        // [{id: 'database_id', name: 'Database id', width: '20%'}]
        columns: {
            type: Array,
            default: () => {
                return [];
            }
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
        },

        // (bool) The HTTP request
        request: Object,

        // (bool) The HTTP request
        response: Object

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
    },

    methods: {

        height(min) {
            const elements = [
                this.$el.querySelector('tbody')
            ];

            let height = 0;

            each(elements, el => {
                height += el.getBoundingClientRect().height;
            });

            return unit(Math.max(min, height));
        }

    }

};
</script>
