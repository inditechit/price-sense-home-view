
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Home, MapPin, Maximize2 } from "lucide-react";
import { Property } from "@/types/property";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative">
        <img 
          src={property.imageUrl} 
          alt={property.title}
          className="h-48 w-full object-cover"
        />
        <Badge 
          className="absolute top-3 left-3" 
          variant={property.status === 'For Sale' ? 'default' : 'secondary'}
        >
          {property.status}
        </Badge>
        {property.isNew && (
          <Badge className="absolute top-3 right-3 bg-green-500 hover:bg-green-600">
            New
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold line-clamp-1">{property.title}</h3>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <MapPin size={14} className="mr-1" />
          <span className="line-clamp-1">{property.location}</span>
        </div>
        
        <div className="mt-4 text-xl font-bold text-blue-600">
          ${property.price.toLocaleString()}
        </div>
        
        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Bed size={16} className="mr-1" />
            <span>{property.bedrooms} {property.bedrooms === 1 ? 'Bed' : 'Beds'}</span>
          </div>
          <div className="flex items-center">
            <Bath size={16} className="mr-1" />
            <span>{property.bathrooms} {property.bathrooms === 1 ? 'Bath' : 'Baths'}</span>
          </div>
          <div className="flex items-center">
            <Maximize2 size={16} className="mr-1" />
            <span>{property.squareFeet.toLocaleString()} sq ft</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-between border-t mt-4">
        <div className="flex items-center text-sm text-gray-500">
          <Home size={14} className="mr-1" />
          <span>{property.propertyType}</span>
        </div>
        <a 
          href="#" 
          className="text-sm text-blue-600 hover:underline"
        >
          View Details
        </a>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
