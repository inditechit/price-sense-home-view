
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Home, LineChart, Info, Phone, Building } from "lucide-react";

const Navbar = () => {
  return (
    <header className="border-b bg-white/90 backdrop-blur-sm fixed top-0 left-0 right-0 z-10">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-blue-600 text-white p-1 rounded">
            <Home size={18} />
          </div>
          <span className="text-lg font-semibold">HousePriceAI</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link to="/predict" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            Predict
          </Link>
          <Link to="/properties" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            Properties
          </Link>
          <Link to="/about" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            About Model
          </Link>
          <Link to="/contact" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex">
            Sign In
          </Button>
          <Button className="hidden md:flex">
            Sign Up
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
