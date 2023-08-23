import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51NhvTDERtEuSyJf8o89x0ua5W0m2G5ayuHAxCQyvOhemgG9CHs2itZqdmVYJATSLoHuN4rUxftCFNkNcw5wVelFg00BI2WQsOo"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}