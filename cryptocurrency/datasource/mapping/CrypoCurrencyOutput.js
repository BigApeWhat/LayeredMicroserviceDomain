const ServiceError = require('../../../modules/error');

const _ = require('lodash');

// Good place to use a schema validator
module.exports = {
    validateCurrencyResponse(currencyList) {
        if (!currencyList) return new ServiceError('Invalid currency list has been returned');
        if (currencyList.status.error_message) return new ServiceError(new Error(currencyList.status.error_message), `Status code = ${currencyList.status.error_code}: A problem has occured on MarketCap`, 400);
        if (!currencyList.data) return new ServiceError('No data returned');

        const validatedList = _.map(_.filter(currencyList.data, item => {
            if (_.has(item, 'id', 'symbol', 'name', 'slug', 'rank', 'is_active')) {
                if (isNaN(item.id) || typeof item.name !== 'string' || typeof item.slug !== 'string' || isNaN(item.rank) || isNaN(item.is_active)) {
                    return false;
                }
                return true;
            }
            return false;
        }), item => {
            item['is_active'] = (item.is_active === 1);
            return item;
        });

        return validatedList;
    }
};
