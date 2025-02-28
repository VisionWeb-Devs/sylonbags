"use client";
import ProductCard from "@/components/ProductCard";
import ProductFilterSidebar from "@/components/shop/ProductFilterSidebar";
import React, { useState, useCallback, useEffect } from "react";
import { Filter } from "lucide-react";
import useFetchData from "@/hooks/useFetchData";

const productss = [
  {
    id: 19,
    documentId: "gvyo0dsm9ayrht9494784dge",
    price: 999999,
    createdAt: "2025-02-27T17:43:35.279Z",
    updatedAt: "2025-02-27T17:43:35.279Z",
    publishedAt: "2025-02-27T17:43:35.545Z",
    slug: "imposter",
    tags: "imposter",
    name: "Imposter",
    feature: "top_selling",
    discount_price: 999998,
    thumbnail: {
      id: 9,
      documentId: "onc4cj5k2kqq3qqdomf3r5cm",
      name: "mooda.png",
      alternativeText: null,
      caption: null,
      width: 719,
      height: 449,
      formats: {
        small: {
          ext: ".png",
          url: "https://res.cloudinary.com/dvlrca4nn/image/upload/v1740678150/small_mooda_5566a85eef.png",
          hash: "small_mooda_5566a85eef",
          mime: "image/png",
          name: "small_mooda.png",
          path: null,
          size: 270.23,
          width: 500,
          height: 312,
          sizeInBytes: 270227,
          provider_metadata: {
            public_id: "small_mooda_5566a85eef",
            resource_type: "image",
          },
        },
        thumbnail: {
          ext: ".png",
          url: "https://res.cloudinary.com/dvlrca4nn/image/upload/v1740678150/thumbnail_mooda_5566a85eef.png",
          hash: "thumbnail_mooda_5566a85eef",
          mime: "image/png",
          name: "thumbnail_mooda.png",
          path: null,
          size: 73.19,
          width: 245,
          height: 153,
          sizeInBytes: 73193,
          provider_metadata: {
            public_id: "thumbnail_mooda_5566a85eef",
            resource_type: "image",
          },
        },
      },
      hash: "mooda_5566a85eef",
      ext: ".png",
      mime: "image/png",
      size: 94.7,
      url: "https://res.cloudinary.com/dvlrca4nn/image/upload/v1740678150/mooda_5566a85eef.png",
      previewUrl: null,
      provider: "cloudinary",
      provider_metadata: {
        public_id: "mooda_5566a85eef",
        resource_type: "image",
      },
      createdAt: "2025-02-27T17:42:31.668Z",
      updatedAt: "2025-02-27T17:42:31.668Z",
      publishedAt: "2025-02-27T17:42:31.670Z",
    },
  },
  {
    id: 14,
    documentId: "d35oi1n8ode6m2wolj17og9b",
    price: 9000,
    createdAt: "2025-02-27T15:51:52.249Z",
    updatedAt: "2025-02-27T18:24:00.574Z",
    publishedAt: "2025-02-27T18:24:02.730Z",
    slug: "cecile-camel",
    tags: "bag bags camel women",
    name: "Cecile Camel",
    feature: "top_selling",
    discount_price: null,
    thumbnail: {
      id: 4,
      documentId: "shlixvcsfb317dtwpfm2llwc",
      name: "248EFBA9-7C5D-407D-9821-445780BC79E5.jpg",
      alternativeText: null,
      caption: null,
      width: 1057,
      height: 1428,
      formats: {
        large: {
          ext: ".jpg",
          url: "https://res.cloudinary.com/dvlrca4nn/image/upload/v1740671481/large_248_EFBA_9_7_C5_D_407_D_9821_445780_BC_79_E5_0c9876b62e.jpg",
          hash: "large_248_EFBA_9_7_C5_D_407_D_9821_445780_BC_79_E5_0c9876b62e",
          mime: "image/jpeg",
          name: "large_248EFBA9-7C5D-407D-9821-445780BC79E5.jpg",
          path: null,
          size: 27.98,
          width: 740,
          height: 1000,
          sizeInBytes: 27979,
          provider_metadata: {
            public_id:
              "large_248_EFBA_9_7_C5_D_407_D_9821_445780_BC_79_E5_0c9876b62e",
            resource_type: "image",
          },
        },
        small: {
          ext: ".jpg",
          url: "https://res.cloudinary.com/dvlrca4nn/image/upload/v1740671481/small_248_EFBA_9_7_C5_D_407_D_9821_445780_BC_79_E5_0c9876b62e.jpg",
          hash: "small_248_EFBA_9_7_C5_D_407_D_9821_445780_BC_79_E5_0c9876b62e",
          mime: "image/jpeg",
          name: "small_248EFBA9-7C5D-407D-9821-445780BC79E5.jpg",
          path: null,
          size: 10.08,
          width: 370,
          height: 500,
          sizeInBytes: 10080,
          provider_metadata: {
            public_id:
              "small_248_EFBA_9_7_C5_D_407_D_9821_445780_BC_79_E5_0c9876b62e",
            resource_type: "image",
          },
        },
        medium: {
          ext: ".jpg",
          url: "https://res.cloudinary.com/dvlrca4nn/image/upload/v1740671481/medium_248_EFBA_9_7_C5_D_407_D_9821_445780_BC_79_E5_0c9876b62e.jpg",
          hash: "medium_248_EFBA_9_7_C5_D_407_D_9821_445780_BC_79_E5_0c9876b62e",
          mime: "image/jpeg",
          name: "medium_248EFBA9-7C5D-407D-9821-445780BC79E5.jpg",
          path: null,
          size: 17.81,
          width: 555,
          height: 750,
          sizeInBytes: 17809,
          provider_metadata: {
            public_id:
              "medium_248_EFBA_9_7_C5_D_407_D_9821_445780_BC_79_E5_0c9876b62e",
            resource_type: "image",
          },
        },
        thumbnail: {
          ext: ".jpg",
          url: "https://res.cloudinary.com/dvlrca4nn/image/upload/v1740671481/thumbnail_248_EFBA_9_7_C5_D_407_D_9821_445780_BC_79_E5_0c9876b62e.jpg",
          hash: "thumbnail_248_EFBA_9_7_C5_D_407_D_9821_445780_BC_79_E5_0c9876b62e",
          mime: "image/jpeg",
          name: "thumbnail_248EFBA9-7C5D-407D-9821-445780BC79E5.jpg",
          path: null,
          size: 2.22,
          width: 116,
          height: 156,
          sizeInBytes: 2215,
          provider_metadata: {
            public_id:
              "thumbnail_248_EFBA_9_7_C5_D_407_D_9821_445780_BC_79_E5_0c9876b62e",
            resource_type: "image",
          },
        },
      },
      hash: "248_EFBA_9_7_C5_D_407_D_9821_445780_BC_79_E5_0c9876b62e",
      ext: ".jpg",
      mime: "image/jpeg",
      size: 47.15,
      url: "https://res.cloudinary.com/dvlrca4nn/image/upload/v1740671480/248_EFBA_9_7_C5_D_407_D_9821_445780_BC_79_E5_0c9876b62e.jpg",
      previewUrl: null,
      provider: "cloudinary",
      provider_metadata: {
        public_id: "248_EFBA_9_7_C5_D_407_D_9821_445780_BC_79_E5_0c9876b62e",
        resource_type: "image",
      },
      createdAt: "2025-02-27T15:51:22.166Z",
      updatedAt: "2025-02-27T15:51:22.166Z",
      publishedAt: "2025-02-27T15:51:22.168Z",
    },
  },
  {
    id: 15,
    documentId: "p338ae2u1e6hfuo24omapx5s",
    price: 8500,
    createdAt: "2025-02-27T15:06:15.372Z",
    updatedAt: "2025-02-27T18:24:17.805Z",
    publishedAt: "2025-02-27T18:24:20.018Z",
    slug: "daphne-espresso",
    tags: "bag bags espresso women",
    name: "Daphne Espresso",
    feature: "top_selling",
    discount_price: null,
    thumbnail: {
      id: 3,
      documentId: "zoe09cij8kz1mfmgl3npsps5",
      name: "2C5E173B-3BB2-41AD-9ACC-EDFE9AFD7BC9.jpg",
      alternativeText: null,
      caption: null,
      width: 1198,
      height: 1498,
      formats: {
        large: {
          ext: ".jpg",
          url: "https://res.cloudinary.com/dvlrca4nn/image/upload/v1740670315/large_2_C5_E173_B_3_BB_2_41_AD_9_ACC_EDFE_9_AFD_7_BC_9_a9a9b47a44.jpg",
          hash: "large_2_C5_E173_B_3_BB_2_41_AD_9_ACC_EDFE_9_AFD_7_BC_9_a9a9b47a44",
          mime: "image/jpeg",
          name: "large_2C5E173B-3BB2-41AD-9ACC-EDFE9AFD7BC9.jpg",
          path: null,
          size: 56.17,
          width: 800,
          height: 1000,
          sizeInBytes: 56165,
          provider_metadata: {
            public_id:
              "large_2_C5_E173_B_3_BB_2_41_AD_9_ACC_EDFE_9_AFD_7_BC_9_a9a9b47a44",
            resource_type: "image",
          },
        },
        small: {
          ext: ".jpg",
          url: "https://res.cloudinary.com/dvlrca4nn/image/upload/v1740670316/small_2_C5_E173_B_3_BB_2_41_AD_9_ACC_EDFE_9_AFD_7_BC_9_a9a9b47a44.jpg",
          hash: "small_2_C5_E173_B_3_BB_2_41_AD_9_ACC_EDFE_9_AFD_7_BC_9_a9a9b47a44",
          mime: "image/jpeg",
          name: "small_2C5E173B-3BB2-41AD-9ACC-EDFE9AFD7BC9.jpg",
          path: null,
          size: 10.69,
          width: 400,
          height: 500,
          sizeInBytes: 10685,
          provider_metadata: {
            public_id:
              "small_2_C5_E173_B_3_BB_2_41_AD_9_ACC_EDFE_9_AFD_7_BC_9_a9a9b47a44",
            resource_type: "image",
          },
        },
        medium: {
          ext: ".jpg",
          url: "https://res.cloudinary.com/dvlrca4nn/image/upload/v1740670316/medium_2_C5_E173_B_3_BB_2_41_AD_9_ACC_EDFE_9_AFD_7_BC_9_a9a9b47a44.jpg",
          hash: "medium_2_C5_E173_B_3_BB_2_41_AD_9_ACC_EDFE_9_AFD_7_BC_9_a9a9b47a44",
          mime: "image/jpeg",
          name: "medium_2C5E173B-3BB2-41AD-9ACC-EDFE9AFD7BC9.jpg",
          path: null,
          size: 28.85,
          width: 600,
          height: 750,
          sizeInBytes: 28849,
          provider_metadata: {
            public_id:
              "medium_2_C5_E173_B_3_BB_2_41_AD_9_ACC_EDFE_9_AFD_7_BC_9_a9a9b47a44",
            resource_type: "image",
          },
        },
        thumbnail: {
          ext: ".jpg",
          url: "https://res.cloudinary.com/dvlrca4nn/image/upload/v1740670314/thumbnail_2_C5_E173_B_3_BB_2_41_AD_9_ACC_EDFE_9_AFD_7_BC_9_a9a9b47a44.jpg",
          hash: "thumbnail_2_C5_E173_B_3_BB_2_41_AD_9_ACC_EDFE_9_AFD_7_BC_9_a9a9b47a44",
          mime: "image/jpeg",
          name: "thumbnail_2C5E173B-3BB2-41AD-9ACC-EDFE9AFD7BC9.jpg",
          path: null,
          size: 1.92,
          width: 124,
          height: 156,
          sizeInBytes: 1923,
          provider_metadata: {
            public_id:
              "thumbnail_2_C5_E173_B_3_BB_2_41_AD_9_ACC_EDFE_9_AFD_7_BC_9_a9a9b47a44",
            resource_type: "image",
          },
        },
      },
      hash: "2_C5_E173_B_3_BB_2_41_AD_9_ACC_EDFE_9_AFD_7_BC_9_a9a9b47a44",
      ext: ".jpg",
      mime: "image/jpeg",
      size: 130.06,
      url: "https://res.cloudinary.com/dvlrca4nn/image/upload/v1740670322/2_C5_E173_B_3_BB_2_41_AD_9_ACC_EDFE_9_AFD_7_BC_9_a9a9b47a44.jpg",
      previewUrl: null,
      provider: "cloudinary",
      provider_metadata: {
        public_id:
          "2_C5_E173_B_3_BB_2_41_AD_9_ACC_EDFE_9_AFD_7_BC_9_a9a9b47a44",
        resource_type: "image",
      },
      createdAt: "2025-02-27T16:32:01.551Z",
      updatedAt: "2025-02-27T16:32:01.551Z",
      publishedAt: "2025-02-27T16:32:01.553Z",
    },
  },
  {
    id: 16,
    documentId: "v2ja8p3fc3sez5wgc5r60l53",
    price: 4599,
    createdAt: "2025-02-27T15:56:22.056Z",
    updatedAt: "2025-02-27T18:24:37.736Z",
    publishedAt: "2025-02-27T18:24:39.808Z",
    slug: "giselle-burgundy",
    tags: "handbag sac espresso women",
    name: "Giselle Burgundy",
    feature: "top_selling",
    discount_price: null,
    thumbnail: {
      id: 5,
      documentId: "fr1f2qgb6xgfrbc5dgv6qbuy",
      name: "A32286B5-B6D4-459F-83FB-D4991F05C1C6.jpg",
      alternativeText: null,
      caption: null,
      width: 1080,
      height: 1624,
      formats: {
        large: {
          ext: ".jpg",
          url: "https://res.cloudinary.com/dvlrca4nn/image/upload/v1740671716/large_A32286_B5_B6_D4_459_F_83_FB_D4991_F05_C1_C6_31b236c92f.jpg",
          hash: "large_A32286_B5_B6_D4_459_F_83_FB_D4991_F05_C1_C6_31b236c92f",
          mime: "image/jpeg",
          name: "large_A32286B5-B6D4-459F-83FB-D4991F05C1C6.jpg",
          path: null,
          size: 19.85,
          width: 665,
          height: 1000,
          sizeInBytes: 19845,
          provider_metadata: {
            public_id:
              "large_A32286_B5_B6_D4_459_F_83_FB_D4991_F05_C1_C6_31b236c92f",
            resource_type: "image",
          },
        },
        small: {
          ext: ".jpg",
          url: "https://res.cloudinary.com/dvlrca4nn/image/upload/v1740671716/small_A32286_B5_B6_D4_459_F_83_FB_D4991_F05_C1_C6_31b236c92f.jpg",
          hash: "small_A32286_B5_B6_D4_459_F_83_FB_D4991_F05_C1_C6_31b236c92f",
          mime: "image/jpeg",
          name: "small_A32286B5-B6D4-459F-83FB-D4991F05C1C6.jpg",
          path: null,
          size: 6.15,
          width: 333,
          height: 500,
          sizeInBytes: 6153,
          provider_metadata: {
            public_id:
              "small_A32286_B5_B6_D4_459_F_83_FB_D4991_F05_C1_C6_31b236c92f",
            resource_type: "image",
          },
        },
        medium: {
          ext: ".jpg",
          url: "https://res.cloudinary.com/dvlrca4nn/image/upload/v1740671716/medium_A32286_B5_B6_D4_459_F_83_FB_D4991_F05_C1_C6_31b236c92f.jpg",
          hash: "medium_A32286_B5_B6_D4_459_F_83_FB_D4991_F05_C1_C6_31b236c92f",
          mime: "image/jpeg",
          name: "medium_A32286B5-B6D4-459F-83FB-D4991F05C1C6.jpg",
          path: null,
          size: 12,
          width: 499,
          height: 750,
          sizeInBytes: 11995,
          provider_metadata: {
            public_id:
              "medium_A32286_B5_B6_D4_459_F_83_FB_D4991_F05_C1_C6_31b236c92f",
            resource_type: "image",
          },
        },
        thumbnail: {
          ext: ".jpg",
          url: "https://res.cloudinary.com/dvlrca4nn/image/upload/v1740671715/thumbnail_A32286_B5_B6_D4_459_F_83_FB_D4991_F05_C1_C6_31b236c92f.jpg",
          hash: "thumbnail_A32286_B5_B6_D4_459_F_83_FB_D4991_F05_C1_C6_31b236c92f",
          mime: "image/jpeg",
          name: "thumbnail_A32286B5-B6D4-459F-83FB-D4991F05C1C6.jpg",
          path: null,
          size: 1.4,
          width: 104,
          height: 156,
          sizeInBytes: 1401,
          provider_metadata: {
            public_id:
              "thumbnail_A32286_B5_B6_D4_459_F_83_FB_D4991_F05_C1_C6_31b236c92f",
            resource_type: "image",
          },
        },
      },
      hash: "A32286_B5_B6_D4_459_F_83_FB_D4991_F05_C1_C6_31b236c92f",
      ext: ".jpg",
      mime: "image/jpeg",
      size: 47.94,
      url: "https://res.cloudinary.com/dvlrca4nn/image/upload/v1740671715/A32286_B5_B6_D4_459_F_83_FB_D4991_F05_C1_C6_31b236c92f.jpg",
      previewUrl: null,
      provider: "cloudinary",
      provider_metadata: {
        public_id: "A32286_B5_B6_D4_459_F_83_FB_D4991_F05_C1_C6_31b236c92f",
        resource_type: "image",
      },
      createdAt: "2025-02-27T15:55:16.633Z",
      updatedAt: "2025-02-27T15:55:16.633Z",
      publishedAt: "2025-02-27T15:55:16.634Z",
    },
  },
];

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
  const [filters, setFilters] = useState({
    priceRange: 9999999999,
    selectedColors: [],
    selectedCategories: [],
  });

  const [filteredProducts, setFilteredProducts] = useState(productss);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const handleFilterChange = useCallback((newFilters) => {
    setFilters(newFilters);

    let results = [...productss];
    if (newFilters.priceRange < Infinity) {
      results = results.filter(
        (product) => product.price <= newFilters.priceRange
      );
    }

    if (newFilters.selectedColors.length > 0) {
      results = results.filter((product) =>
        newFilters.selectedColors.includes(product.color)
      );
    }

    if (newFilters.selectedCategories.length > 0) {
      results = results.filter((product) =>
        newFilters.selectedCategories.some(
          (category) => category === product.category
        )
      );
    }

    setFilteredProducts(results);
  }, []);

  useEffect(() => {
    handleFilterChange(filters);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileFilterOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Shop</h1>
          <button
            className="md:hidden flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm"
            onClick={() => setIsMobileFilterOpen(true)}
          >
            <Filter size={18} />
            <span>Filters</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <ProductFilterSidebar
            onFilterChange={handleFilterChange}
            isOpen={isMobileFilterOpen}
            onClose={() => setIsMobileFilterOpen(false)}
          />

          <div className="bg-[#F9FAFB] justify-center items-center flex flex-col">
            <div className="mb-4">
              <h2 className="text-xl font-medium">
                {filteredProducts.length} Products Found
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}

              {filteredProducts.length === 0 && (
                <div className="col-span-full py-16 text-center">
                  <p className="text-gray-500 text-lg">
                    No products match your filters.
                  </p>
                  <button
                    onClick={() =>
                      handleFilterChange({
                        priceRange: 9999999999,
                        selectedColors: [],
                        selectedCategories: [],
                      })
                    }
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
