import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FiHeart, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Wishlist() {
  const navigate = useNavigate();

  const [wishlist, setWishlist] = useState(null);
  const [loading, setLoading] = useState(true);

  // Get wishlist
  const getWishlist = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        setLoading(false);
        return;
      }

      const response = await axios.get(
        `http://localhost:5000/wishlist/${user.id}`,
      );

      setWishlist(response.data.wishlist);
    } catch (error) {
      console.log("Get wishlist error:", error);
      setWishlist(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWishlist();
  }, []);

  // Remove product
  const handleRemove = async (productId) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      await axios.delete("http://localhost:5000/wishlist/remove", {
        data: {
          userId: user.id,
          productId: productId,
        },
      });

      // Refresh wishlist
      getWishlist();
    } catch (error) {
      console.log("Remove wishlist error:", error);
    }
  };

  // Loading
  if (loading) {
    return (
      <Container className="py-5 text-center">
        <p className="tracking-[0.2em] text-sm">LOADING WISHLIST...</p>
      </Container>
    );
  }

  // User not logged in
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return (
      <Container className="py-5 text-center">
        <FiHeart size={40} className="mb-4" />

        <h2 className="text-xl tracking-[0.2em] font-normal">YOUR WISHLIST</h2>

        <p className="text-gray-500 mt-3">
          Please login to view your wishlist.
        </p>

        <Button
          onClick={() => navigate("/login")}
          className="rounded-0 bg-black border-black px-5 py-3 tracking-[0.15em] text-sm"
        >
          LOGIN
        </Button>
      </Container>
    );
  }

  // Empty wishlist
  if (!wishlist || wishlist.products.length === 0) {
    return (
      <Container className="py-5 text-center min-h-[500px] flex flex-col justify-center items-center">
        <FiHeart size={45} strokeWidth={1} />

        <h1 className="text-2xl md:text-3xl tracking-[0.2em] font-normal mt-4">
          YOUR WISHLIST
        </h1>

        <p className="text-gray-500 mt-3 mb-4">
          You haven't added any products to your wishlist yet.
        </p>

        <Button
          onClick={() => navigate("/products")}
          className="rounded-0 bg-black border-black px-5 py-3 tracking-[0.15em] text-sm"
        >
          CONTINUE SHOPPING
        </Button>
      </Container>
    );
  }

  return (
    <Container fluid className="py-5 px-3 px-md-5">
      {/* =========================
          HEADING
      ========================== */}

      <div className="text-center mb-5">
        <p className="text-xs tracking-[0.3em] text-gray-500 mb-2">
          SAVED FOR LATER
        </p>

        <h1 className="text-2xl md:text-3xl tracking-[0.2em] font-normal">
          MY WISHLIST
        </h1>

        <p className="text-sm text-gray-500 mt-2">
          {wishlist.products.length}{" "}
          {wishlist.products.length === 1 ? "PRODUCT" : "PRODUCTS"}
        </p>
      </div>

      {/* PRODUCTS */}

      <Row className="g-4">
        {wishlist.products.map((product) => (
          <Col key={product._id} xs={6} md={4} lg={3}>
            <div className="group">
              {/* IMAGE */}

              <div
                className="relative overflow-hidden cursor-pointer"
                onClick={() => navigate(`/product/${product._id}`)}
              >
                <img
                  src={product.images?.[0]}
                  alt={product.name}
                  className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Remove Heart */}

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemove(product._id);
                  }}
                  className="absolute top-3 right-3 bg-white rounded-full border-0 p-2 shadow-sm"
                >
                  <FiHeart size={18} className="fill-black" />
                </button>
              </div>

              {/* PRODUCT INFORMATION */}

              <div className="text-center mt-3">
                <h6 className="tracking-wide text-sm uppercase font-normal mb-2">
                  {product.name}
                </h6>

                <p className="text-sm mb-3">PKR {product.price}</p>

                <div className="d-flex justify-content-center gap-2">
                  <Button
                    onClick={() => navigate(`/product/${product._id}`)}
                    className="rounded-0 bg-black border-black px-3 py-2 text-xs tracking-[0.1em]"
                  >
                    VIEW PRODUCT
                  </Button>

                  <button
                    type="button"
                    onClick={() => handleRemove(product._id)}
                    className="border border-gray-300 bg-white px-3 py-2"
                  >
                    <FiTrash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Wishlist;
