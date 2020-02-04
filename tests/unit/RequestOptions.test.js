const chai = require('chai');
const assert = require('assert');

const requestOptions = require('../../cryptocurrency/common/utils/RequestOptions');
const requestOptionsMocks = require('./mocks/utils/RequestOptionsMocks');

chai.should();

describe('RequestOptions testing checks if outbound api calls are configured correctly', () => {

    requestOptionsMocks.getOptionsListHappyPath().forEach(usecase => {
        it(`Validate RequestOptions for getting crypto list. ${usecase.desc} Should return request object`, done => {
            const response = requestOptions.getCryptoCurrencyListOptions(usecase.limitArg);

            assert.deepEqual(response, usecase.response);
            done();
        });
    });

    requestOptionsMocks.getOptionsIdHappyPath().forEach(usecase => {
        it(`Validate RequestOptions for getting crypto list. ${usecase.desc} Should return request object`, done => {
            const response = requestOptions.getCryptoCurrencyIdOptions(usecase.limitArg);

            assert.deepEqual(response, usecase.response);
            done();
        });
    });
});
