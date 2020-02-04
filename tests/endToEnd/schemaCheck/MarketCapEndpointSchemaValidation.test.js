const supertest = require('supertest');
const assert = require('assert');

const throwError = require('../mocks/ThrowError');

require('../../../ConfigLoader').load();

const marketCapUrl = require('../../../config/ConstantConfigs').Market_Cap_Base_Url;
const marketCapMap = require('../../../config/ConstantConfigs').Market_Cap_Map_Trailing_Url;

describe('GET MarketCap + map url schema testing', () => {
    
    it('200 body status when limit query param passed correctly, all requried properties are present', done => {
        supertest(marketCapUrl)
            .get(`${marketCapMap}?limit=2`)
            .set({ 'X-CMC_PRO_API_KEY': process.env.MARKET_CAP_API_KEY })
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

    it('200 body status when limit and start query param passed correctly, all requried properties are present', done => {
        supertest(marketCapUrl)
            .get(`${marketCapMap}?start=10&limit=1`)
            .set({ 'X-CMC_PRO_API_KEY': process.env.MARKET_CAP_API_KEY })
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
