import React from "react";
import SignUpForm from "../components/SignUpForm";

export default function SignUp() {
  return (
    <div className="max-w-xl mx-auto mt-8 bg-white p-6 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
        Sign Up
      </h2>
      <SignUpForm />
    </div>
  );
}
