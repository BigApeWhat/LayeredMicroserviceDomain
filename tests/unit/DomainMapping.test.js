const chai = require('chai');
const assert = require('assert');

const domainInput = require('../../cryptocurrency/domain/mapping/CrypoCurrencyInput');
const domainInputMocks = require('./mocks/Mapping/DomainInputMapping');

const domainOutput = require('../../cryptocurrency/domain/mapping/CrypoCurrencyOutput');
const domainOutputMocks = require('./mocks/Mapping/DomainOutputMapping');

chai.should();

describe('Schema validation of domain input for crypto currency schemas', () => {
    /*
        Domain Input List
    */
    domainInputMocks.getListHappyPath().forEach(usecase => {
        it(`Validate CryptoCurrency input by list schema. ${usecase.desc} Should return object with sort param`, done => {
            const response = domainInput.validateCryptoCurrencyListRequest(usecase.data);

            assert('sort' in response);
            done();
        });
    });

    domainInputMocks.getListFailingPath().forEach(usecase => {
        it(`Validate CryptoCurrency input by list schema. ${usecase.desc} Should return type error`, done => {
            const response = domainInput.validateCryptoCurrencyListRequest(usecase.data);

            assert(response instanceof Error);
            assert.equal(response.message, 'Incorrect sort parameter');
            done();
        });
    });

    domainInputMocks.getListNeutralPath().forEach(usecase => {
        it(`Validate CryptoCurrency input by list schema. ${usecase.desc} Should not return object with sort param`, done => {
            const response = domainInput.validateCryptoCurrencyListRequest(usecase.data);
    
            assert(!response.sort);
            done();
        });
    });

    /*
        Domain Input Id
    */
    domainInputMocks.getIdHappyPath().forEach(usecase => {
        it(`Validate CryptoCurrency input by id schema. ${usecase.desc} Should return object with id param`, done => {
            const response = domainInput.validateCryptoCurrencyIdRequest(usecase.data);

            assert('id' in response);
            done();
        });
    });

    domainInputMocks.getIdFailingPath().forEach(usecase => {
        it(`Validate CryptoCurrency input by id schema. ${usecase.desc} Should return type error`, done => {
            const response = domainInput.validateCryptoCurrencyIdRequest(usecase.data);

            assert(response instanceof Error);
            assert.equal(response.message, usecase.err);
            done();
        });
    });

    /*
        Domain Input Append
    */
    domainInputMocks.getAppendHappyPath().forEach(usecase => {
        it(`Validate CryptoCurrency input by list schema. ${usecase.desc} Should return object with sort param`, done => {
            const response = domainInput.validateCryptoCurrencyCombinedRequest(usecase.data);

            assert.deepEqual(response, usecase.response);
            assert('id' in response);
            assert('sortBy' in response);
            assert('sortOptions' in response);
            done();
        });
    });

    domainInputMocks.getAppendFailingPath().forEach(usecase => {
        it(`Validate CryptoCurrency input by list schema. ${usecase.desc} Should return type error`, done => {
            const response = domainInput.validateCryptoCurrencyCombinedRequest(usecase.data);

            assert(response instanceof Error);
            assert.equal(response.message, usecase.err);
            done();
        });
    });

});

describe('Schema validation of domain output for crypto currency schemas', () => {
    domainOutputMocks.getFormulatePath().forEach(usecase => {
        it(`Validate CryptoCurrency output by formulate input list. ${usecase.desc}`, done => {
            const response = domainOutput.defineCryptoCurrencyListResponse(usecase.data);

            assert.deepEqual(response, usecase.response);
            done();
        });
    });

    domainOutputMocks.getRefinePath().forEach(usecase => {
        it(`Validate CryptoCurrency output by refine input list. ${usecase.desc}`, done => {
            const response = domainOutput.refinedCryptoCurrencyListResponse(usecase.data);

            assert.deepEqual(response, usecase.response);
            done();
        });
    });

    domainOutputMocks.getSortPath().forEach(usecase => {
        it(`Validate CryptoCurrency output by sort input list. ${usecase.desc} Should return object with new param 'power_performace'`, done => {
            const response = domainOutput.sortedCryptoCurrencyListResponse(usecase.data, usecase.sortOptions);

            assert.deepEqual(response, usecase.response);
            done();
        });
    });
});
