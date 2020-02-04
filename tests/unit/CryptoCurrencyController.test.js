const sinon = require('sinon');

const chai = require('chai');
const assert = require('assert');

const ServiceError = require('../../modules/error');

const responseMock = require('./mocks/utils/ResponseMock');
const nextMock = require('./mocks/utils/NextMock');

const cryptoCurrencyController = require('../../cryptocurrency/controllers/CryptoCurrencyController');

const cryptoUsecase = require('../../cryptocurrency/usecases/CryptoCurrencyUsecase');

chai.should();

describe('Crypto base controller flow top level input and output for crypto currency functionality', () => {
    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });
    afterEach(() => {
        sandbox.restore();
    });

    it('Happy path Crypto Currency list controller flow', done => {
        const res = responseMock();

        const stb = sandbox.stub(cryptoUsecase, 'currencyList').returns({ response: 'success' });
      
        cryptoCurrencyController.getCurrencyList({ query: 'tan' }, res, null);

        assert.equal(stb.called, true);
        assert.equal(res.finalStatus, 200);

        done();
    });

    it('Failing path Crypto Currency list controller flow', done => {
        const next = nextMock();
        const err = 'some error';

        const stb = sandbox.stub(cryptoUsecase, 'currencyList').returns(new ServiceError(err));

        cryptoCurrencyController.getCurrencyList({ query: 'tan' }, null, next);

        assert.equal(stb.called, true);
        assert.equal(next.finalStatus, err);

        done();
    });

    it('Happy path Crypto Currency id controller flow', done => {
        const res = responseMock();

        const stb = sandbox.stub(cryptoUsecase, 'currencyById').returns({ response: 'success' });
      
        cryptoCurrencyController.getCurrencyId({ query: 'tan' }, res, null);

        assert.equal(stb.called, true);
        assert.equal(res.finalStatus, 200);

        done();
    });

    it('Failing path Crypto Currency id controller flow', done => {
        const next = nextMock();
        const err = 'some error';

        const stb = sandbox.stub(cryptoUsecase, 'currencyById').returns(new ServiceError(err));

        cryptoCurrencyController.getCurrencyId({ query: 'tan' }, null, next);

        assert.equal(stb.called, true);
        assert.equal(next.finalStatus, err);

        done();
    });

    it('Happy path Crypto Currency append controller flow', done => {
        const res = responseMock();

        const stb = sandbox.stub(cryptoUsecase, 'currencyListAppendedId').returns({ response: 'success' });
      
        cryptoCurrencyController.getCurrencyAppended({ query: 'tan' }, res, null);

        assert.equal(stb.called, true);
        assert.equal(res.finalStatus, 200);

        done();
    });

    it('Failing path Crypto Currency append controller flow', done => {
        const next = nextMock();
        const err = 'some error';

        const stb = sandbox.stub(cryptoUsecase, 'currencyListAppendedId').returns(new ServiceError(err));

        cryptoCurrencyController.getCurrencyAppended({ query: 'tan' }, null, next);

        assert.equal(stb.called, true);
        assert.equal(next.finalStatus, err);

        done();
    });
});
