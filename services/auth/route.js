import express from "express";

import { register, login } from "./controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/", (req, res) => {
	return res.json({ message: "sdjkfgvbsdfjksdbnfjksdn" });
});

export default router;
