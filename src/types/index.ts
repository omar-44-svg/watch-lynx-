export interface Watch {
  id: string;
  brand: string;
  model: string;
  reference: string;
  price: number;
  originalPrice?: number;
  condition: 'New' | 'Like New' | 'Excellent' | 'Good' | 'Fair';
  year: number;
  description: string;
  images: string[];
  features: string[];
  specifications: Record<string, string>;
  seller: {
    id: string;
    name: string;
    type: 'Individual' | 'Dealer';
    rating: number;
    verified: boolean;
    joinedDate: string;
  };
  listed: string;
  location: string;
  availability: 'In Stock' | 'Coming Soon' | 'Sold';
}

export interface Seller {
  id: string;
  name: string;
  type: 'Individual' | 'Dealer';
  rating: number;
  verified: boolean;
  sales: number;
  joinedDate: string;
  description?: string;
  image?: string;
  location: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
}