const express = require('express')
const dotenv = require("dotenv")
dotenv.config()
const app = express()
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const PORT = process.env.PORT_NUMBER || 6333
const stripe_2 = require('./routes/stripe')

const connectDB = require('./config/dbConn')
const mongoose = require('mongoose')
const verifyJWT = require('./middleware/authMiddleware')

connectDB()
app.use(express.static('public'));
app.use(express.json())
app.use(cors(corsOptions))


app.use('/stripe', cors(), stripe_2)

app.use('/users', require('./routes/userRoutes'))
app.use('/serviceProviders', require('./routes/serviceProviderRoutes'))

app.use('/auth', require('./routes/authRoutes'));
app.use('/appointments', verifyJWT, require('./routes/appointmentRoutes'))

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
 }) 
 