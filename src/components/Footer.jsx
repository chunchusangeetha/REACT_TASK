import React from "react";

export default function Footer() {
  return (
    <footer className="grid grid-cols-3 gap-4 p-6 bg-blue-300 text-gray-700">
      <div className="space-y-2">
        <h4 className="font-bold">Contact Info</h4>
        <p>Phone: 123-456-7890</p>
        <p>Email: contact@example.com</p>
      </div>
      <div className="space-y-2">
        <h4 className="font-bold">Social Links</h4>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
      </div>
      <div className="space-y-2">
        <h4 className="font-bold">Legal</h4>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>&copy; 2025 Company</p>
      </div>
    </footer>
  );
}
