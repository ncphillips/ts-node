import {Request} from "express";
import {Response} from "express";
import {NextFunction} from "express";
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  console.log("What is happening");
  try {
    res.render('index.html');
  } catch (err) {
    console.log(err);
    throw err;
  }
});

module.exports = router;
