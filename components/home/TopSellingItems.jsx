import React from "react";
import ProductCard from "../ProductCard";
import { Playfair } from "next/font/google";

const playfair = Playfair({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const TopSellingItems = () => {
  return (
    <div className="bg-[#F9FAFB] justify-center items-center flex flex-col">
      <h1
        className={`${playfair.className} text-[36px] flex justify-center items-center`}
      >
        Top Selling Items
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10 justify-center items-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default TopSellingItems;
