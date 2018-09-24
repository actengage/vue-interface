import { isFunction } from 'lodash-es';
import RequestOptions from './RequestOptions';

export default function transformResponse(transformer, context) {
    if(!isFunction(transformer)) {
        throw new Error('The transformer must be defined as a function (data).');
    }

    (context || RequestOptions.transformResponse).push(transformer);
}
