import { isUndefined } from '../../Helpers/Functions';
import transition from '../../Helpers/Transition';

function show(el, target, vnode) {
    target.classList.remove('collapse');
    target.classList.add('show');
    target.$collapsedHeight = getComputedStyle(target).height;
    target.classList.add('collapsing');

    vnode.context.$nextTick(() => {
        target.style.height = target.$collapsedHeight;
    });

    transition(target).then(delay => {
        target.style.height = null;
        target.classList.add('collapse');
        target.classList.remove('collapsing');
        el.classList.remove('collapsed');
    });
}

function hide(el, target, vnode) {
    target.style.height = target.$collapsedHeight;
    target.classList.add('collapsing');
    target.classList.remove('collapse');

    vnode.context.$nextTick(() => {
        target.style.height = 0;
    });

    transition(target).then(delay => {
        target.style.height = null;
        target.classList.add('collapse');
        target.classList.remove('show', 'collapsing');
        el.classList.add('collapsed');
    });
}

export default {

    inserted(el, binding, vnode) {
        if(isUndefined(binding.value) || binding.value === true) {
            el.classList.add('collapsed');
            el.setAttribute('data-toggle', 'collapse');

            const target = el.getAttribute('data-target') || el.getAttribute('href');
            const elements = document.querySelectorAll(target);

            el.addEventListener('click', event => {
                elements.forEach(element => {
                    if(!element.classList.contains('show')) {
                        show(el, element, vnode);
                    }
                    else {
                        hide(el, element, vnode);
                    }
                });

                event.preventDefault();
            });

            elements.forEach(element => {
                /*
                if(!element.$collapsedHeight) {
                    element.$collapsedHeight = getComputedStyle(element).height;
                }
                */

                if(!element.classList.contains('collapse')) {
                    element.classList.add('collapse');
                }
            });
        }
    }

};
