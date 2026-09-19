import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../Assets/Images/Banner.jpg";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="relative w-full">
      {/* HERO IMAGE */}
      <img
        src={Banner}
        alt="Baroque Collection"
        className="w-full h-[580px] block object-cover"
      />

      {/* SHOP ALL BUTTON */}
      <button
        onClick={() => navigate("/products")}
        className=" group absolute left-[45%] bottom-[100px] w-auto overflow-hidden border border-[#f6f3f3] px-[35px] py-[12px] cursor-pointer "
      >
        {/* WHITE BACKGROUND */}
        <span className=" absolute inset-0 bg-white transition-opacity duration-300 group-hover:opacity-0 "></span>

        {/* DARK TRANSPARENT SLIDING LAYER */}
        <span className=" absolute inset-0 bg-black/25 -translate-x-full transition-transform duration-500 group-hover:translate-x-0 "></span>

        {/* TEXT */}
        <span className="relative z-10 text-black group-hover:!text-white">
          SHOP ALL
        </span>
      </button>

      {/* FORMALS BUTTON */}
      <button
        onClick={() => navigate("/products?category=Formal")}
        className=" group absolute left-[55%] bottom-[100px] w-auto overflow-hidden border border-[#f6f3f3] px-[35px] py-[12px] cursor-pointer"
      >
        {/* WHITE BACKGROUND */}
        <span className=" absolute inset-0 bg-white transition-opacity duration-300 group-hover:opacity-0 "></span>

        {/* DARK TRANSPARENT SLIDING LAYER */}
        <span className=" absolute inset-0 bg-black/25 -translate-x-full transition-transform duration-500 group-hover:translate-x-0 "></span>

        {/* TEXT */}
        <span className="relative z-10 text-black group-hover:!text-white">
          FORMALS
        </span>
      </button>
    </div>
  );
}

export default Hero;
