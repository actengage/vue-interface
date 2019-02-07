import { isFunction } from '../Functions';

export default function readFile(file, progress) {
    if(!(file instanceof Blob)) {
        throw new Error('The first argument be an instance of Blob object.');
    }

    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        if(isFunction(progress)) {
            reader.onprogress = e => progress(e, reader);
        }

        reader.onload = e => resolve(e);
        reader.onerror = e => reject(e);
        reader.onabort = e => reject(e);
        reader.readAsDataURL(file);
    });
}
