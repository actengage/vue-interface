<template>

    <div class="table-view">

        <slot name="buttons">
            <div v-if="buttons.length" class="buttons-wrapper pull-right">
                <span>
            		<a v-for="(button, key) in buttons"
                        :href="button.href || '#'"
                        :class="button.className || 'btn btn-primary'"
                        @click="proxy(button.onClick, $event)">
                        <i v-if="button.icon" :class="button.icon"></i>
                        <span v-html="button.label"></span>
                    </a>
                </span>
            </div>
        </slot>

        <slot name="header">
            <div class="table-view-header">
                <slot name="heading"><h3 v-if="heading" v-html="heading"></h3></slot>
                <slot name="description"><p v-if="description" v-html="description"></p></slot>
            </div>
        </slot>

        <table class="table" :class="{'table-hover': !loading}">

            <slot name="thead">
            	<thead>
            		<tr>
            			<th scope="col" :width="column.width" v-for="column in tableColumns">
            			    <div v-if="column.id">
            					<a href="#" class="sort" :data-id="column.id" @click.prevent="orderBy(column.id)" v-html="column.name || column.id"></a>
            					<i v-if="request.params.order === column.id && request.params.sort === 'asc'" class="sort-icon fa fa-sort-asc"></i>
            					<i v-if="request.params.order === column.id && request.params.sort === 'desc'" class="sort-icon fa fa-sort-desc"></i>
            				</div>
                            <div v-else v-html="column.name"></div>
            			</th>
            		</tr>
            	</thead>
            </slot>

            <slot name="tbody">
                <tbody>
                    <tr v-if="loading">
                        <td :colspan="tableColumns.length" class="position-relative" :style="{'height': height(minHeight)}">
                            <activity-indicator :center="true"></activity-indicator>
                        </td>
                    </tr>

                    <slot v-else :data="data" :columns="tableColumns">
                        <tr v-for="(row, i) in data">
                            <td v-for="column in tableColumns" v-html="row[column.id] || row[column.name]"></td>
                        </tr>
                    </slot>
                </tbody>
            </slot>

            <slot name="tfoot">
            	<tfoot>
            		<td :colspan="tableColumns.length" class="table-view-footer">
                        <slot name="pagination">
                            <pagination
                                v-if="paginate && response"
                                align="center"
                                :page="response.current_page"
                                :total-pages="response.last_page"
                                :on-paginate="onPaginate"
                            />
                        </slot>
                    </td>
            	</tfoot>
            </slot>

        </table>

    </div>

</template>

<script>
import { keys } from 'lodash';
import { each } from 'lodash';
import { extend } from 'lodash';
import { isObject } from 'lodash';
import Proxy from '@/Toolbox/Mixins/Proxy';
import Request from '@/Toolbox/Http/Request';
import Pagination from '@/Toolbox/Pagination/Pagination';
import ActivityIndicator from '@/Toolbox/ActivityIndicators/ActivityIndicator';
import TableViewTransformer from '@/Toolbox/Http/Transformers/TableViewTransformer';

export default {
    name: 'table-view',

    mixins: [Proxy],

    components: {
        Pagination,
        ActivityIndicator
    },

    props: {
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

    computed: {
        tableColumns() {
            let columns = this.columns;

            if(!columns || !columns.length) {
                columns = keys(this.data[0]);
            }

            return columns.map(column => {
                return isObject(column) ? column : {
                    name: column
                };
            });
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

        height(min) {
            const elements = [
                // this.$el.querySelector('thead'),
                this.$el.querySelector('tbody')
            ];

            let height = 0;

            each(elements, el => {
                height += el.getBoundingClientRect().height;
            });

            return Math.max(min, height) + 'px';
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

    /*
    data() {
        return extend({
            buttons: [],

            columns: [],

            header: false,

            description: false,

            // (bool) Should show the pagination for this table
            paginate: true,

            // (bool) Is the table currently loading data
            loading: false,

            // (object) An object with key/value pairs for components used in the template
            components: {
                // (string) The name of the component used for the table header
                header: 'table-view-header',

                // (string) The name of the component used for the table row
                row: 'table-view-row',

                // (string) The name of the component used for the table row
                footer: 'table-view-footer'
            },

            // (int) The starting page
            // page: 1,

            // (string) The order of the date being returned
            // order: null,

            // (string) Either asc or desc sorting order
            // sort: null,

            // (int) The numbers of rows per page
            // limit: 20,

            // (bool) Fetch the data when table is shown
            // fetchOnRender: true,

            // (array) An array of headers appended to the request
            // requestHeaders: [],

            // (array) The default options used to generate the query string
            // defaultRequestDataOptions: [
            //    'page',
            //    'limit',
            //    'order',
            //    'sort'
            // ],

            // (object) An option to pass an object with request data
            // requestData: {},

            // (array) Additional options used to generate the query string
            // requestDataOptions: [],

            // (object) The body view options object
            // bodyViewOptions: false,

            // (object) The pagination view class
            // footerView: 'pagination',

            // (object) The pagination view options object
            // footerViewOptions: false,

            // (string) The table footer class name
            // footerClassName: 'table-header',

            // (string) The table header
            // header: false,

            // (string) The table header tag name
            // headerTagName: 'h3',

            // (string) The table header class name
            // headerClassName: 'table-header',

            // (object) The header view class
            // headerView: false,

            // (object) The header view options object
            // headerViewOptions: false,

            // (string) The table description
            // description: false,

            // (string) The table description tag
            // descriptionTag: 'p',

            // (string) The table description tag
            // descriptionClassName: 'description row col-sm-6',

            // (string) The table class name
            // tableClassName: 'table',

            // (string) The loading class name
            // loadingClassName: 'loading',

            // (string) The name of the property in the model storing the columns
            // childViewColumnsProperty: 'columns',

            // (object) The activity indicator options
            // indicatorOptions: {
            //     indicator: 'small'
            // },

            // (string) The message to display if there are no table rows
            // emptyMessage: 'No rows found',

            // (string) The name of the class appended to the buttons
            // buttonClassName: 'btn btn-default',
        }, this.$attrs);
    },
    */

    beforeDestroy() {
        this.$off();
    }
}

</script>
