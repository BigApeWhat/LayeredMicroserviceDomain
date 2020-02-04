const sinon = require('sinon');

const chai = require('chai');
const assert = require('assert');

const currencyListRepository = require('../../cryptocurrency/datasource/CryptoCurrencyListRepository');

const entity = require('../../cryptocurrency/domain/CryptoCurrencyListEntity');
const entityMock = require('./mocks/entity/CryptoCurrencyListEntityMocks');

chai.should();

describe('Crypto Currency ListEntity testing checks module flow without live repository', () => {

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });
    afterEach(() => {
        sandbox.restore();
    });
        
    entityMock.getListEntityHappyPath().forEach(usecase => {
        it(`Happy path flow for getting a list of crypto currencies. ${usecase.desc}`, done => {
            const stb = sandbox.stub(currencyListRepository, 'getCryptoCurrencyList').returns(usecase.getListMock);
          
            const response = entity.getCryptoCurrencyList(usecase.inputArg);

            assert.equal(stb.called, true);
            assert.deepEqual(response, usecase.response);

            done();
        });
    });

    entityMock.getListEntityFailingPath().forEach(usecase => {
        it(`Failing path flow for getting a list of crypto currencies. ${usecase.desc}`, done => {
            const stb = sandbox.stub(currencyListRepository, 'getCryptoCurrencyList').returns(usecase.list);

            const response = entity.getCryptoCurrencyList(usecase.inputArg);

            assert.equal(stb.called, usecase.hits);
            assert(response instanceof Error);
            assert.deepEqual(response.message, usecase.err);
            done();
        });
    });
});
