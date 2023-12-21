require('dotenv').config()
const PORT = process.env.PORT || 4000
const express = require('express')

const usersRoutes = require('./src/routes/users.js')

const app = express();

app.use(express.json())

app.use('/users', usersRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})