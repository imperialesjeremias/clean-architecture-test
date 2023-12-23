const express = require('express')
const router = express.Router()
const UserService = require('../services/user.service')
const validatorHandler = require('../middlewares/validatorHandle')
const { createUserSchema, getUserSchema, updateProductSchema } = require('../dto/users.dto')

const service = new UserService()

router.get('/', async (req, res, next) => {
    try {
        const categories = await service.find()
        res.json(categories)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', 
    validatorHandler(getUserSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params
            const category = await service.findOne(id)
            res.json(category)
        }
    })