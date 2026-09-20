import React, { useEffect, useState } from "react";
import { useWishlist } from "../Context/WishlistContext";
import { useCart } from "../Context/CartContext";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { FiHeart, FiChevronDown, FiGrid, FiMenu, FiPlus } from "react-icons/fi";

function ProductListing() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const search = searchParams.get("search") || "";
  // const urlCategory = searchParams.get("category") || "";
  // const urlType = searchParams.get("type") || "";

  const { updateWishlistCount } = useWishlist();
  const { updateCartCount } = useCart();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [fabric, setFabric] = useState("");
  const [openFilter, setOpenFilter] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const search = searchParams.get("search") || "";
    const Category = searchParams.get("category") || "";
    const urlType = searchParams.get("type") || "";

    setCategory(Category);
    setType(urlType);

    setLoading(true);

    let url = "https://baroque-clone-backend-production.up.railway.app/products/search-filter-pagination?";

    const params = [];

    if (search) {
      params.push("search=" + encodeURIComponent(search));
    }

    if (color) {
      params.push("color=" + encodeURIComponent(color));
    }

    if (urlType) {
      params.push("type=" + encodeURIComponent(urlType));
    }

    if (size) {
      params.push("size=" + encodeURIComponent(size));
    }

    if (Category) {
      params.push("category=" + encodeURIComponent(Category));
    }

    if (fabric) {
      params.push("fabric=" + encodeURIComponent(fabric));
    }

    params.push("page=" + currentPage);

    url += params.join("&");

    axios
      .get(url)
      .then((response) => {
        console.log("Products:", response.data);

        setProducts(response.data.products || []);
        setTotalPages(response.data.totalPages || 1);

        setTotalProducts(
          response.data.totalProducts ||
            response.data.total ||
            response.data.products?.length ||
            0,
        );

        setLoading(false);
      })
      .catch((error) => {
        console.log("Product error:", error.response?.data || error.message);

        setLoading(false);
      });
  }, [location.search, currentPage, color, type, size, category, fabric]);

  const handleFilterChange = (setter, value) => {
    setter(value);
    setCurrentPage(1);
  };

  const toggleFilter = (filterName) => {
    setOpenFilter(openFilter === filterName ? null : filterName);
  };

  const handleCategoryTab = (value) => {
    const params = new URLSearchParams(location.search);

    params.set("category", value);

    navigate(`/products?${params.toString()}`);
    setCurrentPage(1);
  };

  const handleTypeChange = (value) => {
    const params = new URLSearchParams(location.search);

    if (value) {
      params.set("type", value);
    } else {
      params.delete("type");
    }

    navigate(`/products?${params.toString()}`);
    setCurrentPage(1);
  };

  const handleCategoryChange = (value) => {
    const params = new URLSearchParams(location.search);

    if (value) {
      params.set("category", value);
    } else {
      params.delete("category");
    }

    navigate(`/products?${params.toString()}`);
    setCurrentPage(1);
  };

  // for wishlist icon
  const handleAddToWishlist = async (productId) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        alert("Please login first.");
        navigate("/login");
        return;
      }

      await axios.post("https://baroque-clone-backend-production.up.railway.app/wishlist/add", {
        userId: user.id,
        productId: productId,
      });

      await updateWishlistCount();

      alert("Product added to wishlist ❤️");
    } catch (error) {
      console.log("Wishlist error:", error);

      if (error.response?.data?.message) {
        alert(error.response.data.message);
      }
    }
  };

  //for add to cart icon
  const handleAddToCart = async (product) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        alert("Please login first.");
        navigate("/login");
        return;
      }

      await axios.post("https://baroque-clone-backend-production.up.railway.app/cart/add", {
        userId: user.id,
        productId: product._id,
        quantity: 1,
        size: product.sizes?.[0] || "N/A",
        color: product.colors?.[0] || "N/A",
      });

      // Get the updated cart
      const cartResponse = await axios.get(
        "https://baroque-clone-backend-production.up.railway.app/cart/" + user.id,
      );

      const items = cartResponse.data.items || [];

      const totalCount = items.reduce(
        (total, item) => total + item.quantity,
        0,
      );

      updateCartCount(totalCount);

      alert("Product added to cart 🛒");
    } catch (error) {
      console.log("Add to cart error:", error);
    }
  };

  if (loading) {
    return (
      <Container
        fluid
        className="min-h-[500px] flex items-center justify-center"
      >
        <p className="text-sm tracking-[3px] uppercase">Loading products...</p>
      </Container>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#222]">
      {/* HEADER  */}

      <section className="text-center pt-[30px] pb-[30px]">
        <h1 className="text-[30px] md:text-[36px] lg:text-[43px] font-normal tracking-[5px] md:tracking-[7px] mb-[30px] md:mb-[30px]">
          {search
            ? "SEARCH RESULTS"
            : category
              ? category.toUpperCase()
              : type
                ? type.toUpperCase()
                : fabric
                  ? fabric.toUpperCase()
                  : color
                    ? color.toUpperCase()
                    : "ALL PRODUCTS"}
        </h1>

        {!search && (
          <div className="flex justify-center items-center gap-[18px] md:gap-[30px] lg:gap-[70px] flex-wrap">
            {["Formal", "Summer", "Shawls", "Winter"].map((item) => (
              <button
                key={item}
                onClick={() => handleCategoryTab(item)}
                className={`
                    bg-transparent border-0 pb-3 text-[13px] md:text-[15px] lg:text-[17px] tracking-[0.5px] relative transition-colors duration-200
                    ${
                      category === item
                        ? "text-[#111] font-semibold after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-[#111]"
                        : "text-[#999] hover:text-[#222]"
                    }
                  `}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </section>

      {/*TOOLBAR */}

      <div className="h-[60px] md:h-[68px] border-t border-b border-[#ddd] flex items-center relative">
        {/* Layout icons */}

        <div className="w-[90px] md:w-[175px] h-full border-r border-[#ddd] flex items-center justify-center gap-2 md:gap-[17px]">
          <button className="border-0 bg-transparent p-0 text-[20px] md:text-[24px] text-[#222]">
            <FiGrid />
          </button>

          <button className="border-0 bg-transparent p-0 text-[20px] md:text-[24px] text-[#999]">
            <FiGrid />
          </button>

          <button className="border-0 bg-transparent p-0 text-[20px] md:text-[24px] text-[#999]">
            <FiMenu />
          </button>
        </div>

        {/* Product count */}

        <div className="absolute left-1/2 -translate-x-1/2 text-[10px] md:text-[14px] lg:text-[16px] font-semibold tracking-[1px] md:tracking-[2px] whitespace-nowrap">
          {totalProducts} PRODUCTS
        </div>

        {/* Sort */}

        <div className="ml-auto h-full w-[100px] md:w-[205px] border-l border-[#ddd] flex items-center justify-center gap-1 md:gap-3 text-[#888] text-[9px] md:text-[14px] tracking-[1px] md:tracking-[2px]">
          <span>SORT BY</span>

          <FiChevronDown className="text-[15px] md:text-[18px]" />
        </div>
      </div>

      {/* MAIN AREA  */}

      <Container
        fluid
        className="px-[15px] md:px-[25px] lg:px-[50px] pt-[30px] md:pt-[40px] lg:pt-[58px] pb-[60px] lg:pb-[80px]"
      >
        <Row>
          {/* FILTER SIDEBAR */}

          <Col lg={2} md={3} className="pe-md-4 lg:pe-[45px] mb-[30px] lg:mb-0">
            {/* color */}

            <div className="border-b border-[#ddd]">
              <button
                onClick={() => toggleFilter("color")}
                className="w-full border-0 bg-transparent py-[23px] flex justify-between items-center text-[14px] md:text-[15px] tracking-[2px]"
              >
                <span className="font-medium">COLORS:</span>

                <FiChevronDown
                  className={` text-[17px] transition-transform duration-300 ${openFilter === "color" ? "rotate-180" : ""} `}
                />
              </button>

              {openFilter === "color" && (
                <div className="pb-[22px]">
                  <select
                    value={color}
                    onChange={(e) =>
                      handleFilterChange(setColor, e.target.value)
                    }
                    className="w-full p-[10px] border border-[#ddd] outline-none text-[14px] bg-white"
                  >
                    <option value="">All Colors</option>
                    <option value="Black">Black</option>
                    <option value="Pink">Pink</option>
                    <option value="Blue">Blue</option>
                    <option value="White">White</option>
                    <option value="Green">Green</option>
                    <option value="Navy">Navy</option>
                    <option value="Mustard">Mustard</option>
                    <option value="Purple">Purple</option>
                    <option value="Brown">Brown</option>
                  </select>
                </div>
              )}
            </div>

            {/* Type */}

            <div className="border-b border-[#ddd]">
              <button
                onClick={() => toggleFilter("type")}
                className="w-full border-0 bg-transparent py-[23px] flex justify-between items-center text-[14px] md:text-[15px] tracking-[2px]"
              >
                <span className="font-medium">TYPE</span>

                <FiChevronDown
                  className={` text-[17px] transition-transform duration-300 ${openFilter === "type" ? "rotate-180" : ""} `}
                />
              </button>

              {openFilter === "type" && (
                <div className="pb-[22px]">
                  <select
                    value={type}
                    onChange={(e) => handleTypeChange(e.target.value)}
                    className="w-full p-[10px] border border-[#ddd] outline-none text-[14px] bg-white"
                  >
                    <option value="">All Types</option>
                    <option value="STITCHED">Stitched</option>
                    <option value="UNSTITCHED">Unstitched</option>
                  </select>
                </div>
              )}
            </div>

            {/* size */}

            <div className="border-b border-[#ddd]">
              <button
                onClick={() => toggleFilter("size")}
                className="w-full border-0 bg-transparent py-[23px] flex justify-between items-center text-[14px] md:text-[15px] tracking-[2px]"
              >
                <span className="font-medium">SIZE</span>

                <FiChevronDown
                  className={`
                    text-[17px]
                    transition-transform
                    duration-300
                    ${openFilter === "size" ? "rotate-180" : ""}
                  `}
                />
              </button>

              {openFilter === "size" && (
                <div className="pb-[22px]">
                  <select
                    value={size}
                    onChange={(e) =>
                      handleFilterChange(setSize, e.target.value)
                    }
                    className="w-full p-[10px] border border-[#ddd] outline-none text-[14px] bg-white"
                  >
                    <option value="">All Sizes</option>
                    <option value="S">Small</option>
                    <option value="M">Medium</option>
                    <option value="L">Large</option>
                  </select>
                </div>
              )}
            </div>

            {/* category */}

            <div className="border-b border-[#ddd]">
              <button
                onClick={() => toggleFilter("category")}
                className="w-full border-0 bg-transparent py-[23px] flex justify-between items-center text-[14px] md:text-[15px] tracking-[2px]"
              >
                <span className="font-medium">CATEGORY</span>

                <FiChevronDown
                  className={` text-[17px] transition-transform duration-300 ${openFilter === "category" ? "rotate-180" : ""} `}
                />
              </button>

              {openFilter === "category" && (
                <div className="pb-[22px]">
                  <select
                    value={category}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    className="w-full p-[10px] border border-[#ddd] outline-none text-[14px] bg-white"
                  >
                    <option value="">All Categories</option>
                    <option value="Summer">Summer</option>
                    <option value="Winter">Winter</option>
                    <option value="Formal">Formal</option>
                    <option value="Ensembles">Ensembles</option>
                    <option value="Chantelle">Chantelle</option>
                    <option value="Ready to wear">Ready to wear</option>
                    <option value="shawls">Shawls</option>
                    <option value="Dupattas">Dupattas</option>
                    <option value="Bottoms">Bottoms</option>
                  </select>
                </div>
              )}
            </div>

            {/* Fabric */}

            <div className="border-b border-[#ddd]">
              <button
                onClick={() => toggleFilter("fabric")}
                className="w-full border-0 bg-transparent py-[23px] flex justify-between items-center text-[14px] md:text-[15px] tracking-[2px]"
              >
                <span className="font-medium">FABRIC</span>

                <FiChevronDown
                  className={` text-[17px] transition-transform duration-300 ${openFilter === "fabric" ? "rotate-180" : ""} `}
                />
              </button>

              {openFilter === "fabric" && (
                <div className="pb-[22px]">
                  <select
                    value={fabric}
                    onChange={(e) =>
                      handleFilterChange(setFabric, e.target.value)
                    }
                    className="w-full p-[10px] border border-[#ddd] outline-none text-[14px] bg-white"
                  >
                    <option value="">All Fabrics</option>
                    <option value="Lawn">Lawn</option>
                    <option value="Cotton">Cotton</option>
                    <option value="Chiffon">Chiffon</option>
                    <option value="Silk">Silk</option>
                    <option value="Jacquard">Jacquard</option>
                    <option value="Velvet">Velvet</option>
                  </select>
                </div>
              )}
            </div>
          </Col>

          {/*  PRODUCTS  */}

          <Col lg={10} md={9} className="ps-md-3 lg:ps-[15px]">
            <Row>
              {products.length > 0 ? (
                products.map((product) => (
                  <Col
                    lg={4}
                    md={6}
                    sm={6}
                    xs={6}
                    key={product._id}
                    className="mb-[45px]"
                  >
                    <div className="bg-white cursor-pointer group">
                      {/* Product image */}

                      <div
                        onClick={() => navigate(`/product/${product._id}`)}
                        className="w-full h-[270px] sm:h-[330px] md:h-[420px] lg:h-[510px] relative overflow-hidden bg-[#f5f5f5]"
                      >
                        <img
                          src={product.images?.[0]}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.04]"
                        />
                        {/* Wishlist */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddToWishlist(product._id);
                          }}
                          className="absolute top-3 left-3 w-[32px] h-[32px] md:w-[38px] md:h-[38px] rounded-full border-0 bg-white flex items-center justify-center z-10 hover:bg-[#f5f5f5]"
                        >
                          <FiHeart className="text-[18px] md:text-[21px] stroke-[1.4]" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddToCart(product);
                          }}
                          className="absolute bottom-3 right-3 w-[36px] h-[36px] md:w-[42px] md:h-[42px] rounded-full border-0 bg-white flex items-center justify-center z-10 hover:bg-[#222] hover:text-white transition"
                        >
                          <FiPlus className="text-[20px] md:text-[23px]" />
                        </button>
                      </div>

                      {/* Product information */}

                      <div className="pt-[15px] px-[5px]">
                        <p className="m-0 mb-[7px] text-[12px] md:text-[14px] font-normal tracking-[0.5px]">
                          {product.name}
                        </p>

                        <p className="m-0 text-[12px] md:text-[14px] text-[#555]">
                          PKR {product.price}
                        </p>
                      </div>
                    </div>
                  </Col>
                ))
              ) : (
                <Col>
                  <div className="text-center py-[80px]">
                    <p className="text-[#555]">No products found.</p>
                  </div>
                </Col>
              )}
            </Row>

            {/*  PAGINATION */}

            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-[50px] flex-wrap">
                <button
                  disabled={currentPage === 1}
                  onClick={() => {setCurrentPage(currentPage - 1); window.scrollTo({ top: 0, behavior: "smooth" });}}
                  className="border border-[#222] bg-white min-w-[38px] h-[38px] px-2 text-[10px] md:text-[12px] tracking-[1px] hover:bg-[#222] hover:text-white disabled:opacity-35 disabled:cursor-not-allowed"
                >
                  PREVIOUS
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => {setCurrentPage(index + 1); window.scrollTo({ top: 0, behavior: "smooth" });}}
                    className={` border border-[#222] min-w-[38px] h-[38px] text-[12px] tracking-[1px] transition
                        ${
                          currentPage === index + 1
                            ? "bg-[#222] text-white"
                            : "bg-white text-[#222] hover:bg-[#222] hover:text-white"
                        } `}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => {setCurrentPage(currentPage + 1); window.scrollTo({ top: 0, behavior: "smooth" });}}
                  className="border border-[#222] bg-white min-w-[38px] h-[38px] px-2 text-[10px] md:text-[12px] tracking-[1px] hover:bg-[#222] hover:text-white disabled:opacity-35 disabled:cursor-not-allowed"
                >
                  NEXT
                </button>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductListing;
