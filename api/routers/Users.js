import express from "express";

import {login, register , getUsers , DeleteUser} from "../controllers/Users.js"



const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/").get(getUsers);
router.route("/delete/:id").delete(DeleteUser);

export default router;