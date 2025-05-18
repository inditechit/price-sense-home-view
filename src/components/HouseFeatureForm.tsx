import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";

const HouseFeatureForm = () => {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardContent className="pt-6">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* House Size */}
            <div className="space-y-2">
              <Label htmlFor="GrLivArea">Above Ground Living Area (sq ft)</Label>
              <Input id="GrLivArea" type="number" placeholder="e.g., 1710" />
            </div>

            {/* Total Basement Area */}
            <div className="space-y-2">
              <Label htmlFor="TotalBsmtSF">Total Basement Area (sq ft)</Label>
              <Input id="TotalBsmtSF" type="number" placeholder="e.g., 856" />
            </div>

            {/* Year Built */}
            <div className="space-y-2">
              <Label htmlFor="YearBuilt">Year Built</Label>
              <Input id="YearBuilt" type="number" placeholder="e.g., 2003" />
            </div>

            {/* Year Remodeled */}
            <div className="space-y-2">
              <Label htmlFor="YearRemodAdd">Year Remodeled</Label>
              <Input id="YearRemodAdd" type="number" placeholder="e.g., 2003" />
            </div>

            {/* Bedrooms */}
            <div className="space-y-2">
              <Label htmlFor="BedroomAbvGr">Bedrooms Above Ground</Label>
              <Select>
                <SelectTrigger id="BedroomAbvGr">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <SelectItem key={num} value={String(num)}>{num}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Bathrooms */}
            <div className="space-y-2">
              <Label htmlFor="FullBath">Full Bathrooms</Label>
              <Select>
                <SelectTrigger id="FullBath">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3].map(num => (
                    <SelectItem key={num} value={String(num)}>{num}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Garage Cars */}
            <div className="space-y-2">
              <Label htmlFor="GarageCars">Garage (Car Capacity)</Label>
              <Select>
                <SelectTrigger id="GarageCars">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {[0, 1, 2, 3].map(num => (
                    <SelectItem key={num} value={String(num)}>{num}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Overall Quality */}
            <div className="space-y-2">
              <Label htmlFor="OverallQual">Overall Quality</Label>
              <Select>
                <SelectTrigger id="OverallQual">
                  <SelectValue placeholder="Rate 1-10" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(q => (
                    <SelectItem key={q} value={String(q)}>{q}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Additional Features */}
          <div className="mt-6">
            <Label className="text-base">Additional Features</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
              {[
                { id: "CentralAir", label: "Central Air" },
                { id: "Fireplace", label: "Fireplace" },
                { id: "Bsmt", label: "Finished Basement" },
                { id: "Garage", label: "Garage" },
                { id: "Deck", label: "Wood Deck" },
                { id: "Porch", label: "Open Porch" },
                { id: "Renovated", label: "Recently Renovated" },
                { id: "PavedDrive", label: "Paved Driveway" },
              ].map(item => (
                <div key={item.id} className="flex items-center space-x-2">
                  <Checkbox id={item.id} />
                  <Label htmlFor={item.id} className="text-sm font-normal">{item.label}</Label>
                </div>
              ))}
            </div>
          </div>

          <Button className="w-full mt-8" size="lg">
            Predict Price
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default HouseFeatureForm;
