import React from "react";
import ContactForm from "../components/ContactForm";

export default function ContactUs() {
  return (
    <div className="max-w-xl mx-auto mt-8 bg-white p-6 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
        Contact Us
      </h2>
      <ContactForm/>
      
    </div>
  );
}
