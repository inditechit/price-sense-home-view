
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <HeroSection />
        <FeatureSection />
        
        {/* How It Works Section */}
        <section className="container px-4 md:px-6 py-16 bg-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get an accurate house price prediction in just a few simple steps.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-medium mb-2">Enter Property Details</h3>
              <p className="text-gray-600">
                Fill in information about the property including size, location, features, and condition.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-medium mb-2">AI Analyzes the Data</h3>
              <p className="text-gray-600">
                Our machine learning model processes the information and compares it with thousands of similar properties.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-medium mb-2">Get Your Prediction</h3>
              <p className="text-gray-600">
                Receive a detailed report with the predicted price and additional market insights.
              </p>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="container px-4 md:px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Thousands of homebuyers and sellers trust our predictions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border">
              <div className="flex mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The prediction was spot on! We sold our house for almost exactly what the AI predicted. Amazing tool that gave us confidence in our asking price."
              </p>
              <p className="font-medium">— Sarah Johnson</p>
              <p className="text-sm text-gray-500">Home Seller, Chicago</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border">
              <div className="flex mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "As a real estate agent, I use this tool with all my clients. It helps set realistic expectations and speeds up the selling process."
              </p>
              <p className="font-medium">— Michael Robertson</p>
              <p className="text-sm text-gray-500">Real Estate Agent, New York</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border">
              <div className="flex mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "We were about to overpay for our dream home until we used this prediction tool. Saved us thousands of dollars in negotiations."
              </p>
              <p className="font-medium">— David & Lisa Chen</p>
              <p className="text-sm text-gray-500">Home Buyers, Seattle</p>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="bg-blue-600 py-16">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Get an accurate prediction of your house's value in just minutes.
            </p>
            <a href="/predict" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-medium text-lg hover:bg-blue-50 transition-colors">
              Start Free Prediction
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
