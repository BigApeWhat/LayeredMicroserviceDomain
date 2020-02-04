require('dotenv').config();

module.exports = {
    load() {
        if (!process.env.MARKET_CAP_API_KEY) {
            console.log('Missing env variable MARKET_CAP_API_KEY');
            process.exit();
        }
    }
};
