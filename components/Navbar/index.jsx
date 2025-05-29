"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const Navbar = () => {
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

  return (
    <div>
      <header className=" z-20 bg-white fixed top-0 w-full">
        <div className="flex justify-between items-center px-5 pt-4 pb-5 border-b border-[#f6f6f6]">
          <h5 className="hidden md:flex">Nigeria Export Import Bank</h5>
          <div className="flex items-center mx-5 gap-6">
            <div className="flex items-center gap-2">
              <img
                src="/images/globe.svg"
                alt="globe"
                width={20}
                height={20}
              ></img>
              <h3>English</h3>
              <img
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
        <nav className="flex justify-between  px-5 pt-7 relative  border-b border-[#CDCDCD]">
         
          <Link href="/" className="relative w-[116px] ">
            <img src="/images/Logo3.png" alt="Logo3" className="object-cover" />
          </Link>

          <div className="items-center gap-2 md:gap-4 lg:gap-[56px] font-semibold text-[20px] font-sans text-[#363636] leading-[0.8] hidden lg:flex">
  <Link href="/" className="relative flex items-center gap-2">
    <span className="flex items-center gap-2">
      <span
        className={`pb-4 border-b-4 transition-all duration-200 ${
          pathname === "/"
            ? "text-[#037F4D] border-[#037F4D]"
            : "text-[#363636] border-transparent"
        }`}
      >
        Home
      </span>
      
    </span>
  </Link>

  <Link href="/about" className={`pb-4 border-b-4 transition-all duration-200 ${
          pathname === "/about"
            ? "text-[#037F4D] border-[#037F4D]"
            : "text-[#363636] border-transparent"
        }`}>
    <span className="flex items-center gap-2">
      <span
        
      >
        About Us
      </span>
      <RiArrowDownSLine className="size-4" />
    </span>
  </Link>

  <Link href="/services"className={`pb-4 border-b-4 transition-all duration-200 ${
          pathname === "/services"
            ? "text-[#037F4D] border-[#037F4D]"
            : "text-[#363636] border-transparent"
        }`}>
    <span className="flex items-center gap-2">
      <span
        
      >
        Services
      </span>
      <RiArrowDownSLine className="size-4" />
    </span>
  </Link>

  <Link href="/contact" className="relative flex items-center gap-2">
    <span className="flex items-center gap-2">
      <span
        className={`pb-4 border-b-4 transition-all duration-200 ${
          pathname === "/contact"
            ? "text-[#037F4D] border-[#037F4D]"
            : "text-[#363636] border-transparent"
        }`}
      >
        Contact Us
      </span>
      <RiArrowDownSLine className="w-6 h-6 invisible" />
    </span>
  </Link>
</div>

          <div className="flex items-center gap-8 mx-5 -mt-6">
            <div>
              <img
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
                <img
                  src="/images/User_01.svg"
                  alt="user"
                  width={24}
                  height={24}
                  className="w-[24px] h-auto"
                />
                <img
                  src="/images/Caret_Down_MD.svg"
                  alt="caret"
                  width={24}
                  height={24}
                  className="w-[24px] h-auto"
                />
              </div>
              <div
                ref={dropdownRef}
                className={`absolute top-full mt-2 w-48 bg-white shadow-lg rounded-md z-50 right-20 transition-all duration-500 ease-in-out transform ${
                  showDropdown
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-2"
                }`}
              >
                <ul className="p-2 text-sm">
                  <li className="px-4 py-2 text-gray-400 text-[14px]">
                    Credit Portal
                  </li>
                  <li className="px-4 py-2 hover:bg-green-200 transition duration-500 hover:rounded-lg cursor-pointer">
                    Admin Login
                  </li>
                  <li className="px-4 py-2 hover:bg-green-200 transition duration-500 hover:rounded-lg cursor-pointer">
                    Credit Login
                  </li>
                </ul>
              </div>

              <div
                className="flex border border-[#cdcdcd] p-1 rounded-lg cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                <img
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
              Conatat Us
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
            <img
              src="/images/NeximLogo.png"
              width={267}
              height={89}
              alt="neximlogo"
            ></img>
            <p className="mt-5">
              Empowering Nigerian exporters with <br /> financing and support to
              thrive in
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
                  <li>Presentations</li>
                  <li>Service Level Agreements</li>
                  <li>Guidelines</li>
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
    </div>
  );
};

export default Navbar;
