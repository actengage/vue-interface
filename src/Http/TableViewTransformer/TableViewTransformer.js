import { isArray } from '../../Helpers/Functions';
import Transformer from '../Transformer';

export default class TableViewTransformer extends Transformer {

    required() {
        return [
            // The end of the count of the paginated list.
            'to',

            // The start of the count of the paginated list.
            'from',

            // The total number of items (not just included in the pagination)
            'total',

            // The number of items per page
            'per_page',

            // The last page number (or total pages)
            'last_page',

            // The current page number
            'current_page',

            // The actual response data to appear in the table
            'data'
        ];
    }

    data() {
        return this.$transformedResponse.data;
    }

    initialize() {
        if(!isArray(this.data())) {
            throw new Error('The data property must be an array.');
        }
    }

}
