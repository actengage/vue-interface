function duration(el) {
    const duration = getComputedStyle(el).transitionDuration;
    const numeric = parseFloat(duration, 10) || 0;
    const unit = duration.match(/m?s/);

    switch (unit[0]) {
    case 's':
        return numeric * 1000;
    case 'ms':
        return numeric;
    }
}

export default function transition(el) {
    return new Promise((resolve, reject) => {
        try {
            const delay = duration(el);

            setTimeout(() => {
                resolve(delay);
            }, delay);
        }
        catch (e) {
            reject(e);
        }
    });
}
