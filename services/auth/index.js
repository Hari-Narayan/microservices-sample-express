import express from "express";

import route from "./route.js";

const port = 3003;
const app = express();

app.use(express.json());
app.use("/", route);

app.listen(port, () => {
  console.log(`Auth Service: http://localhost:${port}`);
});
