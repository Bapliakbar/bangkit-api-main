import Joi from "joi";

const userValidator = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(255).required(),
  gender: Joi.string().required(),
  height: Joi.number().required(),
  weight: Joi.number().required(),
  goal: Joi.string().required(),
});

export default userValidator;
