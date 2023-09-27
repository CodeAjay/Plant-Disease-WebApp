import React from 'react';
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-col justify-between items-center">
        {/* Logo */}
        <div className="mb-4 md:mb-0 py-5">
          <img src={logo} alt="Your Logo" className="h-16" />
        </div>

        {/* Quick Links */}
        <div className="mb-4 md:mb-0">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-400">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Reports</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Contact</a>
            </li>
          </ul>
        </div>

        {/* Copyright Section */}
        <div className="text-center my-5">
          <p>&copy; {new Date().getFullYear()} Ministry of Micro, Small and Medium Enterprises
</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
