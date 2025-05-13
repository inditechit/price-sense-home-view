
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
            <div className="space-y-2">
              <Label htmlFor="size">House Size (sq ft)</Label>
              <Input id="size" type="number" placeholder="e.g., 2000" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="year">Year Built</Label>
              <Input id="year" type="number" placeholder="e.g., 1990" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="bedrooms">Bedrooms</Label>
              <Select>
                <SelectTrigger id="bedrooms">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="6+">6+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="bathrooms">Bathrooms</Label>
              <Select>
                <SelectTrigger id="bathrooms">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="1.5">1.5</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="2.5">2.5</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="3.5">3.5</SelectItem>
                  <SelectItem value="4+">4+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Select>
                <SelectTrigger id="location">
                  <SelectValue placeholder="Select city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="san-francisco">San Francisco, CA</SelectItem>
                  <SelectItem value="new-york">New York, NY</SelectItem>
                  <SelectItem value="los-angeles">Los Angeles, CA</SelectItem>
                  <SelectItem value="chicago">Chicago, IL</SelectItem>
                  <SelectItem value="seattle">Seattle, WA</SelectItem>
                  <SelectItem value="austin">Austin, TX</SelectItem>
                  <SelectItem value="miami">Miami, FL</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="neighborhood">Neighborhood</Label>
              <Select>
                <SelectTrigger id="neighborhood">
                  <SelectValue placeholder="Select neighborhood" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="downtown">Downtown</SelectItem>
                  <SelectItem value="suburban">Suburban</SelectItem>
                  <SelectItem value="urban">Urban</SelectItem>
                  <SelectItem value="rural">Rural</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="mt-6">
            <Label className="text-base">Additional Features</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="garage" />
                <Label htmlFor="garage" className="text-sm font-normal">Garage</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="garden" />
                <Label htmlFor="garden" className="text-sm font-normal">Garden</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="balcony" />
                <Label htmlFor="balcony" className="text-sm font-normal">Balcony</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="pool" />
                <Label htmlFor="pool" className="text-sm font-normal">Pool</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="ac" />
                <Label htmlFor="ac" className="text-sm font-normal">Air Conditioning</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="fireplace" />
                <Label htmlFor="fireplace" className="text-sm font-normal">Fireplace</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="basement" />
                <Label htmlFor="basement" className="text-sm font-normal">Basement</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="renovated" />
                <Label htmlFor="renovated" className="text-sm font-normal">Renovated</Label>
              </div>
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
