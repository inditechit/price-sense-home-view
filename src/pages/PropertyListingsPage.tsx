
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import PropertyCard from "@/components/PropertyCard";
import { propertyListings } from "@/data/propertyListings";

const PropertyListingsPage = () => {
  const [priceRange, setPriceRange] = useState([200000, 800000]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Property Listings</h1>
            <p className="text-lg text-gray-600">
              Browse our collection of available properties and find your dream home.
            </p>
          </div>
          
          {/* Filter Section */}
          <div className="bg-white border rounded-lg p-6 mb-8">
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Location</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="All Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="san-francisco">San Francisco</SelectItem>
                    <SelectItem value="new-york">New York</SelectItem>
                    <SelectItem value="chicago">Chicago</SelectItem>
                    <SelectItem value="los-angeles">Los Angeles</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Property Type</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="condo">Condo</SelectItem>
                    <SelectItem value="townhouse">Townhouse</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Bedrooms</label>
                <Select defaultValue="any">
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                    <SelectItem value="5">5+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Bathrooms</label>
                <Select defaultValue="any">
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="mt-6">
              <label className="text-sm font-medium mb-4 block">
                Price Range: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
              </label>
              <Slider
                defaultValue={[200000, 800000]}
                max={2000000}
                min={100000}
                step={50000}
                value={priceRange}
                onValueChange={setPriceRange}
                className="my-4"
              />
            </div>
            
            <div className="flex justify-between mt-6">
              <Button variant="outline">Reset Filters</Button>
              <Button>Apply Filters</Button>
            </div>
          </div>
          
          {/* Property Listings */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {propertyListings.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex" aria-label="Pagination">
              <Button variant="outline" className="mr-2">&laquo; Previous</Button>
              <Button variant="outline" className="mx-1">1</Button>
              <Button variant="outline" className="mx-1 bg-blue-50">2</Button>
              <Button variant="outline" className="mx-1">3</Button>
              <Button variant="outline" className="ml-2">Next &raquo;</Button>
            </nav>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PropertyListingsPage;
