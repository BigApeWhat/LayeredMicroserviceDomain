const ServiceError = require('../../../../modules/error');

const combinedIntegratorHappyPath = [
    {
        desc: 'Check that both list and single list will be combined and sorted by dsc id',
        inputArg: { id: '1' },
        response: [{ rank: 3, id: 5324 }, { rank: 165, id: 344 }, { rank: 55, id: 134 }],
        list: [{ rank: 55, id: 134 }, { rank: 165, id: 344 }],
        single: [{ rank: 3, id: 5324 }]
    },
    {
        desc: 'Check that both list and single list will be combined and sorted by asc id',
        inputArg: { id: '1', sort: 'asc', sortBy: 'id' },
        response: [{ rank: 55, id: 134 }, { rank: 165, id: 344 }, { rank: 3, id: 5324 }],
        list: [{ rank: 55, id: 134 }, { rank: 165, id: 344 }],
        single: [{ rank: 3, id: 5324 }]
    },
    {
        desc: 'Check that both list and single list will be combined and sorted by dsc rank',
        inputArg: { id: '1', sortBy: 'rank' },
        response: [{ rank: 165, id: 344 }, { rank: 55, id: 134 }, { rank: 3, id: 5324 }],
        list: [{ rank: 55, id: 134 }, { rank: 165, id: 344 }],
        single: [{ rank: 3, id: 5324 }]
    },
    {
        desc: 'Check that both list and single list will be combined and sorted by asc rank',
        inputArg: { id: '1', sort: 'asc', sortBy: 'rank' },
        response: [{ rank: 3, id: 5324 }, { rank: 55, id: 134 }, { rank: 165, id: 344 }],
        list: [{ rank: 55, id: 134 }, { rank: 165, id: 344 }],
        single: [{ rank: 3, id: 5324 }]
    }
];

const combinedIntegratorFailingPath = [
    {
        desc: 'No id passed',
        inputArg: { sort: 'asc', sortBy: 'rank' },
        err: 'Id is a required query parameter for this call',
        list: [{ rank: 55, id: 134 }, { rank: 165, id: 344 }],
        single: [{ rank: 3, id: 5324 }]
    },
    {
        desc: 'List crypto structure is object instead of array',
        inputArg: { id: '4', sort: 'asc', sortBy: 'rank' },
        err: 'Invalid input paramaters to function',
        list: { rank: 165, id: 344 },
        single: [{ rank: 3, id: 5324 }]
    },
    {
        desc: 'Single crypo structure is object instead of array',
        inputArg: { id: '4', sort: 'asc', sortBy: 'rank' },
        err: 'Invalid input paramaters to function',
        list: [{ rank: 55, id: 134 }, { rank: 165, id: 344 }],
        single: { rank: 3, id: 5324 }
    },
    {
        desc: 'List crypto structure is string instead of array',
        inputArg: { id: '4', sort: 'asc', sortBy: 'rank' },
        err: 'Invalid input paramaters to function',
        list: 'stingy',
        single: [{ rank: 3, id: 5324 }]
    },
    {
        desc: 'Single crypo structure is string instead of array',
        inputArg: { id: '4', sort: 'asc', sortBy: 'rank' },
        err: 'Invalid input paramaters to function',
        list: [{ rank: 55, id: 134 }, { rank: 165, id: 344 }],
        single: 'stingy'
    },
    {
        desc: 'Both list and Single crypo structure is boolean instead of array',
        inputArg: { id: '4', sort: 'asc', sortBy: 'rank' },
        err: 'Invalid input paramaters to function',
        list: true,
        single: true
    }
];

module.exports = {
    getCombinedIntegratorHappyPath() {
        return combinedIntegratorHappyPath;
    },
    getCombinedIntegratorFailingPath() {
        return combinedIntegratorFailingPath;
    }
};
