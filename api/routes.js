const router = require('express').Router();
const controller = require('./controller');

router.route('/')
    .get(controller.getAll)
    .post(controller.post);

router.route('/:id')
    .get(controller.get)
    .put(controller.put)
    .delete(controller.delete);

module.exports = router;