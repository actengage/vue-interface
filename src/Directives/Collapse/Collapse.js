import { isFunction, isString, isArray } from '../../Helpers/Functions';
import transition from '../../Helpers/Transition';

function height(el) {
    const style = getComputedStyle(el);
    
    let height = el.offsetHeight;
  
    height += parseInt(style.marginTop) + parseInt(style.marginBottom);
    
    return height;
}

function show(el, target, vnode) {
    target.classList.remove('collapse');
    target.classList.add('show');
    target.$collapsedHeight = `${height(target)}px`;
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

function toggle(el, target, vnode) {
    if(!target.classList.contains('show')) {
        show(el, target, vnode);
    }
    else {
        hide(el, target, vnode);
    }
}

export default {

    inserted(el, binding, vnode) {
        // If the binding value is `false`, then do nothing.
        if(binding.value === false) {
            return;
        }

        // Get the collapsable target.
        const target = isFunction(binding.value) ? 
            binding.value(el, binding, vnode) : 
            (el.getAttribute('data-target') || el.getAttribute('href'));

        const targets = isString(target) ? document.querySelectorAll(target) : (
            !isArray(target) ? [target] : target
        );

        // Set the class and attribute so it matches the Boostrap 4 spec.
        // el.classList.add('collapsed');
        el.setAttribute('data-toggle', 'collapse');

        // Bind the toggle
        el.addEventListener('click', event => {
            targets.forEach(element => toggle(el, element, vnode));

            event.preventDefault();
        });

        targets.forEach(target => {
            if(target.classList.contains('show')) {
                target.$collapsedHeight = `${height(target)}px`;
            }
            else {
                target.classList.add('collapse');
            }
        });
    }

};
