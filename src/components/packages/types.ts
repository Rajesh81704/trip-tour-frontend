export interface LocationData {
    city: string;
    state: string;
    destination: string;
}

// export interface IReview {
   
//     rating: number;
//     review: string;
//     user: string; // Using string for ObjectId representation in frontend
//     applaud: number;
//     package: string; // Using string for ObjectId representation in frontend
//     createdAt?: string;
//     updatedAt?: string;
// }


export interface IReview {
    _id: string;
    rating: number;
    comment: string;
    user: {
        _id: string;
        name: string;
        email: string;
    };
    package: {
        _id: string;
        title: string;
        description: string;
    };
    createdAt: string;
    updatedAt: string;
    __v: number;
    id: string;
}
export interface DurationData {
    day: number;
    night: number;
}

export interface ItineraryDay {
    day: number;
    title: string;
    description: string;
    _id?: string;
}

export interface PackageData {
    _id: string;
    title: string;
    location: LocationData;
    duration: DurationData;
    price: number;
    originalPrice: number;
    rating?: number;
    reviews?: string[];
    images: string[];
    features: string[];
    discount: number;
    description: string;
    highlights: string[];
    itinerary: ItineraryDay[];
    inclusions: string[];
    exclusions: string[];
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
}

export interface PackagesResponse {
    success: boolean;
    packages: PackageData[];
}

export interface RelatedPackage {
    id: number;
    title: string;
    location: string;
    price: number;
    rating: number;
    image: string;
} 