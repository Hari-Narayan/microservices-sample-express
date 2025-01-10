import { Router } from "express";
import httpProxy from "http-proxy";

const router = Router();
const proxy = httpProxy.createProxyServer();

router.use("/auth", (req, res) => {
	proxy.web(req, res, { target: `http://localhost:${process.env.AUTH_PORT}` });
});

router.use("/users", (req, res) => {
	proxy.web(req, res, { target: `http://localhost:${process.env.USER_PORT}` });
});

router.use("/products", (req, res) => {
	proxy.web(req, res, { target: `http://localhost:${process.env.PRODUCT_PORT}` });
});

export default router;
