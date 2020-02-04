const config = require('../../../config/ConstantConfigs.json');

const headers = {
    'X-CMC_PRO_API_KEY': process.env.MARKET_CAP_API_KEY || 'defaultKey'
};

module.exports = {
    getCryptoCurrencyListOptions(limit = 50) {
        const query = `?limit=${limit}`;

        const options = {
            url: config.Market_Cap_Base_Url + config.Market_Cap_Map_Trailing_Url + query,
            headers
        };

        return options;
    },
    getCryptoCurrencyIdOptions({ start = { id: 1 } }) {
        const query = `?start=${start.id}&limit=1`;

        const options = {
            url: config.Market_Cap_Base_Url + config.Market_Cap_Map_Trailing_Url + query,
            headers
        };

        return options;
    }
};
