"use client";

import ProductPage from "@/components/shop/product/ProductPage";
import RelatedProduct from "@/components/shop/product/RelatedProduct";
import useFetchData from "@/hooks/useFetchData";
import { useParams } from "next/navigation";

const page = () => {
  const product = {
    id: 6,
    documentId: "d35oi1n8ode6m2wolj17og9b",
    price: 9000,
    createdAt: "2025-02-27T15:51:52.249Z",
    updatedAt: "2025-03-03T21:39:49.903Z",
    publishedAt: null,
    locale: null,
    slug: "cecile-camel",
    tags: "bag bags camel women",
    name: "Cecile Camel",
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
      folderPath: "/",
      createdAt: "2025-02-27T15:51:22.166Z",
      updatedAt: "2025-02-27T15:51:22.166Z",
      publishedAt: "2025-02-27T15:51:22.168Z",
      locale: null,
    },
    variants: [
      {
        id: 1,
        documentId: "g59oym7r91p3w5bufbhz32xf",
        sku: "cec-cam-bla",
        price: 8500,
        stock_quantity: 12,
        createdAt: "2025-02-27T16:41:40.829Z",
        updatedAt: "2025-03-03T22:05:05.831Z",
        publishedAt: null,
        locale: null,
        discount_price: null,
        images: [
          {
            id: 8,
            documentId: "rfgmliovpgjw501dm6qm1z46",
            name: "865E9ABE-D2FC-46C3-8D6C-4F4D25F9FF23.jpg",
            alternativeText: null,
            caption: null,
            width: 1053,
            height: 1417,
            formats: {
              large: {
                ext: ".jpg",
                url: "https://res.cloudinary.com/dvlrca4nn/image/upload/v1740674454/large_865_E9_ABE_D2_FC_46_C3_8_D6_C_4_F4_D25_F9_FF_23_42e29ddd10.jpg",
                hash: "large_865_E9_ABE_D2_FC_46_C3_8_D6_C_4_F4_D25_F9_FF_23_42e29ddd10",
                mime: "image/jpeg",
                name: "large_865E9ABE-D2FC-46C3-8D6C-4F4D25F9FF23.jpg",
                path: null,
                size: 27.3,
                width: 743,
                height: 1000,
                sizeInBytes: 27300,
                provider_metadata: {
                  public_id:
                    "large_865_E9_ABE_D2_FC_46_C3_8_D6_C_4_F4_D25_F9_FF_23_42e29ddd10",
                  resource_type: "image",
                },
              },
              small: {
                ext: ".jpg",
                url: "https://res.cloudinary.com/dvlrca4nn/image/upload/v1740674454/small_865_E9_ABE_D2_FC_46_C3_8_D6_C_4_F4_D25_F9_FF_23_42e29ddd10.jpg",
                hash: "small_865_E9_ABE_D2_FC_46_C3_8_D6_C_4_F4_D25_F9_FF_23_42e29ddd10",
                mime: "image/jpeg",
                name: "small_865E9ABE-D2FC-46C3-8D6C-4F4D25F9FF23.jpg",
                path: null,
                size: 9.72,
                width: 372,
                height: 500,
                sizeInBytes: 9722,
                provider_metadata: {
                  public_id:
                    "small_865_E9_ABE_D2_FC_46_C3_8_D6_C_4_F4_D25_F9_FF_23_42e29ddd10",
                  resource_type: "image",
                },
              },
              medium: {
                ext: ".jpg",
                url: "https://res.cloudinary.com/dvlrca4nn/image/upload/v1740674454/medium_865_E9_ABE_D2_FC_46_C3_8_D6_C_4_F4_D25_F9_FF_23_42e29ddd10.jpg",
                hash: "medium_865_E9_ABE_D2_FC_46_C3_8_D6_C_4_F4_D25_F9_FF_23_42e29ddd10",
                mime: "image/jpeg",
                name: "medium_865E9ABE-D2FC-46C3-8D6C-4F4D25F9FF23.jpg",
                path: null,
                size: 17.17,
                width: 557,
                height: 750,
                sizeInBytes: 17165,
                provider_metadata: {
                  public_id:
                    "medium_865_E9_ABE_D2_FC_46_C3_8_D6_C_4_F4_D25_F9_FF_23_42e29ddd10",
                  resource_type: "image",
                },
              },
              thumbnail: {
                ext: ".jpg",
                url: "https://res.cloudinary.com/dvlrca4nn/image/upload/v1740674453/thumbnail_865_E9_ABE_D2_FC_46_C3_8_D6_C_4_F4_D25_F9_FF_23_42e29ddd10.jpg",
                hash: "thumbnail_865_E9_ABE_D2_FC_46_C3_8_D6_C_4_F4_D25_F9_FF_23_42e29ddd10",
                mime: "image/jpeg",
                name: "thumbnail_865E9ABE-D2FC-46C3-8D6C-4F4D25F9FF23.jpg",
                path: null,
                size: 2.11,
                width: 115,
                height: 156,
                sizeInBytes: 2112,
                provider_metadata: {
                  public_id:
                    "thumbnail_865_E9_ABE_D2_FC_46_C3_8_D6_C_4_F4_D25_F9_FF_23_42e29ddd10",
                  resource_type: "image",
                },
              },
            },
            hash: "865_E9_ABE_D2_FC_46_C3_8_D6_C_4_F4_D25_F9_FF_23_42e29ddd10",
            ext: ".jpg",
            mime: "image/jpeg",
            size: 48.67,
            url: "https://res.cloudinary.com/dvlrca4nn/image/upload/v1740674453/865_E9_ABE_D2_FC_46_C3_8_D6_C_4_F4_D25_F9_FF_23_42e29ddd10.jpg",
            previewUrl: null,
            provider: "cloudinary",
            provider_metadata: {
              public_id:
                "865_E9_ABE_D2_FC_46_C3_8_D6_C_4_F4_D25_F9_FF_23_42e29ddd10",
              resource_type: "image",
            },
            folderPath: "/",
            createdAt: "2025-02-27T16:40:54.962Z",
            updatedAt: "2025-02-27T16:40:54.962Z",
            publishedAt: "2025-02-27T16:40:54.962Z",
            locale: null,
          },
        ],
        colors: [
          {
            id: 5,
            documentId: "sq5hp2mdyf387v7eb48wty8v",
            name: "Black",
            hex_value: "#FFFFFF",
            createdAt: "2025-02-27T16:37:37.218Z",
            updatedAt: "2025-02-27T16:37:37.218Z",
            publishedAt: null,
            locale: null,
          },
        ],
      },
      {
        id: 3,
        documentId: "t8166k09s2oealhxib2ynong",
        sku: "cec-cam-cam",
        price: 8500,
        stock_quantity: 1,
        createdAt: "2025-02-27T16:42:09.227Z",
        updatedAt: "2025-03-03T22:05:36.533Z",
        publishedAt: null,
        locale: null,
        discount_price: null,
        images: [
          {
            id: 7,
            documentId: "uerof1qzaatai40wdarzszge",
            name: "248EFBA9-7C5D-407D-9821-445780BC79E5.jpg",
            alternativeText: null,
            caption: null,
            width: 1057,
            height: 1428,
            formats: {
              large: {
                ext: ".jpg",
                url: "https://res.cloudinary.com/dvlrca4nn/image/upload/v1740674453/large_248_EFBA_9_7_C5_D_407_D_9821_445780_BC_79_E5_392a1f2c18.jpg",
                hash: "large_248_EFBA_9_7_C5_D_407_D_9821_445780_BC_79_E5_392a1f2c18",
                mime: "image/jpeg",
                name: "large_248EFBA9-7C5D-407D-9821-445780BC79E5.jpg",
                path: null,
                size: 27.98,
                width: 740,
                height: 1000,
                sizeInBytes: 27979,
                provider_metadata: {
                  public_id:
                    "large_248_EFBA_9_7_C5_D_407_D_9821_445780_BC_79_E5_392a1f2c18",
                  resource_type: "image",
                },
              },
              small: {
                ext: ".jpg",
                url: "https://res.cloudinary.com/dvlrca4nn/image/upload/v1740674454/small_248_EFBA_9_7_C5_D_407_D_9821_445780_BC_79_E5_392a1f2c18.jpg",
                hash: "small_248_EFBA_9_7_C5_D_407_D_9821_445780_BC_79_E5_392a1f2c18",
                mime: "image/jpeg",
                name: "small_248EFBA9-7C5D-407D-9821-445780BC79E5.jpg",
                path: null,
                size: 10.08,
                width: 370,
                height: 500,
                sizeInBytes: 10080,
                provider_metadata: {
                  public_id:
                    "small_248_EFBA_9_7_C5_D_407_D_9821_445780_BC_79_E5_392a1f2c18",
                  resource_type: "image",
                },
              },
              medium: {
                ext: ".jpg",
                url: "https://res.cloudinary.com/dvlrca4nn/image/upload/v1740674453/medium_248_EFBA_9_7_C5_D_407_D_9821_445780_BC_79_E5_392a1f2c18.jpg",
                hash: "medium_248_EFBA_9_7_C5_D_407_D_9821_445780_BC_79_E5_392a1f2c18",
                mime: "image/jpeg",
                name: "medium_248EFBA9-7C5D-407D-9821-445780BC79E5.jpg",
                path: null,
                size: 17.81,
                width: 555,
                height: 750,
                sizeInBytes: 17809,
                provider_metadata: {
                  public_id:
                    "medium_248_EFBA_9_7_C5_D_407_D_9821_445780_BC_79_E5_392a1f2c18",
                  resource_type: "image",
                },
              },
              thumbnail: {
                ext: ".jpg",
                url: "https://res.cloudinary.com/dvlrca4nn/image/upload/v1740674453/thumbnail_248_EFBA_9_7_C5_D_407_D_9821_445780_BC_79_E5_392a1f2c18.jpg",
                hash: "thumbnail_248_EFBA_9_7_C5_D_407_D_9821_445780_BC_79_E5_392a1f2c18",
                mime: "image/jpeg",
                name: "thumbnail_248EFBA9-7C5D-407D-9821-445780BC79E5.jpg",
                path: null,
                size: 2.22,
                width: 116,
                height: 156,
                sizeInBytes: 2215,
                provider_metadata: {
                  public_id:
                    "thumbnail_248_EFBA_9_7_C5_D_407_D_9821_445780_BC_79_E5_392a1f2c18",
                  resource_type: "image",
                },
              },
            },
            hash: "248_EFBA_9_7_C5_D_407_D_9821_445780_BC_79_E5_392a1f2c18",
            ext: ".jpg",
            mime: "image/jpeg",
            size: 47.15,
            url: "https://res.cloudinary.com/dvlrca4nn/image/upload/v1740674452/248_EFBA_9_7_C5_D_407_D_9821_445780_BC_79_E5_392a1f2c18.jpg",
            previewUrl: null,
            provider: "cloudinary",
            provider_metadata: {
              public_id:
                "248_EFBA_9_7_C5_D_407_D_9821_445780_BC_79_E5_392a1f2c18",
              resource_type: "image",
            },
            folderPath: "/",
            createdAt: "2025-02-27T16:40:54.526Z",
            updatedAt: "2025-02-27T16:40:54.526Z",
            publishedAt: "2025-02-27T16:40:54.526Z",
            locale: null,
          },
        ],
        colors: [
          {
            id: 3,
            documentId: "jkcxzl9sym5xy0vy09wz2g11",
            name: "Camel",
            hex_value: "#C19A6B",
            createdAt: "2025-02-27T16:37:14.719Z",
            updatedAt: "2025-02-27T16:37:14.719Z",
            publishedAt: null,
            locale: null,
          },
        ],
      },
    ],
  };
  // const { product_slug } = useParams();
  // const { data, loading, error } = useFetchData(
  //   process.env.NEXT_PUBLIC_BACKEND_URL + `/products/${product_slug}`
  // );
  // const productt = data;
  // console.log(data, loading, error);
  // console.log("data : ", product);
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
