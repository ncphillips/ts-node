var routes = require('../apps/main/index');
var glob = require("glob");

function setupRoutes(app): void {
  app.use('/', routes);
}

module.exports = setupRoutes;
