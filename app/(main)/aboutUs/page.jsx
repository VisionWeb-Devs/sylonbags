import React from "react";

const page = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4">
          <span className="text-black">About</span>
          <span className="text-purple-700"> Us</span>
        </h1>
        <p className="mb-4 text-gray-700">
          Welcome to Sylon Bags, your premier destination for high-end bags and
          accessories. Since our establishment, we have been dedicated to
          bringing you the finest selection of luxury bags from renowned
          designers and brands worldwide.
        </p>
        <p className="text-gray-700">
          Our curated collection represents the perfect blend of style, quality,
          and craftsmanship. We believe that a luxury bag is more than just an
          accessory - it's an investment in quality and style that will last for
          years to come.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          <span className="text-black">Our </span>
          <span className="text-purple-700">Mission</span>
        </h2>
        <p className="text-gray-700">
          We strive to provide our customers with an exceptional shopping
          experience, offering only the highest quality products paired with
          outstanding customer service. Our team of fashion experts carefully
          selects each piece in our collection to ensure it meets our strict
          standards of quality and style.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          <span className="text-black">Quality </span>
          <span className="text-purple-700">Guarantee</span>
        </h2>
        <p className="text-gray-700">
          Every product in our collection is authenticated and verified to
          ensure its genuineness. We stand behind the quality of our products
          and offer a satisfaction guarantee on all purchases.
        </p>
      </div>

      <div className="mt-16 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Visit Our Showroom</h3>
        <address className="not-italic text-gray-700">
          <p>Tairawt Vibe</p>
          <p>Setif, Beni Aziz</p>
          <p className="mt-4">Phone: (213) 4 56 78 90</p>
          <p>Email: sylonbags@gmail.com</p>
        </address>
      </div>
    </div>
  );
};

export default page;
