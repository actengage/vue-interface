# readFile(file, [progress])

Read the uploaded File object

@param  File  The File object from the file field
@param  Function  A callback function for the loading progress
@return Promise

    const file = document.querySelector('[type=file]').files[0];

    readFile(file, e => {
        if(e.lengthComputable) {
            console.log('loaded', parseInt((e.loaded / e.total) * 100, 10));
        }
    }).then(e => {
        console.log('file', e.target.result);
    }, error => {
        console.log('error', error);
    });
