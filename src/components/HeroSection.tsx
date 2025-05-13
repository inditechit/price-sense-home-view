
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="container px-4 md:px-6 flex flex-col lg:flex-row items-center py-16 md:py-24">
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left lg:pr-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Predict Your House Price <br />
            <span className="text-blue-600">with AI!</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
            Thousands of houses are sold every day. Wondering if you're paying the right price? Use our ML-powered tool for accurate estimates.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <Button asChild size="lg" className="text-base">
              <Link to="/predict">Start Prediction</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-base">
              Learn More
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative">
          <div className="relative z-10 animate-float">
            <img
              src="https://images.unsplash.com/photo-1518005020951-eccb494ad742"
              alt="Modern house"
              className="rounded-lg shadow-2xl mx-auto"
              style={{ maxWidth: '90%' }}
            />
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-50 animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-50"></div>
        </div>
      </div>
      
      <div className="container px-4 md:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <h3 className="text-4xl font-bold text-blue-600">98%</h3>
            <p className="text-sm text-gray-600">Prediction Accuracy</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-bold text-blue-600">50k+</h3>
            <p className="text-sm text-gray-600">Properties Analyzed</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-bold text-blue-600">10k+</h3>
            <p className="text-sm text-gray-600">Happy Users</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-bold text-blue-600">24/7</h3>
            <p className="text-sm text-gray-600">Customer Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
