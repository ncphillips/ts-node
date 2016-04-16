import {Request} from "express";
import {Response} from "express";
import {NextFunction} from "express";
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
