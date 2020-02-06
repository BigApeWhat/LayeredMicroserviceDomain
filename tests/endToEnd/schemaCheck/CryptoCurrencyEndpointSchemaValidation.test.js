const supertest = require('supertest');
const assert = require('assert');

const throwError = require('../mocks/ThrowError');

const baseUrl = 'http://localhost:5060/api/v1/';

// Full schema tests, make sure required properties are always returned, check if unneeded but known properties are not returned
describe('GET MarketCap + map url schema testing', () => {
    
    it('200 body status when limit query param passed correctly, all requried properties are present', done => {
        supertest(baseUrl)
            .get('currencylist')
            .expect(200)
            .end((err, res) => {
                if (err) throwError(err, res);

                assert.equal(res.body.status.error_message, null);
                assert.equal(res.body.status.error_code, 0);

                res.body.data.forEach(asset => {
                    assert.notEqual(isNaN(asset.id));
                    assert.notEqual(typeof asset.name !== 'string');
                    assert.notEqual(typeof asset.slug !== 'string');
                    assert.notEqual(isNaN(asset.rank));
                    assert.notEqual(isNaN(asset.is_active));
                });
                
                done();
            });
    });
});
