const chai = require('chai');
const assert = require('assert');

const currencySortList = require('../../cryptocurrency/common/utils/CurrencySortList');
const currencySortListMocks = require('./mocks/utils/CurrencySortListMocks');

chai.should();

describe('Schema validation of sort output for crypto currency list', () => {
    currencySortListMocks.getSortHappyPath().forEach(usecase => {
        it(`Validate sort Currency list output by ${usecase.desc}`, done => {
            const response = currencySortList(usecase.data, usecase.sortObject, usecase.sortOptions);

            assert.deepEqual(response, usecase.response);
            done();
        });
    });

});
