const optionsListHappyPath = [
    {
        desc: 'happy path with limit not passed but uses default limit of 50',
        limitArg: undefined,
        response: { url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?limit=50', headers: { 'X-CMC_PRO_API_KEY': 'defaultKey' } }
    },
    {
        desc: 'happy path with limit of 10 passed',
        limitArg: 10,
        response: { url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?limit=10', headers: { 'X-CMC_PRO_API_KEY': 'defaultKey' } }
    },
    {
        desc: 'happy path with limit of 555 passed',
        limitArg: 555,
        response: { url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?limit=555', headers: { 'X-CMC_PRO_API_KEY': 'defaultKey' } }
    }
];

const optionsIdHappyPath = [
    {
        desc: 'happy path with startPosition not passed but uses default startPosition of 1',
        limitArg: { undefined },
        response: { url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?start=1&limit=1', headers: { 'X-CMC_PRO_API_KEY': 'defaultKey' } }
    },
    {
        desc: 'happy path with startPosition of 10 passed',
        limitArg: { start: { id: 10 } },
        response: { url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?start=10&limit=1', headers: { 'X-CMC_PRO_API_KEY': 'defaultKey' } }
    },
    {
        desc: 'happy path with startPosition of 555 passed',
        limitArg: { start: { id: 555 } },
        response: { url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?start=555&limit=1', headers: { 'X-CMC_PRO_API_KEY': 'defaultKey' } }
    }
];

module.exports = {
    getOptionsListHappyPath() {
        return optionsListHappyPath;
    },
    getOptionsIdHappyPath() {
        return optionsIdHappyPath;
    }
};
