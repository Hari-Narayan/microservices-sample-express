// // api-gateway/index.js
// import express from "express";

// import route from "./route.js";

// const port = 3000;
// const app = express();

// app.use("/", route);

// app.listen(port, () => {
//   console.log(`API Gateway listening on port ${port}`);
// });

import dotenv from "dotenv";
import express from "express";
import jwt from "jsonwebtoken";
import httpProxy from "http-proxy";
// import { auth } from "../services/middlewares/auth.js";

const app = express();
const proxy = httpProxy.createProxyServer();

dotenv.config();

const port = 3000;

const JWT_SECRETE = process.env.JWT_SECRETE || "dkcgjsdbchjdsb";

app.get("/", (req, res) => {
  console.log("API Gateway is running..");
  return res.send("API Gateway is running..");
});

app.use("/auth", (req, res) => {
  console.log("here");
  proxy.web(req, res, { target: "http://localhost:3003" });
});

app.use("/users", (req, res) => {
  console.log("here");
  proxy.web(req, res, { target: "http://localhost:3001" });
});

app.use("/products", (req, res) => {
  console.log("products");

  proxy.web(req, res, { target: "http://localhost:3002" });
});

app.listen(port, () => {
  console.log("API Gateway is running : ", port);
});
