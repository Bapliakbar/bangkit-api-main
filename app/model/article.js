import mongoose from "mongoose";

const article = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    maxlength: 5000,
  },
  urlToImage: {
    type: String,
    maxlength: 500,
  },
});

const Article = mongoose.model("article", article);
export default Article;
