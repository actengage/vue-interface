# transition(el)

Read CSS transition delay and return a promise that gets executed after delay.
If no element delay, then promise will be called immediately.

@param  DOMElement  The File object from the file field
@return Promise

    transition(el).then(delay => {
        console.log('delayed!', delay);
    });
