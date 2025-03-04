"use client";
import { Trash2 } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Playfair } from "next/font/google";
import useFetchData from "@/hooks/useFetchData";
import Link from "next/link";
import { useRouter } from "next/navigation";

const playfair = Playfair({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const getInitialCart = () => {
  const cart = localStorage.getItem("SylonCart");
  return cart ? JSON.parse(cart) : [];
};

const ShoppingCartPage = () => {
  const router = useRouter();

  const [cartItems, setCartItems] = useState([]);
  const initialCart = getInitialCart();

  const { data, loading, error } = useFetchData(
    process.env.NEXT_PUBLIC_BACKEND_URL +
      "/products/" +
      initialCart.map((item) => item.slug).join(",") +
      "/" +
      initialCart.map((item) => item.sku).join(",")
  );

  useEffect(() => {
    if (data && data.length > 0) {
      const updatedCartItems = data.map((product) => {
        const cartItem = initialCart.find((item) => item.slug === product.slug);
        return {
          ...product,
          quantity: cartItem ? cartItem.quantity : 1,
        };
      });
      setCartItems(updatedCartItems);
    }
  }, [data]);

  const [orderSummary, setOrderSummary] = useState({
    subtotal: 0,
    total: 0,
  });
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const initialQuantities = {};
    cartItems.forEach((item) => {
      const sku = item.variants && item.variants[0] ? item.variants[0].sku : "";
      initialQuantities[sku] = item.quantity || 1;
    });
    setQuantities(initialQuantities);
  }, [cartItems]);

  useEffect(() => {
    const subtotal = cartItems.reduce((sum, item) => {
      const sku = item.variants && item.variants[0] ? item.variants[0].sku : "";
      return sum + item.price * (quantities[sku] || 1);
    }, 0);

    const total = subtotal - discount;

    setOrderSummary({
      subtotal,
      total,
    });
  }, [cartItems, quantities, discount]);

  const handleQuantityChange = (sku, newQuantity) => {
    if (newQuantity > 0) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [sku]: newQuantity,
      }));
    }
  };

  const handleRemoveItem = (sku) => {
    setCartItems(
      cartItems.filter(
        (item) =>
          item.variants && item.variants[0] && item.variants[0].sku !== sku
      )
    );
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      delete newQuantities[sku];
      return newQuantities;
    });
  };

  const handleApplyCoupon = () => {
    if (couponCode.toLowerCase() === "oscar2024") {
      setDiscount(orderSummary.subtotal * 0.1);
    } else {
      setDiscount(0);
      alert("Invalid coupon code");
    }
  };
  console.log("cartItems", cartItems);
  const handleCheckout = () => {
    const checkoutData = {
      items: cartItems.map((item) => {
        const sku =
          item.variants && item.variants[0] ? item.variants[0].sku : "";
        return {
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: quantities[sku] || 1,
          variant:
            item.variants && item.variants[0]
              ? item.variants[0].colors[0].name
              : "Unknown",
          image:
            item.variants && item.variants[0] && item.variants[0].images
              ? item.variants[0].images[0].url
              : "/placeholder-image.jpg",
        };
      }),
      couponCode: couponCode,
      subtotal: orderSummary.subtotal,
      discount: discount,
      total: orderSummary.total,
    };

    localStorage.setItem("checkoutData", JSON.stringify(checkoutData));

    console.log("checkoutData", checkoutData);
    router.push("/cart/checkout");
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Your Cart Is Empty</div>;
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <h2
            className={`text-4xl font-bold mb-6 text-center ${playfair.className}`}
          >
            Shopping Cart
          </h2>

          <div className="space-y-6 mb-6">
            {cartItems.map((item) => (
              <div
                key={item.variants[0].sku}
                className="flex items-center border-b-[1px] border-gray-300 pb-4 "
              >
                <div className="w-24 h-24 bg-gray-200 mr-4">
                  <img
                    src={item.variants[0].images[0].url}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold tracking-wide">{item.name}</h3>
                  <div className="flex flex-row gap-4 items-center border-[1px] border-gray-500 px-2 rounded-lg w-fit">
                    <button
                      className="py-2 px-3 text-md"
                      onClick={() =>
                        handleQuantityChange(
                          item.variants[0].sku,
                          quantities[item.variants[0].sku] - 1
                        )
                      }
                    >
                      -
                    </button>
                    <span className="px-2">
                      {quantities[item.variants[0].sku]}
                    </span>
                    <button
                      className="py-2 px-3 text-md"
                      onClick={() =>
                        handleQuantityChange(
                          item.variants[0].sku,
                          quantities[item.variants[0].sku] + 1
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold tracking-wider opacity-85">
                    DA{" "}
                    {(item.price * quantities[item.variants[0].sku]).toFixed(2)}
                  </p>
                  <button
                    className="text-gray-500 mt-2 hover:scale-110 transform transition-transform duration-300"
                    onClick={() => handleRemoveItem(item.variants[0].sku)}
                  >
                    <Trash2 />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex mb-6">
            <input
              type="text"
              placeholder="Enter coupon code"
              className="flex-grow p-2  border-gray-300 rounded-l border-r-0 border-[1px] font-light tracking-widest  "
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <button
              className="bg-[#ffddd5] px-4 py-2 rounded-r border-l-0 border-gray-300  border-[1px] text-black  font-light tracking-widest opacity-80 hover:opacity-100  hover:bg-[#efb7ab] duration-400 "
              onClick={handleApplyCoupon}
            >
              Apply
            </button>
          </div>

          <div className="space-y-2  tracking-wider">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>DA {orderSummary.subtotal.toFixed(2)}</span>
            </div>
            {discount > -1 && (
              <div className="flex justify-between text-green-600">
                <span>Discount</span>
                <span>-DA {discount.toFixed(2)}</span>
              </div>
            )}

            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>DA {orderSummary.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 bg-gray-50 p-6 rounded-lg h-fit">
          <h2
            className={`text-3xl font-bold mb-6 text-center ${playfair.className}`}
          >
            Order Summary
          </h2>

          <div className="space-y-4 mb-6 ">
            <div className="flex justify-between">
              <span>Items ({cartItems.length})</span>
              <span>DA {orderSummary.subtotal.toFixed(2)}</span>
            </div>

            {discount > 0 && (
              <div className="flex justify-between text-green-600">
                <span>Discount</span>
                <span>- DA {discount.toFixed(2)}</span>
              </div>
            )}
            <div className="border-t border-gray-300 pt-4 flex justify-between font-bold tracking-widest">
              <span>Total</span>
              <span>DA {orderSummary.total.toFixed(2)}</span>
            </div>
          </div>
          <Link href="cart/checkout">
            <button
              className="w-full bg-[#ffddd5] text-black py-3 rounded mb-4  font-light tracking-widest opacity-80 hover:opacity-100  hover:bg-[#efb7ab] duration-400"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
