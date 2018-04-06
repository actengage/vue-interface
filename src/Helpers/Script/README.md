# script(url)

Add a script tag to the document and return a promise that is  resolved
once the script has been loaded.

@param  {String}  The script url
@param  {Function}  A callback function for the loading progress
@return {Promise}

    script(url).then(e => {
        // loaded
    }, e => {
        // error!
    });
