
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t py-12 mt-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">HousePriceAI</h3>
            <p className="text-sm text-gray-500">
              Accurate house price predictions using advanced machine learning algorithms.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-3">Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-500 hover:text-blue-600">Home</Link>
              </li>
              <li>
                <Link to="/predict" className="text-sm text-gray-500 hover:text-blue-600">Predict</Link>
              </li>
              <li>
                <Link to="/properties" className="text-sm text-gray-500 hover:text-blue-600">Properties</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-500 hover:text-blue-600">About Model</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-500 hover:text-blue-600">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-blue-600">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-blue-600">API Reference</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-blue-600">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-blue-600">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-3">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <Mail size={16} />
                <span>contact@housepriceai.com</span>
              </li>
              <li className="text-sm text-gray-500">
                123 Market Street<br />
                San Francisco, CA 94105
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} HousePriceAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
