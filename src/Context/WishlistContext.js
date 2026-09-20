import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistCount, setWishlistCount] = useState(0);

  // Get wishlist count
  const updateWishlistCount = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        setWishlistCount(0);
        return;
      }

      const response = await axios.get(
        `https://baroque-clone-backend-production.up.railway.app/wishlist/${user.id}`,
      );

      const products = response.data.wishlist?.products || [];

      setWishlistCount(products.length);
    } catch (error) {
      // Wishlist may not exist yet
      setWishlistCount(0);
    }
  };

  // Load wishlist count when app starts
  useEffect(() => {
    updateWishlistCount();
  }, []);

  return (
    <WishlistContext.Provider
      value={{
        wishlistCount,
        updateWishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
