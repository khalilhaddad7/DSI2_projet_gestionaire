import express from "express";

import {login, register , getUsers , DeleteUser , UpdateUser, getUser} from "../controllers/Users.js"



const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/").get(getUsers);
router.route("/delete/:id").delete(DeleteUser);
router.route("/getuser/:id").get(getUser);
router.route("/updateuser/:id").put(UpdateUser);

export default router;