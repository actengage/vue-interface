<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination" :class="classes">
        	<li class="page-item" :class="{'disabled': currentPage === 1}">
        		<a href="#" class="page-link" aria-label="Previous" @click.prevent="prev($event)">
        			<span aria-hidden="true">&laquo;</span>
        		</a>
        	</li>
            <li v-for="item in pages" :data-page="item.page" class="page-item" :class="{'active': item.page === currentPage, 'disabled': !!item.divider}">
                <slot :item="item">
                    <a v-if="item.divider" class="page-link">&hellip;</a>
                	<a v-else href="#" class="page-link" :class="item.class" :data-label="item.label" @click.prevent="paginate(item.page, $event)">
                		<span v-if="item.label" aria-hidden="true" v-html="item.label"></span>
                		<span v-if="item.page" aria-hidden="true" v-html="item.page"></span>
                	</a>
                </slot>
            </li>
        	<li class="page-item" :class="{'disabled': currentPage >= totalPages}">
        		<a href="#" class="page-link" aria-label="Next" @click.prevent="next($event)">
        			<span aria-hidden="true">&raquo;</span>
        		</a>
            </li>
        </ul>
    </nav>

</template>

<script>
export default {

    name: 'pagination',

    props: {
        /**
         * The alignment of the pagination component.
         *
         * @prop String
         */
        align: {
            type: String,
            validate: value => {
                return ['start', 'end', 'center', 'between', 'around'].indexOf(value) !== -1;
            }
        },

        /**
         * The page on which the paginator should start.
         *
         * @prop String
         */
        page: {
            type: Number,
            default: 1
        },

        /**
         * The total number of pages in the paginator.
         *
         * @prop String
         */
        totalPages: {
            type: Number,
            default: 1
        },

        /**
         * The number of pages to show when the total number of pages is
         * greater than the number of pages that should be shown.
         *
         * @prop String
         */
        showPages: {
            type: Number,
            default: 6
        },

        onPaginate: Function
    },

    methods: {

        next(event) {
            this.paginate(this.currentPage >= this.totalPages ? this.currentPage : this.currentPage + 1, event);
        },

        prev(event) {
            this.paginate(this.currentPage <= 1 ? this.currentPage : this.currentPage - 1, event);
        },

        paginate(page, event) {
            if(event.currentTarget.parentNode.classList.contains('disabled')) {
                return;
            }

			this.setActivePage(page);

            if(this.onPaginate) {
                this.onPaginate(page, event);
            }

            this.$emit('paginate', page, event);
        },

		setActivePage(page) {
			if(this.currentPage !== page) {
				this.currentPage = page;
			}
		},

        generate() {
            const pages = [];
            const showPages = this.showPages % 2 ? this.showPages + 1: this.showPages;

            let startPage = (this.currentPage >= showPages) ? this.currentPage - (showPages / 2) : 1;
            const startOffset = showPages + startPage;
            const endPage = (this.totalPages < startOffset) ? this.totalPages : startOffset;
            const diff = startPage - endPage + showPages;

            startPage -= (startPage - diff > 0) ? diff : 0;

            if (startPage > 1) {
                pages.push({page: 1});
            }

            if(startPage > 2) {
                pages.push({divider: true});
            }

            for(let i = startPage; i < endPage; i++) {
                pages.push({page: i});
            }

            if (endPage <= this.totalPages) {
                if(this.totalPages - 1 > endPage) {
                    pages.push({divider: true});
                }

                pages.push({page: this.totalPages});
            }

            return pages;
        }

    },

    computed: {

        pages() {
            return this.generate();
        },

        classes() {
            const classes = {};

            classes['justify-content-' + this.align] = true;

            return classes;
        }

    },

    data() {
        return  {
            currentPage: this.page
        };
    }

};
</script>
