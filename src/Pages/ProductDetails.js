import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../Context/CartContext";
import { useWishlist } from "../Context/WishlistContext";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { FiPlus, FiMinus, FiPackage, FiTruck, FiTag, FiRotateCcw, FiHeart, FiSun, } from "react-icons/fi";

function ProductDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const [openKey, setOpenKey] = useState(null);
  const { openCart, updateCartCount } = useCart();
  const { updateWishlistCount } = useWishlist();

  // Get single product
  useEffect(() => {
    axios
      .get(`https://baroque-clone-backend-production.up.railway.app/products/singleProduct/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  // Get related products
  useEffect(() => {
    if (!product) return;

    axios
      .get(
        `https://baroque-clone-backend-production.up.railway.app/products/search-filter-pagination?category=${product.category}&page=1&limit=5`,
      )
      .then((response) => {
        const products = response.data.products || [];

        // Remove the current product
        const filteredProducts = products.filter(
          (item) => item._id !== product._id,
        );

        setRelatedProducts(filteredProducts.slice(0, 4));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [product]);

  // Increase quantity
  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  // Decrease quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Add product to cart
  const handleAddToCart = async () => {
    try {
      // Get logged-in user
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        alert("Please login first.");
        navigate("/login");
        return;
      }

      console.log("USER:", user);
      console.log("USER ID:", user.id);

      const response = await axios.post("https://baroque-clone-backend-production.up.railway.app/cart/add", {
        userId: user.id,
        productId: product._id,
        quantity: quantity,
        size: product.sizes?.[0],
        color: product.colors?.[0],
      });

      console.log("Cart Response:", response.data);

      // Get updated cart items
      const updatedItems = response.data.cart?.items || [];

      // Calculate cart count
      const totalCount = updatedItems.reduce(
        (total, item) => total + item.quantity,
        0,
      );

      // Update cart number
      updateCartCount(totalCount);

      // Open cart Offcanvas
      openCart();
    } catch (error) {
      console.log("Add to cart error:", error);
    }
  };

  // Add product to wishlist
  const handleAddToWishlist = async () => {
    try {
      // Get logged-in user
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        alert("Please login first.");
        navigate("/login");
        return;
      }

      console.log("USER:", user);
      console.log("USER ID:", user.id);

      const response = await axios.post("https://baroque-clone-backend-production.up.railway.app/wishlist/add", {
        userId: user.id,
        productId: product._id,
      });

      console.log("Wishlist Response:", response.data);
      await updateWishlistCount();

      alert("Product added to wishlist ❤️");
    } catch (error) {
      console.log("Add to wishlist error:", error);

      if (error.response?.data?.message) {
        alert(error.response.data.message);
      }
    }
  };

  // Loading
  if (loading) {
    return (
      <Container className="py-5 text-center">
        <p className="tracking-wider">LOADING PRODUCT...</p>
      </Container>
    );
  }

  // Product not found
  if (!product) {
    return (
      <Container className="py-5 text-center">
        <p className="tracking-wider">PRODUCT NOT FOUND.</p>
      </Container>
    );
  }

  return (
    <Container fluid className="py-5 px-3 px-md-5">
      <Row className="g-4">
        {/* LEFT SIDE - IMAGES */}
        <Col lg={7}>
          <Row className="g-3">
            {/* Thumbnails */}
            <Col xs={2} md={2}>
              <div className="d-flex flex-column gap-3">
                {product.images?.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`cursor-pointer border ${
                      selectedImage === index
                        ? "border-black"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </Col>

            {/* Main Image */}
            <Col xs={10} md={10}>
              <div className="relative">
                <img
                  src={product.images?.[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </Col>
          </Row>
        </Col>

        {/* RIGHT SIDE - DETAILS  */}
        <Col lg={5}>
          <div className="px-lg-4">
            {/* Product Name */}
            <div className="border-b pb-4">
              <h1 className="text-xl md:text-2xl tracking-[0.18em] uppercase font-normal mb-3">
                {product.name}
              </h1>

              {/* Price */}
              <p className="text-lg mb-1">PKR {product.price}</p>
              <p className="text-sm mb-0 text-gray-600">
                <strong>Fabric:</strong> &nbsp;{product.fabric}
              </p>
            </div>
            {/* Product Description */}
            <div className="d flex justify-between py-2 border-b">
              <p className="text-sm text-gray-700 leading-6 mb-0">
                <strong>Color: </strong>&nbsp; {product.colors}
              </p>
              <p className="text-sm text-gray-600 leading-6 mb-0">
                <strong>Sizes:</strong>&nbsp;{product.sizes}
              </p>
              <p className="text-sm text-gray-600 leading-6 mb-0">
                <strong>Category:</strong>&nbsp; {product.category}
              </p>
            </div>

            {/* TYPE */}
            <div className="py-2 border-b">
              <p className="text-sm  text-gray-600 leading-6 mb-0">
                <b>TYPE:</b>
              </p>

              <div className="d-flex gap-2 flex-wrap">
                {/* UNSTITCHED */}
                <button
                  type="button"
                  className={`px-4 py-2 border bg-transparent text-sm tracking-wide ${
                    product.type === "UNSTITCHED"
                      ? "border-black"
                      : "border-gray-300 text-gray-400"
                  }`}
                >
                  {product.type === "UNSTITCHED" ? "✓" : "×"} UNSTITCHED
                </button>

                {/* STITCHED */}
                <button
                  type="button"
                  className={`px-4 py-2 border bg-transparent text-sm tracking-wide ${
                    product.type === "STITCHED"
                      ? "border-black"
                      : "border-gray-300 text-gray-400"
                  }`}
                >
                  {product.type === "STITCHED" ? "✓" : "×"} STITCHED
                </button>
              </div>
            </div>

            {/* QUANTITY */}
            <div className="py-4 border-b">
              <p className="text-sm  text-gray-600 leading-6 mb-0">
                <b>QUANTITY:</b>
              </p>

              <div className="border w-[150px] d-flex align-items-center justify-content-between px-3 py-2">
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  className="border-0 bg-transparent p-1"
                >
                  <FiMinus size={16} />
                </button>

                <span className="text-sm">{quantity}</span>

                <button
                  type="button"
                  onClick={increaseQuantity}
                  className="border-0 bg-transparent p-1"
                >
                  <FiPlus size={16} />
                </button>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="py-4 d-flex gap-2">
              <Button
                onClick={handleAddToCart}
                className="flex-grow-1 rounded-0 py-3 bg-black border-black tracking-[0.2em] text-sm"
              >
                ADD TO CART
              </Button>

              <button
                type="button"
                onClick={handleAddToWishlist}
                className="border border-black bg-white px-4"
              >
                <FiHeart size={20} />
              </button>
            </div>

            {/* INFORMATION */}

            <div>
              {/* PRODUCT DETAILS */}
              <div
                onClick={() => setOpenKey(openKey === "0" ? null : "0")}
                className="flex justify-between items-center border-t border-b py-4 cursor-pointer"
              >
                <span className="d-flex align-items-center gap-3 tracking-wider text-sm">
                  <FiPackage />
                  PRODUCT DETAILS
                </span>

                <span className="text-lg">{openKey === "0" ? "−" : "+"}</span>
              </div>

              {openKey === "0" && (
                <div className="py-4 text-sm text-gray-600 leading-6">
                  {product.productDetails}
                </div>
              )}

              {/* DELIVERY */}
              <div
                onClick={() => setOpenKey(openKey === "1" ? null : "1")}
                className="flex justify-between items-center border-b py-4 cursor-pointer"
              >
                <span className="d-flex align-items-center gap-3 tracking-wider text-sm">
                  <FiTruck />
                  DELIVERY
                </span>

                <span className="text-lg">{openKey === "1" ? "−" : "+"}</span>
              </div>

              {openKey === "1" && (
                <div className="py-4 text-sm text-gray-600 leading-6">
                  {product.delivery}
                </div>
              )}

              {/* DESCRIPTION */}
              <div
                onClick={() => setOpenKey(openKey === "2" ? null : "2")}
                className="flex justify-between items-center border-b py-4 cursor-pointer"
              >
                <span className="d-flex align-items-center gap-3 tracking-wider text-sm">
                  <FiTag />
                  DESCRIPTION
                </span>

                <span className="text-lg">{openKey === "2" ? "−" : "+"}</span>
              </div>

              {openKey === "2" && (
                <div className="py-4 text-sm text-gray-600 leading-6">
                  {product.description}
                </div>
              )}

              {/* RETURNS AND EXCHANGE */}
              <div
                onClick={() => setOpenKey(openKey === "3" ? null : "3")}
                className="flex justify-between items-center border-b py-4 cursor-pointer"
              >
                <span className="d-flex align-items-center gap-3 tracking-wider text-sm">
                  <FiRotateCcw />
                  RETURNS AND EXCHANGE
                </span>

                <span className="text-lg">{openKey === "3" ? "−" : "+"}</span>
              </div>

              {openKey === "3" && (
                <div className="py-4 text-sm text-gray-600 leading-6">
                  {product.returnsAndExchange}
                </div>
              )}
              {/* care instruction */}
              <div
                onClick={() => setOpenKey(openKey === "4" ? null : "4")}
                className="flex justify-between items-center border-b py-4 cursor-pointer"
              >
                <span className="d-flex align-items-center gap-3 tracking-wider text-sm">
                  <FiSun />
                  CARE INSTRUCTIONS
                </span>

                <span className="text-lg">{openKey === "4" ? "−" : "+"}</span>
              </div>

              {openKey === "4" && (
                <div className="py-4 text-sm text-gray-600 leading-6">
                  {product.careInstructions}
                </div>
              )}
            </div>
          </div>
        </Col>
      </Row>

      {/* RELATED PRODUCTS */}
      <div className="mt-5 pt-5">
        <h2 className="text-center text-xl md:text-2xl tracking-[0.2em] font-normal mb-5">
          RELATED PRODUCTS
        </h2>

        <Row className="g-3">
          {relatedProducts.map((relatedProduct) => (
            <Col key={relatedProduct._id} xs={6} md={3}>
              <div
                className="cursor-pointer"
                onClick={() => navigate(`/product/${relatedProduct._id}`)}
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={relatedProduct.images?.[0]}
                    alt={relatedProduct.name}
                    className="w-full h-[350px] md:h-[420px] object-cover transition-transform duration-1000 hover:scale-105"
                  />

                  {/* Wishlist */}
                  <button
                    type="button"
                    className="absolute top-3 right-3 bg-white rounded-full border-0 p-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiHeart size={18} />
                  </button>
                </div>

                {/* Product Information */}
                <div className="text-center mt-3">
                  <h6 className="tracking-wide text-sm uppercase font-normal">
                    {relatedProduct.name}
                  </h6>

                  <p className="text-sm mb-0">PKR {relatedProduct.price}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default ProductDetails;
