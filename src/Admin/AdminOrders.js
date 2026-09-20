import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get("https://baroque-clone-backend-production.up.railway.app/admin/orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("ORDERS:", response.data.orders);

      setOrders(response.data.orders);
    } catch (error) {
      console.log("Orders error:", error);
    }
  };

  // update order status
  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `https://baroque-clone-backend-production.up.railway.app/admin/orders/${orderId}/status`,
        {
          status: newStatus,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      // Update status in the UI
      setOrders(
        orders.map((order) =>
          order._id === orderId ? { ...order, orderStatus: newStatus } : order,
        ),
      );

      alert("Order status updated successfully");
    } catch (error) {
      console.log("Update status error:", error);

      alert("Failed to update order status");
    }
  };
  return (
    <div className="py-5 px-4">
      <h1 className="text-3xl font-semibold mb-2 text-center tracking-[2px] py-3">
        Admin Orders
      </h1>

      <p className="text-gray-500 mb-4 text-center">Manage customer orders</p>

      <div className="table-responsive">
        <table className="table table-bordered align-middle text-center">
          <thead className="table-dark tracking-[2px] text-xl font-normal">
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Products</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Shipping</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>

                <td>{order.userId?.name}</td>
                <td>
                  {order.items?.map((item) => (
                    <div key={item._id} className="mb-2">
                      <div>{item.productId?.name}</div>

                      <small className="text-muted">
                        Qty: {item.quantity} × PKR {item.price}
                      </small>
                    </div>
                  ))}
                </td>

                <td>PKR {order.totalAmount?.toLocaleString()}</td>

                <td>{order.paymentMethod}</td>
                <td>{order.shippingAddress}</td>

                <td>
                  <td>
                    <Form.Select
                      value={order.orderStatus}
                      onChange={(e) =>
                        updateOrderStatus(order._id, e.target.value)
                      }
                    >
                      <option value="Pending">Pending</option>
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </Form.Select>
                  </td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminOrders;
