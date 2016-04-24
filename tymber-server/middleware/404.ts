import {Request} from "express";
import {Response} from "express";
import {NextFunction} from "express";

module.exports = function(req: Request, res: Response, next: NextFunction) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
}
