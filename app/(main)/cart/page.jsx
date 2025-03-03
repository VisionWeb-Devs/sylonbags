"use client";
import { Trash2 } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Playfair } from "next/font/google";
import Link from "next/link";

const playfair = Playfair({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ShoppingCartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Classic Leather Tote",
      description: "Premium leather tote bag",
      price: 5990,
      quantity: 1,
      image:
        "https://res.cloudinary.com/dvlrca4nn/image/upload/v1740671481/medium_248_EFBA_9_7_C5_D_407_D_9821_445780_BC_79_E5_0c9876b62e.jpg",
    },
    {
      id: 2,
      name: "Designer Crossbody",
      description: "Elegant crossbody bag",
      price: 4290,
      quantity: 1,
      image:
        "https://res.cloudinary.com/dvlrca4nn/image/upload/v1740671481/medium_248_EFBA_9_7_C5_D_407_D_9821_445780_BC_79_E5_0c9876b62e.jpg",
    },
  ]);

  const [orderSummary, setOrderSummary] = useState({
    subtotal: 0,
    shipping: 0,
    total: 0,
  });
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  useEffect(() => {
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const shipping = subtotal > 20000 ? 0 : 0;
    const total = subtotal + shipping - discount;

    setOrderSummary({
      subtotal,
      shipping,
      total,
    });
  }, [cartItems, discount]);
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  const handleApplyCoupon = () => {
    if (couponCode.toLowerCase() === "oscar2024") {
      setDiscount(orderSummary.subtotal * 0.1);
    } else {
      setDiscount(0);
      alert("Invalid coupon code");
    }
  };

  const handleCheckout = () => {
    console.log("Proceeding to checkout with items:", cartItems);
    console.log("Order summary:", orderSummary);

    const checkoutData = {
      items: cartItems.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        price: item.price,
      })),
      couponCode: couponCode,
      subtotal: orderSummary.subtotal,
      shipping: orderSummary.shipping,
      discount: discount,
      total: orderSummary.total,
    };

    console.log("Data to send to backend:", checkoutData);
    alert("rehom msavin, ab3thom database brk chof consol.log ");
  };

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
                key={item.id}
                className="flex items-center border-b-[1px] border-gray-300 pb-4 "
              >
                <div className="w-24 h-24 bg-gray-200 mr-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold tracking-wide">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  <div className="flex flex-row gap-4 items-center border-[1px] border-gray-500 px-2 rounded-lg w-fit">
                    <button
                      className="py-2 px-3 text-md"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      className="py-2 px-3 text-md"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold tracking-wider opacity-85">
                    DA {item.price.toFixed(2)}
                  </p>
                  <button
                    className="text-gray-500 mt-2 hover:scale-110 transform transition-transform duration-300"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <Trash2 />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Coupon Code */}
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
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>
                {orderSummary.shipping === 0
                  ? "Free"
                  : `$${orderSummary.shipping.toFixed(2)}`}
              </span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>DA {orderSummary.subtotal.toFixed(2)}</span>
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
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>
                {orderSummary.shipping === 0
                  ? "Free"
                  : `$${orderSummary.shipping.toFixed(2)}`}
              </span>
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
