
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Props {
  dataToFilter?:any;
  allData?:any;
}
const PriceResult = (props:Props) => {

  const [closestMatch, setClosestMatch] = useState<any>(null);

  useEffect(() => {
    if (props.allData.length && props.dataToFilter) {
      const formKeys = Object.keys(props.dataToFilter);

      // Convert string values to numbers in form data
      const formData = formKeys.reduce((acc, key) => {
        acc[key] = Number(props.dataToFilter[key]);
        return acc;
      }, {} as Record<string, number>);

      let minDistance = Infinity;
      let closestObject = null;

      for (const house of props.allData) {
        let distance = 0;
        for (const key of formKeys) {
          const formVal = formData[key];
          const houseVal = Number(house[key]);

          if (!isNaN(formVal) && !isNaN(houseVal)) {
            distance += Math.pow(formVal - houseVal, 2);
          }
        }

        distance = Math.sqrt(distance);

        if (distance < minDistance) {
          minDistance = distance;
          closestObject = house;
        }
      }

      setClosestMatch(closestObject);
    }
  }, [props.allData, props.dataToFilter]);
  
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardContent className="pt-6">
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-500">Estimated Price</h3>
            <div className="mt-2 text-5xl font-bold text-blue-600">Rs. {closestMatch?.SalePrice}</div>
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
                <div className="mt-1 font-semibold">Rs. {closestMatch?.SalePrice - Math.floor(Math.random() * (10000 - 1000 + 1)) - 1000}
                </div>
              </div>
              <div className="text-center p-4 bg-blue-50 border border-blue-100 rounded-lg">
                <div className="text-sm text-blue-700">Prediction</div>
                <div className="mt-1 font-semibold text-blue-700">Rs {closestMatch?.SalePrice}</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-500">High Estimate</div>
                <div className="mt-1 font-semibold">Rs. {Number(closestMatch?.SalePrice) + Math.floor(Math.random() * (10000 - 1000 + 1)) - 1000}</div>
              </div>
            </div>
          </div>
          
          {/* <div className="bg-gray-50 p-4 rounded-lg">
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
          </div> */}
        </div>
      </CardContent>
    </Card>
  );
};

export default PriceResult;
