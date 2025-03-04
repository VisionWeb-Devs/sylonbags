"use client";
import ProductCard from "@/components/ProductCard";
import React, { useState, useCallback, useEffect } from "react";
import { Filter, ChevronLeft, ChevronRight } from "lucide-react";
import useFetchData from "@/hooks/useFetchData";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import ProductFilterSidebar from "@/components/shop/category/ProductFilterSidebar";

const page = () => {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = 8;
  const pathname = usePathname();
  const category_slug = pathname.split("/").pop();
  console.log(category_slug);
  const { data, loading, error } = useFetchData(
    process.env.NEXT_PUBLIC_BACKEND_URL +
      `/products?filters[categories][slug][$eq]=${category_slug}&pagination[limit]=4&populate=*`
  );
  const [filters, setFilters] = useState({
    priceRange: 9999999999,
    selectedColors: [],
    selectedCategories: [],
  });
  const productss = data?.data || [];
  console.log(productss);
  const [filteredProducts, setFilteredProducts] = useState(() => {
    return data?.data || [];
  });
  console.log(filteredProducts);
  useEffect(() => {
    if (data?.data) {
      setFilteredProducts(data.data);
    }
  }, [data]);
  const paginatedProducts = useCallback(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return productss.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage, pageSize]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileFilterOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>error</div>;
  console.log(data.data, loading, error);

  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / pageSize);

  const createPageUrl = (pageNum) => {
    return `/shop?page=${pageNum}`;
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Shop : {category_slug}</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 bg-[#F9FAFB] flex flex-col">
            <div className="mb-4"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-6">
              {paginatedProducts().map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <div className="flex items-center justify-center space-x-2 my-8">
                <Link
                  href={currentPage > 1 ? createPageUrl(currentPage - 1) : "#"}
                  className={`p-2 rounded-md border ${
                    currentPage <= 1
                      ? "text-gray-400 border-gray-200 cursor-not-allowed"
                      : "text-gray-600 border-gray-300 hover:bg-gray-50"
                  }`}
                  aria-disabled={currentPage <= 1}
                >
                  <ChevronLeft size={20} />
                </Link>

                {[...Array(totalPages)].map((_, index) => {
                  const pageNumber = index + 1;
                  return (
                    <Link
                      key={pageNumber}
                      href={createPageUrl(pageNumber)}
                      className={`px-4 py-2 rounded-md ${
                        currentPage === pageNumber
                          ? "bg-blue-600 text-white"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {pageNumber}
                    </Link>
                  );
                })}

                <Link
                  href={
                    currentPage < totalPages
                      ? createPageUrl(currentPage + 1)
                      : "#"
                  }
                  className={`p-2 rounded-md border ${
                    currentPage >= totalPages
                      ? "text-gray-400 border-gray-200 cursor-not-allowed"
                      : "text-gray-600 border-gray-300 hover:bg-gray-50"
                  }`}
                  aria-disabled={currentPage >= totalPages}
                >
                  <ChevronRight size={20} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
