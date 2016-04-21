import {Request} from "express";
import {Response} from "express";
import {NextFunction} from "express";
import {BlogPostCollection} from "./BlogPostCollection";
import Injector = require("../Injector");
import BlogPost = require("./BlogPost");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  postCollection().findAll(function (err, posts) {
    res.render('blog', { title: 'My Blog', posts: posts });
  });
});

function postCollection(): BlogPostCollection {
  var injector = new Injector();
  return injector.getInstance("BlogPostCollection");
}

module.exports = router;
