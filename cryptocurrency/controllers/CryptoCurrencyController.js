const cryptoUsecase = require('../usecases/CryptoCurrencyUsecase');

module.exports = {
    getCurrencyList(req, res, next) {
        const response = cryptoUsecase.currencyList(req.query);

        if (response instanceof Error) {
            return next(response);
        }

        res.status(200).send(response);
    },
    getCurrencyId(req, res, next) {
        const response = cryptoUsecase.currencyById(req.query);

        if (response instanceof Error) {
            return next(response);
        }

        res.status(200).send(response);
    },
    getCurrencyAppended(req, res, next) {
        const response = cryptoUsecase.currencyListAppendedId(req.query);

        if (response instanceof Error) {
            return next(response);
        }

        res.status(200).send(response);
    }
};
