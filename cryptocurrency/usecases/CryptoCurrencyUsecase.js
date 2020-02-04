const currencyListEntity = require('../domain/CryptoCurrencyListEntity');
const currencyIdEntity = require('../domain/CryptoCurrencyIdEntity');
const currencyCombineIntegrator = require('../domain/CryptoCurrencyCombineIntegrator');

module.exports = {
    currencyList(data) {
        return currencyListEntity.getCryptoCurrencyList(data);
    },
    currencyById(data) {
        return currencyIdEntity.getCryptoCurrencyById(data);
    },
    currencyListAppendedId(data) {
        const list = currencyListEntity.getCryptoCurrencyList(data);

        if (list instanceof Error) return list;
        const single = currencyIdEntity.getCryptoCurrencyById(data);

        if (single instanceof Error) return single;
        return currencyCombineIntegrator.combineSort(list, single, data);
    }
};
