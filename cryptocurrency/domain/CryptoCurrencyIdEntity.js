const currencyIdRepository = require('../datasource/CryptoCurrencyIdRepository');
const inputValidator = require('./mapping/CrypoCurrencyInput');
const outputSerializer = require('./mapping/CrypoCurrencyOutput');

function getCryptoCurrencyWithId(input) {
    const currencyList = currencyIdRepository.getCryptoCurrencyId(input);

    if (currencyList instanceof Error) return currencyList;
    const serializered = outputSerializer.defineCryptoCurrencyListResponse(currencyList);

    return serializered;
}

module.exports = {
    getCryptoCurrencyById(data) {
        const validatedInput = inputValidator.validateCryptoCurrencyIdRequest(data);

        if (validatedInput instanceof Error) return validatedInput;
        return getCryptoCurrencyWithId(validatedInput);
    }
};
