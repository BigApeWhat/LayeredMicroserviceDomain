const sinon = require('sinon');
const request = require('request');

const chai = require('chai');
const assert = require('assert');

const currencyListRepository = require('../../cryptocurrency/datasource/CryptoCurrencyListRepository');
const currencyIdRepository = require('../../cryptocurrency/datasource/CryptoCurrencyIdRepository');

const repositoryMock = require('./mocks/repo/CryptoCurrencyRepositoryMocks');

chai.should();

beforeEach(() => {
    sandbox = sinon.createSandbox();
});
afterEach(() => {
    sandbox.restore();
});

describe('Crypto Currency ListRepository testing checks module flow without outbound api calls', () => {
        
    repositoryMock.getRepositoryHappyPath().forEach(usecase => {
        it(`Happy path flow for getting a list of crypto currencies. ${usecase.desc}`, done => {
            const stb = sandbox.stub(request, 'get').yields(null, null, JSON.stringify(usecase.getListMock));
          
            const response = currencyListRepository.getCryptoCurrencyList();

            assert.equal(stb.called, true);
            assert.deepEqual(response, usecase.response);

            done();
        });
    });

    repositoryMock.getRepositoryFailingPath().forEach(usecase => {
        it(`Failing path flow for getting a list of crypto currencies. ${usecase.desc}`, done => {
            const stb = sandbox.stub(request, 'get').yields(usecase.getErrResponse, null, JSON.stringify(usecase.getListMock));

            const response = currencyListRepository.getCryptoCurrencyList();

            assert.equal(stb.called, true);
            assert(response instanceof Error);
            assert.equal(response.name, 'ServiceError');
            assert.equal(response.message, usecase.err);

            done();
        });
    });
});

describe('Crypto Currency IdRepository testing checks module flow without outbound api calls', () => {
        
    repositoryMock.getRepositoryHappyPath().forEach(usecase => {
        it(`Happy path flow for getting a list of crypto currencies by id. ${usecase.desc}`, done => {
            const stb = sandbox.stub(request, 'get').yields(null, null, JSON.stringify(usecase.getListMock));
          
            const response = currencyIdRepository.getCryptoCurrencyId({});

            assert.equal(stb.called, true);
            assert.deepEqual(response, usecase.response);

            done();
        });
    });

    repositoryMock.getRepositoryFailingPath().forEach(usecase => {
        it(`Failing path flow for getting a list of crypto currencies by id. ${usecase.desc}`, done => {
            const stb = sandbox.stub(request, 'get').yields(usecase.getErrResponse, null, JSON.stringify(usecase.getListMock));

            const response = currencyIdRepository.getCryptoCurrencyId({});

            assert.equal(stb.called, true);
            assert(response instanceof Error);
            assert.equal(response.name, 'ServiceError');
            assert.equal(response.message, usecase.err);

            done();
        });
    });
});
