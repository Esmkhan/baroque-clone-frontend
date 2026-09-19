import React from "react";
import { Container } from "react-bootstrap";
import CloseButton from "react-bootstrap/CloseButton";

function RefundPolicy() {
  return (
    <Container className="my-5">
      <div className="text-end ">
        <CloseButton onClick={() => window.history.back()} />
      </div>
      <div className="w-3/4 mx-auto">
        {/* PAGE HEADING */}
        <h2 className="text-center font-bold tracking-wider mb-5">
          REFUND POLICY
        </h2>

        {/* REFUND POLICY */}
        <section className="mb-5">
          <p>
            We do not provide refunds only <strong>store credit</strong> is
            provided. However, refunds may be allowed in exceptional cases if
            there is any fault at our end.
          </p>

          <p>
            Changes in order for instance; size change, article change,
            addition/removal of article etc can be made within{" "}
            <strong>48 hours (2 days)</strong> from the day the order is placed.
          </p>
        </section>

        {/* CANCELLATION */}
        <section className="mb-5">
          <h4 className="font-bold tracking-wider mb-3">Cancellation</h4>

          <p>
            In order to cancel the order, please fill out the cancellation form
            here:{" "}
            <a
              href="https://baroque.pk/pages/order-cancellation"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-black"
            >
              Click here
            </a>
          </p>

          <p>
            Order can be cancelled within <strong>48 hours (2 days)</strong> of
            the order placement. Cancelling order after{" "}
            <strong>48 hours (2 days)</strong> will result in cancellation fees
            of <strong>3%</strong> of the paid amount, with the amount refunded
            to the original mode of payment.
          </p>

          <p>
            The amount will be processed in <strong>14-18 working days</strong>.
          </p>

          <p>
            Store credit will be provided to the orders cancelled with no
            genuine reason (i.e., change of mind, don’t require order anymore,
            changes in order).
          </p>
        </section>

        {/* RETURN */}
        <section className="mb-5">
          <h4 className="font-bold tracking-wider mb-3">Return</h4>

          <p>
            To initiate a return request, you have to fill the form at{" "}
            <a
              href="https://returns.baroque.pk/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-black"
            >
              Click here
            </a>
            .
          </p>

          <p>
            Please note that returns will need to be sent to the address you are
            provided when your return is accepted.
          </p>

          <p>
            We will notify you once we’ve received and inspected your return,
            and let you know if the refund was approved or not. If approved,
            you’ll be automatically refunded on your original payment or credit
            voucher within <strong>14 business days</strong>.
          </p>

          <p>
            Please remember it can take some time for your bank or credit card
            company to process and post the refund too.
          </p>

          <p>
            Items/Articles ordered in our sale and discount sections will not be
            entertained for refund or exchange.
          </p>

          <p>
            To be eligible for a return, your item must be in the same condition
            that you received it, unworn or unused, with tags, and in its
            original packaging. You’ll also need the receipt or proof of
            purchase.
          </p>

          <p>
            In order to return the package, our team will provide you with the
            instructions on how and where to send your package. Items sent back
            to us without first requesting a return will not be accepted.
          </p>

          <p>
            Baroque has a right to reject a return request found misusing of our
            generous return policy or a product received with missing tags and
            other components.
          </p>
        </section>

        {/* DAMAGES AND ISSUES */}
        <section className="mb-5">
          <h4 className="font-bold tracking-wider mb-3">Damages and Issues</h4>

          <p>
            In case of any damaged or incorrect item, the concern must be raised
            within <strong>48 hours</strong> to our customer care team for
            further assistance or else the complaint cannot be accepted.
          </p>
        </section>

        {/* EXCEPTIONS */}
        <section className="mb-5">
          <h4 className="font-bold tracking-wider mb-3">
            Exceptions / Non-returnable Items
          </h4>

          <p>
            Certain types of items cannot be returned, like customized articles
            (custom size articles), and service charges (such as priority
            stitching). Please get in touch if you have questions or concerns
            about your specific item.
          </p>

          <p>
            Unfortunately, we cannot accept returns on sale items or gift cards.
          </p>
        </section>

        {/* NOTE */}
        <section className="mb-5">
          <p>
            <strong>
              *Baroque reserves the right to reject return requests found
              misusing our return policy or a product received with missing tags
              and other components.
            </strong>
          </p>
        </section>
      </div>
    </Container>
  );
}

export default RefundPolicy;
