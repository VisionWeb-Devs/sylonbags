"use client";

import ProductPage from "@/components/shop/product/ProductPage";
import RelatedProduct from "@/components/shop/product/RelatedProduct";
import useFetchData from "@/hooks/useFetchData";
import { useParams } from "next/navigation";

const page = () => {
  const product = {
    id: 3,
    documentId: "p338ae2u1e6hfuo24omapx5s",
    price: 8500,
    createdAt: "2025-02-27T15:06:15.372Z",
    updatedAt: "2025-02-28T16:04:09.263Z",
    publishedAt: null,
    locale: null,
    slug: "daphne-espresso",
    tags: "bag bags espresso women",
    name: "Daphne Espresso",
    feature: "top_selling",
    discount_price: null,
    categories: [
      {
        id: 3,
        documentId: "fddk8c3vsk0bsawq3pifekgl",
        name: "women",
        description: "women products",
        slug: "women",
        createdAt: "2025-02-27T16:39:26.868Z",
        updatedAt: "2025-02-27T16:39:26.868Z",
        publishedAt: null,
        locale: null,
      },
      {
        id: 1,
        documentId: "p1e63xffrni3pkeq4mh0etrd",
        name: "bags",
        description: null,
        slug: "bags",
        createdAt: "2025-02-27T14:50:11.661Z",
        updatedAt: "2025-02-27T14:50:14.377Z",
        publishedAt: null,
        locale: null,
      },
    ],
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
      folderPath: "/",
      createdAt: "2025-02-27T16:32:01.551Z",
      updatedAt: "2025-02-27T16:32:01.551Z",
      publishedAt: "2025-02-27T16:32:01.553Z",
      locale: null,
    },
    variants: [
      {
        id: 9,
        documentId: "u4yova0r97op7rtxlieos91g",
        sku: "dap-esp-esp",
        price: 8500,
        stock_quantity: 1,
        createdAt: "2025-02-28T16:12:15.640Z",
        updatedAt: "2025-02-28T16:12:15.640Z",
        publishedAt: null,
        locale: null,
        discount_price: null,
        images: [
          {
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
            folderPath: "/",
            createdAt: "2025-02-27T16:32:01.551Z",
            updatedAt: "2025-02-27T16:32:01.551Z",
            publishedAt: "2025-02-27T16:32:01.553Z",
            locale: null,
          },
        ],
      },
    ],
  };
  const { product_slug } = useParams();
  const { data, loading, error } = useFetchData(
    process.env.NEXT_PUBLIC_BACKEND_URL + `/products/${product_slug}`
  );
  const productt = data;
  console.log(data, loading, error);
  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  // console.log(productt);
  // console.log(product);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full  py-8">
      <ProductPage product={product} key={product.id} />
      <RelatedProduct category_slug={product.categories[0].slug} />
    </div>
  );
};

export default page;
