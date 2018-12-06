import Request from '../Request';

Request.defaults.baseURL = 'http://kimbrell.test';

test('instantiating Request\'s', () => {
    expect(Request.make('GET', '/')).toBeInstanceOf(Request);
});

test('Request attribute setter/getter', () => {
    Request.defaults.headers = {
        d: 4,
        e: 5
    };

    const params = {
        a: 1,
        b: 2,
        c: 3
    };

    const request = Request.make('GET', '/', {
        headers: params,
        params: params,
        data: params
    });

    expect(request.options.headers.a).toBe(1);
    expect(request.options.headers.d).toBe(4);
    expect(request.options.headers.e).toBe(5);
    expect(request.options.params.a).toBe(1);
    expect(request.options.params.c).toBe(3);
    expect(request.options.params.d).toBe(undefined);
    expect(request.options.data.a).toBe(1);
    expect(request.options.data.c).toBe(3);
    expect(request.options.data.d).toBe(undefined);
    expect(request.getAttribute('data').a).toBe(1);
});

test('sending a GET request', async() => {
    await Request.get('api/v1/posts').then(response => {
        expect(response.data).toBeInstanceOf(Object);
        expect(response.data.current_page).toBe(1);
    });
});

test('transforming a response', async() => {
    // Set a global transformer
    Request.transform.response(data => {
        return JSON.parse(data);
    });

    await Request.get('api/v1/posts', {
        transformResponse: [data => 'test']
    }).then(response => {
        expect(response.data).toBe('test');
    });
});

test('transforming a request', async() => {
    // Set a global transformer
    Request.transform.request((data, headers) => {
        headers.test = 123;
        return data;
    });

    await Request.get('api/v1/posts').then(response => {
        expect(response.config.headers.test).toBe(123);
    });
});

test('cancelling a request', async() => {
    const request = Request.make('GET', 'api/v1/posts');

    request.send().then(response => {
        throw new Error('This should not succeed.');
    }, response => {
        expect(response.data.message).toBe('test');
    });

    request.cancel('test');
});
