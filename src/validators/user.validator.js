import Joi from '@hapi/joi';

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    fName: Joi.string().min(4).required(),
    lName: Joi.string().min(4).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};

export const noteValidator = (req, res, next) => {
  const schema = Joi.object({
    Title: Joi.string().min(4).required(),
    Descreption: Joi.string().min(4).required(),
    color: Joi.string()

  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    next();
  }
};