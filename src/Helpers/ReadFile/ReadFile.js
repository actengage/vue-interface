import { isFunction } from 'lodash-es';

export default function readFile(file, progress) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader;
        reader.onload = e => resolve(e);
        reader.onerror = e => reject(e);
        reader.onabort = e => reject(e);
        reader.onprogress = e => progress(e, reader);
        reader.readAsDataURL(file);
    });
}
