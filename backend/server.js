const express = require('express')
const dotenv = require("dotenv")
dotenv.config()
const app = express()
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const PORT = process.env.PORT_NUMBER || 6333

const connectDB = require('./config/dbConn')
const mongoose = require('mongoose') 

connectDB()

app.use(express.json())
app.use(cors(corsOptions))
app.use('/users', require('./routes/userRoutes'))
app.use('/serviceProviders', require('./routes/serviceProviderRoutes'))
app.use('/appointments', require('./routes/appointmentRoutes'))




mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
 }) 
