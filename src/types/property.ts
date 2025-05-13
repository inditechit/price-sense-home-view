
export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  propertyType: string;
  status: 'For Sale' | 'For Rent' | 'Sold';
  isNew: boolean;
  imageUrl: string;
  description: string;
  yearBuilt: number;
  features: string[];
}
