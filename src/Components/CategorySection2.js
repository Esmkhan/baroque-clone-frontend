import React from "react";
import { useNavigate } from "react-router-dom";
import chantelle from "../Assets/Images/chantelle.jpg";
function CategorySection2() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full">
      {/* HERO IMAGE */}
      <img
        src={chantelle}
        alt="Baroque Collection"
        className="w-full h-[700px] block object-cover"
      />

      {/* SHOP ALL BUTTON */}
      <button
        onClick={() => navigate("/products?type=UNSTITCHED&category=Chantelle")}
        className=" group absolute left-[3%] bottom-[50px] w-auto overflow-hidden border border-[#f6f3f3] px-[35px] py-[12px] cursor-pointer"
      >
        {/* WHITE BACKGROUND */}
        <span className=" absolute inset-0 bg-black transition-opacity duration-300 group-hover:opacity-0 "></span>

        {/* DARK TRANSPARENT SLIDING LAYER */}
        <span className=" absolute inset-0 bg-white -translate-x-full transition-transform duration-500 group-hover:translate-x-0"></span>

        {/* TEXT */}
        <span className="relative z-10 text-white group-hover:!text-black">
          UNSTITCHED
        </span>
      </button>

      {/* FORMALS BUTTON */}
      <button
        onClick={() => navigate("/products?type=STITCHED&category=Chantelle")}
        className=" group absolute left-[14%] bottom-[50px] w-auto overflow-hidden border border-[#f6f3f3] px-[35px] py-[12px] cursor-pointer"
      >
        {/* WHITE BACKGROUND */}
        <span className=" absolute inset-0 bg-white transition-opacity duration-300 group-hover:opacity-0 "></span>

        {/* DARK TRANSPARENT SLIDING LAYER */}
        <span className=" absolute inset-0 bg-black -translate-x-full transition-transform duration-500 group-hover:translate-x-0 "></span>

        {/* TEXT */}
        <span className="relative z-10 text-black group-hover:!text-white">
          STITCHED
        </span>
      </button>
    </div>
  );
}

export default CategorySection2;
