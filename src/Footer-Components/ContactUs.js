import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import CloseButton from "react-bootstrap/CloseButton";
function ContactUs() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
  };

  return (
    <Container className="my-5">
      <div className="text-end ">
        <CloseButton onClick={() => window.history.back()} />
      </div>
      {/* HEADING */}
      <h2 className="text-center mb-4 tracking-widest font-semibold">
        CONTACT
      </h2>

      {/* SUCCESS MESSAGE */}
      {messageSent && (
        <Alert
          variant="success"
          className=" text-center mb-3 pt-2 w-1/2 mx-auto"
        >
          Message has been sent successfully!
        </Alert>
      )}

      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Form onSubmit={handleSubmit}>
            {/* NAME */}
            <Form.Group className="mb-4">
              <Form.Label className="text-sm tracking-wide">Name</Form.Label>

              <Form.Control
                type="text"
                placeholder="Enter your name"
                className="rounded-0 py-3"
                required
              />
            </Form.Group>

            {/* EMAIL */}
            <Form.Group className="mb-4">
              <Form.Label className="text-sm tracking-wide">E-mail</Form.Label>

              <Form.Control
                type="email"
                placeholder="Enter your e-mail"
                className="rounded-0 py-3"
                required
              />
            </Form.Group>

            {/* MESSAGE */}
            <Form.Group className="mb-4">
              <Form.Label className="text-sm tracking-wide">Message</Form.Label>

              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Write your message"
                className="rounded-0 py-3"
                required
              />
            </Form.Group>

            {/* BUTTON */}
            <div className="text-center">
              <Button
                type="submit"
                className="rounded-0 px-5 py-3 tracking-wider !bg-black border-0 hover:!bg-gray-700"
              >
                Send message
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;
