import Model from '../Model';
import Request from '../../Request/Request';
import { first } from '../../../Helpers/Functions';

Request.defaults.baseURL = 'http://kimbrell.test/';

class Media extends Model {
    endpoint() {
        return 'api/v1/media';
    }
}

test('model setters and getters', async() => {
    const model = new Media({
        id: 1
    });

    expect(model.exists()).toBe(true);
    expect(model.uri()).toBe('api/v1/media/1');
    expect(model.get('filename')).toBe(undefined);
    expect(model.id()).toBe(1);

    model.set('filename', 'test.jpg');

    expect(model.get('extension')).toBe(undefined);
    expect(model.get('filename')).toBe('test.jpg');

    model.fill({
        filename: 'test2.jpg',
        extension: 'jpg'
    });

    expect(model.get('extension')).toBe('jpg');
    expect(model.get('filename')).toBe('test2.jpg');
    expect(model.getChangedAttributes()).toHaveLength(2);
    expect(model.toString()).toBe(JSON.stringify({ 'id': 1, 'filename': 'test2.jpg', 'extension': 'jpg' }));
});

test('Model.search() and Model.find()', async() => {
    await Media.search().then(async response => {
        expect(response.data).toBeInstanceOf(Object);
        expect(response.data.current_page).toBe(1);

        const model = first(response.data.data);

        expect(model).toBeInstanceOf(Object);
        expect(typeof model.id).toBe('number');

        await Media.find(first.id).then(async model => {
            expect(model).toBeInstanceOf(Media);
        });
    });
});
