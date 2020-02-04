module.exports = function throwError(err, res) {
    let body = 'emptyBody';

    if (res && res.body) {
        body = res.body;
    }

    console.error(`Chucked: ${JSON.stringify(body, null, 2)}`);
    throw err;
};
