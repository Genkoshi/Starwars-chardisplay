const express = require('express'),
      bodyParser = require('body-parser'),
      axios = require('axios'),
      cc = require('./controllers/char_controller');

const app = express();

app.use(bodyParser.json());

const port = 3003;

const baseURL = '/api/char';
app.post(baseURL, cc.create);

app.listen( port, () => { console.log(`Server is listening on port ${port}`) } );