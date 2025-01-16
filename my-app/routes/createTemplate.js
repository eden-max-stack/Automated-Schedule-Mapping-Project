const express = require('express');
const router = express.Router();
const createTemplateController = require('../controllers/createTemplateController');

router.post('/', createTemplateController.createTemplate);

module.exports = router;