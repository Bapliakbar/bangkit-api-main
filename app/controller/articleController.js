import httpStatus from "http-status";

// import from models
import Response from "../model/response.js";
import Article from "../model/article.js";

// import utils
import articleValidator from "../utils/articleValidator.js";


// Creata article
const createArticle = async (req, res) => {
  let response = null;
  try {
    const request = await articleValidator.validateAsync(req.body);
    const article = new Article(request);

    await article.save();

    response = new Response.Success(false, "Data added successfully");
    return res.status(httpStatus.OK).json(response);
  } catch (error) {
    response = new Response.Error(true, error.message);
    return res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

// Update article
const updateArticle = async (req, res) => {
    let response = null;
    try {
      const { id } = req.params;
      const request = await articleValidator.validateAsync(req.body);
  
      const updatedArticle = await Article.findByIdAndUpdate(id, request, { new: true });
  
      if (!updatedArticle) {
        response = new Response.Error(true, "Article not found");
        return res.status(httpStatus.NOT_FOUND).json(response);
      }
  
      response = new Response.Success(false, "Article updated successfully");
      return res.status(httpStatus.OK).json(response);
    } catch (error) {
      response = new Response.Error(true, error.message);
      return res.status(httpStatus.BAD_REQUEST).json(response);
    }
  };
  
  // Read article
  const readArticle = async (req, res) => {
    let response = null;
    try {
      const { id } = req.params;
  
      const article = await Article.findById(id);
  
      if (!article) {
        response = new Response.Error(true, "Article not found");
        return res.status(httpStatus.NOT_FOUND).json(response);
      }
  
      response = new Response.Success(false, "Article retrieved successfully", article);
      return res.status(httpStatus.OK).json(response);
    } catch (error) {
      response = new Response.Error(true, error.message);
      return res.status(httpStatus.BAD_REQUEST).json(response);
    }
  };
  
  // Delete article
  const deleteArticle = async (req, res) => {
    let response = null;
    try {
      const { id } = req.params;
  
      const deletedArticle = await Article.findByIdAndDelete(id);
  
      if (!deletedArticle) {
        response = new Response.Error(true, "Article not found");
        return res.status(httpStatus.NOT_FOUND).json(response);
      }
  
      response = new Response.Success(false, "Article deleted successfully");
      return res.status(httpStatus.OK).json(response);
    } catch (error) {
      response = new Response.Error(true, error.message);
      return res.status(httpStatus.BAD_REQUEST).json(response);
    }
  };

  // Get all articles
    const getAllArticles = async (req, res) => {
    let response = null;
    try {
      const articles = await Article.find();
  
      response = new Response.Success(false, "Articles retrieved successfully", articles);
      return res.status(httpStatus.OK).json(response);
    } catch (error) {
      response = new Response.Error(true, error.message);
      return res.status(httpStatus.BAD_REQUEST).json(response);
    }
  };
  
  export { createArticle, updateArticle, readArticle, deleteArticle, getAllArticles };
  
