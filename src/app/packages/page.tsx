"use client";
import { PackageCard } from "@/components/cards/package";
import { Button } from "@/components/ui/button";
import { Filter, Loader2, AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PackageData } from "@/components/packages/types";
import api from "@/lib/api";

const Packages = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [packageData, setPackageData] = useState<PackageData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await api.get<{
          success: boolean;
          packages: PackageData[];
        }>("/packages");
        if (response.data.success && response.data.packages) {
          setPackageData(response.data.packages);
        } else {
          setPackageData([]);
        }
      } catch (error) {
        console.error("Error fetching package data:", error);
        setError("Failed to load packages. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePackageClick = (id: string) => {
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
          <Loader2 className="h-12 w-12 animate-spin mx-auto mb-6 text-blue-600" />
          <p className="text-gray-700 font-medium text-lg">
            Loading amazing destinations...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8 bg-white rounded-2xl shadow-lg">
          <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Error Loading Packages
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">{error}</p>
          <Button
            onClick={() => window.location.reload()}
            className="bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-lg px-8 py-3 rounded-xl"
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
              Travel Packages
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our carefully curated travel experiences designed to
              create unforgettable memories that last a lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white/80 backdrop-blur-lg sticky top-16 z-40 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center space-x-3">
              <Filter className="h-6 w-6 text-blue-600" />
              <span className="text-gray-800 font-semibold text-lg">
                Filter by category:
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category.id)}
                  className={`
                    px-6 py-2 rounded-xl text-base font-medium transition-all duration-200
                    ${
                      selectedCategory === category.id
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-200 transform hover:scale-105"
                        : "hover:border-blue-400 hover:text-blue-600"
                    }
                  `}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPackages.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
              <p className="text-gray-600 text-xl font-medium">
                {selectedCategory === "all"
                  ? "No packages available at the moment."
                  : `No packages found in the "${selectedCategory}" category.`}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredPackages.map((pkg) => (
                <div
                  key={pkg._id}
                  className="transform hover:scale-105 transition-transform duration-200"
                >
                  <PackageCard
                    pkg={pkg as PackageData}
                    handlePackageClick={() => handlePackageClick(pkg._id)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Packages;
