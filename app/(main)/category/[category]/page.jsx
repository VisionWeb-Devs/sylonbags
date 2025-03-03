"use client";
import ProductCard from "@/components/ProductCard";
import React, { useState, useCallback, useEffect } from "react";
import { Filter, ChevronLeft, ChevronRight } from "lucide-react";
import useFetchData from "@/hooks/useFetchData";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ProductFilterSidebar from "@/components/shop/category/ProductFilterSidebar";

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
    categories: [],
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
    categories: [],
  },
  {
    id: 20,
    documentId: "p338ae2u1e6hfuo24omapx5s",
    price: 8500,
    createdAt: "2025-02-27T15:06:15.372Z",
    updatedAt: "2025-02-28T16:04:09.263Z",
    publishedAt: "2025-02-28T16:04:11.893Z",
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
    categories: [
      {
        id: 4,
        documentId: "fddk8c3vsk0bsawq3pifekgl",
        name: "women",
        description: "women products",
        slug: "women",
        createdAt: "2025-02-27T16:39:26.868Z",
        updatedAt: "2025-02-27T16:39:26.868Z",
        publishedAt: "2025-02-27T16:39:26.965Z",
      },
      {
        id: 2,
        documentId: "p1e63xffrni3pkeq4mh0etrd",
        name: "bags",
        description: null,
        slug: "bags",
        createdAt: "2025-02-27T14:50:11.661Z",
        updatedAt: "2025-02-27T14:50:14.377Z",
        publishedAt: "2025-02-27T14:50:14.478Z",
      },
    ],
  },
  {
    id: 21,
    documentId: "v2ja8p3fc3sez5wgc5r60l53",
    price: 4599,
    createdAt: "2025-02-27T15:56:22.056Z",
    updatedAt: "2025-02-28T16:07:05.493Z",
    publishedAt: "2025-02-28T16:07:08.362Z",
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
    categories: [
      {
        id: 4,
        documentId: "fddk8c3vsk0bsawq3pifekgl",
        name: "women",
        description: "women products",
        slug: "women",
        createdAt: "2025-02-27T16:39:26.868Z",
        updatedAt: "2025-02-27T16:39:26.868Z",
        publishedAt: "2025-02-27T16:39:26.965Z",
      },
    ],
  },
  {
    id: 22,
    documentId: "pj60dql6omhc5zhlpdkmayyd",
    price: 4599,
    createdAt: "2025-02-27T15:58:32.372Z",
    updatedAt: "2025-02-28T16:07:34.987Z",
    publishedAt: "2025-02-28T16:07:37.685Z",
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
      createdAt: "2025-02-27T15:55:17.638Z",
      updatedAt: "2025-02-27T15:55:17.638Z",
      publishedAt: "2025-02-27T15:55:17.639Z",
    },
    categories: [
      {
        id: 4,
        documentId: "fddk8c3vsk0bsawq3pifekgl",
        name: "women",
        description: "women products",
        slug: "women",
        createdAt: "2025-02-27T16:39:26.868Z",
        updatedAt: "2025-02-27T16:39:26.868Z",
        publishedAt: "2025-02-27T16:39:26.965Z",
      },
      {
        id: 2,
        documentId: "p1e63xffrni3pkeq4mh0etrd",
        name: "bags",
        description: null,
        slug: "bags",
        createdAt: "2025-02-27T14:50:11.661Z",
        updatedAt: "2025-02-27T14:50:14.377Z",
        publishedAt: "2025-02-27T14:50:14.478Z",
      },
    ],
  },
];

const page = () => {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = 8;

  // const { data, loading, error } = useFetchData(
  //   process.env.NEXT_PUBLIC_BACKEND_URL +
  //     `/products?populate=*&pagination[page]=${page_number}&pagination[pageSize]=${page_size}`
  // );
  // console.log(data, loading, error);

  const [filters, setFilters] = useState({
    priceRange: 9999999999,
    selectedColors: [],
    selectedCategories: [],
  });

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const totalProducts = productss.length;
  const totalPages = Math.ceil(totalProducts / pageSize);
  const createPageUrl = (pageNum) => {
    return `/shop?page=${pageNum}`;
  };

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

  const paginatedProducts = useCallback(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage, pageSize]);

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

          <div className="flex-1 bg-[#F9FAFB] flex flex-col">
            <div className="mb-4">
              <h2 className="text-xl font-medium">
                {filteredProducts.length} Products Found
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-6">
              {paginatedProducts().map((product) => (
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
