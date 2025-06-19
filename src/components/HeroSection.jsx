import React from "react";

export default function HeroSection() {
  return (
    <div
      className="relative h-64 bg-cover bg-center rounded-lg shadow-lg"
      style={{ backgroundImage: "url('https://via.placeholder.com/1200x400')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Webpage</h1>
        <button className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}
