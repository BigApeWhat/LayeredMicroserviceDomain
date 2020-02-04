// eslint-disable-next-line new-cap
const router = require('express').Router();

const cryptoCurrencyController = require('../cryptocurrency/controllers/CryptoCurrencyController');

router.get('/currencylist', cryptoCurrencyController.getCurrencyList);
router.get('/currency', cryptoCurrencyController.getCurrencyId);
router.get('/currencyAppend', cryptoCurrencyController.getCurrencyAppended);

module.exports = router;
