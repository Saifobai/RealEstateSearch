import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 px-6">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-2xl shadow-xl">
        <h1 className="text-white text-4xl font-bold text-center mb-6">
          Sign Up
        </h1>
        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="username"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="email"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="password"
          />
          <button className="w-full text-lg font-semibold text-white bg-blue-600 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300">
            Sign Up
          </button>
        </form>
        <div className="flex justify-center items-center gap-2 mt-6">
          <p className="text-gray-400">Have an account?</p>
          <Link
            to="/sign-in"
            className="text-blue-400 hover:text-blue-500 transition-all"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
