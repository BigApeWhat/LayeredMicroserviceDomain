const ServiceError = require('../../modules/error');

const request = require('request');
const requestOptions = require('../common/utils/RequestOptions');
const deasync = require('deasync');
const outputSerializer = require('./mapping/CrypoCurrencyOutput');

module.exports = {
    getCryptoCurrencyId(input) {
        let ret;

        request.get(requestOptions.getCryptoCurrencyIdOptions(input), (err, resp, body) => {
            if (err) {
                ret = new ServiceError(err, 'Error calling CoinMarket');
            } else {
                const serializered = outputSerializer.validateCurrencyResponse(JSON.parse(body));

                ret = serializered;
            }
        });
        while (ret === undefined) {
            deasync.runLoopOnce();
        }
        return ret;
    }
};
