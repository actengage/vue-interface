import { wrap } from 'lodash-es';
import { findKey } from 'lodash-es';

const CALLBACKS = {};

function id(callback) {
    return findKey(CALLBACKS, compare => {
        return callback.toString() == compare.toString();
    });
}

function restart(callback, milliseconds) {
    stop(id(callback));
    start(callback, milliseconds);
}

function stop(id) {
    clearTimeout(id);
    delete CALLBACKS[id];
}

function start(callback, milliseconds) {
    return CALLBACKS[setTimeout(callback, milliseconds)] = callback;
}

export default function wait(milliseconds, callback) {
    return new Promise((resolve, reject) => {
        function resolver(resolver, response) {
            return resolver(response);
        };

        restart(wrap(callback, callback => {
            return callback(wrap(resolve, resolver), wrap(reject, resolver));
        }), milliseconds);
    });

    return promise.finally(stop, stop);
}


/*
import { wrap } from 'lodash-es';
import { isFunction } from 'lodash-es';

export default function elapsed(delay, callback, elapsedCallback) {
    let hasElapsed = false;

    function start() {
        return setInterval(() => {
            hasElapsed = true;

            if(isFunction(elapsedCallback)) {
                elapsedCallback();
            }
        }, delay)
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

 */
