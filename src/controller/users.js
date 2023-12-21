const UserModel = require('../models/users')

const getAllUsers = async (re, res) => {

    try {
        const [data] = await UserModel.getAllUsers()
    
        res.json({
            message: 'GET all users success',
            data : data
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage : error.message
        })
    }

}

const createNewUsers = async (req, res) => {
    const bodyPayload = req.body

    try {
        await UserModel.createNewUser(bodyPayload)
        res.json({
            message: 'CREATE new users success',
            data : bodyPayload
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage : error.message
        })
    }
}

const updateUser = async (req,res) => {
    const {id} = req.params
    const body = req.body

    try {
        await UserModel.updateUser(body, id)
        res.json({
            message: "update user success",
            data : {
                id: id,
                body : body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage : error
        })
    }
}

const deleteUser = async (req,res) => {
    const {id} = req.params

    try {
        await UserModel.deleteUser(id)
        res.json({
            message: "user has been deleted",
            data : null
        })
    } catch (error) {
        res.status(500).json({
            message : 'server error',
            serverMessage: error
        })
    }
}

module.exports = {getAllUsers, createNewUsers, updateUser, deleteUser}