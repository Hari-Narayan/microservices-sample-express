import { config } from "dotenv";
import express, { json } from "express";

config();

import route from "./route.js";
import connectProductDB from "./connection.js";
import { auth, authRole } from "../middlewares/auth.js";
import { matchRequestToken, responseHandler } from "../middlewares/common.js";

connectProductDB();

const app = express();
const port = process.env.PRODUCT_PORT;

app.use([json(), responseHandler, matchRequestToken, auth, authRole("admin")]);

app.use("/", route);

app.listen(port, () => {
  console.info(`Product Service: http://localhost:${port}`);
});
