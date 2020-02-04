const listHappyPath = [
    {
        desc: 'happy path with asc as sort param',
        data: {
            sort: 'asc'
        }
    },
    {
        desc: 'happy path with dsc as sort param',
        data: {
            sort: 'dsc'
        }
    }
];

const listFailingPath = [
    {
        desc: 'failing path with invalid string as sort param.',
        data: {
            sort: 'ascrsrsc'
        }
    },
    {
        desc: 'failing path with number as sort param.',
        data: {
            sort: 12
        }
    },
    {
        desc: 'failing path with boolean as sort param.',
        data: {
            sort: true
        }
    }
];

const listNeutralPath = [
    {
        desc: 'neutral path with no sort param.',
        data: {}
    },
    {
        desc: 'neutral path with no sort param.',
        data: { sort: '' }
    }
];

const idHappyPath = [
    {
        desc: 'happy path with small id as string',
        data: {
            id: '12'
        }
    },
    {
        desc: 'happy path with large id as string',
        data: {
            id: '1083929'
        }
    },
    {
        desc: 'happy path with 0 id as string',
        data: {
            id: '0'
        }
    },
    {
        desc: 'happy path with 0 id as number',
        data: {
            id: 0
        }
    },
    {
        desc: 'happy path with large id as number',
        data: {
            id: 52532531
        }
    },
    {
        desc: 'happy path with 0 small as number',
        data: {
            id: 32
        }
    }
];

const idFailingPath = [
    {
        desc: 'failing path with invalid number string in id property.',
        err: 'Invalid id parameter',
        data: {
            id: 'ascrsrsc'
        }
    },
    {
        desc: 'failing path with negative string in id property',
        err: 'Invalid id parameter',
        data: {
            id: '-123'
        }
    },
    {
        desc: 'failing path with negative number as id property.',
        err: 'Invalid id parameter',
        data: {
            id: -12
        }
    },
    {
        desc: 'failing path with boolean as id property.',
        err: 'Invalid id parameter',
        data: {
            id: true
        }
    },
    {
        desc: 'failing path with no id property.',
        err: 'Id is a required query parameter for this call',
        data: {}
    },
    {
        desc: 'neutral path with empty id property.',
        err: 'Invalid id parameter',
        data: { id: '' }
    }
];

const appendHappyPath = [
    {
        desc: 'happy path with sortBy empty',
        response: { id: 12, sortBy: 'id', sortOptions: 'asc' },
        data: {
            id: '12',
            sort: 'asc',
            sortBy: ''
        }
    },
    {
        desc: 'happy path with no sortBy property',
        response: { id: 12, sortBy: 'id', sortOptions: 'asc' },
        data: {
            id: '12',
            sort: 'asc'
        }
    },
    {
        desc: 'happy path with no sortBy or sort properties',
        response: { id: 12, sortBy: 'id', sortOptions: 'dsc' },
        data: {
            id: '12'
        }
    },
    {
        desc: 'happy path with all properties present, id = 12, sort = asc, sortBy = id',
        response: { id: 12, sortBy: 'id', sortOptions: 'asc' },
        data: {
            id: '12',
            sort: 'asc',
            sortBy: 'id'
        }
    },
    {
        desc: 'happy path with all properties present, id = 12, sort = asc, sortBy = rank',
        response: { id: 12, sortBy: 'rank', sortOptions: 'asc' },
        data: {
            id: '12',
            sort: 'asc',
            sortBy: 'rank'
        }
    },
    {
        desc: 'happy path with no sort property',
        response: { id: 12, sortBy: 'rank', sortOptions: 'dsc' },
        data: {
            id: '12',
            sortBy: 'rank'
        }
    }
];

const appendFailingPath = [
    {
        desc: 'failing path with invalid id',
        err: 'Invalid id parameter',
        data: {
            id: -2,
            sort: 'asc',
            sortBy: 'rank'
        }
    },
    {
        desc: 'failing path with invalid sort',
        err: 'Incorrect sort parameter',
        data: {
            id: 12,
            sort: 'caught',
            sortBy: 'rank'
        }
    },
    {
        desc: 'failing path with invalid sortby',
        err: 'Incorrect sortBy parameter',
        data: {
            id: 12,
            sort: 'asc',
            sortBy: 'caught'
        }
    }
];

module.exports = {
    getListHappyPath() {
        return listHappyPath;
    },
    getListFailingPath() {
        return listFailingPath;
    },
    getListNeutralPath() {
        return listNeutralPath;
    },
    getIdHappyPath() {
        return idHappyPath;
    },
    getIdFailingPath() {
        return idFailingPath;
    },
    getAppendHappyPath() {
        return appendHappyPath;
    },
    getAppendFailingPath() {
        return appendFailingPath;
    }
};
