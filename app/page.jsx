"use client";
import Slider from "@/compenents/home/Slider";
import useFetchData from "@/hooks/useFetchData";
const loading = false;
const error = null;
const data = [
  {
    id: 5,
    documentId: "p338ae2u1e6hfuo24omapx5s",
    price: 8500,
    description:
      "Sac Daphne Espresso\n\nMatière : Similicuir\n\nContient une trousse en supplément.\n\n \n\nDimensions; \n\nLargeur : 40cm\n\nHauteur : 25cm\n\nExiste aussi en couleur : Noir",
    createdAt: "2025-02-27T15:06:15.372Z",
    updatedAt: "2025-02-27T16:32:27.709Z",
    publishedAt: "2025-02-27T16:32:31.158Z",
    discount_price: 0,
    slug: "daphne-espresso",
    color: "Espresso",
    size: null,
    stock_quantity: 0,
    tags: "bag bags espresso women",
    name: "Daphne Espresso",
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
    photos: null,
    category: {
      id: 2,
      documentId: "p1e63xffrni3pkeq4mh0etrd",
      name: "bags",
      description: null,
      slug: "bags",
      createdAt: "2025-02-27T14:50:11.661Z",
      updatedAt: "2025-02-27T14:50:14.377Z",
      publishedAt: "2025-02-27T14:50:14.478Z",
    },
  },
];

export default function Home() {
  // const { data, loading, error } = useFetchData(
  //   process.env.NEXT_PUBLIC_BACKEND_URL + "/products?populate=*"
  // );
  // console.log(data, loading, error);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="container mx-auto">
      <Slider />
    </div>
  );
}
