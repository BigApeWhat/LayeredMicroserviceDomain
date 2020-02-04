const supertest = require('supertest');
const assert = require('chai').assert;

const throwError = require('../mocks/ThrowError');

// You want to run agaist a live environment, and have multiple environment such as dev, qa, and production
// Here is also for doing sequential calls, for example update then get and check if update worked correctly
// Can also check live integration tests
const baseUrl = 'http://localhost:5060/api/v1/';

describe('GET MarketCap + map url schema testing', () => {
    
    it('200 body status when calling /currencylist', done => {
        supertest(baseUrl)
            .get('currencylist')
            .set({})
            .expect(200)
            .end((err, res) => {
                if (err) throwError(err, res);

                assert.equal(res.body.length, 50);
                res.body.forEach(asset => {
                    assert.isNotNull(asset.global_choice);
                    assert.isNotNull(asset.power_performace);
                });
                done();
            });
    });

    it('200 body status when calling /currency', done => {
        supertest(baseUrl)
            .get('currency?id=5')
            .expect(200)
            .end((err, res) => {
                if (err) throwError(err, res);

                assert.equal(res.body.length, 1);
                res.body.forEach(asset => {
                    assert.isNotNull(asset.global_choice);
                    assert.isNotNull(asset.power_performace);
                });
                done();
            });
    });

    it('200 body status when calling /currency', done => {
        supertest(baseUrl)
            .get('currencyAppend?id=6')
            .expect(200)
            .end((err, res) => {
                if (err) throwError(err, res);

                assert.equal(res.body.length, 51);
                res.body.forEach(asset => {
                    assert.isNotNull(asset.global_choice);
                    assert.isNotNull(asset.power_performace);
                });
                done();
            });
    });
});
