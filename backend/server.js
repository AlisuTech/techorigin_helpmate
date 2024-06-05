const express = require('express')
const dotenv = require("dotenv")
dotenv.config()
const app = express()
const PORT = process.env.PORT_NUMBER || 6333


app.listen(PORT, () => console.log(`server running on port ${PORT}`))
