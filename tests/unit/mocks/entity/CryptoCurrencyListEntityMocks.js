const ServiceError = require('../../../../modules/error');

const listEntityHappyPath = [
    {
        desc: 'List will be in asc order by rank',
        inputArg: { sort: 'asc' },
        response: [{ rank: 2, power_performace: 0, id: 674 }, { rank: 21, power_performace: 1, id: 168 }, { rank: 55, power_performace: 2, id: 134 }, { rank: 138, power_performace: 2, id: 798 }, { rank: 222, power_performace: 3, id: 877 }, { rank: 343, power_performace: 3, id: 265 }, { rank: 555, power_performace: 4, id: 719 }, { rank: 886, power_performace: 4, id: 441 }, { rank: 978, power_performace: 4, id: 273 }, { rank: 1323, power_performace: 5, id: 707 }],
        getListMock: [{ rank: 55, id: 134 }, { rank: 21, id: 168 }, { rank: 1323, id: 707 }, { rank: 222, id: 877 }, { rank: 2, id: 674 }, { rank: 555, id: 719 }, { rank: 978, id: 273 }, { rank: 138, id: 798 }, { rank: 343, id: 265 }, { rank: 886, id: 441 }]
    },
    {
        desc: 'List will be in dsc order by rank',
        inputArg: { sort: 'dsc' },
        response: [{ rank: 1323, power_performace: 5, id: 707 }, { rank: 978, power_performace: 4, id: 273 }, { rank: 886, power_performace: 4, id: 441 }, { rank: 555, power_performace: 4, id: 719 }, { rank: 343, power_performace: 3, id: 265 }, { rank: 222, power_performace: 3, id: 877 }, { rank: 138, power_performace: 2, id: 798 }, { rank: 55, power_performace: 2, id: 134 }, { rank: 21, power_performace: 1, id: 168 }, { rank: 2, power_performace: 0, id: 674 }],
        getListMock: [{ rank: 55, id: 134 }, { rank: 21, id: 168 }, { rank: 1323, id: 707 }, { rank: 222, id: 877 }, { rank: 2, id: 674 }, { rank: 555, id: 719 }, { rank: 978, id: 273 }, { rank: 138, id: 798 }, { rank: 343, id: 265 }, { rank: 886, id: 441 }]
    },
    {
        desc: 'List will not be sorted, no input properties',
        inputArg: undefined,
        response: [{ rank: 55, power_performace: 2, id: 134, global_choice: false }, { rank: 21, power_performace: 1, id: 168, global_choice: false }, { rank: 1323, power_performace: 5, id: 707, global_choice: false }, { rank: 222, power_performace: 3, id: 877, global_choice: false }, { rank: 2, power_performace: 0, id: 674, global_choice: false }, { rank: 555, power_performace: 4, id: 719, global_choice: false }, { rank: 978, power_performace: 4, id: 273, global_choice: false }, { rank: 138, power_performace: 2, id: 798, global_choice: false }, { rank: 343, power_performace: 3, id: 265, global_choice: false }, { rank: 886, power_performace: 4, id: 441, global_choice: false }],
        getListMock: [{ rank: 55, id: 134 }, { rank: 21, id: 168 }, { rank: 1323, id: 707 }, { rank: 222, id: 877 }, { rank: 2, id: 674 }, { rank: 555, id: 719 }, { rank: 978, id: 273 }, { rank: 138, id: 798 }, { rank: 343, id: 265 }, { rank: 886, id: 441 }]
    },
    {
        desc: 'List will be in dsc order by rank, added unused input properties',
        inputArg: { sort: 'dsc', limit: 2, this_is_fake: true },
        response: [{ rank: 1323, power_performace: 5, id: 707 }, { rank: 978, power_performace: 4, id: 273 }, { rank: 886, power_performace: 4, id: 441 }, { rank: 555, power_performace: 4, id: 719 }, { rank: 343, power_performace: 3, id: 265 }, { rank: 222, power_performace: 3, id: 877 }, { rank: 138, power_performace: 2, id: 798 }, { rank: 55, power_performace: 2, id: 134 }, { rank: 21, power_performace: 1, id: 168 }, { rank: 2, power_performace: 0, id: 674 }],
        getListMock: [{ rank: 55, id: 134 }, { rank: 21, id: 168 }, { rank: 1323, id: 707 }, { rank: 222, id: 877 }, { rank: 2, id: 674 }, { rank: 555, id: 719 }, { rank: 978, id: 273 }, { rank: 138, id: 798 }, { rank: 343, id: 265 }, { rank: 886, id: 441 }]
    },
    {
        desc: 'Ensure global choice is false when no is_active flag passed',
        response: [{ rank: 55, power_performace: 2, id: 134, global_choice: false }, { rank: 21, power_performace: 1, id: 168, global_choice: false }, { rank: 1323, power_performace: 5, id: 707, global_choice: false }, { rank: 222, power_performace: 3, id: 877, global_choice: false }],
        getListMock: [{ rank: 55, id: 134 }, { rank: 21, id: 168 }, { rank: 1323, id: 707 }, { rank: 222, id: 877 }]
    },
    {
        desc: 'Ensure global choice is true when no is_active is true and power_performace is 0 or 1 else false',
        response: [{ rank: 55, power_performace: 2, id: 134, global_choice: false, is_active: true }, { rank: 21, power_performace: 1, id: 168, global_choice: true, is_active: true }, { rank: 1323, power_performace: 5, id: 707, global_choice: false }, { rank: 222, power_performace: 3, id: 877, global_choice: false }],
        getListMock: [{ rank: 55, id: 134, is_active: true }, { rank: 21, id: 168, is_active: true }, { rank: 1323, id: 707 }, { rank: 222, id: 877 }]
    }
];

const listEntityFailingPath = [
    {
        desc: 'Passing an invalid sort option',
        inputArg: { sort: 'fsc' },
        err: 'Incorrect sort parameter',
        hits: false,
        list: {}
    },
    {
        desc: 'Getting mock list back with error through mocked call to repository, through sorting',
        inputArg: { sort: 'asc' },
        err: 'Some error',
        hits: true,
        list: new ServiceError('Some error')
    },
    {
        desc: 'Getting mock list back with error through mocked call to repository, through formulating',
        inputArg: { },
        err: 'Some error',
        hits: true,
        list: new ServiceError('Some error')
    }
];

module.exports = {
    getListEntityHappyPath() {
        return listEntityHappyPath;
    },
    getListEntityFailingPath() {
        return listEntityFailingPath;
    }
};
