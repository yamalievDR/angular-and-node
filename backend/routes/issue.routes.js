const express = require('express');
const services = require('../services');
const issueService = services.issueService;

const router = express.Router();


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
