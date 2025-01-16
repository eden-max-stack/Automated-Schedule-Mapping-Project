const express = require('express');
const router = express.Router();
const getTemplatesController = require('../controllers/getTemplatesController');

router.get('/', getTemplatesController.getTemplates);

module.exports = router