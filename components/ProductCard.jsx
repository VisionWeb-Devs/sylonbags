import { Roboto } from "next/font/google";
import React from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ProductCard = () => {
  const products = [
    {
      id: "1",
      name: "Signature Tote",
      price: 399.0,
      salePrice: 0,
      image:
        "https://media.discordapp.net/attachments/868137008634155089/1344726726537642135/image.png?ex=67c1f5db&is=67c0a45b&hm=6cbd739b0a66791292850e7c3662911cb5d1758c90a0441bd87e2390ef8f5f0b&=&format=webp&quality=lossless&width=284&height=350",
    },
  ];
  const product = products[0];

  return (
    <div
      className={`w-full max-w-xs flex flex-col transform transition-transform duration-300 hover:scale-105 ${roboto.className}`}
    >
      <div className="relative w-full overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-[18px] font-bold">{product.name}</h3>
        <div className="flex gap-2 mt-1">
          {product.salePrice ? (
            <>
              <p className="text-red-600 text-[16px]">
                ${product.salePrice.toFixed(2)}
              </p>
              <p className="text-gray-500 line-through text-[16px]">
                ${product.price.toFixed(2)}
              </p>
            </>
          ) : (
            <p>${product.price.toFixed(2)}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
