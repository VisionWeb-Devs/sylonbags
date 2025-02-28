import { Roboto } from "next/font/google";
import Link from "next/link";
import React from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ProductCard = ({ product }) => {
  if (!product) {
    return null;
  }

  return (
    <Link href={`/shop/${product.slug}`} passHref>
      <div
        className={`w-full rounded-2xl max-w-xs flex flex-col transform transition-transform duration-300 hover:scale-105 ${roboto.className}`}
      >
        <div className="relative w-full h-[344px] overflow-hidden bg-gray-100 rounded-2xl">
          <img
            src={product.thumbnail.url}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-[16px] font-bold opacity-80">{product.name}</h3>
          <div className="flex gap-2 mt-1">
            {product.discount_price ? (
              <>
                <p className="text-black text-[25px] font-extralight tracking-wider">
                  DA {product.discount_price}
                </p>
                <p className="text-gray-800 line-through font-extralight tracking-wider">
                  DA {product.price}
                </p>
              </>
            ) : (
              <p className="text-black text-[25px] font-extralight tracking-wider">
                DA {product.price}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
