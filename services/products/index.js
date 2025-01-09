// services/products/index.js
import express, { json } from "express";

import route from "./route.js";
import { authRole, authToken } from "../middlewares/auth.js";

const port = 3002;
const app = express();

app.use(json());
app.use("/", [authToken, authRole("admin")], route);

app.listen(port, () => {
  console.log(`Product Service: http://localhost:${port}`);
});
