require('./mongo').connect();

module.exports = {
    issueService: require('./issue.service')
};
