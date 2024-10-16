import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";

// TODO stripe publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PUBLISHABLE_KEY);
const Payment = () => {
  return (
    <div>
      <SectionTitle
        subHeading="Payment"
        heading="Make a Payment"
      ></SectionTitle>

      <div className="font-Inter">
        <Elements stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
