const currencyListPayload = require('../../payloadresponses/CryptoCurrencyListResponse');
const outputSerializer = require('./mapping/CrypoCurrencyListOutput');

module.exports = {
    // Not realistic just added a very broad example of getting the payload a different way other than the api call
    // also has some malformed values
    getCryptoCurrencyList() {
        return outputSerializer.validateCurrencyListResponse(currencyListPayload);
    }
};
