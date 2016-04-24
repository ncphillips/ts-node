import {Request} from "express";
import {Response} from "express";
import {NextFunction} from "express";

module.exports = function(err: any, req: Request, res: Response, next: NextFunction) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
}
