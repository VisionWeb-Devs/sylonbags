import React from "react";
import ProductCard from "../ProductCard";
import { Playfair } from "next/font/google";
import useFetchData from "@/hooks/useFetchData";

const playfair = Playfair({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const productss = [
  {
    id: 20,
    documentId: "p338ae2u1e6hfuo24omapx5s",
    price: 8500,
    createdAt: "2025-02-27T14:06:15.372Z",
    updatedAt: "2025-02-28T15:04:09.263Z",
    publishedAt: "2025-02-28T15:04:11.893Z",
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
      createdAt: "2025-02-27T15:32:01.551Z",
      updatedAt: "2025-02-27T15:32:01.551Z",
      publishedAt: "2025-02-27T15:32:01.553Z",
    },
    categories: [
      {
        id: 4,
        documentId: "fddk8c3vsk0bsawq3pifekgl",
        name: "women",
        description: "women products",
        slug: "women",
        createdAt: "2025-02-27T15:39:26.868Z",
        updatedAt: "2025-02-27T15:39:26.868Z",
        publishedAt: "2025-02-27T15:39:26.965Z",
      },
      {
        id: 2,
        documentId: "p1e63xffrni3pkeq4mh0etrd",
        name: "bags",
        description: null,
        slug: "bags",
        createdAt: "2025-02-27T13:50:11.661Z",
        updatedAt: "2025-02-27T13:50:14.377Z",
        publishedAt: "2025-02-27T13:50:14.478Z",
      },
    ],
  },
  {
    id: 21,
    documentId: "v2ja8p3fc3sez5wgc5r60l53",
    price: 4599,
    createdAt: "2025-02-27T14:56:22.056Z",
    updatedAt: "2025-02-28T15:07:05.493Z",
    publishedAt: "2025-02-28T15:07:08.362Z",
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
      createdAt: "2025-02-27T14:55:16.633Z",
      updatedAt: "2025-02-27T14:55:16.633Z",
      publishedAt: "2025-02-27T14:55:16.634Z",
    },
    categories: [
      {
        id: 4,
        documentId: "fddk8c3vsk0bsawq3pifekgl",
        name: "women",
        description: "women products",
        slug: "women",
        createdAt: "2025-02-27T15:39:26.868Z",
        updatedAt: "2025-02-27T15:39:26.868Z",
        publishedAt: "2025-02-27T15:39:26.965Z",
      },
    ],
  },
  {
    id: 22,
    documentId: "pj60dql6omhc5zhlpdkmayyd",
    price: 4599,
    createdAt: "2025-02-27T14:58:32.372Z",
    updatedAt: "2025-02-28T15:07:34.987Z",
    publishedAt: "2025-02-28T15:07:37.685Z",
    slug: "giselle-noir",
    tags: "handbag bag bags sac noir black women",
    name: "Giselle Noir",
    feature: "top_selling",
    discount_price: null,
    thumbnail: {
      id: 6,
      documentId: "qnsdsdxmfj88e5wm7p98o8xx",
      name: "37E75270-81F8-4160-9741-8B977430F222.jpg",
      alternativeText: null,
      caption: null,
      width: 1061,
      height: 1607,
      formats: {
        large: {
          ext: ".jpg",
          url: "https://res.cloudinary.com/dvlrca4nn/image/upload/v1740671716/large_37_E75270_81_F8_4160_9741_8_B977430_F222_0c917cf541.jpg",
          hash: "large_37_E75270_81_F8_4160_9741_8_B977430_F222_0c917cf541",
          mime: "image/jpeg",
          name: "large_37E75270-81F8-4160-9741-8B977430F222.jpg",
          path: null,
          size: 18.94,
          width: 660,
          height: 1000,
          sizeInBytes: 18941,
          provider_metadata: {
            public_id:
              "large_37_E75270_81_F8_4160_9741_8_B977430_F222_0c917cf541",
            resource_type: "image",
          },
        },
        small: {
          ext: ".jpg",
          url: "https://res.cloudinary.com/dvlrca4nn/image/upload/v1740671716/small_37_E75270_81_F8_4160_9741_8_B977430_F222_0c917cf541.jpg",
          hash: "small_37_E75270_81_F8_4160_9741_8_B977430_F222_0c917cf541",
          mime: "image/jpeg",
          name: "small_37E75270-81F8-4160-9741-8B977430F222.jpg",
          path: null,
          size: 5.98,
          width: 330,
          height: 500,
          sizeInBytes: 5979,
          provider_metadata: {
            public_id:
              "small_37_E75270_81_F8_4160_9741_8_B977430_F222_0c917cf541",
            resource_type: "image",
          },
        },
        medium: {
          ext: ".jpg",
          url: "https://res.cloudinary.com/dvlrca4nn/image/upload/v1740671716/medium_37_E75270_81_F8_4160_9741_8_B977430_F222_0c917cf541.jpg",
          hash: "medium_37_E75270_81_F8_4160_9741_8_B977430_F222_0c917cf541",
          mime: "image/jpeg",
          name: "medium_37E75270-81F8-4160-9741-8B977430F222.jpg",
          path: null,
          size: 11.47,
          width: 495,
          height: 750,
          sizeInBytes: 11470,
          provider_metadata: {
            public_id:
              "medium_37_E75270_81_F8_4160_9741_8_B977430_F222_0c917cf541",
            resource_type: "image",
          },
        },
        thumbnail: {
          ext: ".jpg",
          url: "https://res.cloudinary.com/dvlrca4nn/image/upload/v1740671715/thumbnail_37_E75270_81_F8_4160_9741_8_B977430_F222_0c917cf541.jpg",
          hash: "thumbnail_37_E75270_81_F8_4160_9741_8_B977430_F222_0c917cf541",
          mime: "image/jpeg",
          name: "thumbnail_37E75270-81F8-4160-9741-8B977430F222.jpg",
          path: null,
          size: 1.34,
          width: 103,
          height: 156,
          sizeInBytes: 1335,
          provider_metadata: {
            public_id:
              "thumbnail_37_E75270_81_F8_4160_9741_8_B977430_F222_0c917cf541",
            resource_type: "image",
          },
        },
      },
      hash: "37_E75270_81_F8_4160_9741_8_B977430_F222_0c917cf541",
      ext: ".jpg",
      mime: "image/jpeg",
      size: 42.46,
      url: "https://res.cloudinary.com/dvlrca4nn/image/upload/v1740671715/37_E75270_81_F8_4160_9741_8_B977430_F222_0c917cf541.jpg",
      previewUrl: null,
      provider: "cloudinary",
      provider_metadata: {
        public_id: "37_E75270_81_F8_4160_9741_8_B977430_F222_0c917cf541",
        resource_type: "image",
      },
      createdAt: "2025-02-27T14:55:17.638Z",
      updatedAt: "2025-02-27T14:55:17.638Z",
      publishedAt: "2025-02-27T14:55:17.639Z",
    },
    categories: [
      {
        id: 4,
        documentId: "fddk8c3vsk0bsawq3pifekgl",
        name: "women",
        description: "women products",
        slug: "women",
        createdAt: "2025-02-27T15:39:26.868Z",
        updatedAt: "2025-02-27T15:39:26.868Z",
        publishedAt: "2025-02-27T15:39:26.965Z",
      },
      {
        id: 2,
        documentId: "p1e63xffrni3pkeq4mh0etrd",
        name: "bags",
        description: null,
        slug: "bags",
        createdAt: "2025-02-27T13:50:11.661Z",
        updatedAt: "2025-02-27T13:50:14.377Z",
        publishedAt: "2025-02-27T13:50:14.478Z",
      },
    ],
  },
  {
    id: 23,
    documentId: "d35oi1n8ode6m2wolj17og9b",
    price: 9000,
    createdAt: "2025-02-27T14:51:52.249Z",
    updatedAt: "2025-03-03T20:39:49.903Z",
    publishedAt: "2025-03-03T20:39:52.152Z",
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
      createdAt: "2025-02-27T14:51:22.166Z",
      updatedAt: "2025-02-27T14:51:22.166Z",
      publishedAt: "2025-02-27T14:51:22.168Z",
    },
    categories: [
      {
        id: 4,
        documentId: "fddk8c3vsk0bsawq3pifekgl",
        name: "women",
        description: "women products",
        slug: "women",
        createdAt: "2025-02-27T15:39:26.868Z",
        updatedAt: "2025-02-27T15:39:26.868Z",
        publishedAt: "2025-02-27T15:39:26.965Z",
      },
      {
        id: 2,
        documentId: "p1e63xffrni3pkeq4mh0etrd",
        name: "bags",
        description: null,
        slug: "bags",
        createdAt: "2025-02-27T13:50:11.661Z",
        updatedAt: "2025-02-27T13:50:14.377Z",
        publishedAt: "2025-02-27T13:50:14.478Z",
      },
    ],
  },
];

console.log("productss : ", productss[0].thumbnail.url);
const TopSellingItems = () => {
  // const { data, loading, error } = useFetchData(
  //   process.env.NEXT_PUBLIC_BACKEND_URL +
  //     `/products?pagination[limit]=4&populate=*`
  // );
  // console.log(data);
  return (
    <div className="bg-[#F9FAFB] justify-center items-center flex flex-col">
      <h1
        className={`${playfair.className} text-3xl md:text-4xl text-center mb-8 font-bold`}
      >
        Top Selling Items
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10 justify-center items-center">
        {productss.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TopSellingItems;
