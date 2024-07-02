const express = require('express')
const dotenv = require("dotenv")
dotenv.config()
const app = express()
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const PORT = process.env.PORT_NUMBER || 6333
// const YOUR_DOMAIN = `http://localhost:${PORT}`;
const stripe_2 = require('./routes/stripe')

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

const connectDB = require('./config/dbConn')
const mongoose = require('mongoose')
const verifyJWT = require('./middleware/authMiddleware')

connectDB()
app.use(express.static('public'));
app.use(express.json())
app.use(cors(corsOptions))

app.post("/payment", cors(), async (req, res) => {
	let { amount, id } = req.body
	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: "USD",
			description: "Spatula company",
			payment_method: id,
			confirm: true
		})
		console.log("Payment", payment)
		res.json({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false
		})
	}
})

app.use('/api/stripe', stripe_2)

app.use('/users', require('./routes/userRoutes'))
app.use('/serviceProviders', require('./routes/serviceProviderRoutes'))

app.use('/auth', require('./routes/authRoutes'));
app.use('/appointments', verifyJWT, require('./routes/appointmentRoutes'))

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
 }) 
