const express = require('express');
const router = express.Router();
const { summary, ask} = require('../controllers/aiController');

router.post('/summany', summary);
router.post('/ask', ask);

module.exports = router;