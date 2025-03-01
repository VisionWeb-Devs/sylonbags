"use client";
import { Roboto } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const ProductPage = ({ product }) => {
  const productt = product;
  console.log("hello");
  const [images, setImage] = useState([
    productt.thumbnail.url,
    productt.thumbnail.url,
    productt.thumbnail.url,
    productt.thumbnail.url,
  ]);
  const [activeImage, setActiveImage] = useState(images[0]);
  const [amount, setAmount] = useState(1);
  return (
    <div className={`flex flex-col lg:flex-row  bg-white p-8 rounded-lg  `}>
      <div className="flex flex-col gap-4 py-5 justify-center items-center">
        <Image
          alt="Main Image"
          src={activeImage}
          width={410}
          height={410}
          className="w-[100%] md:w-[80%] lg:w-[85%] h-full aspect-square object-cover transition-transform ease-in-out hover:scale-105 cursor-pointer duration-500"
        ></Image>
        <div className="flex flex-row justify-between h-[125px] gap-3">
          {images.map((image, index) => (
            <Image
              key={index}
              alt="img"
              src={image}
              width={200}
              height={100}
              className={`w-[20%] md:w-[60%] lg:w-[85%] h-[60%] md:h-full lg:h-full aspect-square object-cover transition-transform ease-in-out hover:scale-105 cursor-pointer duration-300 ${
                activeImage === image ? "border-[1px] border-black" : ""
              }`}
              onClick={() => setActiveImage(image)}
            ></Image>
          ))}
        </div>
      </div>
      <div className={` flex flex-col gap-4 justify-start ${roboto.className}`}>
        <h1 className="text-[36px]  tracking-widest  opacity-80">
          {productt.name}
        </h1>
        <p className="text-[30px] mt-2 tracking-widest  opacity-80">
          DA 4,000.00
        </p>
        <h1>Color</h1>
        <select className="p-2 rounded-lg border-[1px] border-gray-700 text-gray-700 px-4 w-[50%]">
          <option>black</option>
          <option>yellow</option>
          <option>white</option>
          <option>red</option>
        </select>
        <h1>Quantity</h1>
        <div className="flex flex-row gap-4 items-center border-[1px] border-gray-700 px-2 rounded-lg w-fit">
          <button
            className=" py-2 px-5 text-md"
            onClick={() => setAmount((prev) => Math.max(prev - 1, 1))}
          >
            -
          </button>
          <span className="text-lg">{amount}</span>
          <button
            className=" py-2 px-5 text-md"
            onClick={() => setAmount((prev) => Math.max(prev + 1, 1))}
          >
            +
          </button>
        </div>
        <div className="flex flex-col ">
          <button className="bg-white text-black border-black border-[1px] rounded-sm font-light tracking-widest p-2 mt-4 opacity-80 hover:opacity-100 transition-all duration-300">
            Add to Cart
          </button>
          <button className="bg-[#ffddd5] text-black rounded-sm font-light tracking-widest p-2 mt-4 opacity-80 hover:opacity-100 transition-all duration-300">
            Order Now
          </button>
          <div>
            <h1 className="text-3xl my-4 tracking-widest">Description</h1>
            <p className="text-md opacity-80 max-w-[400px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam,
              animi distinctio. Culpa laudantium officia neque maxime
              distinctio, quisquam accusantium dolor ratione at odit ipsa quae
              voluptas tenetur possimus aut quod?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
