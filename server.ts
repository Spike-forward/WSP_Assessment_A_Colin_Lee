import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.join(__dirname, ".env") });

import express from "express";
import expressSession from "express-session";
import pg from "pg";

const app = express();

// Section 1: Middleware
app.use(express.json());
app.use(
  expressSession({
    secret: process.env.SESSION_SECRET ?? "helloworld",
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: process.env.NODE_ENV === "production",
    },
  })
);
app.use((req, res, next) => {
  console.log(`Method: ${req.method}, Path: ${req.path}`);
  next();
});

export const dbClient = new pg.Client({
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
});
dbClient.connect();

// Section 2: Routers
import { userRoutes } from "./routers/userRoutes";
import { todoRoutes } from "./routers/todoRoutes";
import { isLoggedInAPI, isLoggedInStatic } from "./guard";

app.use("/todo", isLoggedInAPI, todoRoutes);
app.use(userRoutes);

// Section 3: Serve static files
app.use(express.static(path.join(__dirname, "public")));
app.use(isLoggedInStatic, express.static(path.join(__dirname, "private")));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "public", "404.html"));
});

declare module "express-session" {
  interface SessionData {
    views: Record<string, number>;
    user: { id: number };
  }
}

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});