const express = require('express'),
  services = require('../services'),
  issueService = services.issueService,
  router = express.Router();

router.get('/issues', (req, res) => {
  issueService.getIssues(req, res);
});

router.post('/issue', (req, res) => {
  issueService.postIssue(req, res);
});
//
// router.put('/issue/:id', (req, res) => {
//     heroService.putHero(req, res);
// });
//
// router.delete('/issue/:id', (req, res) => {
//     heroService.deleteHero(req, res);
// });

module.exports = router;
