import React from "react";
import CloseButton from "react-bootstrap/CloseButton";

function OurResponsibility() {
  return (
    <section className="container py-5 position-relative">
      {/* Close Button */}
      <div className="position-absolute top-10 end-0">
        <CloseButton onClick={() => window.history.back()} />
      </div>

      <div className="text-center">
        <h2 className="mb-5 tracking-[6px] font-normal">OUR RESPONSIBILITY</h2>

        <h3 className="mb-5 tracking-[6px] font-normal">
          #WEARHAPPINESSTHISEID
        </h3>

        {/* Video 1 */}
        <video
          src="https://cdn.shopify.com/s/files/1/2277/5269/files/Barouque_Documentary_ver_2_3-Eid_April-2022.mp4?v=1652956426"
          autoPlay
          muted
          controls
          className="w-1/2 h-auto mx-auto mb-8"
        ></video>
        <hr className="w-1/2 mx-auto mb-10 leading-7" />

        {/* Paragraph 1 */}
        <p className="w-1/2 mx-auto mb-10 leading-7">
          Eid is a celebration of love. What better way than giving back the
          love to the ones who deserve the most. Mothers, more than anybody
          else, are worthy of love. A mother puts her children before anything
          else without expecting anything in return. This Eid, Let's put Mothers
          first and bring light in her life by keeping her happy and comfortable
          at all times. Baroque celebrates, appreciates and honors all strong
          mothers out there. Here's to strong women. May we know them. May we be
          them. May we raise them!
        </p>

        {/* Video 2 */}
        <video
          src="https://cdn.shopify.com/s/files/1/2277/5269/files/IMG_1489_1_1.mp4?v=1622541653"
          autoPlay
          muted
          controls
          className="w-1/2 h-auto mx-auto mb-8"
        ></video>
        <hr className="w-1/2 mx-auto mb-10 leading-7" />
        {/* Paragraph 2 */}
        <p className="w-1/2 mx-auto mb-10 leading-7">
          We remembered those who put together all the effort to make our Eid
          special. We made them a part of our Eid and gave them the happiness
          they deserve to wear. Just like last year, our aim was to make them
          wear happiness and the joy that we experienced on their faces is what
          we were looking for.
        </p>

        {/* Video 3 */}
        <video
          src="https://cdn.shopify.com/s/files/1/2277/5269/files/responsibility.mp4?v=1613215899"
          autoPlay
          muted
          controls
          className="w-1/2 h-auto mx-auto mb-8"
        ></video>
        <hr className="w-1/2 mx-auto mb-10 leading-7" />
        {/* Paragraph 3 */}
        <p className="w-1/2 mx-auto mb-10 leading-7">
          We initiated our purpose to work as a part of something good so we
          decided to surprise these children by bringing them Eidi. We felt
          extremely joyous to make custom suits for these beautiful children and
          mothers from SOS children's village. Giving back to our society is one
          of our major responsibilities but it was more than that... it was a
          beautiful experience.
        </p>
      </div>
    </section>
  );
}

export default OurResponsibility;
