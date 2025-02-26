"use client"
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-lg py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600">
          <a href="/">RoomFinder</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-600">
          <a
            href="#roomies"
            className="hover:text-indigo-600 transition duration-300"
          >
            Roomies
          </a>
          <a
            href="#roomies-with-flat"
            className="hover:text-indigo-600 transition duration-300"
          >
            Roomies with Flat
          </a>
          <a
            href="#my-profile"
            className="hover:text-indigo-600 transition duration-300"
          >
            My Profile
          </a>
          <a href="#chats" className="hover:text-indigo-600 transition duration-300">
            Chats
          </a>
          <a
            href="#list-your-flat"
            className="hover:text-indigo-600 transition duration-300"
          >
            List Your Flat
          </a>
        </div>

        {/* Sign Out Button for Desktop */}
        <div className="hidden md:block">
          <button className="bg-gradient-to-r from-red-500 to-red-600 text-white py-2 px-4 rounded-md shadow hover:opacity-90 transition duration-300">
            Sign Out
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none focus:text-indigo-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4 space-y-4 text-gray-600">
          <a
            href="#roomies"
            className="block hover:text-indigo-600 transition duration-300"
          >
            Roomies
          </a>
          <a
            href="#roomies-with-flat"
            className="block hover:text-indigo-600 transition duration-300"
          >
            Roomies with Flat
          </a>
          <a
            href="#my-profile"
            className="block hover:text-indigo-600 transition duration-300"
          >
            My Profile
          </a>
          <a
            href="#chats"
            className="block hover:text-indigo-600 transition duration-300"
          >
            Chats
          </a>
          <a
            href="#list-your-flat"
            className="block hover:text-indigo-600 transition duration-300"
          >
            List Your Flat
          </a>
          <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-2 px-4 rounded-md shadow hover:opacity-90 transition duration-300">
            Sign Out
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
