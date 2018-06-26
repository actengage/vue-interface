# wait()

Wait a minimum amount of time before a task complete before continuing. This function is useful when a task may take a varying amount of time to complete and UI update needs to be consistent. This is most useful to ensure an activity indicator is visible for a certain amount of time so the user knows something happened. Sometimes a task my happen so fast, a UI may not be perceived and a user wouldn't know if some activity occurred. If the `wait` function is called before the promise is resolved, the timer will reset.

@return Promise

    // Wait at least 500ms before the task is considered complete.
    wait(500, (resolve, reject) => {
        console.log('do something!')
    }).then(response => {
        console.log('finished! `response` is value returned be the callback')
    }, error => {
        console.log(error);
    });
