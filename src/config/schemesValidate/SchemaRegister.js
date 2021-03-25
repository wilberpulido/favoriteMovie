const Joi = require('@hapi/joi')

const schemaRegister = Joi.object({
  firstName: Joi.string().min(6).max(255).required(),
  lastName: Joi.string().min(6).max(255).required(),
  email: Joi.string().min(6).max(255).required().email(),
  password: Joi.string().min(6).max(1024).required()
})

module.exports = schemaRegister
