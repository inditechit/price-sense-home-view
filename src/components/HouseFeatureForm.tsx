import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  onSubmit: (data: any) => void;
  setShowResults?:any;
}

const HouseFeatureForm = ({ onSubmit,setShowResults }: Props) => {
  const [GrLivArea, setGrLivArea] = useState('');
  const [TotalBsmtSF, setTotalBsmtSF] = useState('');
  const [YearBuilt, setYearBuilt] = useState('');
  const [YearRemodAdd, setYearRemodAdd] = useState('');
  const [BedroomAbvGr, setBedroomAbvGr] = useState('');
  const [FullBath, setFullBath] = useState('');
  const [GarageCars, setGarageCars] = useState('');
  const [OverallQual, setOverallQual] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const filledData = {
      GrLivArea,
      TotalBsmtSF,
      YearBuilt,
      YearRemodAdd,
      BedroomAbvGr,
      FullBath,
      GarageCars,
      OverallQual,
    };
    setShowResults(true)
    onSubmit(filledData); // Send to parent
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* House Size */}
            <div className="space-y-2">
              <Label htmlFor="GrLivArea">Above Ground Living Area (sq ft)</Label>
              <Input id="GrLivArea" type="number" value={GrLivArea} onChange={(e) => setGrLivArea(e.target.value)} placeholder="e.g., 1710" />
            </div>

            {/* Total Basement Area */}
            <div className="space-y-2">
              <Label htmlFor="TotalBsmtSF">Total Basement Area (sq ft)</Label>
              <Input id="TotalBsmtSF" type="number" value={TotalBsmtSF} onChange={(e) => setTotalBsmtSF(e.target.value)} placeholder="e.g., 856" />
            </div>

            {/* Year Built */}
            <div className="space-y-2">
              <Label htmlFor="YearBuilt">Year Built</Label>
              <Input id="YearBuilt" type="number" value={YearBuilt} onChange={(e) => setYearBuilt(e.target.value)} placeholder="e.g., 2003" />
            </div>

            {/* Year Remodeled */}
            <div className="space-y-2">
              <Label htmlFor="YearRemodAdd">Year Remodeled</Label>
              <Input id="YearRemodAdd" type="number" value={YearRemodAdd} onChange={(e) => setYearRemodAdd(e.target.value)} placeholder="e.g., 2003" />
            </div>

            {/* Bedrooms */}
            <div className="space-y-2">
              <Label htmlFor="BedroomAbvGr">Bedrooms Above Ground</Label>
              <Select value={BedroomAbvGr} onValueChange={setBedroomAbvGr}>
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
              <Select value={FullBath} onValueChange={setFullBath}>
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
              <Select value={GarageCars} onValueChange={setGarageCars}>
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
              <Select value={OverallQual} onValueChange={setOverallQual}>
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

          <Button type="submit" className="w-full mt-8" size="lg">
            Predict Price
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default HouseFeatureForm;
