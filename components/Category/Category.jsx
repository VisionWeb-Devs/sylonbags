import React from "react";
import { Playfair, Roboto } from "next/font/google";

const playfair = Playfair({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Categories = () => {
  const products = [
    {
      id: "1",
      name: "Women's Bags",
      desc: "Shop our collection of elegant women's handbags",
      image:
        "https://cdn.discordapp.com/attachments/868137008634155089/1344731934525362277/image.png?ex=67c1fab5&is=67c0a935&hm=32c2ca247530aa0c8019c2aaffc0b7f88ff67bd095d2d01e499e625ce592dd4d&",
    },
    {
      id: "2",
      name: "Men's Bags",
      desc: "Discover premium leather bags for men",
      image:
        "https://cdn.discordapp.com/attachments/868137008634155089/1344731965290450954/image.png?ex=67c1fabc&is=67c0a93c&hm=969b1a285c9a67d8fdbf11abe8368bc1e4a5eea231eae61a6e3282f61a4bdc1a&",
    },
    {
      id: "3",
      name: "Travel Bags",
      desc: "Perfect companions for your journeys",
      image:
        "https://cdn.discordapp.com/attachments/868137008634155089/1344732028935077919/image.png?ex=67c1facb&is=67c0a94b&hm=790a7151e54a97f5557237c89fda99d0dd6e40456b60df830366be22b85b8454&",
    },
    {
      id: "4",
      name: "Accessories",
      desc: "Wallets, cardholders and more",
      image:
        "https://cdn.discordapp.com/attachments/868137008634155089/1344732061684207728/image.png?ex=67c1fad3&is=67c0a953&hm=5a7b2abf050b5b36e8031f7140dadb0f7051b7286936d0b0c3940eb8a72e9ea9&",
    },
  ];
  const { data, loading, error } = useFetchData(
    process.env.NEXT_PUBLIC_BACKEND_URL +
      `/products?filters[categories][slug][$eq]=${category_slug}&pagination[limit]=4&populate=*`
  );
  console.log(data);

  return (
    <div className="py-10 justify-center items-center flex flex-col tracking-wider">
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-9 py-10  px-10">
        {products.map((product) => (
          <div
            key={product.id}
            className={`flex flex-col transform transition-transform duration-300 hover:scale-105 cursor-pointer ${roboto.className}`}
          >
            <div className="relative w-full overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-[18px] font-bold text-center md:text-start">
                {product.name}
              </h3>
              <div className="flex gap-2 mt-1">
                <p className="text-[16px] hidden md:block  ">{product.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
