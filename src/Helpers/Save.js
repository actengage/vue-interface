import { each } from 'lodash';
import { pull } from 'lodash';
import { clone } from 'lodash';
import { reduce } from 'lodash';
import { isArray } from 'lodash';
import Model from '@/Toolbox/Http/Model';

export default function save(models) {
    return new Promise((resolve, reject) => {
        const responses = [];

        if(!isArray(models)) {
            models = [models];
        }
        else if(!(models = clone(models)).length) {
            throw new Error('There must be at least one model to save.');
        }

        function finish() {
            const totalFailures = reduce(responses, (carry, response) => {
                return carry + (!response.status ? 1 : 0);
            });

            if(totalFailures === responses.length) {
                reject(responses);
            }
            else {
                resolve(responses);
            }
        }

        function next(status, model, data) {
            const response = {
                model: model,
                status: status
            };

            response[status ? 'response' : 'errors'] = data;
            responses.push(response);

            pull(models, model);

            if(models.length) {
                run(models[0]);
            }
            else {
                finish();
            }
        }

        function run(model) {
            model.save().then(response => {
                next(true, model, response);
            }, errors => {
                next(false, model, errors);
            });
        };

        run(models[0]);
    });
}
