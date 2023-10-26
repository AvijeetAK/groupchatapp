const express = require('express');

const bodyParser = require('body-parser');

const adminRoute = require('./routes/admin');

const messageRoute = require('./routes/message');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));



app.use(adminRoute);

app.use(messageRoute);


app.listen(3000);