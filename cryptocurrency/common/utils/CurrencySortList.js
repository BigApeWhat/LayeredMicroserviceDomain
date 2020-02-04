const SortOptions = require('../../common/utils/CurrencySortEnum').SortOptions;
const SortObject = require('../../common/utils/CurrencySortEnum').SortObject;

module.exports = (list, sortBy, sortOptions) => {
    switch (sortBy) {
        case (SortObject.rank):
            if (sortOptions === SortOptions.dsc) {
                return list.sort((a, b) => b.rank - a.rank);
            }
            return list.sort((a, b) => a.rank - b.rank);
        default:
            if (sortOptions === SortOptions.dsc) {
                return list.sort((a, b) => b.id - a.id);
            }
            return list.sort((a, b) => a.id - b.id);
    }
};
