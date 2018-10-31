import { wrap, findKey } from '../Functions';

const CALLBACKS = {};

function id(callback) {
    return findKey(CALLBACKS, compare => {
        return callback.toString() === compare.toString();
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
    CALLBACKS[setTimeout(callback, milliseconds)] = callback;
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
}
