import { get, kebabCase } from '../../Helpers/Functions';

export default {

    inserted(el, binding, vnode) {
        const input = el.querySelector('input, textarea') || el;
        const value = get(vnode.context, binding.expression);

        let editable = !input.value;

        const update = value => {
            if (editable) {
                input.value = kebabCase(value);
                input.dispatchEvent(new Event('input'));
            }
        };

        vnode.context.$watch(binding.expression, update);

        input.addEventListener('keyup', event => {
            input.value = kebabCase(event.target.value) + (
                event.target.value.match(/\s$/) ? ' ' : ''
            );
        });

        input.addEventListener('input', event => {
            if (event instanceof InputEvent) {
                editable = !event.target.value;
            }
        });

        input.addEventListener('blur', event => {
            input.value = kebabCase(event.target.value || binding.expression.split('.').reduce((o, i) => o[i], vnode.context));
            input.dispatchEvent(new Event('input'));
        });

        !input.value && update(value);
    }

};
