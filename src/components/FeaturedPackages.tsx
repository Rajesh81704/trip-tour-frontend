"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Heart, Phone } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const packages = [
  {
    id: 1,
    title: "Best Of Switzerland & Italy With FREE Excursion To Mount Titlis",
    location: "Europe",
    destinations: ["Rome", "Florence", "Venice", "Zurich"],
    duration: "9 days & 8 nights",
    originalPrice: 265185,
    price: 143200,
    savings: 121985,
    rating: 4.9,
    reviews: 523,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    trending: true,
    tag: "FREE Mount Titlis",
  },
  {
    id: 2,
    title: "Best Of Scandinavia | FREE Amusement Park Tickets",
    location: "Scandinavia",
    destinations: ["Copenhagen", "Geilo", "Oslo", "Stockholm"],
    duration: "9 days & 8 nights",
    originalPrice: 397030,
    price: 291000,
    savings: 96030,
    rating: 4.8,
    reviews: 240,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    trending: true,
    tag: "FREE Park Tickets",
  },
  {
    id: 3,
    title: "Europe Golden Trip | Amsterdam & Paris Tour",
    location: "Europe",
    destinations: ["Amsterdam", "Paris", "Lucerne", "Zurich"],
    duration: "8 days & 7 nights",
    originalPrice: 224900,
    price: 173000,
    savings: 51900,
    rating: 4.5,
    reviews: 32,
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    trending: false,
    tag: "Golden Trip",
  },
];

const categories = [
  { name: "Explore", icon: "🔥", active: true },
  { name: "Europe", icon: "🏛️", active: false },
  { name: "Maldives", icon: "🏝️", active: false },
  { name: "Ladakh", icon: "🏔️", active: false },
  { name: "Singapore", icon: "🌆", active: false },
  { name: "USA", icon: "🗽", active: false },
  { name: "Thailand", icon: "🛕", active: false },
  { name: "Bali", icon: "🏝️", active: false },
];

export const FeaturedPackages = () => {
  const [activeCategory, setActiveCategory] = useState("Explore");
  const [activeTab, setActiveTab] = useState("Tours");
  const router = useRouter();

  const handlePackageClick = (id: number) => {
    router.push(`/package/${id}`);
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="ghost"
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 border-2 ${
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

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md flex">
            <Button
              variant="ghost"
              className={`px-8 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "Tours"
                  ? "bg-orange-500 text-white shadow-md"
                  : "text-blue-600 hover:text-orange-500"
              }`}
              onClick={() => setActiveTab("Tours")}
            >
              Tours
            </Button>
            <Button
              variant="ghost"
              className={`px-8 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "Activities"
                  ? "bg-orange-500 text-white shadow-md"
                  : "text-blue-600 hover:text-orange-500"
              }`}
              onClick={() => setActiveTab("Activities")}
            >
              Activities
            </Button>
          </div>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className="group relative overflow-visible bg-white border-0 shadow-xl rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
              onClick={() => handlePackageClick(pkg.id)}
            >
              {/* Image Section */}
              <div className="relative h-52 rounded-t-3xl overflow-hidden">
                <Image
                  width={100}
                  height={100}
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                {/* Trending Badge */}
                {pkg.trending && (
                  <Badge className="absolute top-5 left-5 bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg z-10">
                    <span className="mr-1">🔥</span> Trending
                  </Badge>
                )}
                {/* Favorite Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-5 right-5 bg-white/80 hover:bg-white/90 rounded-full shadow-lg border border-white/60 z-10 transition-all"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Heart className="h-5 w-5 text-orange-500" />
                </Button>
                {/* Tag Badge */}
                <Badge className="absolute bottom-5 left-5 bg-blue-600/90 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-10">
                  {pkg.tag}
                </Badge>
              </div>

              {/* Card Content */}
              <CardContent className="p-7 pt-5">
                {/* Title & Rating */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
                    <span className="font-semibold text-blue-900 text-sm">
                      {pkg.rating}
                    </span>
                    <span className="text-gray-400 text-xs">
                      ({pkg.reviews})
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-blue-500">
                    <Clock className="h-4 w-4" />
                    <span className="text-xs font-medium">{pkg.duration}</span>
                  </div>
                </div>
                <h3 className="font-extrabold text-lg md:text-xl text-black">
                  {pkg.title}
                </h3>
                {/* Destinations */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-block bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-xs font-semibold">
                    {pkg.destinations.length}D
                  </span>
                  <span className="text-gray-300">|</span>
                  <div className="flex flex-wrap gap-1">
                    {pkg.destinations.map((dest, idx) => (
                      <span
                        key={idx}
                        className="text-xs text-blue-700 font-medium bg-blue-100/60 px-2 py-0.5 rounded"
                      >
                        {dest}

                        {/* {idx < pkg.destinations.length - 1 && (
                          <span className="text-blue-300 ml-1">•</span>
                        )} */}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Price Section */}
                <div className="mb-5">
                  <div className="flex items-end gap-2">
                    <span className="text-2xl font-extrabold text-black">
                      ₹{pkg.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      ₹{pkg.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-xs text-green-600 font-semibold mt-1">
                    Save ₹{pkg.savings.toLocaleString()}
                  </div>
                </div>
                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1 border-orange-200 text-orange-500 hover:bg-orange-50 font-semibold"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call
                  </Button>
                  <Button
                    className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold shadow"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Request Callback
                  </Button>
                </div>
              </CardContent>
            </Card>
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
