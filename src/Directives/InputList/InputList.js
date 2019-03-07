import { get, isNull, isEmpty, isUndefined, isArray } from "../../Helpers/Functions";

const TAB = 9;

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.lastSibling);
}

function input(child) {
    if(child.elm || child.$el) {
        child = child.elm || child.$el;
    }
    
    if(isUndefined(child.value)) {
        return child.querySelector('input, select, textarea');
    }
    
    return child;
}

function bindEvents(child, items) {
    const el = input(child);

    el.addEventListener('blur', e => {
        const index = Array.prototype.indexOf.call(child.parentNode.childNodes, child);

        if(isEmpty(e.target.value) && items.length > 1 && index < items.length - 1) {
            items.splice(index, 1);
        }
    });

    el.addEventListener('keydown', e => {
        if(e.keyCode === TAB) {
            if(!event.shiftKey && !isNull(items[items.length - 1])) {
                e.preventDefault();

                items.push(null);
            }
        }
    });

    child.$inputListControl = true;

    return el;
}

export default {

    inserted(el, binding, vnode) {
        if(!isArray(binding.value)) {
            throw Error('The v-input-list directive requires an array.');
        }
        
        vnode.context.$nextTick(() => {
            vnode.elm.childNodes.forEach(child => {
                bindEvents(child, binding.value);
            });

            if(!binding.value.length) {
                binding.value.push(null);
            }

            vnode.context.$watch(binding.expression, (value) => {
                Array.from(vnode.elm.childNodes)
                    .filter(child => !child.$inputListControl)
                    .forEach(child => {
                        bindEvents(child, value).focus();
                    });
            });
        });
    }

};
