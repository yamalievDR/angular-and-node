import {Issue} from '../models';

import ReadPreference from 'mongodb';

function getIssues(req, res) {
    const docquery = Issue.find({}).read(ReadPreference.NEAREST);
    docquery
        .exec()
        .then(issues => res.status(200).json(issues))
        .catch(error => res.status(500).send(error));
}

function postIssue(req, res) {
    const _issue = {
        title: req.body.title,
        responsible: req.body.responsible,
        description: req.body.description,
        severity: req.body.severity,
        status: req.body.status
    };
    const issue = new Issue(_issue);
    issue.save(() => {
        res.status(201).json(issue);
        console.log('Issue created successfully!');
    });
}

module.exports = {
    getIssues,
    postIssue
};
