"use client";
import { PackageCard } from "@/components/cards/package";
import { Button } from "@/components/ui/button";
import { Loader2, AlertCircle, ChevronDown, MapPin, Calendar, Users, SlidersHorizontal } from "lucide-react";
import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { PackageData } from "@/components/packages/types";
import api from "@/lib/api";

const CATEGORIES = [
  { id: "all", label: "All Packages" },
  { id: "adventure", label: "Adventure" },
  { id: "cultural", label: "Cultural" },
  { id: "luxury", label: "Luxury" },
  { id: "budget", label: "Budget" },
  { id: "honeymoon", label: "Honeymoon" },
  { id: "family", label: "Family" },
];

const SORT_OPTIONS = [
  { id: "popular", label: "Sort by: Popular" },
  { id: "price-low", label: "Price: Low to High" },
  { id: "price-high", label: "Price: High to Low" },
];

const PackagesContent = () => {
  const searchParams = useSearchParams();
  const state = searchParams.get("state");
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [packageData, setPackageData] = useState<PackageData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        if (state) {
          const stateRes = await api.get<{ success: boolean; packages: PackageData[] }>(
            `/packages?state=${state}`
          );
          if (stateRes.data.success && stateRes.data.packages?.length > 0) {
            setPackageData(stateRes.data.packages);
            return;
          }
          const searchRes = await api.get<{ success: boolean; packages: PackageData[] }>(
            `/packages?search=${state}`
          );
          setPackageData(searchRes.data.packages || []);
        } else {
          const res = await api.get<{ success: boolean; packages: PackageData[] }>("/packages");
          setPackageData(res.data.packages || []);
        }
      } catch {
        setError("Failed to load packages. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [state]);

  const handlePackageClick = (id: string) => router.push(`/packages/${id}`);

  const filteredPackages = (
    selectedCategory === "all"
      ? packageData
      : packageData.filter((pkg) =>
          pkg.features?.some((f) => f.toLowerCase().includes(selectedCategory))
        )
  ).slice().sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    return 0;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16 bg-gray-50">
        <div className="text-center">
          <Loader2 className="h-10 w-10 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600 font-medium">Loading amazing packages...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16 bg-gray-50">
        <div className="text-center max-w-sm mx-auto p-8 bg-white rounded-2xl shadow">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">Something went wrong</h2>
          <p className="text-gray-500 mb-6">{error}</p>
          <Button onClick={() => window.location.reload()} className="bg-blue-600 hover:bg-blue-700">
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero banner */}
      <section className="relative h-64 overflow-hidden pt-16">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Packages hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/60 flex flex-col justify-center px-6 lg:px-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
            Handpicked Packages<br />
            <span className="text-orange-400">For Your Dream Journey</span>
          </h1>
          <p className="text-white/80 text-sm max-w-lg">
            Curated experiences, unbeatable prices and memories that last a lifetime.
          </p>
        </div>
      </section>

      {/* Search bar */}
      <div className="bg-white shadow-sm border-b sticky top-16 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-2 min-w-36">
              <MapPin className="h-4 w-4 text-blue-600 shrink-0" />
              <span className="truncate">All Destinations</span>
              <ChevronDown className="h-3 w-3 ml-auto shrink-0" />
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-2">
              <Calendar className="h-4 w-4 text-blue-600 shrink-0" />
              <span>Check In</span>
              <ChevronDown className="h-3 w-3 ml-1 shrink-0" />
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-2">
              <Calendar className="h-4 w-4 text-blue-600 shrink-0" />
              <span>Check Out</span>
              <ChevronDown className="h-3 w-3 ml-1 shrink-0" />
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-2">
              <Users className="h-4 w-4 text-blue-600 shrink-0" />
              <span>2 Adults, 0 Children</span>
              <ChevronDown className="h-3 w-3 ml-1 shrink-0" />
            </div>
            <button className="ml-auto flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors">
              Search Packages
            </button>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-gray-500">
        <span>Home</span> <span className="mx-1">›</span>{" "}
        <span className="text-gray-700 font-medium">Packages</span>
        {state && (
          <>
            <span className="mx-1">›</span>
            <span className="text-blue-600 font-medium capitalize">{state.replace(/-/g, " ")}</span>
          </>
        )}
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar filters */}
          <aside className="lg:w-56 shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-4 sticky top-40">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4 text-gray-600" />
                  <span className="font-semibold text-gray-800 text-sm">Filter By</span>
                </div>
                <button
                  className="text-xs text-blue-600 hover:underline"
                  onClick={() => setSelectedCategory("all")}
                >
                  Reset All
                </button>
              </div>

              {/* Category */}
              <div className="mb-5">
                <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">
                  Category
                </p>
                {CATEGORIES.map(({ id, label }) => (
                  <label key={id} className="flex items-center gap-2 py-1 cursor-pointer group">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === id}
                      onChange={() => setSelectedCategory(id)}
                      className="accent-blue-600"
                    />
                    <span
                      className={`text-sm transition-colors ${
                        selectedCategory === id ? "text-blue-600 font-medium" : "text-gray-600 group-hover:text-gray-900"
                      }`}
                    >
                      {label}
                    </span>
                  </label>
                ))}
              </div>

              {/* Trip Duration */}
              <div>
                <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">
                  Trip Duration
                </p>
                {["1 – 3 Days", "4 – 6 Days", "7 – 9 Days", "10+ Days"].map((d) => (
                  <label key={d} className="flex items-center gap-2 py-1 cursor-pointer">
                    <input type="checkbox" className="accent-blue-600" />
                    <span className="text-sm text-gray-600 hover:text-gray-900">{d}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Package grid */}
          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Travel Packages</h2>
                <p className="text-sm text-gray-500 mt-0.5">
                  Explore our best-selling travel packages across the world.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-500 whitespace-nowrap">
                  Showing 1–{Math.min(filteredPackages.length, 12)} of {filteredPackages.length} packages
                </span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="text-sm border border-gray-200 rounded-lg px-3 py-2 pr-8 appearance-none bg-white text-gray-700 focus:outline-none focus:border-blue-400"
                  >
                    {SORT_OPTIONS.map(({ id, label }) => (
                      <option key={id} value={id}>{label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {filteredPackages.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-xl">
                <p className="text-gray-500 text-base">No packages found.</p>
                <button
                  className="mt-4 text-blue-600 hover:underline text-sm font-medium"
                  onClick={() => setSelectedCategory("all")}
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredPackages.map((pkg) => (
                  <PackageCard
                    key={pkg._id}
                    pkg={pkg}
                    handlePackageClick={() => handlePackageClick(pkg._id)}
                  />
                ))}
              </div>
            )}

            {/* Pagination placeholder */}
            {filteredPackages.length > 0 && (
              <div className="flex items-center justify-center gap-2 mt-10">
                <button className="w-8 h-8 rounded-full flex items-center justify-center text-sm bg-blue-600 text-white font-semibold shadow-sm">
                  1
                </button>
                {[2, 3, 4].map((p) => (
                  <button
                    key={p}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    {p}
                  </button>
                ))}
                <button className="w-8 h-8 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors">
                  <ChevronDown className="h-4 w-4 -rotate-90" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-gray-200">
          {[
            { icon: "🛡️", title: "Best Price Guarantee", desc: "We ensure you get the best price on all our packages." },
            { icon: "🎧", title: "24/7 Customer Support", desc: "Our travel experts are always here to help you." },
            { icon: "🔒", title: "Safe & Secure Booking", desc: "Your booking is protected with secure payment." },
            { icon: "📋", title: "Flexible Packages", desc: "Customize your trip as per your needs." },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3">
              <span className="text-2xl shrink-0">{icon}</span>
              <div>
                <p className="text-sm font-semibold text-gray-800">{title}</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Packages = () => (
  <Suspense
    fallback={
      <div className="min-h-screen flex items-center justify-center pt-16 bg-gray-50">
        <div className="text-center">
          <Loader2 className="h-10 w-10 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600 font-medium">Loading packages...</p>
        </div>
      </div>
    }
  >
    <PackagesContent />
  </Suspense>
);

export default Packages;
