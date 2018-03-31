# Model

## Create a new model instance

    const model = new Model({
        first: 'John',
        last: 'Smith'
    });

    model.fill({
        age: 45    
    });

    model.save({
        middle: 'A',
        age: 50
    }).then(response => {
        //
    }, errors => {
        //
    })

    // {first: 'John', middle: 'A', last: 'Smith', age: 50}
