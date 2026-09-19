import React from "react";
import { Container } from "react-bootstrap";
import CloseButton from "react-bootstrap/CloseButton";

function Legal() {
  return (
    <Container className="my-5">
      <div className="text-end ">
        <CloseButton onClick={() => window.history.back()} />
      </div>
      <div className="w-2/4 mx-auto">
        {/* HEADING */}
        <h2 className="text-center tracking-widest font-semibold mb-5">
          LEGAL
        </h2>

        {/* CONTENT */}
        <div className="mx-auto max-w-4xl text-black leading-7">
          <p className="mb-4">For any legal queries write to us at:</p>

          <p className="mb-4">
            <a
              href="mailto:legal@baroque.com.pk"
              className="text-black underline hover:no-underline"
            >
              legal@baroque.com.pk
            </a>{" "}
            or{" "}
            <a
              href="mailto:legal@baroque.pk"
              className="text-black underline hover:no-underline"
            >
              legal@baroque.pk
            </a>
          </p>

          <p>
            <span className="font-semibold">Company Address:</span> Bilal
            Textile, Tariq Ismail Road, Raiwind Road, Lahore
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Legal;
