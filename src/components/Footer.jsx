import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-700 text-gray-200 py-8 mt-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <div className="space-y-2">
          <h4 className="font-bold text-lg text-blue-400">Contact Info</h4>
          <p>Phone: +91 98765 43210</p>
          <p>Email: contact@dataartisans.net</p>
          <p>Address: Hyderabad, Telangana, India</p>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <h4 className="font-bold text-lg text-blue-400">Social Links</h4>
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 text-2xl"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 text-2xl"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 text-2xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="space-y-2 text-center md:text-left">
          <h4 className="font-bold text-lg text-blue-400">Legal</h4>
          <p className="hover:text-blue-400 cursor-pointer">Privacy Policy</p>
          <p className="hover:text-blue-400 cursor-pointer">Terms of Service</p>
          <p className="text-gray-400 mt-2">&copy; 2025 Data Artisans</p>
        </div>
      </div>
    </footer>
  );
}
