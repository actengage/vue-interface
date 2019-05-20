import { get, isNull, isEmpty, isUndefined, isArray } from "../../Helpers/Functions";
import { isObject } from "util";

const TAB = 9;

function input(child) {
    if(child.elm || child.$el) {
        child = child.elm || child.$el;
    }
    
    if(isUndefined(child.value)) {
        return child.querySelector('input, select, textarea');
    }
    
    return child;
}

function bindEvents(child, items, defaultValue, vnode) {
    const el = input(child);

    el.addEventListener('blur', e => {
        const index = Array.prototype.indexOf.call(child.parentNode.childNodes, child);

        if(isEmpty(e.target.value) && items.length > 1 && index < items.length - 1) {
            items.splice(index, 1);
        }
        else if(!isNull(items[items.length - 1])) {
            items.push(defaultValue);
        }
    });

    el.addEventListener('keydown', e => {
        if(e.keyCode === TAB) {
            if(!event.shiftKey && !isNull(items[items.length - 1])) {
                items.push(defaultValue);
            }
        }
    });

    child.$inputListControl = true;

    return new Promise((resolve) => {
        vnode.context.$nextTick(() => resolve(el));
    });
}

export default {

    inserted(el, binding, vnode) {
        let items = binding.value;
        let defaultValue = null;
        let expression = binding.expression;

        if(isObject(items)) {
            if(items.items) {
                items = items.items;
                expression = 'items';
            }
            
            if(items.defaultValue) {
                defaultValue = items.defaultValue;
            }
        }
        
        if(!isArray(items)) {
            throw Error('The v-input-list directive requires an array.');
        }
        
        vnode.context.$nextTick(() => {
            vnode.elm.childNodes.forEach(child => {
                bindEvents(child, items, defaultValue, vnode);
            });

            if(!items.length) {
                vnode.context.$nextTick(() => items.push(defaultValue));
            }

            vnode.context.$watch(expression, (value) => {
                Array.from(vnode.elm.childNodes)
                    .filter(child => !child.$inputListControl)
                    .forEach(child => {
                        bindEvents(child, value, defaultValue, vnode).then(() => focus());
                    });
            });
        });
    }

};
