import Joi from "joi";

const articleValidator = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  urlToImage: Joi.string().required(),
});

export default articleValidator;
