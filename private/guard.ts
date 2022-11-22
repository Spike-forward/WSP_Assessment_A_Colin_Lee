import type { Request, Response, NextFunction } from "express";

// 1. Protect API -> status code 401
export const isLoggedInAPI = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session["user"]) {
    res.status(401).json({ message: "401 Unauthorized" });
    return;
  }
  next();
};

// 2. Protect Static Files -> 404.html
export const isLoggedInStatic = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session["user"]) {
    res.redirect("/login.html");
    return;
  }
  next();
};