import { config } from "dotenv";
import express, { json } from "express";

config();

import route from "./route.js";
import connectDB from "../../utils/connection.js";

connectDB();

import { auth, authRole } from "../middlewares/auth.js";
import { matchRequestToken, responseHandler } from "../middlewares/common.js";

const app = express();
const port = process.env.USER_PORT;

app.use([json(), responseHandler, matchRequestToken, auth, authRole("user")]);

app.use("/", route);

app.listen(port, () => {
  console.info(`User Service: http://localhost:${port}`);
});
