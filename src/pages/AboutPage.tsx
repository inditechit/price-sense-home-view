
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ModelExplanation from '@/components/ModelExplanation';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About Our Prediction Model</h1>
            <p className="text-lg text-gray-600">
              Learn how our AI-powered algorithm accurately predicts house prices.
            </p>
          </div>
          
          <ModelExplanation />
          
          <section className="max-w-3xl mx-auto py-16">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">How accurate is the prediction model?</h3>
                <p className="text-gray-600">
                  Our model has achieved a 92-98% accuracy rate when compared to actual selling prices. The accuracy varies by location and market conditions, with higher accuracy in areas with more frequent sales data.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">What data sources do you use?</h3>
                <p className="text-gray-600">
                  We aggregate data from multiple sources including public records, MLS listings, tax assessments, and proprietary datasets. All data is anonymized and processed in compliance with privacy regulations.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">How often is the model updated?</h3>
                <p className="text-gray-600">
                  Our model is retrained monthly with the latest market data to ensure predictions reflect current conditions. We also perform quarterly deep reviews of our algorithms to improve accuracy.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Can I use this for commercial purposes?</h3>
                <p className="text-gray-600">
                  Yes, we offer API access and enterprise solutions for real estate professionals, banks, and other businesses. Contact our sales team for more information about commercial licensing.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Does the model account for market fluctuations?</h3>
                <p className="text-gray-600">
                  Yes, our model incorporates time-series data and economic indicators to account for market trends and seasonal fluctuations in housing prices.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
