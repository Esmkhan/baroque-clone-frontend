import React from "react";
import Hero from "../Components/Hero";
import CategorySection1 from "../Components/CategorySection1";
import CategorySection2 from "../Components/CategorySection2";
import CategorySection3 from "../Components/categorySection3";
import CategorySection4 from "../Components/CategorySection4";

function Home() {
  return (
    <div>
      <div data-aos="zoom-out">
        <Hero />
      </div>

      <h1 className="text-center font-aerial pt-5 font-medium text-[30px] tracking-[5px]">
        OWN YOUR NEW LOOK
      </h1>

      <div data-aos="fade-up">
        <CategorySection1 />
      </div>

      <h1 className="text-center font-aerial pb-5 font-medium text-[30px] tracking-[5px]">
        CHANTELLE COLLECTION
      </h1>

      <div data-aos="fade-up" data-aos-duration="1300">
        <CategorySection2 />
      </div>

      <h1 className="text-center font-aerial pt-5 pb-2 font-medium text-[30px] tracking-[5px]">
        EID LAWN 2026
      </h1>

      <div data-aos="fade-up" data-aos-duration="1600">
        <CategorySection3 />
      </div>

      <h1 className="text-center font-aerial pt-2 py-5 font-medium text-[30px] tracking-[5px]">
        ESSENTIALS
      </h1>

      <div data-aos="zoom-in" data-aos-duration="1600">
        <CategorySection4 />
      </div>
    </div>
  );
}
export default Home;
