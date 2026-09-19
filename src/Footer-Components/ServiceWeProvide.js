import React from "react";
import CloseButton from "react-bootstrap/CloseButton";

function ServiceWeProvide() {
  return (
    <section className="container py-5 position-relative">
      {/* Close Button */}
      <div className="position-absolute top-0 end-0">
        <CloseButton onClick={() => window.history.back()} />
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="text-justify">
            <h2 className="mb-5 text-center">Service We Provide</h2>

            <h4 className="mb-1 text-lg ">CUSTOMIZED STITCHING:</h4>

            <p className="mb-1 font-text-sm">
              Please note that the custom stitch is available for paid orders
              only and is charged <strong>PKR 5,000</strong> each article.
            </p>

            <p className="mb-1 text-sm">
              * Cancellation of Orders or Changes can be made within{" "}
              <strong>2-3 days</strong> after Order Placement.
            </p>

            <p className="mb-1 text-sm">
              * Changes made after specified timeline will cause delay in order.
            </p>

            <p className="mb-1 text-sm">
              * Customized stitching orders may require additional{" "}
              <strong>1 week</strong> for completion.
            </p>

            <p className="mb-1 text-sm">
              * Custom stitched order will not be exchanged or returned as they
              are stitched on customer’s provided size and requirements.
            </p>

            <p className="mb-1 text-sm">
              * To get your outfit custom stitched please select the custom
              stitched tab in the stitched option.
            </p>

            <p className="mb-4 text-sm">
              * Select Stitched &gt; Custom Size &gt; Choose your nearest size
              &gt; Fill in the required alterations in the allotted boxes &gt;
              Add note (if any) &gt; Add to cart.
            </p>

            <h4 className="mb-1 text-lg">PSS (PRIORITY STITCHING SERVICE):</h4>

            <p className="mb-4 text-sm">
              Priority stitching service is for all customers. This service
              allows all our customers to receive their stitched orders more
              quickly and without any hustle. This is an express delivery
              service and all priority stitched orders will be charged{" "}
              <strong>PKR 10,000 (per order)</strong>. This option comes on the
              cart page before the checkout page.
            </p>

            <h4 className="mb-3 text-lg">
              DISPATCH TIMELINE: <strong>2 WEEKS</strong>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceWeProvide;
