const boom = require('@hapi/boom')
const db = require('../db/models/index')

class CustomerService {
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