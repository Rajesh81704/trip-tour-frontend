"use client";
import { PackageCard } from "@/components/cards/package";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { packageData } from "@/data";
import { PackageData } from "@/components/packages/types";

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

  const filteredPackages =
    selectedCategory === "all"
      ? packageData
      : packageData.filter((pkg) => pkg.features.includes(selectedCategory));

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
          <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8">
            <div className="flex gap-4 overflow-x-auto pb-4 md:overflow-visible md:pb-0 scrollbar-hide">
              {filteredPackages.map((pkg) => (
                <div key={pkg.id} className="flex-shrink-0 w-[280px] md:w-auto">
                  <PackageCard
                    pkg={pkg as PackageData}
                    handlePackageClick={() =>
                      handlePackageClick(Number(pkg.id))
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
