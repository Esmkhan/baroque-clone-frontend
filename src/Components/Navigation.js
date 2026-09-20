import React, { useState } from "react";
import { useCart } from "../Context/CartContext";
import { useWishlist } from "../Context/WishlistContext";
import { useNavigate, Link } from "react-router-dom";
import {
  FiMenu,
  FiSearch,
  FiUser,
  FiShoppingBag,
  FiHeart,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
  FaPinterestP,
} from "react-icons/fa";
import { Offcanvas } from "react-bootstrap";
import PakistanPopup from "../Footer-Components/PakistanPopup";

function Navigation() {
  const navigate = useNavigate();
  const { openCart, cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("");

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [showPakistanPopup, setShowPakistanPopup] = useState(false);

  const handleUserClick = () => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/account");
    } else {
      navigate("/login");
    }
  };

  const handleSearch = () => {
    if (searchText.trim() !== "") {
      const keyword = encodeURIComponent(searchText.trim());

      console.log("Searching for:", keyword);

      navigate(`/products?search=${keyword}`);
      setSearchOpen(false);
      setSearchText("");
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white">
      {/* MAIN HEADER */}
      <header className="w-full h-[78px] flex items-center justify-between px-[40px] bg-white border-b border-[#e8e8e8] max-md:h-[65px] max-md:px-[12px]">
        {/* LEFT SIDE - MENU */}
        <div className="w-1/4 sm:w-1/3 flex items-center">
          <button
            onClick={() => setShowMenu(true)}
            className=" relative border-0 bg-transparent flex items-center justify-center p-[4px] text-[25px] text-[#111] cursor-pointer transition-opacity duration-200 hover:opacity-60 max-md:text-[18px] "
          >
            <FiMenu />
          </button>
        </div>

        {/* OFFCANVAS MENU */}
        {/* FIRST OFFCANVAS */}
        <Offcanvas
          show={showMenu}
          onHide={() => {
            setShowMenu(false);
            setShowSubMenu(false);
          }}
          placement="start"
          className="w-[320px] max-sm:w-[85%]"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <button
                onClick={() => {
                  setShowMenu(false);
                  navigate("/");
                }}
              >
                <span
                  onClick={() => {
                    window.location.replace("/");
                  }}
                  className="text-red-500 text-lg tracking-[1.5px]"
                >
                  HOME
                </span>
              </button>
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <p
              className={`menu-item py-1 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] ${
                selectedMenu === "UNSTITCHED" ? "text-gray-500" : "text-black"
              }`}
              onClick={(e) => {
                setSelectedMenu("UNSTITCHED");
                setShowSubMenu(true);
              }}
            >
              UNSTITCHED
              <span className="text-xl">›</span>
            </p>

            <p
              className={`menu-item py-1 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] ${
                selectedMenu === "STITCHED" ? "text-gray-500" : "text-black"
              }`}
              onClick={() => {
                setSelectedMenu("STITCHED");
                setShowSubMenu(true);
              }}
            >
              STITCHED
              <span className="text-xl">›</span>
            </p>

            <p
              className={`menu-item py-1 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] ${
                selectedMenu === "READY TO WEAR"
                  ? "text-gray-500"
                  : "text-black"
              }`}
              onClick={() => {
                setSelectedMenu("READY TO WEAR");
                setShowSubMenu(true);
              }}
            >
              READY TO WEAR
              <span className="text-xl">›</span>
            </p>

            <p
              className={`menu-item py-1 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] ${
                selectedMenu === "ESSENTIALS" ? "text-gray-500" : "text-black"
              }`}
              onClick={() => {
                setSelectedMenu("ESSENTIALS");
                setShowSubMenu(true);
              }}
            >
              ESSENTIALS
              <span className="text-xl">›</span>
            </p>

            <p
              className={`menu-item py-1 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] ${
                selectedMenu === "CHANTELLE" ? "text-gray-500" : "text-black"
              }`}
              onClick={() => {
                setSelectedMenu("CHANTELLE");
                setShowSubMenu(true);
              }}
            >
              CHANTELLE
              <span className="text-xl">›</span>
            </p>

            <p
              className={`menu-item py-1 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] ${
                selectedMenu === "EID LAWN 2026"
                  ? "text-gray-500"
                  : "text-black"
              }`}
              onClick={() => {
                setSelectedMenu("EID LAWN 2026");
                setShowSubMenu(true);
              }}
            >
              EID LAWN 2026
              <span className="text-xl">›</span>
            </p>

            <p
              className={`menu-item py-1 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] ${
                selectedMenu === "ABOUT" ? "text-gray-500" : "text-black"
              }`}
              onClick={() => {
                setSelectedMenu("ABOUT");
                setShowSubMenu(true);
              }}
            >
              ABOUT
              <span className="text-xl">›</span>
            </p>

            <p
              className={`menu-item py-1 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] ${
                selectedMenu === "CUSTOMER SERVICE"
                  ? "text-gray-500"
                  : "text-black"
              }`}
              onClick={() => {
                setSelectedMenu("CUSTOMER SERVICE");
                setShowSubMenu(true);
              }}
            >
              CUSTOMER SERVICE
              <span className="text-xl">›</span>
            </p>

            <p
              className={`menu-item py-1 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] ${
                selectedMenu === "POLICIES" ? "text-gray-500" : "text-black"
              }`}
              onClick={() => {
                setSelectedMenu("POLICIES");
                setShowSubMenu(true);
              }}
            >
              POLICIES
              <span className="text-xl">›</span>
            </p>

            <div className="flex gap-10 text-xl pt-4">
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

            <div>
              <p
                onClick={() => {
                  setShowPakistanPopup(true);
                  setShowMenu(false);
                }}
                className="cursor-pointer flex items-center gap-2 pt-5 text-xs text-gray-800 tracking-[1.5px] font-thin hover:text-black"
              >
                PAKISTAN <span>﹀</span>
              </p>
            </div>
          </Offcanvas.Body>
        </Offcanvas>

        {/* SECOND OFFCANVAS */}
        <Offcanvas
          show={showSubMenu}
          onHide={() => setShowSubMenu(false)}
          placement="start"
          className="sub-menu w-[320px] max-sm:w-[85%]"
        >
          <Offcanvas.Body>
            {selectedMenu === "UNSTITCHED" && (
              <>
                <p
                  onClick={() => {
                    navigate("/products?type=UNSTITCHED");
                    setShowMenu(false);
                    setShowSubMenu(false);
                  }}
                  className="menu-item pt-[50px] sm:pt-[71px] pb-2 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] text-black"
                >
                  SHOP ALL
                </p>

                <p
                  onClick={() => {
                    navigate("/products?type=UNSTITCHED&category=Summer");
                    setShowMenu(false);
                    setShowSubMenu(false);
                  }}
                  className="menu-item py-2 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] text-black"
                >
                  SUMMER
                </p>

                <p
                  onClick={() => {
                    navigate("/products?type=UNSTITCHED&category=Formal");
                    setShowMenu(false);
                    setShowSubMenu(false);
                  }}
                  className="menu-item py-2 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] text-black"
                >
                  FORMALS
                </p>

                <p
                  onClick={() => {
                    navigate("/products?type=UNSTITCHED&category=Winter");
                    setShowMenu(false);
                    setShowSubMenu(false);
                  }}
                  className="menu-item py-2 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] text-black"
                >
                  WINTER
                </p>

                <p
                  onClick={() => {
                    navigate("/products?category=shawls");
                    setShowMenu(false);
                    setShowSubMenu(false);
                  }}
                  className="menu-item py-2 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] text-black"
                >
                  SHAWLS
                </p>
              </>
            )}

            {selectedMenu === "STITCHED" && (
              <>
                <p
                  onClick={() => {
                    navigate("/products?type=STITCHED");
                    setShowMenu(false);
                    setShowSubMenu(false);
                  }}
                  className="menu-item pt-[50px] sm:pt-[71px] pb-2 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] text-black"
                >
                  SHOP ALL
                </p>

                <p
                  onClick={() => {
                    navigate("/products?type=STITCHED&category=Summer");
                    setShowMenu(false);
                    setShowSubMenu(false);
                  }}
                  className="menu-item py-2 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] text-black"
                >
                  SUMMER
                </p>

                <p
                  onClick={() => {
                    navigate("/products?type=STITCHED&category=Formal");
                    setShowMenu(false);
                    setShowSubMenu(false);
                  }}
                  className="menu-item py-2 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] text-black"
                >
                  FORMALS
                </p>

                <p
                  onClick={() => {
                    navigate("/products?type=STITCHED&category=Winter");
                    setShowMenu(false);
                    setShowSubMenu(false);
                  }}
                  className="menu-item py-2 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] text-black"
                >
                  WINTER
                </p>

                <p
                  onClick={() => {
                   navigate("/products?category=shawls");
                    setShowMenu(false);
                    setShowSubMenu(false);
                  }}
                  className="menu-item py-2 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] text-black"
                >
                  SHAWLS
                </p>
              </>
            )}

            {selectedMenu === "READY TO WEAR" && (
              <>
                <p
                  onClick={() => {
                    navigate("/products?type=STITCHED");
                    setShowMenu(false);
                    setShowSubMenu(false);
                  }}
                  className="menu-item pt-[71px] pb-2 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] text-black"
                >
                  SHOP ALL
                </p>

                <p
                  onClick={() => {
                    navigate("/products?type=STITCHED&category=Summer");
                    setShowMenu(false);
                    setShowSubMenu(false);
                  }}
                  className="menu-item py-2 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] text-black"
                >
                  SUMMER
                </p>

                <p
                  onClick={() => {
                    navigate("/products?type=STITCHED&category=Formal");
                    setShowMenu(false);
                    setShowSubMenu(false);
                  }}
                  className="menu-item py-2 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] text-black"
                >
                  FORMALS
                </p>

                <p
                  onClick={() => {
                    navigate("/products?type=STITCHED&category=Winter");
                    setShowMenu(false);
                    setShowSubMenu(false);
                  }}
                  className="menu-item py-2 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] text-black"
                >
                  WINTER
                </p>

                <p
                  onClick={() => {
                    navigate("/products?category=shawls");
                    setShowMenu(false);
                    setShowSubMenu(false);
                  }}
                  className="menu-item py-2 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] text-black"
                >
                  SHAWLS
                </p>
              </>
            )}

            {selectedMenu === "ESSENTIALS" && (
              <>
                <p
                  onClick={() => {
                    navigate("/products?category=Ensembles");
                    setShowMenu(false);
                    setShowSubMenu(false);
                  }}
                  className="menu-item pt-[50px] sm:pt-[71px] pb-2 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] text-black"
                >
                  ENSEMBLES
                </p>

                <p
                  onClick={() => {
                    navigate("/products?category=Dupattas");
                    setShowMenu(false);
                    setShowSubMenu(false);
                  }}
                  className="menu-item py-2 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] text-black"
                >
                  DUPATTAS
                </p>

                <p
                  onClick={() => {
                    navigate("/products?category=Bottoms");
                    setShowMenu(false);
                    setShowSubMenu(false);
                  }}
                  className="menu-item py-2 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] text-black"
                >
                  BOTTOMS
                </p>
              </>
            )}

            {selectedMenu === "CHANTELLE" && (
              <>
                <p
                  onClick={() => {
                    navigate("/products?type=UNSTITCHED&category=Chantelle");
                    setShowMenu(false);
                    setShowSubMenu(false);
                  }}
                  className="menu-item pt-[50px] sm:pt-[71px] pb-2 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] text-black"
                >
                  UNSTITCHED
                </p>

                <p
                  onClick={() => {
                    navigate("/products?type=STITCHED&category=Chantelle");
                    setShowMenu(false);
                    setShowSubMenu(false);
                  }}
                  className="menu-item py-2 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] text-black"
                >
                  STITCHED
                </p>
              </>
            )}

            {selectedMenu === "EID LAWN 2026" && (
              <>
                <p
                  onClick={() => {
                    navigate("/products?type=UNSTITCHED&category=Summer");
                    setShowMenu(false);
                    setShowSubMenu(false);
                  }}
                  className="menu-item pt-pt-[50px] sm:pt-[71px] pb-2 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] text-black"
                >
                  UNSTITCHED
                </p>

                <p
                  onClick={() => {
                    navigate("/products?type=STITCHED&category=Summer");
                    setShowMenu(false);
                    setShowSubMenu(false);
                  }}
                  className="menu-item py-2 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] text-black"
                >
                  STITCHED
                </p>
              </>
            )}

            {selectedMenu === "ABOUT" && (
              <>
                <p
                  onClick={() => {
                    navigate("/whoWeAre");
                    setShowMenu(false);
                    setShowSubMenu(false);
                  }}
                  className="menu-item pt-pt-[50px] sm:pt-[71px] pb-2 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] text-black"
                >
                  WHO WE ARE
                </p>
                <p
                  onClick={() => {
                    navigate("/ourResponsibility");
                    setShowMenu(false);
                    setShowSubMenu(false);
                  }}
                  className="menu-item py-2 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] text-black"
                >
                  OUR RESPONSIBILITY
                </p>
                <p
                  onClick={() => {
                    navigate("/serviceWeProvide");
                    setShowMenu(false);
                    setShowSubMenu(false);
                  }}
                  className="menu-item py-2 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] text-black"
                >
                  SERVICE WE PROVIDE
                </p>
                <p
                  onClick={() => {
                    navigate("/careers");
                    setShowMenu(false);
                    setShowSubMenu(false);
                  }}
                  className="menu-item py-2 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] text-black"
                >
                  CAREERS
                </p>
                <p
                  onClick={() => {
                    navigate("/storeLocations");
                    setShowMenu(false);
                    setShowSubMenu(false);
                  }}
                  className="menu-item py-2 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] text-black"
                >
                  STORE LOCATIONS
                </p>
              </>
            )}

            {selectedMenu === "CUSTOMER SERVICE" && (
              <>
                <p
                  onClick={() => {
                    navigate("/contactUs");
                    setShowMenu(false);
                    setShowSubMenu(false);
                  }}
                  className="menu-item pt-pt-[50px] sm:pt-[71px] pb-2 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] text-black"
                >
                  CONTACT US
                </p>
                <p
                  onClick={() => {
                    navigate("/dispatchTimeline");
                    setShowMenu(false);
                    setShowSubMenu(false);
                  }}
                  className="menu-item py-2 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] text-black"
                >
                  DISPATCH TIMELINE
                </p>
                <p
                  onClick={() => {
                    navigate("/exchangeInformation");
                    setShowMenu(false);
                    setShowSubMenu(false);
                  }}
                  className="menu-item py-2 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] text-black"
                >
                  EXCHANGE INFORMATION
                </p>
              </>
            )}

            {selectedMenu === "POLICIES" && (
              <>
                <p
                  onClick={() => {
                    navigate("/privacyPolicy");
                    setShowMenu(false);
                    setShowSubMenu(false);
                  }}
                  className="menu-item pt-pt-[50px] sm:pt-[71px] pb-2 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] text-black"
                >
                  PRIVACY POLICY
                </p>
                <p
                  onClick={() => {
                    navigate("/refundPolicy");
                    setShowMenu(false);
                    setShowSubMenu(false);
                  }}
                  className="menu-item py-2 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] text-black"
                >
                  REFUND POLICY
                </p>
                <p
                  onClick={() => {
                    navigate("/shippingPolicy");
                    setShowMenu(false);
                    setShowSubMenu(false);
                  }}
                  className="menu-item py-2 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] text-black"
                >
                  SHIPPING POLICY
                </p>
                <p
                  onClick={() => {
                    navigate("/termOfService");
                    setShowMenu(false);
                    setShowSubMenu(false);
                  }}
                  className="menu-item py-2 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] text-black"
                >
                  TERMS OF SERVICE
                </p>
                <p
                  onClick={() => {
                    navigate("/Legal");
                    setShowMenu(false);
                    setShowSubMenu(false);
                  }}
                  className="menu-item py-2 border-bottom cursor-pointer flex justify-between text-sm tracking-[2.5px] text-black"
                >
                  LEGAL
                </p>
              </>
            )}
          </Offcanvas.Body>
        </Offcanvas>

        <div className="w-1/2 sm:w-1/3 text-center text-[33px] font-medium tracking-[-4px] whitespace-nowrap font-serif max-md:text-[20px] max-md:tracking-[1px]">
          <p
            onClick={() => {
              window.location.replace("/");
            }}
            className="cursor-pointer pt-3"
          >
            BAR<span className="text-red-700">O</span>QUE
          </p>
        </div>

        {/* RIGHT SIDE - ICONS */}
        <div className="w-1/4 sm:w-1/3 flex items-center justify-end gap-[22px] max-md:gap-[7px]">
          <div>
            <p
              onClick={() => setShowPakistanPopup(true)}
              className="cursor-pointer flex items-center gap-1 pt-3 text-[9px] sm:text-xs text-gray-600 tracking-[1px] sm:tracking-[1.5px] font-thin whitespace-nowrap"
            >
              PAKISTAN <span>﹀</span>
            </p>
          </div>
          {/* USER */}
          <button
            onClick={handleUserClick}
            className=" relative border-0 bg-transparent flex items-center justify-center p-[4px] text-[25px] text-[#111] cursor-pointer transition-opacity duration-200 hover:opacity-60 max-md:text-[17px] "
          >
            <FiUser />
          </button>

          {/* SEARCH INPUT */}
          {searchOpen && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
              className="flex items-center"
            >
              <input
                type="text"
                placeholder="Search products..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                autoFocus
               className="w-[180px] max-md:w-[110px] px-[8px] py-[6px] border border-[#ddd] outline-none"
              />
            </form>
          )}

          {/* SEARCH ICON */}
          <button
            onClick={() => {
              if (searchOpen && searchText.trim() !== "") {
                handleSearch();
              } else {
                setSearchOpen(true);
              }
            }}
            className=" relative border-0 bg-transparent flex items-center justify-center p-[4px] text-[25px] text-[#111] cursor-pointer transition-opacity duration-200 hover:opacity-60 max-md:text-[17px] "
          >
            <FiSearch />
          </button>

          {/* CART */}
          <button
            onClick={openCart}
            className=" relative flex items-center justify-center p-[4px] text-[25px] text-[#111] border-0 bg-transparent cursor-pointer transition-opacity duration-200 hover:opacity-60 max-md:text-[17px] "
          >
            <FiShoppingBag />

            {/* CART COUNT */}
            <span className=" absolute top-[-7px] right-[-8px] w-[15px] h-[15px] flex items-center justify-center bg-black text-white rounded-full text-[9px] leading-none ">
              {cartCount}
            </span>
          </button>

          {/* WISHLIST */}
          <Link
            to="/wishlist"
            className="relative flex items-center justify-center p-[4px] text-[25px] text-[#111] no-underline transition-opacity duration-200 hover:opacity-60 max-md:text-[17px]"
          >
            <FiHeart />

            <span className="absolute top-[-7px] right-[-8px] w-[15px] h-[15px] flex items-center justify-center bg-black text-white rounded-full text-[9px] leading-none">
              {wishlistCount}
            </span>
          </Link>
        </div>
      </header>
      <PakistanPopup
        show={showPakistanPopup}
        onHide={() => setShowPakistanPopup(false)}
      />
    </nav>
  );
}

export default Navigation;
