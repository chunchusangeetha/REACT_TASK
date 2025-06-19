import React from "react";

export default function Card({ image, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="mb-4 text-gray-600">{description}</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Read More
        </button>
      </div>
    </div>
  );
}
