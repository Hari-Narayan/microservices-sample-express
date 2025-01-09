// api-gateway/route.js
import { Router } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

import { auth } from "../services/middlewares/auth.js";

const router = Router();

const userServiceProxy = createProxyMiddleware({
  target: "http://localhost:3001",
  changeOrigin: true,
  pathRewrite: {
    "^/users": "/", // Remove the /users prefix when forwarding
  },
});

const productServiceProxy = createProxyMiddleware({
  target: "http://localhost:3002",
  changeOrigin: true,
  pathRewrite: {
    "^/products": "/", // Remove the /products prefix when forwarding
  },
});

// ... (user and product proxies)

const authServiceProxy = createProxyMiddleware({
  target: "http://localhost:3003",
  changeOrigin: true,
  pathRewrite: {
    "^/auth": "/",
  },
});

router.use("/auth", authServiceProxy);
router.use("/users", [auth], userServiceProxy);
router.use("/products", [auth], productServiceProxy);
router.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running on 3000" });
});

export default router;
