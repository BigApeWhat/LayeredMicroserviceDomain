const sinon = require('sinon');
const request = require('request');

const chai = require('chai');
const assert = require('assert');

const currencyListRepository = require('../../cryptocurrency/usecases/CryptoCurrencyUsecase');

const repositoryMock = require('./mocks/CryptoCurrencyUsecaseMocks');

chai.should();

beforeEach(() => {
    sandbox = sinon.createSandbox();
});
afterEach(() => {
    sandbox.restore();
});

describe('Crypto Currency usecase currencyListAppendedId flow for combining both currencyList and currencyById', () => {
        
    repositoryMock.getAppendUsecaseHappyPath().forEach(usecase => {
        it(`Happy path flow for getting an appended list crypto currencies. ${usecase.desc}`, done => {
            const stb = sandbox.stub(request, 'get')
                .onFirstCall().yields(null, null, JSON.stringify(usecase.getListMock))
                .onSecondCall().yields(null, null, JSON.stringify(usecase.getSingleMock));
            
            const response = currencyListRepository.currencyListAppendedId(usecase.input);

            assert.equal(stb.called, true);
            assert.deepEqual(response, usecase.response);

            done();
        });
    });

    repositoryMock.getappendUsecaseFailingPath().forEach(usecase => {
        it(`Failing path flow for getting an appended list crypto currencies. ${usecase.desc}`, done => {
            const stb = sandbox.stub(request, 'get')
                .onFirstCall().yields(usecase.getListError, null, JSON.stringify(usecase.getListMock))
                .onSecondCall().yields(usecase.getSingleError, null, JSON.stringify(usecase.getSingleMock));

            const response = currencyListRepository.currencyListAppendedId(usecase.input);

            assert.equal(stb.called, usecase.called);
            assert(response instanceof Error);
            assert.equal(response.name, 'ServiceError');
            assert.equal(response.message, usecase.err);

            done();
        });
    });
});
