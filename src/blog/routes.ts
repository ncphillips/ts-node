import {Request} from "express";
import {Response} from "express";
import {NextFunction} from "express";
import {BlogPostCollection} from "./BlogPostCollection";
import Injector = require("../Injector");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  var collection: BlogPostCollection = getCollection();
  collection.findAll(function (err, posts) {
    res.render('blog', { title: 'My Blog', posts: posts });
  });
});

function getCollection(): BlogPostCollection {
  var injector = new Injector();
  return injector.getInstance("BlogPostCollection");
}


module.exports = router;
