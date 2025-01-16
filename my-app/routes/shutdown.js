const express = require('express');
const router = express.Router();
const shutdownController = require('../controllers/shutdownController');

router.get('/', shutdownController.shutdown);

module.exports = router;