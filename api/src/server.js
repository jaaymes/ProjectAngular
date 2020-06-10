const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require ('cors')

require('./database');

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(routes);

app.listen(3333);
