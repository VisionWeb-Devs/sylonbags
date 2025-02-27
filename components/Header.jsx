"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import logo from "../assets/logonobg.png";
import { RiShoppingBag4Line } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { HiX, HiMenu } from "react-icons/hi";

const Header = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.log("Current route:", pathname);
  }, [pathname]);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="w-full h-20 bg-white flex justify-between items-center px-4">
      <div>
        <Image src={logo} width={100} height={100} alt="logo" />
      </div>

      <div className="hidden md:block text-[16px]">
        <ul className="flex gap-8">
          <li className="relative group">
            <Link
              className={`${
                pathname === "/"
                  ? "font-bold underline underline-offset-2"
                  : " "
              }`}
              href="/"
            >
              Home
            </Link>
            <span
              className={`absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all group-hover:w-full ${
                pathname === "/" ? "hidden" : " "
              } `}
            ></span>
          </li>
          <li className="relative group">
            <Link
              href="/shop"
              className={`${
                pathname.includes("shop")
                  ? "font-bold underline underline-offset-2"
                  : " "
              }`}
            >
              Shop
            </Link>
            <span
              className={`absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all group-hover:w-full ${
                pathname.includes("shop") ? "hidden" : " "
              } `}
            ></span>
          </li>
          <li className="relative group">
            <Link
              className={`${
                pathname.includes("category")
                  ? "font-bold underline underline-offset-2"
                  : " "
              }`}
              href="/category"
            >
              Categories
            </Link>
            <span
              className={`absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all group-hover:w-full ${
                pathname.includes("category") ? "hidden" : " "
              } `}
            ></span>
          </li>
          <li className="relative group">
            <Link
              className={`${
                pathname.includes("aboutUs")
                  ? "font-bold underline underline-offset-2"
                  : " "
              }`}
              href="/aboutUs"
            >
              About
            </Link>
            <span
              className={`absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all group-hover:w-full ${
                pathname.includes("aboutUs") ? "hidden" : " "
              } `}
            ></span>
          </li>
          <li className="relative group">
            <Link
              className={`${
                pathname.includes("contact")
                  ? "font-bold underline underline-offset-2"
                  : " "
              }`}
              href="/contact"
            >
              Contact
            </Link>
            <span
              className={`absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all group-hover:w-full ${
                pathname.includes("contact") ? "hidden" : " "
              } `}
            ></span>
          </li>
        </ul>
      </div>

      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white z-10 py-4 md:hidden">
          <ul className="flex flex-col items-center gap-4">
            <li className="relative group">
              <Link
                className={`${
                  pathname === "/"
                    ? "font-bold underline underline-offset-2"
                    : " "
                }`}
                href="/"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="relative group">
              <Link
                href="/shop"
                className={`${
                  pathname.includes("shop")
                    ? "font-bold underline underline-offset-2"
                    : " "
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
            </li>
            <li className="relative group">
              <Link
                className={`${
                  pathname.includes("category")
                    ? "font-bold underline underline-offset-2"
                    : " "
                }`}
                href="/category"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
            </li>
            <li className="relative group">
              <Link
                className={`${
                  pathname.includes("aboutUs")
                    ? "font-bold underline underline-offset-2"
                    : " "
                }`}
                href="/aboutUs"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="relative group">
              <Link
                className={`${
                  pathname.includes("contact")
                    ? "font-bold underline underline-offset-2"
                    : " "
                }`}
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* cart and menu icon */}
      <div className="flex gap-4 items-center">
        <Link href="/cart">
          <RiShoppingBag4Line size={34} className="font-light" />
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <HiX size={34} className="font-light" />
          ) : (
            <HiMenu size={34} className="font-light" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
