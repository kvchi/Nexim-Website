"use client";

import Link from "next/link";
import "./globals.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      // Add with a short delay to avoid immediate closure
      const timeoutId = setTimeout(() => {
        document.addEventListener("click", handleClickOutside);
      }, 0);

      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [showDropdown]);

  const linkClass = (path) =>
    `${
      pathname === path
        ? "text-[#037F4D] border-b-3 border-[#037F4D]"
        : "text-[#363636]"
    } pb-3`;

  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="overflow-x-hidden">
        <header className=" z-20 bg-white fixed top-0 w-full shadow-sm">
          <div className="flex justify-between items-center p-5 border-b border-[#c2c2c2]">
            <h5 className="hidden md:flex">Nigeria Export Import Bank</h5>
            <div className="flex items-center mx-5 gap-6">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/globe.svg"
                  alt="globe"
                  width={20}
                  height={20}
                ></Image>
                <h3>English</h3>
                <Image
                  src="/images/Caret_Down_MD.svg"
                  alt="search icon"
                  width={24}
                  height={24}
                />
              </div>
              <div className="bg-[#E81005] px-2.5 py-0.5 flex gap-2 rounded-lg items-center">
                <p className="text-white">reportgov</p>
                <div className="bg-[#037F4D] text-white px-1.5 rounded-lg h-4.5 items-center flex">
                  <p>.ng</p>
                </div>
              </div>
            </div>
          </div>
          <nav className="flex justify-between p-5 z-10 relative items-center">
          <div className="relative w-[116px] h-[38px]">
  <Image
    src="/images/logo3.png"
    alt="logo3"
    width={116}
    height={38}
    className="object-cover w-full h-auto"
  />
</div>

<div className="items-center gap-[56px] font-semibold text-[20px] font-sans text-[#363636] leading-[0.8] hidden md:flex">
  <Link href="/" className={linkClass("/")}>
    Home
  </Link>
  <Link
    href="/about"
    className={`flex items-center gap-2 ${linkClass("/about")}`}
  >
    About Us
    <Image
      src="/images/Chevron_down.png"
      alt="chevron"
      width={24}
      height={24}
      className="w-[24px] h-auto"
    />
  </Link>
  <Link
    href="/services"
    className={`flex items-center gap-2 ${linkClass("/services")}`}
  >
    Services
    <Image
      src="/images/Chevron_down.png"
      alt="chevron"
      width={24}
      height={24}
      className="w-[24px] h-auto"
    />
  </Link>
  <Link href="/contact" className={linkClass("/contact")}>
    Contact Us
  </Link>
</div>

<div className="flex items-center gap-8 mx-5">
  <div>
    <Image
      src="/images/Search_Magnifying_Glass.svg"
      alt="search icon"
      width={24}
      height={24}
      className="w-[24px] h-auto"
    />
  </div>

  <div className="flex items-center gap-4">
    <div
      className="flex items-center border border-[#cdcdcd] rounded-2xl p-1 cursor-pointer"
      onClick={() => setShowDropdown(!showDropdown)}
    >
      <Image
        src="/images/User_01.svg"
        alt="user"
        width={24}
        height={24}
        className="w-[24px] h-auto"
      />
      <Image
        src="/images/Caret_Down_MD.svg"
        alt="caret"
        width={24}
        height={24}
        className="w-[24px] h-auto"
      />
    </div>

    {showDropdown && (
      <div
        ref={dropdownRef}
        className="absolute top-full mt-2 w-48 bg-white shadow-lg rounded-md z-50 right-20 transition duration-500 ease-in-out"
      >
        <ul className="p-2 text-sm">
          <li className="px-4 py-2 text-gray-400 text-[14px]">Credit Portal</li>
          <li className="px-4 py-2 hover:bg-green-200 transition duration-500 hover:rounded-lg cursor-pointer">
            Admin Login
          </li>
          <li className="px-4 py-2 hover:bg-green-200 transition duration-500 hover:rounded-lg cursor-pointer">
            Credit Login
          </li>
        </ul>
      </div>
    )}

    <div
      className="flex border border-[#cdcdcd] p-1 rounded-lg cursor-pointer"
      onClick={() => setIsOpen(true)}
    >
      <Image
        src="/images/Hamburger_LG.svg"
        alt="menu"
        width={24}
        height={24}
        className="w-[24px] h-auto"
      />
    </div>
  </div>
</div>

          </nav>
        </header>

        {/* Mobile menu */}
        <div
          className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-40 shadow-lg transition transform duration-700 md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 space-y-4 ">
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="text-right border-b  hover:text-[#037F4D] cursor-pointer"
              >
                Close Menu
              </button>
            </div>
            <div className="pt-32 space-y-6 font-semibold text-2xl">
              <p className="font-medium text-sm text-gray-300">Navigation</p>
              <Link
                href="/"
                className="block border-b-2 border-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block border-b-2 border-gray-300"
                onClick={() => setIsOpen(false)}
              >
                {" "}
                About Us
              </Link>
              <Link
                href="/services"
                className="block border-b-2 border-gray-300"
                onClick={() => setIsOpen(false)}
              >
                {" "}
                Services
              </Link>
              <Link
                href="/contact"
                className="block border-b-2 border-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Conatct Us
              </Link>
            </div>
            {/* Mobile menu */}
            <div className="pt-8 space-y-6 font-semibold text-2xl">
              <p className="font-medium text-sm text-gray-300">Information</p>
              <Link
                href="/"
                className="block border-b-2 border-gray-300"
                onClick={() => setIsOpen(false)}
              >
                News
              </Link>
              <Link
                href="/about"
                className="block border-b-2 border-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Events
              </Link>
              <Link
                href="/services"
                className="block border-b-2 border-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Media
              </Link>
              <Link
                href="/contact"
                className="block border-b-2 border-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Whistle Blowing
              </Link>
              <Link
                href="/contact"
                className="block border-b-2 border-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>
            </div>
          </div>
        </div>
        {/* Desktop Menu */}
        <div
          className={`hidden lg:block fixed top-0 right-0 w-full bg-white z-40 shadow-lg ${
            isOpen
              ? "transition-all ease-out transform translate-y-0"
              : "translate-y-[-100%]"
          } transition duration-500`}
        >
          <aside className="py-10 px-11 flex  gap-[181px] ">
            <div>
              <Image
                src="/images/NeximLogo.png"
                width={267}
                height={89}
                alt="neximlogo"
              ></Image>
              <p className="mt-5">
                Empowering Nigerian exporters with <br /> financing and support
                to thrive in
                <br /> global markets.
              </p>
            </div>
            <div className="flex gap-[171px]">
              <div className="font-semibold text-2xl pt-8 space-y-2">
                <Link
                  href="/"
                  className="block "
                  onClick={() => setIsOpen(false)}
                >
                  News
                </Link>
                <Link
                  href="/"
                  className="block "
                  onClick={() => setIsOpen(false)}
                >
                  Events
                </Link>
                <Link
                  href="/"
                  className="block "
                  onClick={() => setIsOpen(false)}
                >
                  Media
                </Link>
                <Link
                  href="/"
                  className="block "
                  onClick={() => setIsOpen(false)}
                >
                  Whistle Blowing
                </Link>
              </div>
              <div>
                <Link
                  href="/"
                  className="block font-semibold text-2xl pt-8"
                  onClick={() => setIsOpen(false)}
                >
                  Resources
                </Link>
                <div className="flex gap-10 ">
                  <ul className="space-y-3">
                    <li>Knowledge tools</li>
                    <li>Audited Accounts</li>
                    <li>Application forms</li>
                    <li>Brochures</li>
                  </ul>
                  <ul className="space-y-3">
                    <li>Presentationd</li>
                    <li>Service Level Agreements</li>
                    <li>Guidlines</li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>

          <div className="flex justify-end pb-5 border-t-2 p-5 border-gray-300">
            <button
              onClick={() => setIsOpen(false)}
              className="text-right hover:text-[#037F4D] cursor-pointer"
            >
              Close Menu
            </button>
          </div>
        </div>

        <main>{children}</main>

        <footer className="w-full  bg-[#050b3d]">
          <div className="flex flex-col md:flex-row justify-between pt-20 px-11.5 pb-16 gap-[90px]">
            <div className="max-w-xs md:max-w-[20%]">
              <Image src="/images/logo-1.svg" width={173} height={38} alt="logo-1"/>
              <p className="text-white font-regular pt-3">
                Empowering Nigerian exporters with financing and support to
                thrive in global markets
              </p>
              <div className="bg-[#E81005] px-2.5 py-0.5 inline-flex gap-2 rounded-lg items-center mt-3">
                <p className="text-white">reportgov</p>
                <div className="bg-[#037F4D] text-white p-2 rounded-md h-4.5 items-center flex">
                  <p>.ng</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-4 font-light max-w-xs md:max-w-[20%]">
              <Link href="/" className="text-white">
                Home
              </Link>
              <Link href="/about" className="text-white">
                About Us
              </Link>
              <Link href="/services" className="text-white">
                Services We Offer
              </Link>
              <Link href="/contact" className="text-white">
                Contact Us
              </Link>
            </div>

            <div className="flex flex-col space-y-4 font-light max-w-xs md:max-w-[20%]">
              <Link href="/" className="text-white">
                News
              </Link>
              <Link href="/" className="text-white">
                Media
              </Link>
              <Link href="/about" className="text-white">
                Events
              </Link>
              <Link href="/services" className="text-white">
                Resources
              </Link>
              <Link href="/contact" className="text-white">
                Whistle Blowing
              </Link>
            </div>

            <div className="flex flex-col space-y-4 font-light max-w-xs md:max-w-[20%]">
              <div className="text-white">Location</div>
              <p className="text-white">
                NEXIM House, Plot 975 Cadastral Zone AO, Central Business
                District, Garki, Abuja, Nigeria
              </p>
              <p className="text-white">Social Media</p>
              <div className="flex items-center gap-5 pt-2">
                <Image
                  src="/images/twitter.svg"
                  alt="X"
                  width={18}
                  height={18}
                />
                <Image src="/images/insta.svg" alt="X" width={18} height={18} />
                <Image
                  src="/images/facebook.svg"
                  alt="facebook"
                  width={18}
                  height={18}
                />
                <Image
                  src="/images/youtube.svg"
                  alt="youtube"
                  width={18}
                  height={18}
                />
                <Image
                  src="/images/linkedin.svg"
                  alt="linkedin"
                  width={18}
                  height={18}
                />
              </div>
            </div>
            <div className="flex-1 flex justify-end items-start">
              <div className="bg-white inline-flex gap-2 p-2 rounded-full items-center mr-50 md:mr-0">
                <Image
                  src="/images/globe.svg"
                  alt="globe"
                  width={10}
                  height={10}
                />
                <p className="text-gray-700">English</p>
                <Image
                  src="/images/Caret_Down_MD.svg"
                  alt="arrow down"
                  width={10}
                  height={10}
                />
              </div>
            </div>
          </div>

          <div className="text-white text-left md:space-y-0 space-y-2 flex flex-col md:flex-row md:justify-center md:items-center p-8 border-t border-gray-800 ">
            <p className="w-[12rem] md:w-fit">
              &copy; {new Date().getFullYear()} NeximBank Ltd. All Rights
              Reserved.
            </p>
            <span className="border-b border-white w-fit md:mx-2">
              Terms of service
            </span>
            <span className="border-b border-white w-fit md:mx-2">
              Privacy policy
            </span>
            <span className="border-b border-white w-fit md:mx-2">
              Cookies Settings
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
