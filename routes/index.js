const express = require('express')
const ApiRouter = express.Router()
const productsRouter = require('./product.routes')
const categoriesRouter = require('./categories.routes')
const usersRouter = require('./users.routes')
const orderRouter = require('./order.routes')
const { logError, boomErrorHandler, errorHandler } = require('../middlewares/errorHandle')

class RouterMain {
    constructor(app) {
        this.app = app;
    }

    routes() {
        this.app.use('/products', productsRouter)
        this.app.use('/categories', categoriesRouter)
        this.app.use('/users', usersRouter)
        this.app.use('/orders', orderRouter)
        this.app.use(logError)
        this.app.use(boomErrorHandler)
        this.app.use(errorHandler)
    }
}

module.exports = RouterMain;