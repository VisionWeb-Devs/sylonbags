"use client";
import { Roboto } from "next/font/google";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ProductPage = ({ product }) => {
  const router = useRouter();
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants[0] || null
  );

  const availableColors = product.variants
    .map((variant) =>
      variant.colors && variant.colors.length > 0 ? variant.colors[0] : null
    )
    .filter((color) => color !== null);

  const variantImages = selectedVariant?.images || [];
  const [images, setImages] = useState(() => {
    const allImages =
      variantImages.length > 0
        ? variantImages.map((img) => img.url)
        : [product.thumbnail.url];

    return allImages;
  });

  const [activeImage, setActiveImage] = useState(images[0]);
  const [amount, setAmount] = useState(1);

  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("SylonCart") || "[]");

    const existingItemIndex = existingCart.findIndex(
      (item) => item.id === product.id && item.sku === selectedVariant.sku
    );

    if (existingItemIndex > -1) {
      existingCart[existingItemIndex].quantity += amount;
    } else {
      existingCart.push({
        id: product.id,
        name: product.name,
        slug: product.slug,
        sku: selectedVariant.sku,
        price: selectedVariant.price,
        quantity: amount,
        variants: product.variants,
      });
    }

    localStorage.setItem("SylonCart", JSON.stringify(existingCart));

    // router.push("/cart");
  };

  const handleColorChange = (e) => {
    const colorName = e.target.value;
    const newVariant = product.variants.find(
      (variant) => variant.colors[0]?.name === colorName
    );

    if (newVariant) {
      setSelectedVariant(newVariant);
      const newVariantImages = newVariant.images.map((img) => img.url);
      const allImages = [...newVariantImages];

      setImages(allImages);
      setActiveImage(allImages[0]);
    }
  };

  return (
    <div className={`flex flex-col lg:flex-row bg-white p-8 rounded-lg`}>
      <div className="flex flex-col gap-4 py-5 justify-center items-center">
        <Image
          alt={`${product.name} main image`}
          src={activeImage}
          width={410}
          height={410}
          className="w-[100%] md:w-[80%] lg:w-[85%] h-full aspect-square object-cover transition-transform ease-in-out hover:scale-105 cursor-pointer duration-500"
        />
        <div className="flex flex-row justify-between h-[125px] gap-3">
          {images.map((image, index) => (
            <Image
              key={index}
              alt={`${product.name} gallery image ${index + 1}`}
              src={image}
              width={200}
              height={100}
              className={`w-[20%] md:w-[60%] lg:w-[85%] h-[60%] md:h-full lg:h-full aspect-square object-cover transition-transform ease-in-out hover:scale-105 cursor-pointer duration-300 ${
                activeImage === image ? "border-[1px] border-black" : ""
              }`}
              onClick={() => setActiveImage(image)}
            />
          ))}
        </div>
      </div>
      <div className={`flex flex-col gap-4 justify-start ${roboto.className}`}>
        <h1 className="text-[36px] tracking-widest opacity-80">
          {product.name}
        </h1>
        <p className="text-[30px] mt-2 tracking-widest opacity-80">
          DA {(selectedVariant?.price).toFixed(2)}
        </p>

        {availableColors.length > 0 && (
          <>
            <h1>Color</h1>
            <select
              className="p-2 rounded-lg border-[1px] border-gray-700 text-gray-700 px-4 w-[50%]"
              onChange={handleColorChange}
              value={selectedVariant?.colors[0]?.name || ""}
            >
              {availableColors.map((color, index) => (
                <option key={index} value={color.name}>
                  {color.name}
                </option>
              ))}
            </select>
          </>
        )}

        <h1>Quantity</h1>
        <div className="flex flex-row gap-4 items-center border-[1px] border-gray-700 px-2 rounded-lg w-fit">
          <button
            className="py-2 px-5 text-md"
            onClick={() => setAmount((prev) => Math.max(prev - 1, 1))}
          >
            -
          </button>
          <span className="text-lg">{amount}</span>
          <button
            className="py-2 px-5 text-md"
            onClick={() => setAmount((prev) => prev + 1)}
          >
            +
          </button>
        </div>

        <div className="flex flex-col">
          <button
            onClick={addToCart}
            className="bg-white text-black border-black border-[1px] rounded-sm font-light tracking-widest p-2 mt-4 opacity-80 hover:opacity-100 transition-all duration-300"
          >
            Add to Cart
          </button>
          <button className="bg-[#ffddd5] text-black rounded-sm font-light tracking-widest p-2 mt-4 opacity-80 hover:opacity-100 transition-all duration-300">
            Order Now
          </button>
          <div>
            <h1 className="text-3xl my-4 tracking-widest">Description</h1>
            <p className="text-md opacity-80 max-w-[400px]">
              {product.description ||
                "The Cecile Camel is a stylish and versatile bag from our women's collection. Perfect for everyday use, this high-quality bag combines elegance with functionality."}
            </p>
            {selectedVariant && (
              <p className="text-sm mt-2">
                {selectedVariant.stock_quantity > 10 ? "In Stock" : "low stock"}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
