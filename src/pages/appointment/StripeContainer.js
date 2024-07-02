import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51PQdDvP8sQV8osLh6gDYDtLocWBE1tucF7ydFwaXafrtedt9UmGBb9IDqzEJKzljQKWehO383iZdUTwcYikGeBtf00DDBrmqMP"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}