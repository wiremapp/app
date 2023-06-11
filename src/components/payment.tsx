import React, { useState } from "react";


import { fetchPostJSON } from "@/utils/api-helpers";
import { formatAmountForDisplay } from "@/utils/stripe-helpers";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CARD_OPTIONS = {
  iconStyle: "solid" as const,
  style: {
    base: {
      iconColor: "#6772e5",
      color: "#6772e5",
      fontWeight: "500",
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": {
        color: "#fce883",
      },
      "::placeholder": {
        color: "#6772e5",
      },
    },
    invalid: {
      iconColor: "#ef2961",
      color: "#ef2961",
    },
  },
};

export const PaymentComponent = ({price}:{price: number}) => {
  const [input, setInput] = useState({
    customDonation: Math.round(500 / 5.0),
    cardholderName: "",
  });

  const [payment, setPayment] = useState({ status: "initial" });
  const [errorMessage, setErrorMessage] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const formattedContent: string = JSON.stringify(payment, null, 2);

  const PaymentStatus = ({ status }: { status: string }) => {
    switch (status) {
      case "processing":
      case "requires_payment_method":
      case "requires_confirmation":
        return <h2>Processing...</h2>;

      case "requires_action":
        return <h2>Authenticating...</h2>;

      case "succeeded":
        return <h2>Payment Succeeded</h2>;

      case "error":
        return (
          <>
            <h2>Error:</h2>
            <p className="error-message">{errorMessage}</p>
          </>
        );

      default:
        return null;
    }
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    // Abort if form isn't valid
    if (!e.currentTarget.reportValidity()) return;
    setPayment({ status: "processing" });

    // Create a PaymentIntent with the specified amount.
    const response = await fetchPostJSON("/api/payment_intents", {
      amount: input.customDonation,
    });
    setPayment(response);

    if (response.statusCode === 500) {
      setPayment({ status: "error" });
      setErrorMessage(response.message);
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements!.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentIntent } = await stripe!.confirmCardPayment(
      response.client_secret,
      {
        payment_method: {
          card: cardElement!,
          billing_details: { name: input.cardholderName },
        },
      }
    );

    if (error) {
      setPayment({ status: "error" });
      setErrorMessage(error.message ?? "An unknown error occured");
    } else if (paymentIntent) {
      setPayment(paymentIntent);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      {formatAmountForDisplay(price,"usd")}
        <div className="test-card-notice">
          Use any of the{" "}
          <a
            href="https://stripe.com/docs/testing#cards"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stripe test cards
          </a><br/>
          Test CardNum:{" "}
          <div className="card-number">
            4242<span></span>4242<span></span>4242<span></span>4242
          </div>
        <br/>
        </div>
        <fieldset className="elements-style">
          <legend>Your payment details:</legend>
          <input
            placeholder="Cardholder name"
            className="elements-style"
            type="Text"
            name="cardholderName"
            onChange={handleInputChange}
            required
          />
          <div className="FormRow elements-style">
            <CardElement
              options={CARD_OPTIONS}
              onChange={(e) => {
                if (e.error) {
                  setPayment({ status: "error" });
                  setErrorMessage(
                    e.error.message ?? "An unknown error occured"
                  );
                }
              }}
            />
          </div>
        </fieldset>
        <button
          className="elements-style-background"
          type="submit"
          disabled={
            !["initial", "succeeded", "error"].includes(payment.status) ||
            !stripe
          }
        >
          Buy {formatAmountForDisplay(price, 'usd')}
        </button>
      </form>
      <PaymentStatus status={payment.status} />
       <pre>{formattedContent}</pre>
    </div>
  );
};

export default PaymentComponent;
