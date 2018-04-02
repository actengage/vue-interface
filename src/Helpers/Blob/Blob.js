import { isFunction } from 'lodash';

export default function blob(url, progress) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', url, true);
        xhr.responseType = 'blob';

        if(isFunction(progress)) {
            xhr.onprogress = e => progress(e, xhr);
        }

        xhr.onerror = e => reject(e);
        xhr.onabort = e => reject(e);
        xhr.onload = function(e) {
            if (this.status === 200) {
                resolve(this.response);
            }
            else {
                reject(e);
            }
        };

        xhr.send();
    });
}
