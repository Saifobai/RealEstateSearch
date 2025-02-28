import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 shadow-lg">
      <div className="flex justify-between items-center max-w-6xl mx-auto py-4 px-6">
        <Link to="/" className="flex-shrink-0">
          <h1 className="text-2xl font-extrabold flex items-center space-x-2">
            <span className="text-blue-400">Satriq</span>
            <span className="text-white">Estate</span>
          </h1>
        </Link>
        <form className="bg-gray-700 p-2 rounded-lg flex items-center shadow-md w-full max-w-sm">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none flex-grow text-white placeholder-gray-400 px-2"
          />
          <FaSearch className="text-gray-400 cursor-pointer hover:text-white transition duration-300" />
        </form>
        <ul className="flex gap-6 text-white font-medium items-center">
          <Link to="/">
            <li className="hidden sm:inline hover:text-blue-400 transition duration-300">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline hover:text-blue-400 transition duration-300">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600 transition duration-300">
              Sign in
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
