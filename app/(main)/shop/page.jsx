"use client";

import useFetchData from "@/hooks/useFetchData";

const page = () => {
  const page_number = 1;
  const page_size = 10;
  const { data, loading, error } = useFetchData(
    process.env.NEXT_PUBLIC_BACKEND_URL +
      `/products?populate=*&pagination[page]=${page_number}&pagination[pageSize]=${page_size}`
  );
  console.log(data, loading, error);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return <div>shop</div>;
};

export default page;
