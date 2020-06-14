import Joi from '@hapi/joi'

export const tags = Joi.object({
  tag: Joi.string().required()
})


export const blog = Joi.object({
  title: Joi.string().required(),
  body: Joi.string().required(),
  tags: Joi.array().required(),
  author: Joi.string().required(),
  datetime: Joi.date().iso().required()
})
