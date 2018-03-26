import { isFunction } from 'lodash';

export default function readFile(file, progress) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader;

        reader.onload = e => resolve(e);
        reader.onerror = e => reject(e);
        reader.onabort = e => reject(e);

        reader.onprogress = e => {
            if(e.lengthComputable && isFunction(progress)) {
                progress(parseInt((e.loaded / e.total) * 100, 10));
            }
        };

        reader.readAsDataURL(file);
    });
}
