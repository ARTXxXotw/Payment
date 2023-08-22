import React from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

export default function StripeContainer() {



    const PUBLIC_KEY=""

    const stripeTestPromise=loadStripe(PUBLIC_KEY)

  return (
    <Elements stripe={stripeTestPromise}>  
    <PaymentForm/>
    </Elements>
  )
}
