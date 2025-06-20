import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function Header() {
  const { user, signOut } = useAuth();

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 bg-blue-200 text-gray-800 shadow-md">
      <img
        src="https://dataartisans.net/wp-content/uploads/2024/02/cropped-da2-1-300x121.png.webp"
        className="h-15 w-auto"
        alt="logo"
      />

      <nav className="flex gap-6">
        <Link to="/" className="hover:text-blue-700 text-lg font-medium transition">
          Home
        </Link>
        <Link to="/contact" className="hover:text-blue-700 text-lg font-medium transition">
          Contact Us
        </Link>
        <Link to="/about" className="hover:text-blue-700 text-lg font-medium transition">
          About
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span className="font-semibold">Welcome, {user}</span>
            <button
              onClick={signOut}
              className="bg-red-400 text-white px-4 py-2 rounded-full border-2 border-red-500 hover:bg-red-500 transition font-semibold shadow"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/signup"
            className="bg-green-400 text-white px-4 py-2 rounded-full border-2 border-green-500 hover:bg-green-500 transition font-semibold shadow"
          >
            Sign Up
          </Link>
        )}
      </div>
    </header>
  );
}
