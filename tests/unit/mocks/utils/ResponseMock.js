module.exports = () => {
    const res = {};

    res.status = input => {
        res.finalStatus = input;
        return res;
    };
    res.json = () => res;
    res.send = () => res;
    res.finalStatus = 0;
    return res;
};
