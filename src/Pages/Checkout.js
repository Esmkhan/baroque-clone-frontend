import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useCart } from "../Context/CartContext";

function Checkout() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const { updateCartCount } = useCart();
  const [formData, setFormData] = useState({
    email: user?.email || "",
    country: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    postalCode: "",
    mobile: "",
  });
  const [cartItems, setCartItems] = useState([]);
  const [orderSuccess, setOrderSuccess] = useState(null);

  const subtotal = cartItems.reduce((total, item) => {
    return total + (item.productId?.price || 0) * item.quantity;
  }, 0);

  useEffect(() => {
    const fetchCart = async () => {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) return;

      try {
        const response = await axios.get(
          "http://localhost:5000/cart/" + user.id,
        );

        console.log("Checkout Cart:", response.data);

        setCartItems(response.data.items || []);
      } catch (error) {
        console.log("Checkout cart error:", error);
      }
    };

    fetchCart();
  }, []);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  // handle change form
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    const shippingAddress = `
    ${formData.firstName} ${formData.lastName},
    ${formData.address},
    ${formData.apartment},
    ${formData.city},
    ${formData.postalCode},
    ${formData.country},
    ${formData.mobile}
  `;

    try {
      const response = await axios.post(
        "http://localhost:5000/orders/checkout",
        {
          userId: user.id,
          shippingAddress: shippingAddress,
          paymentMethod: paymentMethod,
        },
      );

      console.log(response.data);
      updateCartCount(0);
      setOrderSuccess(response.data.order);
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  // show success screen

  if (orderSuccess) {
    return (
      <Container className="py-5">
        <div className="text-center py-5">
          <h2 className="fw-bold mb-3">ORDER PLACED SUCCESSFULLY</h2>

          <p className="text-secondary mb-4">
            Thank you for your order. Your order has been received.
          </p>

          <div className="border p-4 mx-auto max-w-md">
            <p className="text-sm mb-2">
              <strong>Order ID:</strong> {orderSuccess._id}
            </p>

            <p className="text-sm mb-2">
              <strong>Payment:</strong> Cash on Delivery
            </p>

            <p className="text-sm mb-0">
              <strong>Total:</strong> PKR{" "}
              {orderSuccess.totalAmount.toLocaleString()}
            </p>
          </div>

          <Button
            onClick={() => navigate("/orders")}
            variant="dark"
            className="mt-4 px-5 py-3 rounded-0 tracking-widest"
          >
            VIEW MY ORDERS
          </Button>
        </div>
      </Container>
    );
  }
  return (
    <Container fluid className="px-4 md:px-5 py-4">
      <Row>
        {/* LEFT SIDE - Checkout Form */}
        <Col lg={7} className="pe-lg-5">
          <Form onSubmit={handleSubmit}>
            {/* Contact */}
            <h4 className="fw-bold mb-3">Contact</h4>
            <p className="text-sm mb-4 font-medium text-blue-900">
              Logged in by : {user?.email}
            </p>

            {/* Delivery */}
            <h4 className="fw-bold mb-3">Delivery</h4>

            <Form.Control
              type="text"
              name="country"
              placeholder="Country / Region"
              className="mb-3 text-sm"
              value={formData.country}
              onChange={handleChange}
              required
            />

            <Row className="g-2">
              <Col>
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="text-sm"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </Col>

              <Col>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="text-sm"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <div className="py-4">
              <Form.Control
                type="text"
                name="address"
                placeholder="Address"
                className="mb-3 text-sm"
                value={formData.address}
                onChange={handleChange}
                required
              />
              <Form.Control
                type="text"
                name="apartment"
                placeholder="Apartment / suite etc. (Optional)"
                className="mb-3 text-sm"
                value={formData.apartment}
                onChange={handleChange}
              />
              <Row className="g-2">
                <Col>
                  <Form.Control
                    type="text"
                    name="city"
                    placeholder="City"
                    className="text-sm"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </Col>

                <Form.Control
                  type="text"
                  name="postalCode"
                  placeholder="Postal Code (Optional)"
                  className="text-sm"
                  value={formData.postalCode}
                  onChange={handleChange}
                />
              </Row>
              <Form.Control
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                className="mt-3 text-sm"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
              {/* Save Information */}
              <Form.Check
                type="checkbox"
                label="Save this information for next time"
                className="mt-3 text-xs font-bold"
              />
            </div>

            {/* Payment Details */}
            <h4 className="fw-bold mb-3">Payment Details</h4>

            <div className="border rounded p-3 mb-4">
              {/* Cash on Delivery */}
              <div
                className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3 cursor-pointer"
                onClick={() => setPaymentMethod("cod")}
              >
                <div>
                  <p className="mb-1 text-sm fw-semibold">Cash on Delivery</p>

                  <p className="mb-0 text-xs text-secondary">Available</p>
                </div>

                <Form.Check
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
              </div>

              {/* Online Payment */}
              <div
                className="d-flex align-items-center justify-content-between cursor-pointer"
                onClick={() => setPaymentMethod("online")}
              >
                <div>
                  <p className="mb-1 text-sm fw-semibold">Online Payment</p>

                  <p className="mb-0 text-xs text-secondary">Coming Soon</p>
                </div>

                <Form.Check
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "online"}
                  onChange={() => setPaymentMethod("online")}
                />
              </div>

              {paymentMethod === "online" && (
                <div className="mt-3 p-3 bg-light rounded">
                  <p className="mb-0 text-sm text-secondary">
                    Online payment is currently unavailable. Coming soon.
                  </p>
                </div>
              )}
            </div>

            {/* Place Order Button */}
            <Button
             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              type="submit"
              variant="dark"
              className="w-100 py-3 text-sm fw-semibold"
              disabled={paymentMethod === "online"}
            >
              Place Order
            </Button>
          </Form>
        </Col>

        {/* RIGHT SIDE - Order Summary */}
        <Col lg={5} className="mt-5 mt-lg-0">
          <div className="sticky top-20">
            <h4 className="fw-bold mb-3">Your Order</h4>

            <div className="border rounded p-3">
              {/* Product */}
              <div className="d-flex gap-3 mb-4">
                {/* Product Image */}
                {cartItems.map((item) => (
                  <div key={item._id} className="d-flex gap-3 mb-4">
                    {/* Product Image */}
                    <div className="relative">
                      <img
                        src={item.productId?.images?.[0]}
                        alt={item.productId?.name}
                        className="w-20 h-24 object-cover rounded"
                      />

                      {/* Quantity */}
                      <span className="absolute -top-2 -right-2 bg-dark text-white rounded-full px-2 py-1 text-xs">
                        {item.quantity}
                      </span>
                    </div>

                    {/* Product Information */}
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between gap-2">
                        <div>
                          <p className="fw-semibold text-sm mb-1">
                            {item.productId?.name}
                          </p>

                          <p className="text-xs text-secondary mb-1">
                            Size: {item.size || "N/A"}
                          </p>

                          <p className="text-xs text-secondary mb-0">
                            Color: {item.color || "N/A"}
                          </p>
                        </div>

                        <p className="fw-semibold text-sm mb-0">
                          Rs.{" "}
                          {(
                            item.productId?.price * item.quantity
                          ).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Discount */}
              <div className="d-flex gap-2 mb-4">
                <Form.Control
                  type="text"
                  placeholder="Discount code or gift code"
                  className="text-sm"
                />

                <Button variant="dark" className="px-3 text-sm">
                  Apply
                </Button>
              </div>

              {/* Summary */}
              <div className="d-flex justify-content-between mb-2">
                <span className="text-sm">Subtotal</span>

                <span className="text-sm fw-semibold">
                  Rs. {subtotal.toLocaleString()}
                </span>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span className="text-sm">Shipping</span>

                <span className="text-sm fw-semibold">Free</span>
              </div>

              <div className="border-top pt-3 d-flex justify-content-between">
                <span className="fw-bold">Total</span>

                <span className="fw-bold">Rs. {subtotal.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Checkout;
