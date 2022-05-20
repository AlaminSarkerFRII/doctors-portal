import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const Payment = () => {
  const { appointmentId } = useParams();

  const url = `http://localhost:5000/booking/${appointmentId}`;

  const { data: appointment, isLoading } = useQuery(
    ["booking", appointmentId],
    () =>
      fetch(url, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  // payment stripe
  const stripePromise = loadStripe(
    "pk_test_51L1YKcCSwG8CgGDROMBz3kz6xC2QCemcho77guUezPDTNqlO8hsjNKlkoyAGBBuDfA2IONO3yDTvfLYYLzIBKau300ZZAJ4ySB"
  );

  return (
    <div>
      <div class="card bg-base-200 max-w-md my-10 text-primary-content">
        <div class="card-body">
          <p>
            Hello{" "}
            <span className="font-bold text-primary">
              {appointment.patientname}
            </span>
          </p>
          <h2 class="card-title">Pay for {appointment?.treatment}</h2>
          <p>
            we will you see on
            <span className="text-orange-700">{appointment?.date}</span> at
            <span className="text-yellow-500">{appointment?.slot}</span>
          </p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
