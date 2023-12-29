const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize')

class UserService {
    constructor() {}

    async create() {
        const newUser = await models.User.create(data)
        return newUser
    }

    async find() {
        const response = await models.User.findAll()
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
        const user = await models.User.findByPk(id)
        await user.destroy()
        return { id }
    }

}

module.exports = UserService;