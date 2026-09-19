import React from "react";
import CloseButton from "react-bootstrap/CloseButton";

function WhoWeAre() {
  return (
    <div className="relative w-full">
      {/* Close Button */}
      <div className="absolute top-5 right-20">
        <CloseButton onClick={() => window.history.back()} />
      </div>

      <section className="w-full py-16 px-6">
        <div className="max-w-4xl mx-auto text-justify">
          <h2 className="text-2xl md:text-3xl font-medium tracking-wide mb-8 text-center">
            WHO WE ARE
          </h2>

          <p className="text-sm md:text-base leading-7 mb-6">
            Baroque <strong>(Bilal Textile)</strong> is a renowned fashion
            clothing brand with over <strong>30 years</strong> of experience in
            the textile sector, producing fabric that is rich in quality and
            craftwork. Baroque has successfully ventured into the retail sector
            by establishing itself as a high-end, fast fashion women’s wear
            brand.
          </p>

          <p className="text-sm md:text-base leading-7 mb-6">
            Staying true to the name of the brand, <strong>Baroque</strong>{" "}
            focuses on producing apparel that is fashionable, stylish and
            timeless – by introducing outfits that have trendy silhouettes and
            are majorly made of embroidered and traditionally crafted fabric.
            Catering to a wide set of audiences by launching various ranges
            throughout the year, <strong>Baroque</strong> manages to design
            clothes that are unique, effortless and perfect for every event.
          </p>

          <p className="text-sm md:text-base leading-7 mb-6">
            Fusing eastern, cultural artwork with contemporary style of art, the
            brand fashions clothes that are meant to be worn by modern women of
            every age and kind. Keeping this in mind, while accepting and
            promoting the beauty and individuality of each woman,{" "}
            <strong>Baroque</strong> offers customized tailoring with consumers
            having a choice to get their ensembles stitched to perfection.
          </p>

          <p className="font-medium text-sm md:text-base tracking-wide mb-6 text-center">
            Stitched to your perfect fit
          </p>

          <p className="text-sm md:text-base leading-7">
            <strong>Baroque</strong> is a High End Luxury Fabric Brand and
            specializes in chiffon formals while also catering to seasonal
            essentials including Swiss, Khaddar, Lawn and Velvet. So, for every
            season and every occasion, we have got you covered!
          </p>
        </div>
      </section>
    </div>
  );
}

export default WhoWeAre;
