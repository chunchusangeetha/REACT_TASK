import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import reactLogo from "../assets/react.svg";

export default function Header() {
  const { user, signOut } = useAuth();

  return (
    <header className="flex justify-between items-center p-4 bg-blue-300 text-gray-800 shadow-lg">
      <a href="https://react.dev" target="_blank">
         <img src={reactLogo} className="logo react" alt="React logo" />
        {" "}
      </a>
      <nav className="flex gap-6">
        <Link to="/" className="hover:text-blue-700 text-lg">
          Home
        </Link>
        <Link to="/contact" className="hover:text-blue-700 text-lg">
          Contact Us
        </Link>
        <Link to="/about" className="hover:text-blue-700 text-lg">
          About
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span className="font-semibold">Welcome, {user}</span>
            <button
              onClick={signOut}
              className="bg-red-400 px-4 py-2 rounded hover:bg-red-500 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/signup"
            className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-500 transition"
          >
            Sign Up
          </Link>
        )}
      </div>
    </header>
  );
}
