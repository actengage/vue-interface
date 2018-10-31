const easings = {
    linear(t) {
        return t;
    },
    easeInQuad(t) {
        return t * t;
    },
    easeOutQuad(t) {
        return t * (2 - t);
    },
    easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic(t) {
        return t * t * t;
    },
    easeOutCubic(t) {
        return (--t) * t * t + 1;
    },
    easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart(t) {
        return t * t * t * t;
    },
    easeOutQuart(t) {
        return 1 - (--t) * t * t * t;
    },
    easeInOutQuart(t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
    },
    easeInQuint(t) {
        return t * t * t * t * t;
    },
    easeOutQuint(t) {
        return 1 + (--t) * t * t * t * t;
    },
    easeInOutQuint(t) {
        return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
    }
};

export default function scrollTo(destination, duration = 1000, easing = 'easeInQuad', viewport = false) {
    if (!viewport) {
        viewport = document.querySelector('body');
    }

    const viewportBounds = viewport.getBoundingClientRect();
    const destinationBounds = destination.getBoundingClientRect();
    const destinationOffsetToScroll = Math.ceil(destinationBounds.top + document.documentElement.scrollTop);

    function isScrollBottom() {
        return document.documentElement.scrollTop >= Math.floor(viewportBounds.height) - window.innerHeight;
    }

    return new Promise((resolve, reject) => {
        const startTime = performance.now();
        const isStartingBottom = isScrollBottom();

        function scroll() {
            const start = document.documentElement.scrollTop;
            const time = Math.min(1, ((performance.now() - startTime) / duration));
            const timeFunction = easings[easing](time);

            window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

            if (document.documentElement.scrollTop === destinationOffsetToScroll || (isScrollBottom() && !isStartingBottom)) {
                resolve();
                return;
            }

            requestAnimationFrame(scroll);
        }

        scroll();
    });
}
