import { wrap } from 'lodash-es';
import { isFunction } from 'lodash-es';

export default function elapsed(milliseconds, callback, elapsedCallback) {
    let hasElapsed = false;

    function start() {
        return setInterval(() => {
            hasElapsed = true;

            if(isFunction(elapsedCallback)) {
                elapsedCallback();
            }
        }, milliseconds)
    }

    function stop() {
        clearInterval(interval);
    }

    const interval = start(), promise = new Promise((resolve, reject) => {
        function resolver(resolver, response) {
            return resolver(response || hasElapsed);
        };

        callback(wrap(resolve, resolver), wrap(reject, resolver));
    });

    return promise.finally(stop, stop);
}
