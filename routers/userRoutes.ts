// step 1: create router
import express from "express";
import { dbClient } from "../server";

export const userRoutes = express.Router();

// step 2: create routes for router
userRoutes.post("/login", login);

async function login(req: express.Request, res: express.Response) {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ message: "missing username / password" });
    return;
  }

  const queryResult = await dbClient.query<{ id: number }>(
    `SELECT id FROM users WHERE username = $1 AND password = $2`,
    [username, password]
  );
  if (queryResult.rowCount <= 0) {
    res.status(400).json({ message: "<h1>invalid username / password</h1>" });
    return;
  }

  const user = queryResult.rows[0]; // get 1st record
  req.session["user"] = { userId: user.id };
    
  req.session["user"] = { id: user.id }; // for taking out the data from log-in to use it
  res.json({ message: "success" });
}
