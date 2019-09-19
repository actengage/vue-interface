export default {

    inserted(el, binding, vnode) {
        if(!el.getAttribute('src') && el.getAttribute('data-src')) {
            if(el.getAttribute('data-src').match(/data\:/)) {
                el.src = el.getAttribute('data-src');
                el.removeAttribute('data-src');
            }
            else {
                const img = document.createElement('img');

                img.src = el.getAttribute('data-src');
                img.addEventListener('load', e => {
                    el.src = img.src;

                    if(binding.value instanceof Function) {
                        binding.value(img);
                    }
                });
            }
        }
    }

};