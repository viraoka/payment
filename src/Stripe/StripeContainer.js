import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./CheckoutForm";


const PUBLIC_KEY = "pk_test_51OPTGtBCGH21A4A39u5bQ6t1VTdW5nKk96q2JPlaWrYAEjEFCi1iKWQzKPDggDrT1vXZvTcDjlxcnZXPynSJx5XA00ongQ6OEL";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
    return (
    <Elements stripe={stripeTestPromise}>
    <CheckoutForm />
    </Elements>
);
};

export default Stripe;