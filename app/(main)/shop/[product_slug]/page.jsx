"use client";

import useFetchData from "@/hooks/useFetchData";
import { useParams } from "next/navigation";

const page = () => {
  const { product_slug } = useParams();
  const { data, loading, error } = useFetchData(
    process.env.NEXT_PUBLIC_BACKEND_URL + `/products/${product_slug}`
  );
  console.log(data, loading, error);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return <div>Product page</div>;
};

export default page;
