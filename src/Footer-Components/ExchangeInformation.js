import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CloseButton from "react-bootstrap/CloseButton";

function ExchangeRefund() {
  return (
    <Container className="my-5 py-4 w-3/4 mx-auto">
      <div className="text-end ">
        <CloseButton onClick={() => window.history.back()} />
      </div>
      <div className="w-2/4 mx-auto">
        {/* PAGE HEADING */}
        <h2 className="text-center tracking-wider font-semibold mb-5">
          EXCHANGE & REFUND
        </h2>

        {/* EXCHANGES */}
        <h4 className="tracking-wider font-semibold mb-4">Exchanges</h4>

        {/* WITHIN PAKISTAN */}
        <h5 className="font-semibold mb-3">Within Pakistan</h5>

        <p className="leading-5">
          We have a <strong>10-day</strong> Exchange policy starting from the
          order delivery date. The Exchange can be initiated using the online
          form:
          <a
            href="https://baroque.pk/pages/exchange-form?ref=pify-form-builder/"
            target="_blank"
            rel="noreferrer"
            className="text-black underline ml-1"
          >
            click here
          </a>
        </p>

        {/* ELIGIBILITY */}
        <p className="font-semibold mt-4 mb-2">
          To be eligible for the exchange the products should be:
        </p>

        <ol className="leading-6 pl-5">
          <li>Bought from Baroque online store with Invoice</li>
          <li>Unused and in original state as delivered</li>
          <li>With original packing with labels attached</li>
        </ol>

        <p className="leading-5 mt-4">
          To prevent any delays, please attach clear images of the products you
          are returning to us.
        </p>

        <p className="leading-5">
          Articles bought in sale cannot be exchanged or returned unless faulty.
        </p>

        <p className="leading-5">
          Exchange or Return is not valid on Dupattas and Shawls unless
          defective.
        </p>

        <p className="leading-5">
          Exchanges will be processed at the original item price, not the sale
          price.
        </p>

        <p className="leading-5">
          The customer will be responsible for paying for the return shipping
          costs charged at the time of sending the article back and{" "}
          <strong>PKR 500</strong> will be charged at the time of delivery for
          the exchange article.
        </p>

        <p className="leading-5">
          In case of any damaged OR missing item, the concern must be raised
          within <strong>48 hours (2 days)</strong> to our customer care team
          for further assistance or else the complaint cannot be accepted.
        </p>

        <p className="leading-5">
          We will not be responsible for the items that are delivered
          domestically and then shipped internationally to a third party.
        </p>

        <p className="leading-5">
          All exchanges are subject to item availability. If the item is no
          longer available, a coupon code will be issued for online use within{" "}
          <strong>12 months</strong>. Shipping charges will not be reimbursed.
        </p>

        <p className="leading-5">
          Online exchange processing takes approximately{" "}
          <strong>7-10 days</strong> after verification.
        </p>

        <p className="leading-5 italic">
          *Baroque reserves the right to reject exchange requests found misusing
          the exchange policy or a product received with missing tags and not in
          the correct condition.
        </p>

        {/* EXCHANGE PROCEDURE */}
        <h4 className="tracking-wider font-semibold mt-5 mb-4">
          Exchange Procedure
        </h4>

        <p className="leading-5">
          In order to complain/exchange the article, please fill out the
          complain/exchange form{" "}
          <a
            href="https://baroque.pk/pages/exchange-form?ref=pify-form-builder/"
            target="_blank"
            rel="noreferrer"
            className="text-black underline ml-1"
          >
            click here
          </a>
        </p>

        <p className="leading-5">
          Customers will be required to ship the items back for exchange to the
          address provided by our team.
        </p>

        <p className="leading-5">
          In case of a faulty/incorrect item delivered to you, the return
          shipping cost will be reimbursed as an online credit voucher.
        </p>

        <p className="leading-5">
          For exchange of a non-faulty item, the customer will bear the return
          shipping cost along with the exchange charges guided by the team
          accordingly.
        </p>

        <p className="leading-5">
          Credit voucher or your desired exchange item will only be provided
          once we have received your returned items.
        </p>

        {/* REFUND POLICY */}
        <div className="border-t border-gray-300 mt-5 pt-5">
          <h4 className="tracking-wider font-semibold mb-3">Refund Policy</h4>

          <p className="leading-7">
            Please check our{" "}
            <Link to="/refundPolicy" className="text-black underline">
              Refund Policy
            </Link>{" "}
            for information regarding refunds.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default ExchangeRefund;
