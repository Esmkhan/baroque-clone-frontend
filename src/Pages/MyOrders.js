import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MyOrders() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        return;
      }

      try {
        const response = await axios.get(
          "https://baroque-clone-backend-production.up.railway.app/orders/user/" + user.id,
        );

        console.log("My Orders:", response.data);

        setOrders(response.data.orders || []);
      } catch (error) {
        console.log("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <Container className="py-5 mx-auto ">
      <h2 className="fw-bold mb-4 text-center font-serif">MY ORDERS</h2>

      <div className="pb-4 ps-[850px] ">
        <Button
          onClick={() => navigate("/products")}
          className="bg-black border-0 rounded-0 tracking-widest text-sm"
        >
          CONTINUE SHOPPING
        </Button>
      </div>

      {orders.length === 0 ? (
        <p className="text-secondary">You have no orders yet.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            className="border-3 p-4 mb-4 border max-w-4xl mx-auto"
          >
            {/* Order Header */}
            <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
              <div>
                <p className="text-sm mb-1 fw-semibold">ORDER ID</p>

                <p className="text-sm mb-0 text-secondary">{order._id}</p>
              </div>

              <div className="text-end">
                <p className="text-sm mb-1 fw-semibold">STATUS</p>

                <p className="text-sm mb-0">{order.orderStatus}</p>
              </div>
            </div>

            {/* Products */}
            {order.items.map((item) => (
              <div
                key={item._id}
                className="d-flex gap-3 border-bottom pb-3 mb-3"
              >
                <img
                  src={item.productId?.images?.[0]}
                  alt={item.productId?.name}
                  className="w-20 h-24 object-cover"
                />

                <div className="flex-grow-1">
                  <h6 className="mb-2">{item.productId?.name}</h6>

                  <p className="text-sm text-secondary mb-1">
                    Quantity: {item.quantity}
                  </p>

                  <p className="text-sm text-secondary mb-0">
                    Price: PKR {item.price.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}

            {/* Order Summary */}
            {/* Order Summary */}
            <div className="d-flex justify-content-between align-items-center pt-2">
              <div>
                <p className="text-sm mb-1">
                  Payment:{" "}
                  <span className="fw-semibold">
                    {order.paymentMethod === "cod"
                      ? "Cash on Delivery"
                      : order.paymentMethod}
                  </span>
                </p>
              </div>

              <div className="d-flex align-items-center gap-4">
                <div className="text-end">
                  <p className="text-sm mb-1">Total</p>

                  <p className="fw-bold mb-0">
                    PKR {order.totalAmount.toLocaleString()}
                  </p>
                </div>

                {/* <button
                  onClick={() => navigate(`/order/${order._id}`)}
                  className="bg-black text-white border-0 px-4 py-2 text-sm tracking-widest"
                >
                  VIEW ORDER
                </button> */}
              </div>
            </div>
          </div>
        ))
      )}
    </Container>
  );
}

export default MyOrders;
