import express from "express";
import { register, login, emailCheck } from "../controller/authController.js";
const router = new express.Router();

router.post("/email-check", emailCheck);
router.post("/register", register);
router.post("/login", login);

export default router;
