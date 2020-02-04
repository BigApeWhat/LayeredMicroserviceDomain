const supertest = require('supertest');
const assert = require('assert');

const throwError = require('../mocks/ThrowError');

require('../../../ConfigLoader').load();

const marketCapUrl = require('../../../config/ConstantConfigs').Market_Cap_Base_Url;
const marketCapMap = require('../../../config/ConstantConfigs').Market_Cap_Map_Trailing_Url;

describe('GET MarketCap + map url status testing', function() {
    this.timeout(5000);

    it('401 when no headers passed', done => {
        supertest(marketCapUrl)
            .get(marketCapMap)
            .expect(401)
            .end((err, res) => {
                if (err) throwError(err, res);
                done();
            });
    });

    it('401 when no invalid auth token passed', done => {
        supertest(marketCapUrl)
            .get(marketCapMap)
            .set({ 'X-CMC_PRO_API_KEY': '' })
            .expect(401)
            .end((err, res) => {
                if (err) throwError(err, res);
                done();
            });
    });

    it('200 when valid auth token passed, no extra params', done => {
        supertest(marketCapUrl)
            .get(marketCapMap)
            .set({ 'X-CMC_PRO_API_KEY': process.env.MARKET_CAP_API_KEY })
            .expect(200)
            .end((err, res) => {
                if (err) throwError(err, res);
                done();
            });
    });

    it('400 body status when symbol query param passed as number', done => {
        const symbol = 26;

        supertest(marketCapUrl)
            .get(`${marketCapMap}?symbol=${symbol}`)
            .set({ 'X-CMC_PRO_API_KEY': process.env.MARKET_CAP_API_KEY })
            .expect(400)
            .end((err, res) => {
                if (err) throwError(err, res);
                assert.equal(res.body.status.error_message, `Invalid value for \"symbol\": \"${symbol}\"`);
                done();
            });
    });

    it('400 body status when invalid symbol query param passed', done => {
        const symbol = 'OIE';

        supertest(marketCapUrl)
            .get(`${marketCapMap}?symbol=${symbol}`)
            .set({ 'X-CMC_PRO_API_KEY': process.env.MARKET_CAP_API_KEY })
            .expect(400)
            .end((err, res) => {
                if (err) throwError(err, res);
                assert.equal(res.body.status.error_message, `Invalid value for \"symbol\": \"${symbol}\"`);
                done();
            });
    });

    it('400 body status when lowercase symbol query param passed', done => {
        const symbol = 'btc';

        supertest(marketCapUrl)
            .get(`${marketCapMap}?symbol=${symbol}`)
            .set({ 'X-CMC_PRO_API_KEY': process.env.MARKET_CAP_API_KEY })
            .expect(400)
            .end((err, res) => {
                if (err) throwError(err, res);
                assert.equal(res.body.status.error_message, '\"symbol\" must only contain uppercase characters');
                done();
            });
    });

    it('200 body status when symbol query param passed correctly', done => {
        const symbol = 'BTC';

        supertest(marketCapUrl)
            .get(`${marketCapMap}?symbol=${symbol}`)
            .set({ 'X-CMC_PRO_API_KEY': process.env.MARKET_CAP_API_KEY })
            .expect(200)
            .end((err, res) => {
                if (err) throwError(err, res);
                assert.equal(res.body.status.error_message, null);
                done();
            });
    });

    it('200 body status when limit query param passed correctly', done => {
        supertest(marketCapUrl)
            .get(`${marketCapMap}?limit=5`)
            .set({ 'X-CMC_PRO_API_KEY': process.env.MARKET_CAP_API_KEY })
            .expect(200)
            .end((err, res) => {
                if (err) throwError(err, res);
                assert.equal(res.body.status.error_message, null);
                done();
            });
    });

    it('200 body status when limit and start query param passed correctly', done => {
        supertest(marketCapUrl)
            .get(`${marketCapMap}?start=10&limit=1`)
            .set({ 'X-CMC_PRO_API_KEY': process.env.MARKET_CAP_API_KEY })
            .expect(200)
            .end((err, res) => {
                if (err) throwError(err, res);
                assert.equal(res.body.status.error_message, null);
                done();
            });
    });
});
