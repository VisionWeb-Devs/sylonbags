"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Checkout = () => {
  const [selectedWilaya, setSelectedWilaya] = useState("");
  const [shippingPrice, setShippingPrice] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    postalCode: "",
    city: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderInfo, setOrderInfo] = useState(null);

  const [checkoutData, setCheckoutData] = useState(null);
  useEffect(() => {
    const storedCheckoutData = localStorage.getItem("checkoutData");
    if (storedCheckoutData) {
      const parsedData = JSON.parse(storedCheckoutData);
      setCheckoutData(parsedData);
      console.log("Checkout Data:", parsedData);
    }
  }, []);
  console.log(checkoutData);
  const cartItems = checkoutData?.items || [];
  const subtotal = checkoutData?.subtotal || 0;
  const total = subtotal + shippingPrice;

  useEffect(() => {
    if (selectedWilaya) {
      const selected = wilayaData.find((w) => w.id === selectedWilaya);
      if (selected) {
        setShippingPrice(selected.shipping_price);
      }
    }
  }, [selectedWilaya]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!selectedWilaya) newErrors.wilaya = "Please select your wilaya";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const phonePattern = /^0[567][0-9]{8}$/;
    if (formData.phone && !phonePattern.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  console.log("hello", cartItems);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      const orderId = `SYL-${Date.now().toString().slice(-8)}`;
      const orderDate = new Date();

      const orderData = {
        orderId,
        orderDate,
        customer: {
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          address: formData.address,
          postalCode: formData.postalCode,
          city: formData.city,
          phone: formData.phone,
          wilaya: selectedWilaya,
        },
        items: cartItems,
        payment: {
          method: "cash_on_delivery",
          status: "pending",
        },
        pricing: {
          subtotal,
          shippingPrice,
          total,
        },
      };

      setOrderInfo(orderData);

      setTimeout(() => {
        console.log("Sending order to database:", orderData);

        setIsSubmitting(false);
        setOrderComplete(true);
        localStorage.removeItem("checkoutData");
        localStorage.removeItem("SylonCart");
      }, 1500);
    }
  };

  if (orderComplete && orderInfo) {
    const downloadReceipt = () => {
      const receiptContent = `
    SYLON BAGS - ORDER RECEIPT
    -------------------------
    Order Reference: ${orderInfo.orderId}
    Date: ${orderInfo.orderDate.toLocaleDateString()}
    
    ITEMS
    -------------------------
    ${cartItems
      .map(
        (item) =>
          `${item.name} (${item.variant || "N/A"}) x${item.quantity}: ${(
            item.price * item.quantity
          ).toLocaleString()}.00 DA`
      )
      .join("\n")}
    
    SUMMARY
    -------------------------
    Subtotal: ${subtotal.toLocaleString()}.00 DA
    Shipping: ${shippingPrice.toLocaleString()}.00 DA
    Total: ${total.toLocaleString()}.00 DA
    
    SHIPPING ADDRESS
    -------------------------
    ${formData.firstName} ${formData.lastName}
    ${formData.address}
    Phone: ${formData.phone}
    
    Thank you for shopping with Sylon Bags!
    `;

      const blob = new Blob([receiptContent], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `sylon-receipt-${orderInfo.orderId}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    };

    return (
      <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 font-sans flex items-center justify-center">
        <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-sm border border-zinc-200">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl font-medium text-zinc-900 mb-2">
              Order Placed Successfully!
            </h2>
            <p className="text-zinc-600 mb-6">
              Thank you for your purchase. We'll process your order soon.
            </p>
            <div className="p-4 bg-zinc-50 rounded-lg mb-6">
              <p className="text-sm text-zinc-500 mb-2">Order reference:</p>
              <p className="font-mono text-zinc-800">{orderInfo.orderId}</p>
            </div>

            <div className="flex flex-col gap-3">
              <button
                className="w-full py-3 px-4 bg-white border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition duration-200 flex items-center justify-center"
                onClick={downloadReceipt}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
                Download Receipt
              </button>

              <button
                className="w-full py-3 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-200"
                onClick={() => (window.location.href = "/")}
              >
                Return to Shop
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 font-sans">
      <header className="border-b border-zinc-200 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-3xl font-serif tracking-tight text-zinc-900">
              Checkout
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-2/3">
              <div className="mb-8 bg-white rounded-lg shadow-sm p-6 border border-zinc-200">
                <h2 className="text-lg font-medium text-zinc-900 mb-6 pb-2 border-b border-zinc-100">
                  Contact Information
                </h2>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-zinc-700 mb-1"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="yourgmail@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full p-3 border ${
                      errors.email ? "border-red-500" : "border-zinc-300"
                    } rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-zinc-50 placeholder-zinc-400`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="mb-8 bg-white rounded-lg shadow-sm p-6 border border-zinc-200">
                <h2 className="text-lg font-medium text-zinc-900 mb-6 pb-2 border-b border-zinc-100">
                  Shipping Information
                </h2>

                <div className="mb-4">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-zinc-700 mb-1"
                  >
                    Country/Region
                  </label>
                  <div className="relative">
                    <select
                      id="country"
                      className="w-full p-3 border border-zinc-300 rounded-md appearance-none bg-zinc-50 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                    >
                      <option>Algeria</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-zinc-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="wilaya"
                    className="block text-sm font-medium text-zinc-700 mb-1"
                  >
                    Wilaya
                  </label>
                  <div className="relative">
                    <select
                      id="wilaya"
                      value={selectedWilaya}
                      onChange={(e) => setSelectedWilaya(e.target.value)}
                      className={`w-full p-3 border ${
                        errors.wilaya ? "border-red-500" : "border-zinc-300"
                      } rounded-md appearance-none bg-zinc-50 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200`}
                    >
                      <option value="">Select your wilaya</option>
                      {wilayaData.map((wilaya) => (
                        <option key={wilaya.id} value={wilaya.id}>
                          {wilaya.name} -{" "}
                          {wilaya.shipping_price.toLocaleString()}.00 DA
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-zinc-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  {errors.wilaya && (
                    <p className="mt-1 text-sm text-red-600">{errors.wilaya}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-zinc-700 mb-1"
                    >
                      First name (optional)
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-zinc-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-zinc-50 placeholder-zinc-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-zinc-700 mb-1"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full p-3 border ${
                        errors.lastName ? "border-red-500" : "border-zinc-300"
                      } rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-zinc-50 placeholder-zinc-400`}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-zinc-700 mb-1"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    placeholder="Street address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={`w-full p-3 border ${
                      errors.address ? "border-red-500" : "border-zinc-300"
                    } rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-zinc-50 placeholder-zinc-400`}
                  />
                  {errors.address && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.address}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="postalCode"
                      className="block text-sm font-medium text-zinc-700 mb-1"
                    >
                      Postal code (optional)
                    </label>
                    <input
                      type="text"
                      id="postalCode"
                      placeholder="Postal code"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-zinc-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-zinc-50 placeholder-zinc-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-zinc-700 mb-1"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={`w-full p-3 border ${
                        errors.city ? "border-red-500" : "border-zinc-300"
                      } rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-zinc-50 placeholder-zinc-400`}
                    />
                    {errors.city && (
                      <p className="mt-1 text-sm text-red-600">{errors.city}</p>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-zinc-700 mb-1"
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full p-3 border ${
                      errors.phone ? "border-red-500" : "border-zinc-300"
                    } rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-zinc-50 placeholder-zinc-400`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Payment */}
              <div className="mb-8 bg-white rounded-lg shadow-sm p-6 border border-zinc-200">
                <h2 className="text-lg font-medium text-zinc-900 mb-6 pb-2 border-b border-zinc-100">
                  Payment Method
                </h2>
                <p className="text-sm text-zinc-500 mb-4 flex items-center">
                  Choose the paiment method that suits you
                </p>
                <div className="border border-zinc-200 rounded-md overflow-hidden mb-4">
                  <div className="p-4 bg-zinc-50 border-b border-zinc-200">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="payOnDelivery"
                        name="payment"
                        checked
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-zinc-300"
                      />
                      <label
                        htmlFor="payOnDelivery"
                        className="ml-3 font-medium text-zinc-700"
                      >
                        Payment on delivery
                      </label>
                    </div>
                  </div>
                  <div className="p-4 text-center text-zinc-600 bg-white">
                    <span className="inline-flex items-center">
                      Pay with cash upon delivery
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/3">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-zinc-200 sticky top-4">
                <h2 className="text-lg font-medium text-zinc-900 mb-6 pb-2 border-b border-zinc-100">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.sku} className="flex items-center">
                      <div className=" bg-zinc-100 rounded-md flex items-center justify-center mr-4 aspect-square object-cover">
                        <Image
                          src={item.image}
                          width={100}
                          alt="..."
                          height={100}
                        ></Image>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-zinc-800">
                          {item.name}
                        </h3>
                        <p className="text-xs text-zinc-500">{item.variant}</p>
                        <div className="mt-1 flex items-center justify-between">
                          <span className="text-sm text-zinc-600">
                            × {item.quantity}
                          </span>
                          <span className="text-sm font-medium text-zinc-800">
                            {item.price.toLocaleString()}.00 DA
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 py-4 border-t border-zinc-200">
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-600">Subtotal</span>
                    <span className="text-sm font-medium text-zinc-800">
                      {subtotal.toLocaleString()}.00 DA
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-600">Shipping</span>
                    <span className="text-sm font-medium text-zinc-800">
                      {shippingPrice.toLocaleString()}.00 DA
                    </span>
                  </div>
                </div>

                <div className="py-4 border-t border-zinc-200">
                  <div className="flex justify-between">
                    <span className="text-base font-medium text-zinc-800">
                      Total
                    </span>
                    <span className="text-base font-medium text-zinc-800">
                      {total.toLocaleString()}.00 DA
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 mt-1">
                    Including shipping and taxes
                  </p>
                </div>

                <button
                  onClick={handleSubmit}
                  type="submit"
                  className={`w-full mt-6 py-3 px-4 bg-[#ffddd5] hover:bg-[#f6b5a6] text-gray-800 rounded-md transition duration-200 flex items-center justify-center ${
                    isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "Complete order"
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Checkout;

const wilayaData = [
  {
    id: "1",
    code: "1",
    name: "Adrar",
    ar_name: "أدرار",
    longitude: "27.9766155",
    latitude: "-0.20396",
    shipping_price: 1400,
  },
  {
    id: "2",
    code: "2",
    name: "Chlef",
    ar_name: "الشلف",
    longitude: "36.1691245",
    latitude: "1.3539002",
    shipping_price: 900,
  },
  {
    id: "3",
    code: "3",
    name: "Laghouat",
    ar_name: "الأغواط",
    longitude: "33.7873735",
    latitude: "2.8829115",
    shipping_price: 1050,
  },
  {
    id: "4",
    code: "4",
    name: "Oum El Bouaghi",
    ar_name: "أم البواقي",
    longitude: "35.8726014",
    latitude: "7.1180248",
    shipping_price: 900,
  },
  {
    id: "5",
    code: "5",
    name: "Batna",
    ar_name: "باتنة",
    longitude: "35.32147",
    latitude: "3.1066502",
    shipping_price: 900,
  },
  {
    id: "6",
    code: "6",
    name: "Béjaïa",
    ar_name: "بجاية",
    longitude: "36.7695969",
    latitude: "5.0085855",
    shipping_price: 900,
  },
  {
    id: "7",
    code: "7",
    name: "Biskra",
    ar_name: "بسكرة",
    longitude: "34.8515041",
    latitude: "5.7246709",
    shipping_price: 1050,
  },
  {
    id: "8",
    code: "8",
    name: "Bechar",
    ar_name: "بشار",
    longitude: "31.5977602",
    latitude: "-1.8540446",
    shipping_price: 1050,
  },
  {
    id: "9",
    code: "9",
    name: "Blida",
    ar_name: "البليدة",
    longitude: "36.4803023",
    latitude: "2.8009379",
    shipping_price: 900,
  },
  {
    id: "10",
    code: "10",
    name: "Bouira",
    ar_name: "البويرة",
    longitude: "36.2084234",
    latitude: "3.925049",
    shipping_price: 900,
  },
  {
    id: "11",
    code: "11",
    name: "Tamanrasset",
    ar_name: "تمنراست",
    longitude: "22.2746227",
    latitude: "5.6754684",
    shipping_price: 1600,
  },
  {
    id: "12",
    code: "12",
    name: "Tbessa",
    ar_name: "تبسة",
    longitude: "35.4117259",
    latitude: "8.110545",
    shipping_price: 1050,
  },
  {
    id: "13",
    code: "13",
    name: "Tlemcen",
    ar_name: "تلمسان",
    longitude: "34.8959541",
    latitude: "-1.3150979",
    shipping_price: 900,
  },
  {
    id: "14",
    code: "14",
    name: "Tiaret",
    ar_name: "تيارت",
    longitude: "35.3599899",
    latitude: "1.3916159",
    shipping_price: 900,
  },
  {
    id: "15",
    code: "15",
    name: "Tizi Ouzou",
    ar_name: "تيزي وزو",
    longitude: "36.7002068",
    latitude: "4.075957",
    shipping_price: 900,
  },
  {
    id: "16",
    code: "16",
    name: "Alger",
    ar_name: "الجزائر",
    longitude: "36.7538259",
    latitude: "3.057841",
    shipping_price: 750,
  },
  {
    id: "17",
    code: "17",
    name: "Djelfa",
    ar_name: "الجلفة",
    longitude: "34.6672467",
    latitude: "3.2993118",
    shipping_price: 1050,
  },
  {
    id: "18",
    code: "18",
    name: "Jijel",
    ar_name: "جيجل",
    longitude: "36.7962714",
    latitude: "5.7504845",
    shipping_price: 900,
  },
  {
    id: "19",
    code: "19",
    name: "Setif",
    ar_name: "سطيف",
    longitude: "36.1905173",
    latitude: "5.4202134",
    shipping_price: 900,
  },
  {
    id: "20",
    code: "20",
    name: "Saida",
    ar_name: "سعيدة",
    longitude: "34.841945",
    latitude: "0.1483583",
    shipping_price: 900,
  },
  {
    id: "21",
    code: "21",
    name: "Skikda",
    ar_name: "سكيكدة",
    longitude: "36.8777912",
    latitude: "6.9357204",
    shipping_price: 900,
  },
  {
    id: "22",
    code: "22",
    name: "Sidi Bel Abbes",
    ar_name: "سيدي بلعباس",
    longitude: "35.206334",
    latitude: "-0.6301368",
    shipping_price: 750,
  },
  {
    id: "23",
    code: "23",
    name: "Annaba",
    ar_name: "عنابة",
    longitude: "36.9184345",
    latitude: "7.7452755",
    shipping_price: 900,
  },
  {
    id: "24",
    code: "24",
    name: "Guelma",
    ar_name: "قالمة",
    longitude: "36.4569088",
    latitude: "7.4334312",
    shipping_price: 900,
  },
  {
    id: "25",
    code: "25",
    name: "Constantine",
    ar_name: "قسنطينة",
    longitude: "36.319475",
    latitude: "6.7370571",
    shipping_price: 900,
  },
  {
    id: "26",
    code: "26",
    name: "Medea",
    ar_name: "المدية",
    longitude: "36.2838408",
    latitude: "2.7728462",
    shipping_price: 900,
  },
  {
    id: "27",
    code: "27",
    name: "Mostaganem",
    ar_name: "مستغانم",
    longitude: "35.9751841",
    latitude: "0.1149273",
    shipping_price: 750,
  },
  {
    id: "28",
    code: "28",
    name: "M'Sila",
    ar_name: "المسيلة",
    longitude: "35.7211476",
    latitude: "4.5187283",
    shipping_price: 900,
  },
  {
    id: "29",
    code: "29",
    name: "Mascara",
    ar_name: "معسكر",
    longitude: "35.382998",
    latitude: "0.1542592",
    shipping_price: 750,
  },
  {
    id: "30",
    code: "30",
    name: "Ouargla",
    ar_name: "ورقلة",
    longitude: "32.1961967",
    latitude: "4.9634113",
    shipping_price: 1050,
  },
  {
    id: "31",
    code: "31",
    name: "Oran",
    ar_name: "وهران",
    longitude: "35.7066928",
    latitude: "-0.6405861",
    shipping_price: 500,
  },
  {
    id: "32",
    code: "32",
    name: "El Bayadh",
    ar_name: "البيض",
    longitude: "32.5722756",
    latitude: "0.950011",
    shipping_price: 1050,
  },
  {
    id: "33",
    code: "33",
    name: "Illizi",
    ar_name: "إليزي",
    longitude: "26.5065999",
    latitude: "8.480587",
    shipping_price: 1750,
  },
  {
    id: "34",
    code: "34",
    name: "Bordj Bou Arreridj",
    ar_name: "برج بوعريريج",
    longitude: "36.0686488",
    latitude: "4.7691823",
    shipping_price: 900,
  },
  {
    id: "35",
    code: "35",
    name: "Boumerdes",
    ar_name: "بومرداس",
    longitude: "36.7564181",
    latitude: "3.4917212",
    shipping_price: 900,
  },
  {
    id: "36",
    code: "36",
    name: "El Tarf",
    ar_name: "الطارف",
    longitude: "36.7534258",
    latitude: "8.2984543",
    shipping_price: 900,
  },
  {
    id: "37",
    code: "37",
    name: "Tindouf",
    ar_name: "تندوف",
    longitude: "27.2460501",
    latitude: "-6.3252899",
    shipping_price: 1800,
  },
  {
    id: "38",
    code: "38",
    name: "Tissemsilt",
    ar_name: "تيسمسيلت",
    longitude: "35.6021906",
    latitude: "1.802187",
    shipping_price: 900,
  },
  {
    id: "39",
    code: "39",
    name: "El Oued",
    ar_name: "الوادي",
    longitude: "33.3714492",
    latitude: "6.8573436",
    shipping_price: 1050,
  },
  {
    id: "40",
    code: "40",
    name: "Khenchela",
    ar_name: "خنشلة",
    longitude: "35.4263293",
    latitude: "7.1414137",
    shipping_price: 900,
  },
  {
    id: "41",
    code: "41",
    name: "Souk Ahras",
    ar_name: "سوق أهراس",
    longitude: "36.277849",
    latitude: "7.9592299",
    shipping_price: 900,
  },
  {
    id: "42",
    code: "42",
    name: "Tipaza",
    ar_name: "تيبازة",
    longitude: "36.5980966",
    latitude: "2.4085379",
    shipping_price: 900,
  },
  {
    id: "43",
    code: "43",
    name: "Mila",
    ar_name: "ميلة",
    longitude: "36.4514882",
    latitude: "6.2487316",
    shipping_price: 900,
  },
  {
    id: "44",
    code: "44",
    name: "Ain Defla",
    ar_name: "عين الدفلى",
    longitude: "36.1283915",
    latitude: "2.1772514",
    shipping_price: 900,
  },
  {
    id: "45",
    code: "45",
    name: "Naama",
    ar_name: "النعامة",
    longitude: "33.1995605",
    latitude: "-0.8021968",
    shipping_price: 1050,
  },
  {
    id: "46",
    code: "46",
    name: "Ain Temouchent",
    ar_name: "عين تموشنت",
    longitude: "35.404044",
    latitude: "-1.0580975",
    shipping_price: 750,
  },
  {
    id: "47",
    code: "47",
    name: "Ghardaia",
    ar_name: "غرداية",
    longitude: "32.5891743",
    latitude: "3.7455655",
    shipping_price: 1050,
  },
  {
    id: "48",
    code: "48",
    name: "Relizane",
    ar_name: "غليزان",
    longitude: "35.8050195",
    latitude: "0.867381",
    shipping_price: 900,
  },
];
