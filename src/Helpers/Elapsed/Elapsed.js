import { wrap } from '../Functions';
import { isFunction } from '../Functions';

export default function elapsed(milliseconds, callback, elapsedCallback) {
    let hasElapsed = false;

    function start() {
        return setTimeout(() => {
            hasElapsed = true;

            if(isFunction(elapsedCallback)) {
                elapsedCallback();
            }
        }, milliseconds)
    }

    function stop() {
        clearTimeout(interval);
    }

    const interval = start(), promise = new Promise((resolve, reject) => {
        function resolver(resolver, response) {
            return resolver(response || hasElapsed);
        };

        callback(wrap(resolve, resolver), wrap(reject, resolver));
    });

    return promise.finally(stop, stop);
}
