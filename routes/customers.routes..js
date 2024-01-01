const express = require('express')
const router = express.Router()
const CustomerService = require('../services/customers.service.js')
const validatorHandler = require('../middlewares/validatorHandle.js')
const { createCustomerSchema, getCustomerSchema, updateCustomerSchema } = require('../dto/customers.dto.js')
const validateHandler = require('../middlewares/validatorHandle.js')

const service = new CustomerService()

router.get('/', async (req, res, next) => {
    try {
        const customers = await service.findAll()
        console.log(customers)
        res.json(customers)
    } catch (error) {
        next(error)
    }
})

router.get('/:id',
    validatorHandler(getCustomerSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params
            console.log(id)
            const customer = await service.findOne(id)
            console.log(customer)
            res.json(user)
        } catch (error) {
            next(error)
    }
})

router.patch('/',
    validatorHandler(getCustomerSchema, 'params'),
    validateHandler(updateCustomerSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params
            const { name, lastName, phone } = req.body
            console.log(id)
            console.log(name, lastName, phone)
            const updatedCustomer = await service.update(id, name, lastName, phone)
            res.json(updatedCustomer)
        } catch (error) {
            next(error)
    }
})

router.delete('/:id',
    validateHandler(getCustomerSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params
            await service.delete(id)
            res.json({id})
        } catch (error) {
            next(error)
        }
    })

module.exports = router