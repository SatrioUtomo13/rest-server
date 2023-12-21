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

const createNewUsers = (req, res) => {
    res.json({
        message: 'CREATE new users success',
        data : req.body
    })
}

const updateUser = (req,res) => {
    const {id} = req.params
    console.log(id)
    res.json({
        message: "update user success",
        data : req.body
    })
}

const deleteUser = (req,res) => {
    const {id} = req.params
    res.json({
        message: "user has been deleted",
        data : {
            id: id,
            name : "satrio",
            email : "satrio@gmail.com",
            address : "Tangerang"
        }
    })
}

module.exports = {getAllUsers, createNewUsers, updateUser, deleteUser}