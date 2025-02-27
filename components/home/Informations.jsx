import React from "react";
import { FaTruck } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const Informations = () => {
  return (
    <div className={`flex justify-around items-center py-10`}>
      <div className="flex flex-col items-center p-10 ">
        <FaTruck size={50} />
        <h1 className="font-bold pb-3 text-[18px]">Shipping Available</h1>
        <h3 className="text-[16px] ">shipping abailable on 58 Wilaya</h3>
      </div>
      <div className="flex flex-col items-center p-10 ">
        <FaMedal size={50} />
        <h1 className="font-bold pb-3 text-[18px]">Premium Quality</h1>
        <h3 className="text-[16px] ">Top-notch quality products</h3>
      </div>
      <div className="flex flex-col items-center p-10 ">
        <BsCashCoin size={50} />
        <h1 className="font-bold pb-3 text-[18px]">Free Shipping</h1>
        <h3 className="text-[16px] ">Free shipping on orders above 20000DA</h3>
      </div>
    </div>
  );
};

export default Informations;
