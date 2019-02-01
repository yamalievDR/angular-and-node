const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  issueSchema = new Schema({
    title: {
      type: String
    },
    responsible: {
      type: String
    },
    description: {
      type: String
    },
    severity: {
      type: String
    },
    status: {
      type: String,
      default: 'Open'
    }
  }),
  Issue = mongoose.model('Issue', issueSchema);

module.exports = Issue;
