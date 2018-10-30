import deepExtend from './deepExtend';

export default function cloneDeep(...args) {
    return deepExtend({}, ...args);
}
