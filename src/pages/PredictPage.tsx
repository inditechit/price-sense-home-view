
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HouseFeatureForm from '@/components/HouseFeatureForm';
import PriceResult from '@/components/PriceResult';

const PredictPage = () => {
  const [showResults, setShowResults] = useState(false);

  // We'd normally handle this with form submission, but for UI demo purposes:
  setTimeout(() => {
    setShowResults(true);
  }, 2000);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Predict Your House Price</h1>
            <p className="text-lg text-gray-600">
              Fill in the details below to get an accurate prediction of your property's value.
            </p>
          </div>
          
          <div className="mb-16">
            <HouseFeatureForm />
          </div>
          
          {showResults && (
            <div className="mt-16">
              <div className="max-w-3xl mx-auto text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">Your Prediction Results</h2>
                <p className="text-gray-600">
                  Based on your property details and our machine learning model, here's the estimated value:
                </p>
              </div>
              
              <PriceResult />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PredictPage;
