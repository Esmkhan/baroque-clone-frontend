import React from "react";
import CloseButton from "react-bootstrap/CloseButton";

function Careers() {
  return (
    <section className="container py-5 position-relative">
      {/* Close Button */}
      <div className="position-absolute top-10 end-0">
        <CloseButton onClick={() => window.history.back()} />
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-medium tracking-wide mb-10">
              CAREERS
            </h2>

            <h4 className="text-base md:text-2xl font-normal mb-3">
              Be a part of our team send us your CV's at:
            </h4>

            <a
              href="https://www.google.com/"
              className="text-black md:text-lg underline hover:no-underline transition "
            >
              jobs@baroque.pk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Careers;
