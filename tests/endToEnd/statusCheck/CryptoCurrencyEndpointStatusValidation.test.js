const supertest = require('supertest');

const throwError = require('../mocks/ThrowError');

const baseUrl = 'http://localhost:5060/api/v1/';

// You would want to expand on these tests so that all possible status outcomes would be covered
describe('CryptoCurrency status testing', function() {
    this.timeout(10000);

    it('200 body status when calling /currencylist', done => {
        supertest(baseUrl)
            .get('currencylist')
            .expect(200)
            .end((err, res) => {
                if (err) throwError(err, res);
                done();
            });
    });

    it('200 body status when calling /currency', done => {
        supertest(baseUrl)
            .get('currency?id=5')
            .set({ 'X-CMC_PRO_API_KEY': '' })
            .expect(401)
            .end((err, res) => {
                if (err) throwError(err, res);
                done();
            });
    });

    it('200 body status when calling /currency', done => {
        supertest(baseUrl)
            .get('currencyAppend?id=6')
            .set({ 'X-CMC_PRO_API_KEY': process.env.MARKET_CAP_API_KEY })
            .expect(200)
            .end((err, res) => {
                if (err) throwError(err, res);
                done();
            });
    });
});
