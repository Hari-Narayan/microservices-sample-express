// services/products/route.js
import { Router } from "express";

import * as controller from "./controller.js";

const router = Router();

router.get("/", controller.getAllProducts);
// ... other product route

export default router;
