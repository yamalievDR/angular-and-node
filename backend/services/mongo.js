const mongoose = require('mongoose'),
  database = require('../config/config.development').databaseConfig,
  mongoUri = `mongodb://mongodb/${database.database}`;

mongoose.Promise = global.Promise;

const options = {
  // autoIndex: false,
  // reconnectTries: 30,
  // reconnectInterval: 500,
  // poolSize: 10,
  // bufferMaxEntries: 0,
  useNewUrlParser: true
};

function connect() {
  if (process.env.NODE_ENV === 'development') {
    console.log(`NODE_ENV === 'development'`);
    mongoose.set('debug', true);
  }
  return mongoose
    .connect(mongoUri, options)
    .then(() => console.log('MongoDB is connected'))
    .catch(error => {
      console.log(`MongoDB connection error: ${error}`);
      // setTimeout(connect(), 5000);
    });
}

module.exports = {
  connect,
  mongoose
};
