import { isFunction } from '../../Helpers/Functions';
import RequestOptions from './RequestOptions';

export default function transformRequest(transformer, context) {
    if(!isFunction(transformer)) {
        throw new Error('The transformer must be defined as a function with two arguments (data, headers).');
    }

    (context || RequestOptions.transformRequest).push(transformer);
}
