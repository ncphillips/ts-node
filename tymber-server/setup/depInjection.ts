var Injector = require("injector");

function setupDepInjection(app): void {
  var injector = new Injector();

  injector.bind("filesystem", "fs");
}

module.exports = setupDepInjection;
