import React from "react";

function Profile() {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">
          Data Artisans Profile
        </h1>
        <img
          src="https://dataartisans.net/wp-content/uploads/2024/02/cropped-da2-1-300x121.png.webp"
          alt="Data Artisans Logo"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-300 object-contain bg-gray-100"
        />
        <h2 className="text-2xl font-semibold mb-2">Data Artisans</h2>
        <p className="text-gray-700 mb-4">Email: contact@dataartisans.net</p>
        <p className="text-gray-600 mb-6">
          We provide scalable, reliable, and innovative data solutions including
          Data Engineering, Cloud Services, AI, and Cyber Security.
        </p>
        <a
          href="https://dataartisans.net"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition inline-block"
        >
          Visit Website
        </a>
      </div>
    </div>
  );
}

export default Profile;
