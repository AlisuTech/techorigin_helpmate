const express = require('express')
const dotenv = require("dotenv")
dotenv.config()
const app = express()
const cors = require('cors')
const userRoutes = require('./routes/userRoutes.js')
const authRoutes = require('./routes/authRoutes.js')
const appointmentRoutes = require('./routes/appointmentRoutes.js')
const serviceProviderRoutes = require('./routes/serviceProviderRoutes.js')
const corsOptions = require('./config/corsOptions')
const PORT = process.env.PORT_NUMBER || 6333
const stripe_2 = require('./routes/stripe')

const connectDB = require('./config/dbConn')
const mongoose = require('mongoose')

connectDB()
app.use(express.static('public'));
app.use(express.json())
app.use(cors(corsOptions))


app.use('/stripe', stripe_2)
app.use('/users', userRoutes);
app.use('/serviceProviders', serviceProviderRoutes);
app.use('/auth', authRoutes);
app.use('/appointment', appointmentRoutes);
app.use('/serviceProviders', serviceProviderRoutes);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
 }) 
 