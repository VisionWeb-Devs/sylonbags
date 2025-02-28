"use client";
import Informations from "@/components/home/Informations";
import Slider from "@/components/home/Slider";
import useFetchData from "@/hooks/useFetchData";
import Categories from "@/components/home/Categories";
import TopSellingItems from "@/components/home/TopSellingItems";

export default function Home() {
  // const { data, loading, error } = useFetchData(
  //   process.env.NEXT_PUBLIC_BACKEND_URL +
  //     "/products?populate=thumbnail&pagination[limit]=4"
  // );
  // console.log(data, loading, error);
  return (
    <div className="">
      <Slider />
      <Categories />
      <TopSellingItems />
      <Informations />
    </div>
  );
}
