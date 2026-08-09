"use client";

import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-[#1d293a]/50 bg-black/30 backdrop-blur-md">
      <div className="mx-auto flex h-17 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex shrink-0 items-center">
          <Link href="/" className="text-3xl font-bold text-[#16f2b3]">
            AYB
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center justify-between px-110 py-4 md:px-8">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className=" rounded-md p-2 text-white text-2xl md:hidden"
            aria-label="Toggle navigation"
          >
            {" "}
            {isOpen ? "✕" : "☰"}{" "}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          id="navbar-default"
          className={`${isOpen ? "flex max-h-screen opacity-100" : "hidden"} 
  absolute right-0 top-13 z-50 mt-4 w-50 flex-col items-start
  bg-[#0d1224] text-sm
  md:static md:mt-0 md:flex md:h-auto md:max-h-screen md:w-auto
  md:flex-row md:items-center md:bg-transparent md:space-x-1
  md:opacity-100`}
        >
          <li>
            <Link
              href="/#about"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 no-underline outline-none"
            >
              <span className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                ABOUT
              </span>
            </Link>
          </li>

          <li>
            <Link
              href="/#experience"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 no-underline outline-none"
            >
              <span className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                EXPERIENCE
              </span>
            </Link>
          </li>

          <li>
            <Link
              href="/#skills"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 no-underline outline-none"
            >
              <span className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                SKILLS
              </span>
            </Link>
          </li>

          <li>
            <Link
              href="/#education"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 no-underline outline-none"
            >
              <span className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                EDUCATION
              </span>
            </Link>
          </li>

          <li>
            <Link
              href="/#projects"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 no-underline outline-none"
            >
              <span className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                PROJECTS
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
