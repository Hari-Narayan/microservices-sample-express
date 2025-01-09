import express from "express"; // Use import

import route from "./route.js";
import { authRole, authToken } from "../middlewares/auth.js";

const port = 3001;
const app = express();

app.use(express.json());
app.use("/", [authToken, authRole("user")], route);

app.listen(port, () => {
  console.log(`User Service: http://localhost:${port}`);
});
