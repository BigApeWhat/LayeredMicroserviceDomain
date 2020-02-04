const ServiceError = require('../../../../modules/error');

const idEntityHappyPath = [
    {
        desc: 'Id is required field, check that rank 55 will have power_performace of 2',
        inputArg: { id: '1' },
        response: [{ rank: 55, power_performace: 2, id: 134 }],
        getSingleMock: [{ rank: 55, id: 134 }]
    },
    {
        desc: 'Id is required field, check that rank 512 will have power_performace of 4',
        inputArg: { id: '189' },
        response: [{ rank: 512, power_performace: 4, id: 134 }],
        getSingleMock: [{ rank: 512, id: 134 }]
    }
];

const idEntityFailingPath = [
    {
        desc: 'Passing an invalid negative id value',
        inputArg: { id: -23 },
        err: 'Invalid id parameter',
        hits: false,
        getSingleMock: {}
    },
    {
        desc: 'Passing an invalid unparsable id value',
        inputArg: { id: 'tra' },
        err: 'Invalid id parameter',
        hits: false,
        getSingleMock: {}
    },
    {
        desc: 'Passing without id property',
        inputArg: { },
        err: 'Id is a required query parameter for this call',
        hits: false,
        getSingleMock: {}
    },
    {
        desc: 'Getting mock list back with error through mocked call to repository',
        inputArg: { id: '32' },
        err: 'Some error',
        hits: true,
        getSingleMock: new ServiceError('Some error')
    }
];

module.exports = {
    getIdEntityHappyPath() {
        return idEntityHappyPath;
    },
    getIdEntityFailingPath() {
        return idEntityFailingPath;
    }
};
