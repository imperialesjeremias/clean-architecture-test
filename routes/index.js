const express = require('express')
const ApiRouter = express.Router()
const ProductsRouter = require('./product.routes')
const { logError, boomErrorHandler, errorHandler } = require('../middlewares/errorHandle')

class RouterMain {
    constructor(app) {
        this.app = app;
    }

    routes() {
        this.app.use('/products', ProductsRouter)
        this.app.use(logError)
        this.app.use(boomErrorHandler)
        this.app.use(errorHandler)
    }
}

module.exports = RouterMain;