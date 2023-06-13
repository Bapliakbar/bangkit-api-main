import express from "express";
import { createArticle, updateArticle, readArticle, deleteArticle, getAllArticles } from "../controller/articleController.js";
const router = new express.Router();

router.post("/create", createArticle);
router.put("/update/:id", updateArticle);
router.get("/read/:id", readArticle);
router.delete("/delete/:id", deleteArticle);
router.get("/all", getAllArticles);

export default router;
