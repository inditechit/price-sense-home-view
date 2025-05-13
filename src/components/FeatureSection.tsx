
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Home, MapPin, ArrowRight, Mail } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: <LineChart className="h-8 w-8 text-blue-600" />,
      title: "Data-Driven Predictions",
      description: "Our machine learning algorithms analyze thousands of property data points to provide accurate price estimates.",
    },
    {
      icon: <Home className="h-8 w-8 text-blue-600" />,
      title: "Comprehensive Property Analysis",
      description: "We consider size, location, amenities, and more to give you the most precise valuation possible.",
    },
    {
      icon: <MapPin className="h-8 w-8 text-blue-600" />,
      title: "Location Intelligence",
      description: "Our model factors in neighborhood trends, proximity to amenities, and regional market conditions.",
    },
    {
      icon: <Mail className="h-8 w-8 text-blue-600" />,
      title: "Personalized Reports",
      description: "Get detailed analysis reports with comparisons to similar properties in your area.",
    },
  ];

  return (
    <section className="container px-4 md:px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Use Our House Price Predictor?</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our advanced machine learning model provides accurate and reliable house price predictions based on comprehensive data analysis.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="border-2 border-gray-100 hover:border-blue-100 transition-colors">
            <CardContent className="pt-6">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a href="/predict" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
          Get started with your prediction
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default FeatureSection;
