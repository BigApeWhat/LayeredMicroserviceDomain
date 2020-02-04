const ServiceError = require('../../../modules/error');

const appendUsecaseHappyPath = [
    {
        desc: 'Combined Single list + by id, request made with just required id property',
        response: [{ id: 460, name: 'sluggy', symbol: 'clm', slug: 'clams', is_active: true, rank: 610, power_performace: 4, global_choice: false }, { id: 3, name: 'tvs', symbol: 'vts', slug: 'sts', is_active: true, rank: 11, power_performace: 1 }],
        getListMock: { status: { code: 200 }, data: [{ id: 460, name: 'sluggy', symbol: 'clm', slug: 'clams', is_active: 1, rank: 610 }] },
        getSingleMock: { status: { code: 200 }, data: [{ id: 3, name: 'tvs', symbol: 'vts', slug: 'sts', is_active: 1, rank: 11 }] },
        input: { id: 34 }
    },
    {
        desc: 'Combined Single list + by id, request made with required id property and asc order',
        response: [{ id: 3, name: 'tvs', symbol: 'vts', slug: 'sts', is_active: false, rank: 11, power_performace: 1 }, { id: 460, name: 'sluggy', symbol: 'clm', slug: 'clams', is_active: true, rank: 610, power_performace: 4 }],
        getListMock: { status: { code: 200 }, data: [{ id: 460, name: 'sluggy', symbol: 'clm', slug: 'clams', is_active: 1, rank: 610 }] },
        getSingleMock: { status: { code: 200 }, data: [{ id: 3, name: 'tvs', symbol: 'vts', slug: 'sts', is_active: 0, rank: 11 }] },
        input: { id: 34, sort: 'asc' }
    },
    {
        desc: 'Combined Single list + by id, request made with required id property, dsc order, and sortBy id',
        response: [{ id: 460, name: 'sluggy', symbol: 'clm', slug: 'clams', is_active: true, rank: 610, power_performace: 4 }, { id: 3, name: 'tvs', symbol: 'vts', slug: 'sts', is_active: false, rank: 11, power_performace: 1 }],
        getListMock: { status: { code: 200 }, data: [{ id: 460, name: 'sluggy', symbol: 'clm', slug: 'clams', is_active: 1, rank: 610 }] },
        getSingleMock: { status: { code: 200 }, data: [{ id: 3, name: 'tvs', symbol: 'vts', slug: 'sts', is_active: 0, rank: 11 }] },
        input: { id: 34, sort: 'dsc', sortBy: 'id' }
    },
    {
        desc: 'Combined multi list + by id, request made with required id property',
        response: [{ id: 831, name: 'Wild Beast Block', symbol: 'clm', slug: 'wbb', is_active: true, rank: 1959, power_performace: 5, global_choice: false }, { id: 799, name: 'SmileyCoin', symbol: 'SMLY', is_active: false, slug: 'smileycoin', rank: 1183, power_performace: 5, global_choice: false }, { id: 550, name: 'SpreadCoin', symbol: 'SPR', slug: 'spreadcoin', is_active: false, rank: 101, power_performace: 2 }, { id: 460, name: 'sluggy', symbol: 'clm', slug: 'clams', is_active: true, rank: 610, power_performace: 4, global_choice: false }],
        getListMock: { status: { code: 200 }, data: [{ id: 799, name: 'SmileyCoin', symbol: 'SMLY', is_active: 0, slug: 'smileycoin', rank: 1183 }, { id: 460, name: 'sluggy', symbol: 'clm', slug: 'clams', is_active: 1, rank: 610 }, { id: 831, name: 'Wild Beast Block', symbol: 'clm', slug: 'wbb', is_active: 1, rank: 1959 }] },
        getSingleMock: { status: { code: 200 }, data: [{ id: 550, name: 'SpreadCoin', symbol: 'SPR', slug: 'spreadcoin', is_active: 0, rank: 101 }] },
        input: { id: 34 }
    },
    {
        desc: 'Combined multi list + by id, request made with required id property, asc order, and sortBy rank',
        response: [{ id: 550, name: 'SpreadCoin', symbol: 'SPR', slug: 'spreadcoin', is_active: false, rank: 101, power_performace: 2 }, { id: 460, name: 'sluggy', symbol: 'clm', slug: 'clams', is_active: true, rank: 610, power_performace: 4 }, { id: 799, name: 'SmileyCoin', symbol: 'SMLY', is_active: false, slug: 'smileycoin', rank: 1183, power_performace: 5 }, { id: 831, name: 'Wild Beast Block', symbol: 'clm', slug: 'wbb', is_active: true, rank: 1959, power_performace: 5 }],
        getListMock: { status: { code: 200 }, data: [{ id: 799, name: 'SmileyCoin', symbol: 'SMLY', is_active: 0, slug: 'smileycoin', rank: 1183 }, { id: 460, name: 'sluggy', symbol: 'clm', slug: 'clams', is_active: 1, rank: 610 }, { id: 831, name: 'Wild Beast Block', symbol: 'clm', slug: 'wbb', is_active: 1, rank: 1959 }] },
        getSingleMock: { status: { code: 200 }, data: [{ id: 550, name: 'SpreadCoin', symbol: 'SPR', slug: 'spreadcoin', is_active: 0, rank: 101 }] },
        input: { id: 34, sort: 'asc', sortBy: 'rank' }
    }
];

const appendUsecaseFailingPath = [
    {
        desc: 'Combined Single list + failed by id, request made with no required id property',
        err: 'Id is a required query parameter for this call',
        getListError: null,
        getSingleError: null,
        getListMock: { status: { code: 200 }, data: [{ id: 460, name: 'sluggy', symbol: 'clm', slug: 'clams', is_active: 1, rank: 610 }] },
        getSingleMock: null,
        called: true,
        input: null
    },
    {
        desc: 'Combined Single list + not getting to by id, request made with invalid sort property',
        err: 'Incorrect sort parameter',
        getListError: null,
        getSingleError: null,
        getListMock: { status: { code: 200 }, data: [{ id: 460, name: 'sluggy', symbol: 'clm', slug: 'clams', is_active: 1, rank: 610 }] },
        getSingleMock: null,
        called: false,
        input: { sort: 'rt' }
    },
    {
        desc: 'Combined Single list + by id, request made with invalid sortBy property',
        err: 'Incorrect sortBy parameter',
        getListError: null,
        getSingleError: null,
        getListMock: { status: { code: 200 }, data: [{ id: 460, name: 'sluggy', symbol: 'clm', slug: 'clams', is_active: 1, rank: 610 }] },
        getSingleMock: { status: { code: 200 }, data: [{ id: 3, name: 'tvs', symbol: 'vts', slug: 'sts', is_active: 0, rank: 11 }] },
        called: true,
        input: { id: 12, sortBy: 'rt' }
    },
    {
        desc: 'Combined Single list + not getting to by id, request made with listRepository returns error',
        err: 'Error calling CoinMarket',
        getListError: new Error('Network error'),
        getSingleError: null,
        getListMock: { status: { code: 200 }, data: [{ id: 460, name: 'sluggy', symbol: 'clm', slug: 'clams', is_active: 1, rank: 610 }] },
        getSingleMock: null,
        called: true,
        input: null
    },
    {
        desc: 'Combined Single list + not getting to by id, request made with idRepository returns error',
        err: 'Error calling CoinMarket',
        getListError: null,
        getSingleError: new Error('Network error'),
        getListMock: { status: { code: 200 }, data: [{ id: 460, name: 'sluggy', symbol: 'clm', slug: 'clams', is_active: 1, rank: 610 }] },
        getSingleMock: { status: { code: 200 }, data: [{ id: 3, name: 'tvs', symbol: 'vts', slug: 'sts', is_active: 0, rank: 11 }] },
        called: true,
        input: { id: 24 }
    },
    {
        desc: 'Combined Single list + not getting to by id, listRepository returns success with no values',
        err: 'Invalid currency list has been returned',
        getListError: null,
        getSingleError: null,
        getListMock: null,
        getSingleMock: null,
        called: true,
        input: null
    },
    {
        desc: 'Combined Single list + not getting to by id, listRepository returns success with error_message property',
        err: 'Status code = 400: A problem has occured on MarketCap',
        getListError: null,
        getSingleError: null,
        getListMock: { status: { error_message: 'oh no', error_code: 400 } },
        getSingleMock: null,
        called: true,
        input: null
    },
    {
        desc: 'Combined Single list + not getting to by id, listRepository returns success with no data property',
        err: 'No data returned',
        getListError: null,
        getSingleError: null,
        getListMock: { status: { code: 200 } },
        getSingleMock: null,
        called: true,
        input: null
    },
    {
        desc: 'Combined Single list + by id, idRepository returns success with no values',
        err: 'Invalid currency list has been returned',
        getListError: null,
        getSingleError: null,
        getListMock: { status: { code: 200 }, data: [{ id: 460, name: 'sluggy', symbol: 'clm', slug: 'clams', is_active: 1, rank: 610 }] },
        getSingleMock: null,
        called: true,
        input: { id: 52 }
    },
    {
        desc: 'Combined Single list + by id, idRepository returns success with error_message property',
        err: 'Status code = 400: A problem has occured on MarketCap',
        getListError: null,
        getSingleError: null,
        getListMock: { status: { code: 200 }, data: [{ id: 460, name: 'sluggy', symbol: 'clm', slug: 'clams', is_active: 1, rank: 610 }] },
        getSingleMock: { status: { error_message: 'oh no', error_code: 400 } },
        called: true,
        input: { id: 52 }
    },
    {
        desc: 'Combined Single list + by id, idRepository returns success with no data property',
        err: 'No data returned',
        getListError: null,
        getSingleError: null,
        getListMock: { status: { code: 200 }, data: [{ id: 460, name: 'sluggy', symbol: 'clm', slug: 'clams', is_active: 1, rank: 610 }] },
        getSingleMock: { status: { code: 200 } },
        called: true,
        input: { id: 52 }
    }
];

module.exports = {
    getAppendUsecaseHappyPath() {
        return appendUsecaseHappyPath;
    },
    getappendUsecaseFailingPath() {
        return appendUsecaseFailingPath;
    }
};

