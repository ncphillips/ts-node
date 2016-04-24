import {Request} from "express";
import {Response} from "express";
import {NextFunction} from "express";

var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');

var app = express();

require('./setup/viewEngine')(app);
require('./setup/bodyParsing')(app);
require('./setup/staticFiles')(app);
require('./setup/routes')(app);
require('./setup/depInjection')(app);

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(require("./middleware/404"));

if (app.get('env') === 'development') {
  app.use(require('./middleware/500dev'));
} else {
  app.use(require('./middleware/500'));
}

module.exports = app;
