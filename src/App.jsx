import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import { AuthProvider } from "./components/AuthContext";
import Services from "./pages/Services";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 to-purple-100">
          <Header />
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 p-6 bg-white bg-opacity-90">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/about" element={<About />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/services" element={<Services/>}/>
                <Route path="/profile" element={<Profile/>}/>
              </Routes>
            </main>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}