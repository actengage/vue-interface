const STYLE_ATTRIBUTES = [
    'font',
    'fontFamily',
    'fontKerning',
    'fontSize',
    'fontStretch',
    'fontStyle',
    'fontVariant',
    'fontVariantLigatures',
    'fontVariantCaps',
    'fontVariantNumeric',
    'fontVariantEastAsian',
    'fontWeight',
    'lineHeight',
    'letterSpacing',
    'padding',
    'margin',
    'textAlign',
    'textAlignLast',
    'textDecoration',
    'textDecorationLine',
    'textDecorationStyle',
    'textDecorationColor',
    'textDecorationSkipInk',
    'textDecorationPosition',
    'textIndent',
    'textRendering',
    'textShadow',
    'textSizeAdjust',
    'textOverflow',
    'textTransform',
    'width',
    'wordBreak',
    'wordSpacing',
    'wordWrap'
];

function int(str) {
    if(typeof str === 'number') {
        return str;
    }
    else if(!str || !str.replace) {
        return 0;
    }

    return parseInt(str.replace(/[^\d.]+/g, ''));
}

function input(div, el) {
    div.innerHTML = el.value.replace(/(?:\r\n|\r|\n)/g, '<br />');
}

function height(el) {
    return int(el.getBoundingClientRect().height);
}

function style(el, attr) {
    return window.getComputedStyle(el)[attr];
}

function resize(target, div, minHeight, maxHeight) {
    const dynamicHeight = Math.max(height(div) + int(style(div, 'lineHeight')), minHeight);
    target.style.height = ((!maxHeight || dynamicHeight < maxHeight) ? dynamicHeight : maxHeight) + 'px';
}

/*
function setMinHeight(div, el) {
    div.style.minHeight = height(el) + 'px';
}
*/

function mimic(el) {
    const div = document.createElement('div');
    const styles = window.getComputedStyle(el);

    for(let i in STYLE_ATTRIBUTES) {
        const key = STYLE_ATTRIBUTES[i];

        div.style[key] = styles[key];
    }

    div.style.position = 'absolute';
    div.style.bottom = '100%';
    div.style.zIndex = -1;
    div.style.visibility = 'hidden';

    return div;
}

function init(el, maxHeight) {
    const div = mimic(el);
    const minHeight = height(el);

    el.addEventListener('input', event => {
        input(div, event.target);
        resize(el, div, minHeight, maxHeight);
    });

    document.body.appendChild(div);

    input(div, el);
    resize(el, div, minHeight, maxHeight);
}

export default {

    inserted(el, binding, vnode) {
        if(el.tagName !== 'TEXTAREA') {
            el = el.querySelector('textarea');
        }

        if(!el) {
            throw new Error('A textarea is required for the v-autogrow directive.');
        }

        if(binding.value !== false) {
            init(el, binding.value);
        }
    }

};
