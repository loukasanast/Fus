const router = require('express').Router();

router.use('/teams', require('./routes'));

module.exports = router;