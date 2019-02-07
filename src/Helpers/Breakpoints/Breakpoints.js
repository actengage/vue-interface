import { debounce } from '@/Helpers/Functions';

function onResize(wait) {
    return debounce(event => {
        console.log(event);   
    }, wait);
}

const defaultOptions = {
    wait: 250
};

export default function breakpoints(container, breakpoints, options) {
    if(!(container instanceof HTMLElement)) {
        breakpoints = container;
    }

    options = Object.assign({}, defaultOptions, options);

    window.addEventListener('resize', onResize(options.wait));
   
    // window.removeEventListener('resize', onResize);
}