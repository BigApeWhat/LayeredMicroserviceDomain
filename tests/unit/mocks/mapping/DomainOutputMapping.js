const SortOptions = require('../../../../cryptocurrency/common/utils/CurrencySortEnum').SortOptions;
const SortObject = require('../../../../cryptocurrency/common/utils/CurrencySortEnum').SortObject;

const formulatePath = [
    {
        desc: 'happy path with rank and new property power_performace set to 0',
        response: [{ rank: 4, power_performace: 0 }],
        data: [{ rank: 4 }]
    },
    {
        desc: 'happy path with rank and new property power_performace set to 1',
        response: [{ rank: 40, power_performace: 1 }],
        data: [{ rank: 40 }]
    },
    {
        desc: 'happy path with rank and new property power_performace set to 2',
        response: [{ rank: 60, power_performace: 2 }],
        data: [{ rank: 60 }]
    },
    {
        desc: 'happy path with rank and new property power_performace set to 3',
        response: [{ rank: 240, power_performace: 3 }],
        data: [{ rank: 240 }]
    },
    {
        desc: 'happy path with rank and new property power_performace set to 4',
        response: [{ rank: 540, power_performace: 4 }],
        data: [{ rank: 540 }]
    },
    {
        desc: 'happy path with rank and new property power_performace set to 5',
        response: [{ rank: 1140, power_performace: 5 }],
        data: [{ rank: 1140 }]
    },
    {
        desc: 'happy path with no rank but new property power_performace set to 5',
        response: [{ notRank: 2, power_performace: 5 }],
        data: [{ notRank: 2 }]
    },
    {
        desc: 'happy path with a sample list with rank and new property power_performace set accordingly',
        response: [{ rank: 55, power_performace: 2 }, { rank: 21, power_performace: 1 }, { rank: 1323, power_performace: 5 }, { rank: 222, power_performace: 3 }, { rank: 2, power_performace: 0 }, { rank: 555, power_performace: 4 }],
        data: [{ rank: 55 }, { rank: 21 }, { rank: 1323 }, { rank: 222 }, { rank: 2 }, { rank: 555 }]
    }
];

const refinePath = [
    {
        desc: 'happy path with rank == 2, is_active == true, expected global_choice == true',
        response: [{ rank: 2, is_active: true, power_performace: 0, global_choice: true }],
        data: [{ rank: 2, is_active: true }]
    },
    {
        desc: 'happy path with rank == 50, is_active == true, expected global_choice == true',
        response: [{ rank: 50, is_active: true, power_performace: 1, global_choice: true }],
        data: [{ rank: 50, is_active: true }]
    },
    {
        desc: 'happy path with rank == 125, is_active == true, expected global_choice == false',
        response: [{ rank: 125, is_active: true, power_performace: 2, global_choice: false }],
        data: [{ rank: 125, is_active: true }]
    },
    {
        desc: 'happy path with rank == 1, is_active == false, expected global_choice == false',
        response: [{ rank: 1, is_active: false, power_performace: 0, global_choice: false }],
        data: [{ rank: 1, is_active: false }]
    },
    {
        desc: 'happy path with rank == 12, is_active == false, expected global_choice == false',
        response: [{ rank: 12, is_active: false, power_performace: 1, global_choice: false }],
        data: [{ rank: 12, is_active: false }]
    },
    {
        desc: 'happy path with rank == 523, is_active == false, expected global_choice == false',
        response: [{ rank: 523, is_active: false, power_performace: 4, global_choice: false }],
        data: [{ rank: 523, is_active: false }]
    }
];

const sortPath = [
    {
        desc: 'happy path with a sample list in no order, set no order properties, expected default ordering which is ascending rank',
        sortOptions: {},
        response: [{ rank: 2, power_performace: 0 }, { rank: 21, power_performace: 1 }, { rank: 55, power_performace: 2 }, { rank: 222, power_performace: 3 }, { rank: 555, power_performace: 4 }, { rank: 1323, power_performace: 5 }],
        data: [{ rank: 55 }, { rank: 21 }, { rank: 1323 }, { rank: 222 }, { rank: 2 }, { rank: 555 }]
    },
    {
        desc: 'happy path with a sample list in no order, set order by rank property, expected order by ascending rank',
        sortOptions: { sortBy: SortObject.rank },
        response: [{ rank: 2, power_performace: 0 }, { rank: 21, power_performace: 1 }, { rank: 55, power_performace: 2 }, { rank: 222, power_performace: 3 }, { rank: 555, power_performace: 4 }, { rank: 1323, power_performace: 5 }],
        data: [{ rank: 55 }, { rank: 21 }, { rank: 1323 }, { rank: 222 }, { rank: 2 }, { rank: 555 }]
    },
    {
        desc: 'happy path with a sample list in no order, set order otions by asc property, expected order by ascending rank',
        sortOptions: { sortOptions: SortOptions.asc },
        response: [{ rank: 2, power_performace: 0 }, { rank: 21, power_performace: 1 }, { rank: 55, power_performace: 2 }, { rank: 222, power_performace: 3 }, { rank: 555, power_performace: 4 }, { rank: 1323, power_performace: 5 }],
        data: [{ rank: 55 }, { rank: 21 }, { rank: 1323 }, { rank: 222 }, { rank: 2 }, { rank: 555 }]
    },
    {
        desc: 'happy path with a sample list in no order, set order by rank and asc property, expected order by ascending rank',
        sortOptions: { sortBy: SortObject.rank, sortOptions: SortOptions.asc },
        response: [{ rank: 2, power_performace: 0 }, { rank: 21, power_performace: 1 }, { rank: 55, power_performace: 2 }, { rank: 222, power_performace: 3 }, { rank: 555, power_performace: 4 }, { rank: 1323, power_performace: 5 }],
        data: [{ rank: 55 }, { rank: 21 }, { rank: 1323 }, { rank: 222 }, { rank: 2 }, { rank: 555 }]
    },
    {
        desc: 'happy path with a sample list in no order, set order by dsc property, expected order by descending rank',
        sortOptions: { sortOptions: SortOptions.dsc },
        response: [{ rank: 1323, power_performace: 5 }, { rank: 555, power_performace: 4 }, { rank: 222, power_performace: 3 }, { rank: 55, power_performace: 2 }, { rank: 21, power_performace: 1 }, { rank: 2, power_performace: 0 }],
        data: [{ rank: 55 }, { rank: 21 }, { rank: 1323 }, { rank: 222 }, { rank: 2 }, { rank: 555 }]
    },
    {
        desc: 'happy path with a sample list in no order, set order by rank and dsc property, expected order by descending rank',
        sortOptions: { sortBy: SortObject.rank, sortOptions: SortOptions.dsc },
        response: [{ rank: 1323, power_performace: 5 }, { rank: 555, power_performace: 4 }, { rank: 222, power_performace: 3 }, { rank: 55, power_performace: 2 }, { rank: 21, power_performace: 1 }, { rank: 2, power_performace: 0 }],
        data: [{ rank: 55 }, { rank: 21 }, { rank: 1323 }, { rank: 222 }, { rank: 2 }, { rank: 555 }]
    },
    {
        desc: 'happy path with a sample list in no order, set order by id property, expected order by ascending id',
        sortOptions: { sortBy: SortObject.id },
        response: [{ rank: 1323, id: 2, power_performace: 5 }, { rank: 21, id: 8, power_performace: 1 }, { rank: 2, id: 31, power_performace: 0 }, { rank: 222, id: 32, power_performace: 3 }, { rank: 555, id: 66, power_performace: 4 }, { rank: 55, id: 88, power_performace: 2 }],
        data: [{ rank: 55, id: 88 }, { rank: 21, id: 8 }, { rank: 1323, id: 2 }, { rank: 222, id: 32 }, { rank: 2, id: 31 }, { rank: 555, id: 66 }]
    },
    {
        desc: 'happy path with a sample list in no order, set order by id and descending property, expected order by descending id',
        sortOptions: { sortBy: SortObject.id, sortOptions: SortOptions.dsc },
        response: [{ rank: 55, id: 88, power_performace: 2 }, { rank: 555, id: 66, power_performace: 4 }, { rank: 222, id: 32, power_performace: 3 }, { rank: 2, id: 31, power_performace: 0 }, { rank: 21, id: 8, power_performace: 1 }, { rank: 1323, id: 2, power_performace: 5 }],
        data: [{ rank: 55, id: 88 }, { rank: 21, id: 8 }, { rank: 1323, id: 2 }, { rank: 222, id: 32 }, { rank: 2, id: 31 }, { rank: 555, id: 66 }]
    }
];

module.exports = {
    getFormulatePath() {
        return formulatePath;
    },
    getRefinePath() {
        return refinePath;
    },
    getSortPath() {
        return sortPath;
    }
};
