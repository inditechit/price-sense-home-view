
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const PriceResult = () => {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardContent className="pt-6">
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-500">Estimated Price</h3>
            <div className="mt-2 text-5xl font-bold text-blue-600">$875,000</div>
            <p className="mt-2 text-sm text-gray-500">Based on similar properties in this area</p>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Confidence Level</span>
                <span className="text-sm font-medium">92%</span>
              </div>
              <Progress value={92} className="h-2" />
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-500">Low Estimate</div>
                <div className="mt-1 font-semibold">$830,000</div>
              </div>
              <div className="text-center p-4 bg-blue-50 border border-blue-100 rounded-lg">
                <div className="text-sm text-blue-700">Prediction</div>
                <div className="mt-1 font-semibold text-blue-700">$875,000</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-500">High Estimate</div>
                <div className="mt-1 font-semibold">$920,000</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Comparison with Local Market</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-500">Local Average</div>
                <div className="font-medium">$892,500</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Price per Sq Ft</div>
                <div className="font-medium">$437</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Market Trend</div>
                <div className="font-medium text-green-600">+2.3% (3mo)</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Similar Properties</div>
                <div className="font-medium">28</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PriceResult;
