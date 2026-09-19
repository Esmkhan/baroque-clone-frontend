import React, { useState } from "react";
import { Container } from "react-bootstrap";
import CloseButton from "react-bootstrap/CloseButton";

function DispatchTimeline() {
  const [open, setOpen] = useState(false);

  return (
    <Container className="my-5">
      <div className="text-end ">
        <CloseButton onClick={() => window.history.back()} />
      </div>
      <h2 className="text-2xl font-medium tracking-[4px] text-center mb-4">
        {" "}
        DISPATCH TIMELINE{" "}
      </h2>

      {/* HEADING */}
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center border-t border-b py-4 cursor-pointer w-1/2 mx-auto"
      >
        <h5 className="m-0 font-normal tracking-[1.5px]">
          Local DISPATCH TIMELINE
        </h5>

        <span className="text-xl font-light">{open ? "−" : "+"}</span>
      </div>

      {/* CONTENT */}
      {open && (
        <div className="py-5 tracking-wide text-sm leading-4 w-1/2 mx-auto">
          <p className="mb-2">
            <span className="font-sm">FOR UNSTITCHED AND READY TO WEAR:</span>{" "}
            WITHIN 1 WEEK
          </p>

          <p className="mb-2">
            <span className="font-sm">FOR STITCHED:</span> WITHIN 3 WEEKS
          </p>

          <p className="mb-0">
            <span className="font-sm">CUSTOMIZE STITCHING:</span> 1 WEEK EXTRA
          </p>
        </div>
      )}
    </Container>
  );
}

export default DispatchTimeline;
