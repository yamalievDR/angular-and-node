if (!process.env.NODE_ENV) {
  process.exit(1);
}

const express = require('express'),
  bodyParser = require('body-parser'),
  router = express.Router(),
  config = require('./config/config.development').backendConfig,
  routes = require('./routes'),
  publicweb = './app';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(publicweb));

app.use('/api', routes);

app.get('*', (req, res) => {
  res.sendFile(`index.html`, { root: publicweb });
});

app.listen(config.port, () => console.log(`API running on http://localhost:${config.port}`));
