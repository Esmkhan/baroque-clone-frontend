import React from "react";
import { Modal, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function PakistanPopup({ show, onHide }) {
  const navigate = useNavigate();
  return (
    <Modal show={show} onHide={onHide} centered backdrop="static">
      <Modal.Body className="p-4 bg-white">
        <h2 className="text-2xl font-normal mb-4">
          Are you in the right place?
        </h2>

        <p className="mb-4">Please select your shipping country.</p>

        <p className="text-sm mb-4">
          Buy from the country of your choice. Remember that we can only ship
          your order to addresses located in the chosen country.
        </p>

        <label className="text-sm block mb-2">Country</label>

        <Form.Select className="border-0 border-bottom rounded-0 shadow-none mb-4">
          <option>Pakistan</option>
          <option>Afghanistan</option>
          <option>Dubai</option>
          <option>Turkey</option>
          <option>China</option>
          <option>South Korea</option>
          <option>Japan</option>
        </Form.Select>

        <button
          onClick={() => {
            onHide();
            navigate("/");
          }}
          className="w-full bg-black text-white py-3 border-0"
        >
          Shop now
        </button>
      </Modal.Body>
    </Modal>
  );
}

export default PakistanPopup;
