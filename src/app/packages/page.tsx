"use client";
import { PackageCard } from "@/components/cards/package";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Packages = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handlePackageClick = (id: number) => {
    router.push(`/packages/${id}`);
  };

  const categories = [
    { id: "all", label: "All Packages" },
    { id: "adventure", label: "Adventure" },
    { id: "cultural", label: "Cultural" },
    { id: "luxury", label: "Luxury" },
    { id: "budget", label: "Budget" },
  ];

  const packages = [
    {
      id: "1",
      title: "Himalayan Adventure Trek",
      location: "Nepal, Himalayas",
      duration: "7 Days / 6 Nights",
      price: 1299,
      originalPrice: 1499,
      rating: 4.9,
      reviews: 127,
      groupSize: "8-12 people",
      category: "adventure",
      image:
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Mountain Views", "Cultural Sites", "Expert Guide"],
    },
    {
      id: "2",
      title: "Rajasthan Royal Heritage",
      location: "Rajasthan, India",
      duration: "10 Days / 9 Nights",
      price: 1899,
      originalPrice: 2199,
      rating: 4.8,
      reviews: 89,
      groupSize: "6-15 people",
      category: "cultural",
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Palace Tours", "Desert Safari", "Local Cuisine"],
    },
    {
      id: "3",
      title: "Maldives Luxury Escape",
      location: "Maldives",
      duration: "5 Days / 4 Nights",
      price: 2999,
      originalPrice: 3499,
      rating: 5.0,
      reviews: 156,
      groupSize: "2-4 people",
      category: "luxury",
      image:
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Overwater Villa", "Spa Treatment", "Private Beach"],
    },
    {
      id: "4",
      title: "Thailand Budget Explorer",
      location: "Thailand",
      duration: "12 Days / 11 Nights",
      price: 899,
      originalPrice: 1099,
      rating: 4.6,
      reviews: 203,
      groupSize: "10-20 people",
      category: "budget",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Street Food Tours", "Island Hopping", "Temple Visits"],
    },
    {
      id: "5",
      title: "African Safari Adventure",
      location: "Kenya & Tanzania",
      duration: "8 Days / 7 Nights",
      price: 2499,
      originalPrice: 2899,
      rating: 4.9,
      reviews: 94,
      groupSize: "6-12 people",
      category: "adventure",
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Big Five Safari", "Masai Culture", "Migration Season"],
    },
    {
      id: "6",
      title: "European Grand Tour",
      location: "Europe Multi-City",
      duration: "14 Days / 13 Nights",
      price: 3299,
      originalPrice: 3799,
      rating: 4.7,
      reviews: 167,
      groupSize: "8-16 people",
      category: "cultural",
      image:
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Historic Cities", "Art Museums", "Local Cuisine"],
    },
  ];

  const filteredPackages =
    selectedCategory === "all"
      ? packages
      : packages.filter((pkg) => pkg.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Travel Packages
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our carefully curated travel experiences designed to
              create unforgettable memories.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white sticky top-16 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="text-gray-700 font-medium">
                Filter by category:
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category.id)}
                  className={
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600"
                      : ""
                  }
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                handlePackageClick={() => handlePackageClick(Number(pkg.id))}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
