import { config } from "dotenv";
import express, { json } from "express";

config();

import route from "./route.js";
import { matchRequestToken } from "../middlewares/common.js";

const app = express();
const port = process.env.AUTH_PORT;

app.use(json());
app.use(matchRequestToken);

app.use("/", route);

app.listen(port, () => {
	console.info(`Auth Service: http://localhost:${port}`);
});
