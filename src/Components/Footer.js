import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import PakistanPopup from "../Footer-Components/PakistanPopup";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
  FaPinterestP,
} from "react-icons/fa";

function Footer() {
  const linkStyle =
    "no-underline text-[#c2bbbb] text-[14px] transition duration-300 hover:text-white tracking-[1.2px]";
  const [showPakistanPopup, setShowPakistanPopup] = useState(false);

  return (
    <footer className="bg-[#2f2d2d] text-[#f6f2f2] pt-[60px] pb-[25px]">
      <Container className="max-w-[1200px]">
        <Row className="justify-between">
          {/* About */}
          <Col md={3} className="mb-4">
            <div className="flex flex-col gap-[10px]">
              <h4 className="text-[17px] font-medium mb-[15px] tracking-[1.5px]">
                ABOUT
              </h4>

              <Link to="/whoWeAre" className={linkStyle}>
                Who We Are
              </Link>

              <Link to="/ourResponsibility" className={linkStyle}>
                Our Responsibility
              </Link>

              <Link to="/serviceWeProvide" className={linkStyle}>
                Service We Provide
              </Link>

              <Link to="/careers" className={linkStyle}>
                Careers
              </Link>

              <Link to="/storeLocations" className={linkStyle}>
                Store Locations
              </Link>
            </div>

            <div className="flex gap-6 text-xl pt-10">
              <button
                onClick={() =>
                  window.open("https://www.facebook.com/baroquepk/", "_blank")
                }
              >
                <FaFacebookF />
              </button>

              <button
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/baroque_official/?hl=en",
                    "_blank",
                  )
                }
              >
                <FaInstagram />
              </button>

              <button
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/c/BAROQUEofficial",
                    "_blank",
                  )
                }
              >
                <FaYoutube />
              </button>

              <button
                onClick={() =>
                  window.open(
                    "https://www.tiktok.com/tag/baroqueofficial",
                    "_blank",
                  )
                }
              >
                <FaTiktok />
              </button>

              <button
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/message/QZ3TRYLNGVQYN1?autoload=1&app_absent=0",
                    "_blank",
                  )
                }
              >
                <FaWhatsapp />
              </button>

              <button
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/message/QZ3TRYLNGVQYN1?autoload=1&app_absent=0",
                    "_blank",
                  )
                }
              >
                <FaPinterestP />
              </button>
            </div>
          </Col>

          {/* Customer Service */}
          <Col md={3} className="mb-4">
            <div className="flex flex-col gap-[10px]">
              <h4 className="text-[17px] font-medium mb-[15px] tracking-[1.5px]">
                CUSTOMER SERVICE
              </h4>

              <Link to="/contactUs" className={linkStyle}>
                Contact Us
              </Link>

              <Link to="/dispatchTimeline" className={linkStyle}>
                Dispatch Timeline
              </Link>

              <Link to="/exchangeInformation" className={linkStyle}>
                Exchange Information
              </Link>

              <Link to="#" className={linkStyle}>
                Email: info@baroque.pk
              </Link>

              <Link to="#" className={linkStyle}>
                UAN 111-302-302
              </Link>

              <Link
                to="https://api.whatsapp.com/message/QZ3TRYLNGVQYN1?autoload=1&app_absent=0"
                className={linkStyle}
              >
                WhatsApp: +92 325 7001111
              </Link>
            </div>
          </Col>

          {/* Policies */}
          <Col md={3} className="mb-4">
            <div className="flex flex-col gap-[10px]">
              <h4 className="text-[17px] font-medium mb-[15px] tracking-[1.5px]">
                POLICIES
              </h4>

              <Link to="/privacyPolicy" className={linkStyle}>
                Privacy Policy
              </Link>

              <Link to="/refundPolicy" className={linkStyle}>
                Refund Policy
              </Link>

              <Link to="/shippingPolicy" className={linkStyle}>
                Shipping Policy
              </Link>

              <Link to="/termOfService" className={linkStyle}>
                Terms of Service
              </Link>

              <Link to="/legal" className={linkStyle}>
                Legal
              </Link>
            </div>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <div className=" flex items-center justify-between mt-[50px] pt-[15px] text-[13px] text-[#fcf7f7] max-md:flex-col max-md:gap-[15px] max-md:text-center ">
          <div>
            <p
              onClick={() => setShowPakistanPopup(true)}
              className="cursor-pointer flex items-center gap-1 font-medium hover:text-gray-400"
            >
              PAKISTAN <span>﹀</span>
            </p>
          </div>

          <p className="m-0">© 2026 - BAROQUE</p>

          <div className="flex gap-3 items-center">
            <FaCcMastercard className="text-3xl text-orange-700" />
            <FaCcVisa className="text-3xl text-blue-800" />
          </div>
        </div>
      </Container>
      <PakistanPopup
        show={showPakistanPopup}
        onHide={() => setShowPakistanPopup(false)}
      />
    </footer>
  );
}

export default Footer;
