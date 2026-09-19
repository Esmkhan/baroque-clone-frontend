import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const fetchCartCount = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user?.id) {
          setCartCount(0);
          return;
        }

        const response = await axios.get(
          "http://localhost:5000/cart/" + user.id,
        );

        const items = response.data.items || [];

        const totalCount = items.reduce(
          (total, item) => total + item.quantity,
          0,
        );

        setCartCount(totalCount);
      } catch (error) {
        console.log("Cart count error:", error);
      }
    };

    fetchCartCount();
  }, []);

  const openCart = () => {
    setShowCart(true);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  const updateCartCount = (count) => {
    setCartCount(count);
  };

  return (
    <CartContext.Provider
      value={{
        showCart,
        openCart,
        closeCart,
        cartCount,
        updateCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
