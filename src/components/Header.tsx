"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const home = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Header */}
      <div style={{ zIndex: "999" }} className="bg-slate-300">
        <div className="max-w-5xl mx-auto px-4 text-black py-2">
          Hallow This is Next.js Top Header
        </div>
        <hr />
      </div>

      {/* Sticky Navigation Bar */}
      <section
        style={{ zIndex: "999" }}
        className="bg-slate-300 sticky top-0 left-0 transition-all ease-in-out duration-300 shadow-md"
      >
        <header className="max-w-5xl mx-auto px-4 font-sans tracking-wide relative z-50">
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 min-h-[70px]">
            {/* Logo */}
            <a href="#">
              <Image
                src="https://readymadeui.com/readymadeui.svg"
                alt="logo"
                width={144}
                height={144}
              />
            </a>

            {/* Navigation Menu */}
            <div
              id="collapseMenu"
              className={`${
                isMenuOpen ? "block" : "hidden lg:block"
              } max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5 fill-black"
                  viewBox="0 0 320.591 320.591"
                >
                  <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
                  <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
                </svg>
              </button>

              {/* Menu Items */}
              <ul className="lg:flex lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                <li className="mb-6 hidden max-lg:block">
                  <a href="#">
                    <Image
                      src="https://readymadeui.com/readymadeui.svg"
                      alt="logo"
                      width={144}
                      height={144}
                    />
                  </a>
                </li>
                {home.map((item, index) => (
                  <li key={index} className="max-lg:border-b max-lg:py-3 px-3">
                    <Link
                      href={item.href}
                      className={`hover:text-[#007bff] block font-bold text-[15px] ${
                        item.name === "Home" ? "text-[#007bff]" : "text-[#333]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex max-lg:ml-auto">
              <button className="lg:hidden" onClick={() => setIsMenuOpen(true)}>
                <svg
                  className="w-7 h-7"
                  fill="#000"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
