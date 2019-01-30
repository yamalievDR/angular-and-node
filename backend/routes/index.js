const express = require('express');
const router = express.Router();

router.use('/', require('./issue.routes'));

module.exports = router;
