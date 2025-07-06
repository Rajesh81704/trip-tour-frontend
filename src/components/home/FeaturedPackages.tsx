"use client";
import { Button } from "@/components/ui/button";
import { packageData } from "@/data";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PackageCard } from "../cards/package";

// const packages = [
//   {
//     id: 1,
//     title: "Best Of Switzerland & Italy With FREE Excursion To Mount Titlis",
//     location: "Europe",
//     destinations: ["Rome", "Florence", "Venice", "Zurich"],
//     duration: "9 days & 8 nights",
//     originalPrice: 265185,
//     price: 143200,
//     savings: 121985,
//     rating: 4.9,
//     reviews: 523,
//     image:
//       "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     trending: true,
//     tag: "FREE Mount Titlis",
//   },

//   {
//     id: 2,
//     title: "Best Of Scandinavia | FREE Amusement Park Tickets",
//     location: "Scandinavia",
//     destinations: ["Copenhagen", "Geilo", "Oslo", "Stockholm"],
//     duration: "9 days & 8 nights",
//     originalPrice: 397030,
//     price: 291000,
//     savings: 96030,
//     rating: 4.8,
//     reviews: 240,
//     image:
//       "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     trending: true,
//     tag: "FREE Park Tickets",
//   },
//   {
//     id: 3,
//     title: "Europe Golden Trip | Amsterdam & Paris Tour",
//     location: "Europe",
//     destinations: ["Amsterdam", "Paris", "Lucerne", "Zurich"],
//     duration: "8 days & 7 nights",
//     originalPrice: 224900,
//     price: 173000,
//     savings: 51900,
//     rating: 4.5,
//     reviews: 32,
//     image:
//       "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     trending: false,
//     tag: "Golden Trip",
//   },

//   {
//     id: 4,
//     title: "Best Of Europe | Paris, Rome & Venice Tour",
//     location: "Europe",
//     destinations: ["Paris", "Rome", "Venice", "Florence"],
//     duration: "10 days & 9 nights",
//     originalPrice: 299900,
//     price: 249000,
//     savings: 50900,
//     rating: 4.7,
//     reviews: 150,
//     image:
//       "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     trending: false,
//     tag: "Best Of Europe",
//   },
//   {
//     id: 5,
//     title: "Discover Japan | Tokyo & Kyoto Tour",
//     location: "Japan",
//     destinations: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
//     duration: "7 days & 6 nights",
//     originalPrice: 180000,
//     price: 150000,
//     savings: 30000,
//     rating: 4.6,
//     reviews: 75,
//     image:
//       "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     trending: false,
//     tag: "Discover Japan",
//   },
// ];

const categories = [
  // Indian States
  { name: "West Bengal", icon: "🌾", active: false },
  { name: "Andhra Pradesh", icon: "🏞️", active: false },
  { name: "Arunachal Pradesh", icon: "🏔️", active: false },
  { name: "Assam", icon: "🍵", active: false },
  { name: "Bihar", icon: "🕌", active: false },
  { name: "Chhattisgarh", icon: "🌳", active: false },
  { name: "Goa", icon: "🏖️", active: false },
  { name: "Gujarat", icon: "🦁", active: false },
  { name: "Haryana", icon: "🏏", active: false },
  { name: "Himachal Pradesh", icon: "❄️", active: false },
  { name: "Jharkhand", icon: "⛏️", active: false },
  { name: "Karnataka", icon: "🏰", active: false },
  { name: "Kerala", icon: "🚣", active: false },
  { name: "Madhya Pradesh", icon: "🐯", active: false },
  { name: "Maharashtra", icon: "🏙️", active: false },
  { name: "Manipur", icon: "💃", active: false },
  { name: "Meghalaya", icon: "☁️", active: false },
  { name: "Mizoram", icon: "🎵", active: false },
  { name: "Nagaland", icon: "🦚", active: false },
  { name: "Odisha", icon: "🛕", active: false },
  { name: "Punjab", icon: "🌾", active: false },
  { name: "Rajasthan", icon: "🏜️", active: false },
  { name: "Sikkim", icon: "🗻", active: false },
  { name: "Tamil Nadu", icon: "🥥", active: false },
  { name: "Telangana", icon: "🎭", active: false },
  { name: "Tripura", icon: "🎋", active: false },
  { name: "Uttar Pradesh", icon: "🕍", active: false },
  { name: "Uttarakhand", icon: "⛰️", active: false },
];

export const FeaturedPackages = () => {
  const [activeCategory, setActiveCategory] = useState("trending");
  // const [activeTab, setActiveTab] = useState("Tours");
  const router = useRouter();

  const handlePackageClick = (id: number) => {
    router.push(`/packages/${id}`);
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Categories */}
        <div className="mb-8 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-4 py-2 px-1 min-w-max">
            <Button
              key="Trending"
              variant="ghost"
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 border-2 whitespace-nowrap ${
                activeCategory === "Trending"
                  ? "bg-orange-500 text-white border-orange-500 shadow-lg"
                  : "bg-white text-blue-600 border-blue-100 hover:bg-blue-50"
              }`}
              onClick={() => setActiveCategory("Trending")}
            >
              <span className="text-lg">🔥</span>
              <span className="font-medium">Trending</span>
            </Button>
            {categories.map((category) => (
              <Button
                key={category.name}
                variant="ghost"
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 border-2 whitespace-nowrap ${
                  activeCategory === category.name
                    ? "bg-orange-500 text-white border-orange-500 shadow-lg"
                    : "bg-white text-blue-600 border-blue-100 hover:bg-blue-50"
                }`}
                onClick={() => setActiveCategory(category.name)}
              >
                <span className="text-lg">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </Button>
            ))}
          </div>
          <style jsx global>{`
            /* Hide scrollbar for Chrome, Safari and Opera */
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }

            /* Hide scrollbar for IE, Edge and Firefox */
            .scrollbar-hide {
              -ms-overflow-x: hidden; /* IE and Edge */
              scrollbar-width: none; /* Firefox */
            }
          `}</style>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md flex">
            <Button
              variant="ghost"
              className="px-8 py-2 rounded-lg font-medium transition-all duration-300  bg-orange-500 text-white shadow-md  hover:bg-orange-600 hover:shadow-lg"
            >
              Trending Tours
            </Button>
          </div>
        </div>

        {/* Package Cards */}
        <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 md:overflow-visible md:pb-0 scrollbar-hide">
          {packageData.map((pkg) => (
            <div key={pkg.id} className="flex-shrink-0 w-[280px] md:w-auto">
              <PackageCard
                pkg={pkg}
                handlePackageClick={() => handlePackageClick(Number(pkg.id))}
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-14">
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white px-10 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300 text-lg tracking-wide"
          >
            Explore All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};
