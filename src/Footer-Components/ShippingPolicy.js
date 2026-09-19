import React from "react";
import { Container } from "react-bootstrap";
import CloseButton from "react-bootstrap/CloseButton";
import { Link } from "react-router-dom";

function ShippingPolicy() {
  return (
    <Container className="my-5">
      <div className="text-end ">
        <CloseButton onClick={() => window.history.back()} />
      </div>
      <div className="w-2/4 mx-auto">
        {/* PAGE HEADING */}
        <h2 className="text-center font-bold tracking-wider mb-5">
          SHIPPING POLICY
        </h2>

        {/* SHIPPING INFORMATION */}
        <div className="max-w-4xl mx-auto">
          <p className="leading-7 mb-4">
            Once the order is dispatched, you will be sent a shipping
            confirmation email with your carrier information and tracking
            number. Be sure to check your Junk/Spam folder as well.
          </p>

          <p className="leading-7 mb-4">
            We use couriers including but not limited to{" "}
            <strong>TCS, PostEx, Leopards, Trax, Swyft.</strong>
          </p>

          <p className="leading-7 mb-4">
            We may switch couriers from time to time to ensure the best possible
            service and best possible pricing to help our customers.
          </p>

          <p className="leading-7 mb-4">
            You can check the expected dispatch time on our{" "}
            <Link
              to="/dispatchTimeline"
              className="text-black underline font-medium hover:no-underline"
            >
              Dispatch Timeline
            </Link>
            .
          </p>
        </div>
      </div>
    </Container>
  );
}

export default ShippingPolicy;
