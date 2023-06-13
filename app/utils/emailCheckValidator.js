import Joi from "joi";

const emailCheckValidator = Joi.object({
  email: Joi.string().email().required(),
});

export default emailCheckValidator;
