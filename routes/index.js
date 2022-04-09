const router = require('express').Router({ mergeParams: true });

const { serviceRouter } = require('./service.js');

router.use('/services', serviceRouter);

module.exports = router;
