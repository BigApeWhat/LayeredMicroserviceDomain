const ServiceError = require('../../../modules/error');
const _ = require('lodash');

const SortOptions = require('../../common/utils/CurrencySortEnum').SortOptions;
const SortObject = require('../../common/utils/CurrencySortEnum').SortObject;

function validateCurrencySortParam(data) {
    const sortQuery = _.get(data, 'sort');

    if (!sortQuery) {
        return undefined;
    }

    if (!(_.includes(SortOptions, sortQuery))) {
        return new ServiceError('Incorrect sort parameter');
    }
    return sortQuery;
}

function validateCurrencySortByParam(data) {
    const sortByQuery = _.get(data, 'sortBy');

    if (!sortByQuery) {
        return undefined;
    }

    if (!(_.includes(SortObject, sortByQuery))) {
        return new ServiceError('Incorrect sortBy parameter');
    }

    return sortByQuery;
}

function validateCurrencyIdParam(data) {
    const idQuery = _.get(data, 'id');

    if (idQuery === undefined) {
        return new ServiceError('Id is a required query parameter for this call');
    }

    const idNum = parseInt(idQuery);

    if (isNaN(idNum) || idNum < 0) {
        return new ServiceError('Invalid id parameter');
    }

    return idNum;
}

module.exports = {
    validateCryptoCurrencyListRequest(data) {
        const validatedSort = validateCurrencySortParam(data);

        if (validatedSort instanceof Error) return validatedSort;
        return { sort: validatedSort };
    },
    validateCryptoCurrencyIdRequest(data) {
        const validatedQueryId = validateCurrencyIdParam(data);

        if (validatedQueryId instanceof Error) return validatedQueryId;
        return { id: validatedQueryId };
    },
    validateCryptoCurrencyCombinedRequest(data) {
        const validatedQueryId = validateCurrencyIdParam(data);

        if (validatedQueryId instanceof Error) return validatedQueryId;

        let validatedSort = validateCurrencySortParam(data);

        if (validatedSort instanceof Error) return validatedSort;

        if (!validatedSort) {
            validatedSort = SortOptions.dsc;
        }

        let validatedSortBy = validateCurrencySortByParam(data);

        if (validatedSortBy instanceof Error) return validatedSortBy;

        if (!validatedSortBy) {
            validatedSortBy = SortObject.id;
        }

        return { id: validatedQueryId, sortBy: validatedSortBy, sortOptions: validatedSort };
    }
};
