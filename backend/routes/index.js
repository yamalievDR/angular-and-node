const express = require('express'),
  router = express.Router();

router.use('/', require('./issue.routes'));

module.exports = router;
