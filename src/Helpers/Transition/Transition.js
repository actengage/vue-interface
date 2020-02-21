function duration(el, defaultValue = '0s') {
    let duration = (
        getComputedStyle(el).transitionDuration ||
        getComputedStyle(el).animationDuration
    );

    if(duration === '0s') {
        duration = defaultValue;
    }

    const numeric = parseFloat(duration, 10) || 0;
    const unit = duration.match(/m?s/);

    switch (unit[0]) {
        case 's':
            return numeric * 1000;
        case 'ms':
            return numeric;
    }
}

export default function transition(el, defaultValue) {
    return new Promise((resolve, reject) => {
        try {
            const delay = duration(el, defaultValue);

            setTimeout(() => {
                resolve(delay);
            }, delay);
        }
        catch (e) {
            reject(e);
        }
    });
}
