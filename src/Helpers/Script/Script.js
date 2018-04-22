const loaded = {};

function element(url) {
    const script = document.createElement('script');
    script.setAttribute('src', url);
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('charset', 'utf-8');
    return script;
}

function append(script) {
    if(document.querySelector('head')) {
        document.querySelector('head').appendChild(script);
    }
    else {
        document.querySelector('body').appendChild(script);
    }

    return script;
}

function script(url) {
    if(loaded[url] instanceof Promise) {
        return loaded[url];
    }

    return loaded[url] = new Promise((resolve, reject) => {
        try {
            if(!loaded[url]) {
                append(element(url)).addEventListener('load', event => {
                    resolve(loaded[url] = event);
                });
            }
            else {
                resolve(loaded[url]);
            }
        }
        catch(e) {
            reject(e);
        }
    });
}
