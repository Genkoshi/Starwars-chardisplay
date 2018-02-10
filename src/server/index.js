const express = require('express'),
      bodyParser = require('body-Parser');

const app = express();

app.use(bodyParser.json);

const port = 3001;

app.listen( port, () => { console.log(`Server is listening on port ${port}`) } );