# blob(url, [progress])

Read the url and return a Blob.

@param  String  The source url to be converted to a blob
@param  Function  A callback function for the loading progress
@return Promise

    blob(url, (e, xhr) => {
        // reader.abort();

        if(e.lengthComputable) {
            console.log('loaded', parseInt((e.loaded / e.total) * 100, 10));
        }
    }).then(blob => {
        console.log('blob', blob);
    }, error => {
        console.log('error', error);
    });
