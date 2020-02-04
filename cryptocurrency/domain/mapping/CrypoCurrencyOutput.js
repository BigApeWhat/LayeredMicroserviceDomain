const Ranking = require('../../common/utils/CurrencyRankingEnum').Ranking;
const SortOptions = require('../../common/utils/CurrencySortEnum').SortOptions;
const SortObject = require('../../common/utils/CurrencySortEnum').SortObject;

const sortCurrencyList = require('../../common/utils/CurrencySortList');

function formulateCryptoList(list) {
    list.forEach(item => {
        switch (true) {
            case (item.rank <= 10):
                item['power_performace'] = Ranking.premium;
                break;
            case (item.rank <= 50):
                item['power_performace'] = Ranking.ruby;
                break;
            case (item.rank <= 200):
                item['power_performace'] = Ranking.gold;
                break;
            case (item.rank <= 500):
                item['power_performace'] = Ranking.silver;
                break;
            case (item.rank <= 1000):
                item['power_performace'] = Ranking.bronze;
                break;
            default:
                item['power_performace'] = Ranking.dirt;
        }
    });
    return list;
}

function refineCryptoList(list) {
    list.forEach(item => {
        if ((item.power_performace === Ranking.premium || item.power_performace === Ranking.ruby) && item.is_active) {
            item['global_choice'] = true;
        } else {
            item['global_choice'] = false;
        }
    });
    return list;
}

module.exports = {
    defineCryptoCurrencyListResponse(list) {
        return formulateCryptoList(list);
    },
    refinedCryptoCurrencyListResponse(list) {
        const formulatedList = formulateCryptoList(list);

        return refineCryptoList(formulatedList);
    },
    sortedCryptoCurrencyListResponse(list, { sortBy = SortObject.rank, sortOptions = SortOptions.asc }) {
        const formulatedList = formulateCryptoList(list);

        return sortCurrencyList(formulatedList, sortBy, sortOptions);
    }
};
