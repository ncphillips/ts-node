var express = require('express');
var path = require('path');

function setupStaticFiles(app): void {
  app.use(express.static(path.join(__dirname, '../../public')));
}

module.exports = setupStaticFiles;
