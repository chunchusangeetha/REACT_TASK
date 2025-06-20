import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-8">
      <div className="max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-blue-600 text-center">
          About Us
        </h1>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          <span className="font-semibold text-gray-900">Data Artisans</span> was
          founded to help small to medium businesses through a tough economic
          time. Times have improved, but our mission remains the same: to
          provide sound technical solutions for a fixed price; no cost blowouts.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          From web design to system updates, from long-term strategy to instant
          problem-solving, Data Artisans can put the right technology in place
          to suit your business.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          Our experience comes from working in and with a range of companies;
          dealing with solo consultants, family businesses, and multinationals.
          Data Artisans has a broad base from which to draw upon and ensures the
          technology we put in place just makes sense.
        </p>
      </div>
    </div>
  );
}
