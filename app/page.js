import Categories from "@/components/home/Categories";
import Informations from "@/components/home/Informations";
import Slider from "@/components/home/Slider";
import TopSellingItems from "@/components/home/TopSellingItems";

export default function Home() {
  return (
    <div className="">
      <Slider />
      <Categories />
      <TopSellingItems />
      <Informations />
    </div>
  );
}
