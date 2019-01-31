const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', routes);
app.listen(4000, () => console.log(`API running on http://localhost:${4000}`));
