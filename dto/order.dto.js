const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string().min(3).max(30)
const lastName = Joi.string()
const phone = Joi.string()

const getCustomerSchema = Joi.object({
    id: id.required()
})

const createCustomerSchema = Joi.object({
    name: name.required(),
    lastName: lastName.required(),
    phone: phone.required()
})

