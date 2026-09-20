import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

import eidUnstitched from "../Assets/Images/eidUnstitched.jpg";
import eidStitched from "../Assets/Images/eidStitched.jpg";

function CategorySection3() {
  const navigate = useNavigate();

  return (
    <Container className="my-5 px-2">
      <Row>
        <Col md={6} className="mb-2">
          <Card
            className="group relative overflow-hidden border-0 cursor-pointer"
            onClick={() =>
              navigate("/products?type=UNSTITCHED&category=Summer")
            }
          >
            {/* IMAGE */}
            <Card.Img
              src={eidUnstitched}
              alt="eidUnstitched"
              className=" w-full transition-transform duration-[3000ms] ease-in-out group-hover:scale-110 "
            />

            {/* BUTTON */}
            <button className="group absolute left-1/2 -translate-x-1/2 bottom-[30px] sm:bottom-[50px] md:bottom-[100px] overflow-hidden w-auto border border-black bg-white px-[20px] sm:px-[25px] md:px-[35px] py-[10px] sm:py-[12px] cursor-pointer">
              {/* BLACK SLIDING BACKGROUND */}
              <span className=" absolute inset-0 bg-black translate-x-full transition-transform duration-300 group-hover:translate-x-0 "></span>

              {/* TEXT */}
              <span className=" relative z-10 text-black transition-colors duration-300 group-hover:!text-white ">
                UNSTITCHED
              </span>
            </button>
          </Card>
        </Col>

        <Col md={6} className="mb-2">
          <Card
            className="group relative overflow-hidden border-0 cursor-pointer"
            onClick={() => navigate("/products?type=STITCHED&category=Summer")}
          >
            {/* IMAGE */}
            <Card.Img
              src={eidStitched}
              alt="eidStitched"
              className=" w-full transition-transform duration-[3000ms] ease-in-out group-hover:scale-110 "
            />

            {/* BUTTON */}
            <button className=" group absolute left-[40%] bottom-[100px] overflow-hidden border border-black bg-white px-[35px] py-[12px] cursor-pointer ">
              {/* BLACK SLIDING BACKGROUND */}
              <span className=" absolute inset-0 bg-black translate-x-full transition-transform duration-300 group-hover:translate-x-0 "></span>

              {/* TEXT */}
              <span className=" relative z-10 text-black transition-colors duration-300 group-hover:!text-white ">
                STITCHED
              </span>
            </button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CategorySection3;
