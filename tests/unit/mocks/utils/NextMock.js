module.exports = () => {
    // eslint-disable-next-line func-style
    const next = input => {
        next.finalStatus = input;
        return next;
    };

    next.finalStatus = 0;
    return next;
};
