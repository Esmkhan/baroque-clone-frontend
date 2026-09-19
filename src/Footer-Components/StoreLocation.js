import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import CloseButton from "react-bootstrap/CloseButton";

function StoreLocation() {
  return (
    <Container className="my-5">
      <div className="text-end ">
        <CloseButton onClick={() => window.history.back()} />
      </div>

      {/* HEADING */}
      <h4 className="text-center mb-5 tracking-[3px] font-semibold text-3xl">
        OUR STORES
      </h4>

      {/* STORE CARDS */}
      <Row className="justify-content-center gap-5">
        {/* DOLMEN MALL LAHORE */}
        <Col md={4}>
          <Card className="border-0 rounded-0 overflow-hidden">
            <Card.Img
              variant="top"
              src="https://baroque.pk/cdn/shop/files/2_2_e548c34a-9e65-45c7-ab24-5ba617c66d55.jpg?v=1784018633&width=600"
              alt="Dolmen Mall Lahore"
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />

            <Card.Title className="text-base font-normal tracking-wide pt-4 text-center">
              Dolmen Mall Lahore
            </Card.Title>
          </Card>
        </Col>

        {/* MM ALAM */}
        <Col md={4}>
          <Card className="border-0 rounded-0 overflow-hidden">
            <Card.Img
              variant="top"
              src="https://baroque.pk/cdn/shop/files/1_1_853ff271-85ce-4ff5-ba47-7a993b38ff86.jpg?v=1784018633&width=600"
              alt="MM Alam"
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />

            <Card.Title className="text-base font-normal tracking-wide pt-4 text-center">
              MM Alam
            </Card.Title>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default StoreLocation;
