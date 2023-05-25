import express from "express";

import { addEmploi, fetchEmploi } from "../controllers/Emploi.js";

const router = express.Router();

router.route("/").post(addEmploi);
router.route("/").get(fetchEmploi);

export default router;