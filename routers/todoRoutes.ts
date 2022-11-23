import express from "express";
import { dbClient } from "../server";

export const todoRoutes = express.Router();

todoRoutes.get("/", getUsertodo);

async function getUsertodo(req: express.Request, res: express.Response) {
  // SELECT * FROM todo WHERE user_id = $1 <-- user_id
  const userId: number = req.session["user"]["userId"];
  const queryResult = await dbClient.query("SELECT * FROM contacts WHERE user_id = $1", [userId]);
  res.json(queryResult.rows);
}