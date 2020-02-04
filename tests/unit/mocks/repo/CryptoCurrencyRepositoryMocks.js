const repositoryHappyPath = [
    {
        desc: 'Get list with missing properties, empty list returned',
        response: {},
        getListMock: { status: { code: 200 }, data: [{ rank: 55, id: 134 }, { rank: 21, id: 168 }, { rank: 1323, id: 707 }, { rank: 222, id: 877 }, { rank: 2, id: 674 }, { rank: 555, id: 719 }, { rank: 978, id: 273 }, { rank: 138, id: 798 }, { rank: 343, id: 265 }, { rank: 886, id: 441 }] }
    },
    {
        desc: 'Get list with all properties present, empty list returned',
        response: [{ id: 460, name: 'sluggy', symbol: 'clm', slug: 'clams', is_active: 1, rank: 610 }, { id: 463, name: 'BitShares', symbol: 'BTS', slug: 'bitshares', is_active: 1, rank: 912 }, { id: 470, name: 'Viacoin', symbol: 'VIA', slug: 'viacoin', is_active: 0, rank: 445 }],
        getListMock: { status: { code: 200 }, data: [{ id: 460, name: 'sluggy', symbol: 'clm', slug: 'clams', is_active: 1, rank: 610 }, { id: 463, name: 'BitShares', symbol: 'BTS', slug: 'bitshares', is_active: 1, rank: 912 }, { id: 470, name: 'Viacoin', symbol: 'VIA', slug: 'viacoin', is_active: 0, rank: 445 }] }
    }
];

const repositoryFailingPath = [
    {
        desc: 'Failed network call',
        err: 'Error calling CoinMarket',
        getErrResponse: new Error('error occured'),
        getListMock: ''
    },
    {
        desc: 'No response object passed',
        err: 'Invalid currency list has been returned',
        getErrResponse: null,
        getListMock: null
    },
    {
        desc: 'Error status in response object',
        err: 'Status code = 400: A problem has occured on MarketCap',
        getErrResponse: null,
        getListMock: { status: { error_message: 'oh no', error_code: 400 } }
    },
    {
        desc: 'No data passed in response object',
        err: 'No data returned',
        getErrResponse: null,
        getListMock: { status: { } }
    }
];

module.exports = {
    getRepositoryHappyPath() {
        return repositoryHappyPath;
    },
    getRepositoryFailingPath() {
        return repositoryFailingPath;
    }
};
