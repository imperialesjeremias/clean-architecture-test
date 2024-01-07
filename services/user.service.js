const boom = require('@hapi/boom')
const db = require('../db/models/index')

class UserService {
    constructor() {}

    async create(email, password, role) {
        console.log('data service', email, password, role)
        const data = { email, password, role }
        const newUser = await db.User.create(data);
        return newUser
    }

    async find() {
        const response = await db.User.findAll({
            include: ['customer']
        })
        return response
    }
    async findOne(id) {
        const user = await models.User.findByPk(id)
        !user && boom.notFound('Usuario no encontrado')
        return user 
    }
    async update(id, changes) {
        const user = await this.findOne(id)
        const userChanged = user.update(changes)
        return {
            id,
            userChanged
        }
    }
    async delete(id){
        const user = await db.User.findByPk(id)
        await user.destroy()
        return { id }
    }

}

module.exports = UserService;