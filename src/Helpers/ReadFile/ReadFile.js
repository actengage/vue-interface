import { isFunction } from 'lodash-es';

export default function readFile(file, progress) {
    if(!(file instanceof File)) {
        throw new Error('The first argument be an instance of File object.');
    }

    return new Promise((resolve, reject) => {
        const reader = new FileReader;

        if(isFunction(progress)) {
            reader.onprogress = e => progress(e, reader);
        }

        reader.onload = e => resolve(e);
        reader.onerror = e => reject(e);
        reader.onabort = e => reject(e);
        reader.readAsDataURL(file);
    });
}
