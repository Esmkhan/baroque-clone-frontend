import React, { useCallback, useEffect, useState } from "react";
import { useCart } from "../Context/CartContext";
import axios from "axios";
import { Offcanvas, Button } from "react-bootstrap";
import { FiX, FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { showCart, closeCart, updateCartCount } = useCart();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  const handleClose = () => closeCart();

  // Get logged-in user's ID
  const user = JSON.parse(localStorage.getItem("user"));

  const userId = user?.id;

  const subtotal = cartItems.reduce((total, item) => {
    return total + (item.productId?.price || 0) * item.quantity;
  }, 0);

  // Fetch cart
  const fetchCart = useCallback(async () => {
    if (!userId) {
      return;
    }

    try {
      const response = await axios.get("http://localhost:5000/cart/" + userId);

      console.log("Cart Data:", response.data);

      setCartItems(response.data.items || []);
    } catch (error) {
      console.log("Error fetching cart:", error);
    }
  }, [userId]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart, showCart]);

  // handle quantity
  const handleQuantityChange = async (item, newQuantity) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      await axios.put("http://localhost:5000/cart/update", {
        userId: user.id,
        productId: item.productId._id,
        size: item.size,
        color: item.color,
        quantity: newQuantity,
      });

      const response = await axios.get("http://localhost:5000/cart/" + user.id);

      const updatedItems = response.data.items || [];

      setCartItems(updatedItems);

      const totalCount = updatedItems.reduce(
        (total, item) => total + item.quantity,
        0,
      );

      updateCartCount(totalCount);
    } catch (error) {
      console.log("Quantity update error:", error);
    }
  };

  // remove item
  const handleRemoveItem = async (item) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      await axios.delete("http://localhost:5000/cart/remove", {
        data: {
          userId: user.id,
          productId: item.productId._id,
          size: item.size,
          color: item.color,
        },
      });

      await fetchCart();
    } catch (error) {
      console.log("Remove item error:", error);
    }

    const response = await axios.get("http://localhost:5000/cart/" + user.id);

    const updatedItems = response.data.items || [];

    setCartItems(updatedItems);

    const totalCount = updatedItems.reduce(
      (total, item) => total + item.quantity,
      0,
    );

    updateCartCount(totalCount);
  };

  return (
    <Offcanvas
      show={showCart}
      onHide={handleClose}
      placement="end"
      className="w-full sm:w-[450px]"
    >
      {/* Header */}
      <Offcanvas.Header className="border-b px-5 py-4">
        <Offcanvas.Title className="text-xl tracking-widest font-normal">
          MY CART
        </Offcanvas.Title>

        <button
          onClick={handleClose}
          className="border-0 bg-transparent text-2xl"
        >
          <FiX />
        </button>
      </Offcanvas.Header>

      {/* Cart Body */}
      <Offcanvas.Body className="px-5">
        {cartItems.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500">Your cart is empty.</p>
          </div>
        ) : (
          cartItems.map((item) => (
            <div key={item._id} className="flex gap-4 py-5 border-b">
              {/* Product Image */}
              <img
                src={item.productId?.images?.[0]}
                alt={item.productId?.name}
                className="w-24 h-28 object-cover"
              />

              {/* Product Information */}
              <div className="flex-1">
                <h6 className="text-sm tracking-wide mb-2">
                  {item.productId?.name}
                </h6>

                <p className="text-sm mb-3">PKR {item.productId?.price}</p>

                {/* Quantity */}
                <div className="flex items-center border w-fit">
                  <button
                    onClick={() =>
                      handleQuantityChange(item, item.quantity - 1)
                    }
                    disabled={item.quantity === 1}
                    className="border-0 bg-transparent px-3 py-2"
                  >
                    <FiMinus size={14} />
                  </button>

                  <span className="px-2 text-sm">{item.quantity}</span>

                  <button
                    onClick={() =>
                      handleQuantityChange(item, item.quantity + 1)
                    }
                    className="border-0 bg-transparent px-3 py-2"
                  >
                    <FiPlus size={14} />
                  </button>
                </div>
              </div>

              {/* Remove */}
              <button
                onClick={() => handleRemoveItem(item)}
                className="border-0 bg-transparent text-gray-500"
              >
                <FiTrash2 size={16} />
              </button>
            </div>
          ))
        )}
      </Offcanvas.Body>

      {/* Footer */}
      <div className="border-t px-5 py-5">
        <div className="flex justify-between mb-4">
          <span className="tracking-wide">Subtotal</span>

          <span className="font-medium">PKR {subtotal.toLocaleString()}</span>
        </div>

        <Button
          onClick={() => {
            closeCart();
            navigate("/checkout");
          }}
          className="w-full rounded-0 py-3 bg-black border-0 tracking-widest"
        >
          CHECKOUT
        </Button>
        <button
          onClick={() => {
            closeCart();
            navigate("/products");
          }}
          className="w-full border-0 bg-transparent mt-4 text-sm underline"
        >
          Continue Shopping
        </button>
      </div>
    </Offcanvas>
  );
}

export default Cart;
