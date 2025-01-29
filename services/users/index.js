import { config } from "dotenv";
import express, { json } from "express";

config();

import route from "./route.js";

import connectUserDB from "./connection.js";
import { auth, authRole } from "../middlewares/auth.js";
import { matchRequestToken, responseHandler } from "../middlewares/common.js";

connectUserDB();

const app = express();
const port = process.env.USER_PORT;

app.use([json(), responseHandler, matchRequestToken, auth, authRole("user")]);

app.use("/", route);

app.listen(port, () => {
  console.info(`User Service: http://localhost:${port}`);
});
