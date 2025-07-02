import type { PackageData, RelatedPackage } from "./types";

// Mock data - in real app, this would come from API
export const packageData: PackageData = {
    id: 1,
    title: "Magical Bali Adventure",
    location: "Bali, Indonesia",
    duration: "7 Days 6 Nights",
    price: 1299,
    originalPrice: 1599,
    rating: 4.8,
    reviews: 324,
    images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
    ],
    features: ["Beach Resort", "Cultural Tours", "Spa Included"],
    discount: "20% OFF",
    description:
        "Experience the magic of Bali with our carefully curated 7-day adventure. From pristine beaches to ancient temples, this package offers the perfect blend of relaxation and cultural exploration.",
    highlights: [
        "Stay in luxury beachfront resort",
        "Visit iconic temples and rice terraces",
        "Traditional Balinese spa treatments",
        "Sunset dinner cruise",
        "Professional local guide",
        "All transfers included",
    ],
    itinerary: [
        {
            day: 1,
            title: "Arrival in Bali",
            description:
                "Airport pickup and check-in to beachfront resort. Welcome dinner with traditional Balinese dance performance.",
        },
        {
            day: 2,
            title: "Ubud Cultural Tour",
            description:
                "Visit Monkey Forest Sanctuary, Tegallalang Rice Terraces, and traditional art villages. Lunch at local restaurant.",
        },
        {
            day: 3,
            title: "Temple Hopping",
            description:
                "Explore Tanah Lot Temple and Uluwatu Temple. Watch the famous Kecak fire dance at sunset.",
        },
        {
            day: 4,
            title: "Beach Day & Spa",
            description:
                "Relax at Seminyak Beach. Afternoon traditional Balinese spa treatment at the resort.",
        },
        {
            day: 5,
            title: "Water Sports Adventure",
            description:
                "Snorkeling at Blue Lagoon, water sports activities, and beach BBQ lunch.",
        },
        {
            day: 6,
            title: "Volcano Sunrise Trek",
            description:
                "Early morning trek to Mount Batur for sunrise viewing. Hot springs relaxation afterward.",
        },
        {
            day: 7,
            title: "Departure",
            description:
                "Last-minute shopping at local markets. Airport transfer for departure.",
        },
    ],
    inclusions: [
        "6 nights accommodation in 4-star beachfront resort",
        "Daily breakfast and 3 dinners",
        "All transfers and transportation",
        "Professional English-speaking guide",
        "All entrance fees and activities mentioned",
        "Traditional spa treatment",
        "Airport pickup and drop-off",
    ],
    exclusions: [
        "International flights",
        "Travel insurance",
        "Personal expenses and shopping",
        "Alcoholic beverages",
        "Tips and gratuities",
        "Visa fees (if applicable)",
    ],
};

export const relatedPackages: RelatedPackage[] = [
    {
        id: 2,
        title: "Thailand Explorer",
        location: "Thailand",
        price: 999,
        rating: 4.6,
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        id: 3,
        title: "Maldives Paradise",
        location: "Maldives",
        price: 1899,
        rating: 4.7,
        image: "/placeholder.svg?height=200&width=300",
    },
]; 