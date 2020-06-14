import Joi from '@hapi/joi'

export const user = Joi.object({
  username: Joi.string().required(),
  firstname: Joi.string().required(),
  lastname: Joi.array().required(),
})
