"use client";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
const Slider = () => {
  const slides = [
    {
      url: "https://media.discordapp.net/attachments/868137008634155089/1344673555106762763/image.png?ex=67c1c456&is=67c072d6&hm=fc5ec280d777f417018e0f3400992c6c715b6e1aa0a821a7e2bb38fbedb6d637&=&format=webp&quality=lossless&width=1057&height=440",
      title: "Slide 1",
      text: "Slide 1",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1681422570054-9ae5b8b03e46?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5zcGxhc2glMjBhcHB8ZW58MHx8MHx8fDA%3D",
      title: "Slide 2",
      text: "Slide 2",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1669748157617-a3a83cc8ea23?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3Vuc2V0c3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Slide 3",
      text: "Slide 3",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="max-w-[1440px] h-[600px] w-full m-auto px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 ease-in-out"
      ></div>
      <div className="hidden group-hover:block duration-300  absolute top-1/2 left-5 transform -translate-y-1/2 -translate-x-0 rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="hidden group-hover:block duration-300  absolute top-1/2 right-5 transform -translate-y-1/2 -translate-x-0 rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            className="text-2xl cursor-pointer mx-1"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <RxDotFilled size={20} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
