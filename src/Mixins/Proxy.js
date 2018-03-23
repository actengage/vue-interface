import { isFunction } from 'lodash';

export default {

    methods: {
        proxy(callback, event) {
            if(isFunction(callback)) {
                callback.apply(this, [].slice.call(arguments).splice(1));
                event.preventDefault();
            }
        }
    }

}
