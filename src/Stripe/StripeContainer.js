import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51PX1WVGu3ZnLKllt5uo8W1d0nxtEkDO4YTUzcYAcyr5QfCOck15xp09l9KqNqp7QZiPFpUKXLWT78VdGtrGrL2Y200JDzZL1Za";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
    return (
    <Elements stripe={stripeTestPromise}>
    <CheckoutForm />
    </Elements>
);
};

export default Stripe;