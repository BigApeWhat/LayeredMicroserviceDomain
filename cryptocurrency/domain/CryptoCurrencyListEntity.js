const currencyListRepository = require('../datasource/CryptoCurrencyListRepository');
// const currencyListRepository = require('../datasource/CryptoCurrencyListLocal')

const inputValidator = require('./mapping/CrypoCurrencyInput');
const outputSerializer = require('./mapping/CrypoCurrencyOutput');

function getDefaultCryptoCurrencyList() {
    return currencyListRepository.getCryptoCurrencyList();
}

function getFormulatedCryptoCurrencyList() {
    const currencyList = getDefaultCryptoCurrencyList();

    if (currencyList instanceof Error) return currencyList;
    const serializered = outputSerializer.refinedCryptoCurrencyListResponse(currencyList);

    return serializered;
}

function getSortedCryptoCurrencyList(validatedInput) {
    const currencyList = getDefaultCryptoCurrencyList();

    if (currencyList instanceof Error) return currencyList;
    const serializered = outputSerializer.sortedCryptoCurrencyListResponse(currencyList, { sortOptions: validatedInput.sort });

    return serializered;
}

module.exports = {
    getCryptoCurrencyList(data) {
        const validatedInput = inputValidator.validateCryptoCurrencyListRequest(data);

        if (validatedInput instanceof Error) return validatedInput;

        if (!validatedInput.sort) return getFormulatedCryptoCurrencyList();
        return getSortedCryptoCurrencyList(validatedInput);
    }
};
