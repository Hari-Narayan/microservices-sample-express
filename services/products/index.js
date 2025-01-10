import { config } from "dotenv";
import express, { json } from "express";

config();

import route from "./route.js";
import { auth, authRole } from "../middlewares/auth.js";
import { matchRequestToken } from "../middlewares/common.js";

const app = express();
const port = process.env.PRODUCT_PORT;

app.use(json());
app.use(matchRequestToken);
app.use(auth);

app.use("/", [authRole("admin")], route);

app.listen(port, () => {
	console.info(`Product Service: http://localhost:${port}`);
});
