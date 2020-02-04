const ServiceError = require('../../modules/error');

const sortCurrencyList = require('../common/utils/CurrencySortList');
const inputValidator = require('./mapping/CrypoCurrencyInput');

module.exports = {

    /*
        Input: validatedList, validatedSingle
        Both of these input paramters are expected to have been through validation and the needed properties exist

        Input: data
        This paramter may or may not have been fully validated, the check is done again for needed properties

        Purpose:
        Combine 2 lists together and sort by defined properties returning a single combined sorted list
    */
    combineSort(validatedList, validatedSingle, data) {
        const validatedInput = inputValidator.validateCryptoCurrencyCombinedRequest(data);

        if (validatedInput instanceof Error) return validatedInput;

        if (!Array.isArray(validatedList) || !Array.isArray(validatedSingle)) {
            return new ServiceError('Invalid input paramaters to function');
        }

        return sortCurrencyList(validatedList.concat(validatedSingle), validatedInput.sortBy, validatedInput.sortOptions);
    }
};
