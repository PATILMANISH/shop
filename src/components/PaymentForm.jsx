import React from "react";
import { CardElement } from "@stripe/react-stripe-js";
const cardStyle = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: "Urbanist, sans-serif",
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#32325d",
      },
    },
    invalid: {
      fontFamily: "Urbanist, sans-serif",
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};
const PaymentForm = () => {
  return <CardElement options={cardStyle} />;
};

export default PaymentForm;
