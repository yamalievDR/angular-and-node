import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const issueSchema = new Schema({
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
});

const Issue =  mongoose.model('Issue', issueSchema);

module.exports = Issue;