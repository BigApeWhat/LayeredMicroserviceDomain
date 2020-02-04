const sinon = require('sinon');

const chai = require('chai');
const assert = require('assert');

const integrator = require('../../cryptocurrency/domain/CryptoCurrencyCombineIntegrator');
const integratorMock = require('./mocks/entity/CryptoCurrencyCombinedIntegratorMocks');

chai.should();

describe('Crypto Currency CombineIntegrator testing', () => {

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });
    afterEach(() => {
        sandbox.restore();
    });
    
    integratorMock.getCombinedIntegratorHappyPath().forEach(usecase => {
        it(`Happy path flow for getting and combining a list and single crypto currency. ${usecase.desc}`, done => {
            const response = integrator.combineSort(usecase.list, usecase.single, usecase.inputArg);

            assert.deepEqual(response, usecase.response);

            done();
        });
    });

    integratorMock.getCombinedIntegratorFailingPath().forEach(usecase => {
        it(`Failing path flow for getting and combining a list and single crypto currency. ${usecase.desc}`, done => {
            const response = integrator.combineSort(usecase.list, usecase.single, usecase.inputArg);

            assert(response instanceof Error);
            assert.deepEqual(response.message, usecase.err);
            done();
        });
    });
});
