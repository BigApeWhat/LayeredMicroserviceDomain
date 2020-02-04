const sinon = require('sinon');

const chai = require('chai');
const assert = require('assert');

const currencyIdRepository = require('../../cryptocurrency/datasource/CryptoCurrencyIdRepository');

const entity = require('../../cryptocurrency/domain/CryptoCurrencyIdEntity');
const entityMock = require('./mocks/entity/CryptoCurrencyIdEntityMocks');

chai.should();

describe('Crypto Currency IdEntity testing checks module flow without live repository', () => {

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });
    afterEach(() => {
        sandbox.restore();
    });
    
    entityMock.getIdEntityHappyPath().forEach(usecase => {

        it(`Happy path flow for getting a single crypto currency. ${usecase.desc}`, done => {
            const stb = sandbox.stub(currencyIdRepository, 'getCryptoCurrencyId').returns(usecase.getSingleMock);
          
            const response = entity.getCryptoCurrencyById(usecase.inputArg);

            assert.equal(stb.called, true);
            assert.deepEqual(response, usecase.response);

            done();
        });
    });

    entityMock.getIdEntityFailingPath().forEach(usecase => {
        it(`Failing path flow for getting a single crypto currency. ${usecase.desc}`, done => {
            const stb = sandbox.stub(currencyIdRepository, 'getCryptoCurrencyId').returns(usecase.getSingleMock);

            const response = entity.getCryptoCurrencyById(usecase.inputArg);

            assert.equal(stb.called, usecase.hits);
            assert(response instanceof Error);
            assert.deepEqual(response.message, usecase.err);
            done();
        });
    });
});
