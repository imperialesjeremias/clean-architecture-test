const boom = require('@hapi/boom')
const db = require('../db/models/index')
const ProductsService = require('./products.service')

class CustomerService {
    static _customerServiceInstance = null
    
    static getInstance(){
        if(!CustomerService._customerServiceInstance) {
            CustomerService._customerServiceInstance = new CustomerService()
        }
        return ProductsService._productsServiceInstace
    }

    constructor(){}

    async find() {
        const response = await db.Customer.findAll({
            include: ['user']
        })
        return res.status(200).json(response)
    }

    async findOne(id) {
        const customer = await db.Customer.findByPk(id)
        !customer && boom.notFound('Customer no encontrado')
        return res.status(200).json(customer)
    }
    
    async create() {
        const newCustomer = await db.Customer.create(data, {
            include: ['user']
        })
        return res.status(200).json(newCustomer)
    }

    async update(id, changes) {
        const Customer = await this.findOne(id)
        const customerChanged = Customer.update(changes)
        return {
            id,
            customerChanged
        }
    }

    async delete(id) {
        const customer = await db.Customer.findByPk(id)
        await customer.destroy()
        return { id }
    }
}

module.exports = CustomerService