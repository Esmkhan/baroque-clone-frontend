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
        className="w-full h-[450px] sm:h-[550px] md:h-[700px] block object-cover"
      />

      {/* BUTTONS */}
      <div className="absolute left-[5%] bottom-[25px] sm:bottom-[50px] flex flex-col sm:flex-row gap-2 sm:gap-3">
        {/* UNSTITCHED BUTTON */}
        <button
          onClick={() =>
            navigate("/products?type=UNSTITCHED&category=Chantelle")
          }
          className="group relative w-[140px] sm:w-auto overflow-hidden border border-[#f6f3f3] bg-black px-[20px] sm:px-[25px] md:px-[35px] py-[10px] sm:py-[12px] cursor-pointer"
        >
          {/* WHITE SLIDING BACKGROUND */}
          <span className="absolute inset-0 bg-white -translate-x-full transition-transform duration-500 group-hover:translate-x-0"></span>

          {/* TEXT */}
          <span className="relative z-10 text-white group-hover:!text-black">
            UNSTITCHED
          </span>
        </button>

        {/* STITCHED BUTTON */}
        <button
          onClick={() => navigate("/products?type=STITCHED&category=Chantelle")}
          className="group relative w-[140px] sm:w-auto overflow-hidden border border-[#f6f3f3] bg-white px-[20px] sm:px-[25px] md:px-[35px] py-[10px] sm:py-[12px] cursor-pointer"
        >
          {/* BLACK SLIDING BACKGROUND */}
          <span className="absolute inset-0 bg-black -translate-x-full transition-transform duration-500 group-hover:translate-x-0"></span>

          {/* TEXT */}
          <span className="relative z-10 text-black group-hover:!text-white">
            STITCHED
          </span>
        </button>
      </div>
    </div>
  );
}

export default CategorySection2;
