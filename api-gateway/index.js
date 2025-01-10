import cors from "cors";
import express from "express";
import { config } from "dotenv";

config();

import router from "./route.js";
import { errorHandler, patchRequestToken } from "./middlewares.js";

const app = express();
const port = process.env.GATEWAY_PORT;

app.use(cors());
app.use(patchRequestToken);

app.get("/", (req, res) => {
	return res.send("API Gateway is running..");
});

app.use("/", router);

app.use(errorHandler);

app.listen(port, () => {
	console.info(`API Gateway is running on http://localhost:${port}`);
});
