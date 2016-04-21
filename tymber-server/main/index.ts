import {Request} from "express";
import {Response} from "express";
import {NextFunction} from "express";
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.render('index.html');
});

module.exports = router;
