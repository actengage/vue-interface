import { isFunction } from 'lodash-es';
import RequestOptions from './RequestOptions';

export default function transformResponse(transformer, context) {
    if(!isFunction(transformer)) {
        throw new Error('The transformer must be a defined as a function with one arguments: [data].');
    }

    (context || RequestOptions.transformResponse).push(transformer);
}
