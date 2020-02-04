const SortOptions = require('../../../../cryptocurrency/common/utils/CurrencySortEnum').SortOptions;
const SortObject = require('../../../../cryptocurrency/common/utils/CurrencySortEnum').SortObject;

const sortHappyPath = [
    {
        desc: 'happy path sort by ascending rank',
        sortObject: SortObject.rank,
        sortOptions: SortOptions.asc,
        response: [{ rank: 2, id: 674 }, { rank: 21, id: 168 }, { rank: 55, id: 134 }, { rank: 138, id: 798 }, { rank: 222, id: 877 }, { rank: 343, id: 265 }, { rank: 555, id: 719 }, { rank: 886, id: 441 }, { rank: 978, id: 273 }, { rank: 1323, id: 707 }],
        data: [{ rank: 55, id: 134 }, { rank: 21, id: 168 }, { rank: 1323, id: 707 }, { rank: 222, id: 877 }, { rank: 2, id: 674 }, { rank: 555, id: 719 }, { rank: 978, id: 273 }, { rank: 138, id: 798 }, { rank: 343, id: 265 }, { rank: 886, id: 441 }]
    },
    {
        desc: 'happy path sort by descending rank',
        sortObject: SortObject.rank,
        sortOptions: SortOptions.dsc,
        response: [{ rank: 1323, id: 707 }, { rank: 978, id: 273 }, { rank: 886, id: 441 }, { rank: 555, id: 719 }, { rank: 343, id: 265 }, { rank: 222, id: 877 }, { rank: 138, id: 798 }, { rank: 55, id: 134 }, { rank: 21, id: 168 }, { rank: 2, id: 674 }],
        data: [{ rank: 55, id: 134 }, { rank: 21, id: 168 }, { rank: 1323, id: 707 }, { rank: 222, id: 877 }, { rank: 2, id: 674 }, { rank: 555, id: 719 }, { rank: 978, id: 273 }, { rank: 138, id: 798 }, { rank: 343, id: 265 }, { rank: 886, id: 441 }]
    },
    {
        desc: 'happy path sort by ascending id',
        sortObject: SortObject.id,
        sortOptions: SortOptions.asc,
        response: [{ rank: 55, id: 134 }, { rank: 21, id: 168 }, { rank: 343, id: 265 }, { rank: 978, id: 273 }, { rank: 886, id: 441 }, { rank: 2, id: 674 }, { rank: 1323, id: 707 }, { rank: 555, id: 719 }, { rank: 138, id: 798 }, { rank: 222, id: 877 }],
        data: [{ rank: 55, id: 134 }, { rank: 21, id: 168 }, { rank: 1323, id: 707 }, { rank: 222, id: 877 }, { rank: 2, id: 674 }, { rank: 555, id: 719 }, { rank: 978, id: 273 }, { rank: 138, id: 798 }, { rank: 343, id: 265 }, { rank: 886, id: 441 }]
    },
    {
        desc: 'happy path sort by descending id',
        sortObject: SortObject.id,
        sortOptions: SortOptions.dsc,
        response: [{ rank: 222, id: 877 }, { rank: 138, id: 798 }, { rank: 555, id: 719 }, { rank: 1323, id: 707 }, { rank: 2, id: 674 }, { rank: 886, id: 441 }, { rank: 978, id: 273 }, { rank: 343, id: 265 }, { rank: 21, id: 168 }, { rank: 55, id: 134 }],
        data: [{ rank: 55, id: 134 }, { rank: 21, id: 168 }, { rank: 1323, id: 707 }, { rank: 222, id: 877 }, { rank: 2, id: 674 }, { rank: 555, id: 719 }, { rank: 978, id: 273 }, { rank: 138, id: 798 }, { rank: 343, id: 265 }, { rank: 886, id: 441 }]
    }
];

module.exports = {
    getSortHappyPath() {
        return sortHappyPath;
    }
};
