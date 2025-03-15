"use client";
import { Playfair, Roboto } from "next/font/google";
import useFetchData from "@/hooks/useFetchData";
import womenbags from "@/assets/home/womenbags.png";
import mansbags from "@/assets/home/mansbags.png";
import bags from "@/assets/home/bags.png";
import handbag from "@/assets/home/handbag.png";

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
      image: womenbags.src,
    },
    {
      id: "2",
      name: "Men's Bags",
      desc: "Discover premium leather bags for men",
      image: mansbags.src,
    },
    {
      id: "3",
      name: "Travel Bags",
      desc: "Perfect companions for your journeys",
      image: bags.src,
    },
    {
      id: "4",
      name: "Accessories",
      desc: "Wallets, cardholders and more",
      image: handbag.src,
    },
  ];
  // const category_slug = "women";
  // const { data, loading, error } = useFetchData(
  //   process.env.NEXT_PUBLIC_BACKEND_URL +
  //     `/products?filters[categories][slug][$eq]=${category_slug}&pagination[limit]=4&populate=*`
  // );
  // console.log(data);

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
