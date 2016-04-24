var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

function setupBodyParsing(app): void {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
}

module.exports = setupBodyParsing;
