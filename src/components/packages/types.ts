export interface ItineraryDay {
    day: number;
    title: string;
    description: string;
}

export interface PackageData {
    id: number;
    title: string;
    location: string;
    duration: string;
    price: number;
    originalPrice: number;
    rating: number;
    reviews: number;
    images: string[];
    features: string[];
    discount: string;
    description: string;
    highlights: string[];
    itinerary: ItineraryDay[];
    inclusions: string[];
    exclusions: string[];
}

export interface RelatedPackage {
    id: number;
    title: string;
    location: string;
    price: number;
    rating: number;
    image: string;
} 