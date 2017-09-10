import * as KerasJS from 'keras-js'

export const dotModel = new KerasJS.Model({
    filepaths: {
        model: './models/dot.json',
        weights: './models/dot_weights.buf',
        metadata: './models/dot_metadata.json'
    },
    filesystem: true
});

export const nnModel = new KerasJS.Model({
    filepaths: {
        model: './models/nn.json',
        weights: './models/nn_weights.buf',
        metadata: './models/nn_metadata.json'
    },
    filesystem: true
});