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
        className="w-full h-[400px] sm:h-[500px] md:h-[580px] block object-cover"
      />

      {/* BUTTONS */}
      <div className="absolute bottom-[50px] sm:bottom-[70px] md:bottom-[100px] left-1/2 -translate-x-1/2 flex flex-col sm:flex-row gap-3 sm:gap-4">
        {/* SHOP ALL BUTTON */}
        <button
          onClick={() => navigate("/products")}
          className="group relative w-[140px] sm:w-auto overflow-hidden border border-[#f6f3f3] px-[25px] sm:px-[35px] py-[10px] sm:py-[12px] cursor-pointer"
        >
          {/* WHITE BACKGROUND */}
          <span className="absolute inset-0 bg-white transition-opacity duration-300 group-hover:opacity-0"></span>

          {/* DARK TRANSPARENT SLIDING LAYER */}
          <span className="absolute inset-0 bg-black/25 -translate-x-full transition-transform duration-500 group-hover:translate-x-0"></span>

          {/* TEXT */}
          <span className="relative z-10 text-black group-hover:!text-white">
            SHOP ALL
          </span>
        </button>

        {/* FORMALS BUTTON */}
        <button
          onClick={() => navigate("/products?category=Formal")}
          className="group relative w-[140px] sm:w-auto overflow-hidden border border-[#f6f3f3] px-[25px] sm:px-[35px] py-[10px] sm:py-[12px] cursor-pointer"
        >
          {/* WHITE BACKGROUND */}
          <span className="absolute inset-0 bg-white transition-opacity duration-300 group-hover:opacity-0"></span>

          {/* DARK TRANSPARENT SLIDING LAYER */}
          <span className="absolute inset-0 bg-black/25 -translate-x-full transition-transform duration-500 group-hover:translate-x-0"></span>

          {/* TEXT */}
          <span className="relative z-10 text-black group-hover:!text-white">
            FORMALS
          </span>
        </button>
      </div>
    </div>
  );
}

export default Hero;
