// view engine setup
var path = require('path');
var exphbs  = require('express-handlebars');
var hbs = exphbs.create();

function setupViewEngine(app): void {
  app.set('views', path.join(__dirname, '../../views'));
  app.engine('handlebars', hbs.engine);
  app.set('view engine', 'handlebars');
}

module.exports = setupViewEngine;
