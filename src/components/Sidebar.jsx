import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-48 bg-gray-800 text-white flex flex-col p-4 gap-4">
      <Link
        to="/"
        className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded"
      >
        <span>🏠</span> Dashboard
      </Link>
      <Link
        to="/contact"
        className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded"
      >
        <span>📩</span> Contact Us
      </Link>
      <Link
        to="/about"
        className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded"
      >
        <span>ℹ️</span> About
      </Link>
      <Link
        to="/services"
        className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded"
      >
        <span>🛠️</span> Services
      </Link>
      <Link
        to="/profile"
        className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded"
      >
        <span>👤</span> Profile
      </Link>
    </aside>
  );
}
