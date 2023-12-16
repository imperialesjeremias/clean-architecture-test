    const express = require('express')
    const router = express.Router()
    const ProductsService = require('../services/products.service')
    const validateHandler = require('../middlewares/validatorHandle')
    const { createProductSchema, updateProductSchema, getProductSchema } = require('../dto/product.dto')

    router.get('/', async (req, res, next) => {
        try {
            const productService = await ProductsService.getInstance()
            const products = await productService.find()
            res.json(products) 
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
            next(error)
        }
    })

    router.get('/:id', 
        validateHandler(getProductSchema, 'params'),
        async (req, res, next) => {
        try {
            const productService = await ProductsService.getInstance()
            const id = req.params.id
            const product = await productService.findOne(id)
            res.json(product)
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
            next(error)
        }
    })

    router.post('/', 
        validateHandler(createProductSchema, 'body'),
        async (req, res, next) => {
        try {
            const productService = await ProductsService.getInstance()
            const body = req.body
            const newProduct = await productService.create(body)
            res.json(newProduct)
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
            next(error)
        }
    })

    router.patch('/:id', async (req, res, next) => {
    try {
        const productService = await ProductsService.getInstance()
        const id = req.params
        const change = req.body
        const updateProduct = await productService.update(id, change)
        res.json(updateProduct)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
        next(error)
    }
    })

    router.delete('/:id', async (req, res, next) => {
        try {
            const productService = await ProductsService.getInstance()
            const id = req.params
            const deleteProduct = await productService.delete(id)
            res.json(deleteProduct)
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
            next(error)
        }
    })



    module.exports = router