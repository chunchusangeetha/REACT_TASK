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

const HEADER_HEIGHT = 72; // px
export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 to-purple-100">
          <header
            className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-90 shadow-md backdrop-blur-md"
            style={{ height: HEADER_HEIGHT, transition: "box-shadow 0.2s" }}
          >
            <Header />
          </header>
          <div className="flex flex-1" style={{ paddingTop: HEADER_HEIGHT }}>
            <Sidebar />
            <main className="flex-1 p-6 bg-white bg-opacity-90 rounded-lg shadow-sm">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/about" element={<About />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/services" element={<Services />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </main>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}
