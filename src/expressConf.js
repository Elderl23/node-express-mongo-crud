const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));//entiende los datos que envian los formularios

// import routes
const indexRoutes = require('./routes/index');
app.use('/',indexRoutes);

module.exports = app;