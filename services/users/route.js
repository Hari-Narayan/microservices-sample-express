import express from "express";

import * as controller from "./controller.js"; // Import all controller

const router = express.Router();

router.get("/", controller.getAllUsers);
router.post("/", controller.createUser);

export default router;
