"use client";
import { PackageCard } from "@/components/cards/package";
import { Button } from "@/components/ui/button";
import {
  AlertCircle,
  ChevronDown,
  MapPin,
  Calendar,
  Users,
  SlidersHorizontal,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
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
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

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
  )
    .slice()
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      return 0;
    });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-[68px] bg-[#F8FAFC]">
        <div className="text-center">
          <div className="w-14 h-14 rounded-full border-4 border-[#E5E7EB] border-t-[#2563EB] animate-spin mx-auto mb-5" />
          <p className="text-[#6B7280] font-medium">Loading amazing packages...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-[68px] bg-[#F8FAFC]">
        <div className="text-center max-w-sm mx-auto p-10 bg-white rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-[#E5E7EB]">
          <AlertCircle className="h-14 w-14 text-[#EF4444] mx-auto mb-4" />
          <h2 className="text-[20px] font-extrabold text-[#111827] mb-2">Something went wrong</h2>
          <p className="text-[#6B7280] text-sm mb-7">{error}</p>
          <Button
            onClick={() => window.location.reload()}
            className="bg-[#2563EB] hover:bg-[#1D4ED8] rounded-full px-8"
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* ── Hero Banner ── */}
      <section className="relative overflow-visible pt-[68px]">
        {/* Background image — fixed height */}
        <div className="relative h-[300px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Packages hero"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 35%" }}
          />
          {/* Dark overlay — stronger at bottom so search bar sits on white */}
          <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/70" />

          {/* Hero text — left aligned, matching reference exactly */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-[1320px] mx-auto w-full px-6 lg:px-16">
              <h1 className="text-[2.4rem] sm:text-[2.8rem] font-extrabold leading-tight drop-shadow-lg">
                <span className="text-white block">Handpicked Packages</span>
                <span
                  className="block"
                  style={{
                    color: "#F59E0B",
                    fontStyle: "italic",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  For Your Dream Journey
                </span>
              </h1>
              <p className="text-white/85 text-[15px] mt-3 font-medium max-w-[480px] leading-relaxed drop-shadow">
                Curated experiences, unbeatable prices and memories that last a lifetime.
              </p>
            </div>
          </div>
        </div>

        {/* ── Floating Search Bar — overlaps hero bottom ── */}
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 -mt-[26px] relative z-20">
          <div className="bg-white rounded-[14px] shadow-[0_8px_40px_rgba(0,0,0,0.18)] px-4 sm:px-5 py-4">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0">
              {/* Where to */}
              <div className="flex items-center gap-2.5 flex-1 sm:px-4 py-1 cursor-pointer group">
                <MapPin className="h-5 w-5 text-[#2563EB] shrink-0" />
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider leading-none mb-0.5">
                    Where to?
                  </p>
                  <p className="text-[13px] text-[#9CA3AF] truncate">All Destinations</p>
                </div>
                <ChevronDown className="h-3.5 w-3.5 text-[#9CA3AF] ml-auto shrink-0" />
              </div>

              <div className="hidden sm:block w-px h-9 bg-[#E5E7EB] shrink-0" />

              {/* Check In */}
              <div className="flex items-center gap-2.5 flex-1 sm:px-4 py-1 cursor-pointer group">
                <Calendar className="h-5 w-5 text-[#2563EB] shrink-0" />
                <div>
                  <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider leading-none mb-0.5">
                    Check In
                  </p>
                  <p className="text-[13px] text-[#9CA3AF]">Select Date</p>
                </div>
                <ChevronDown className="h-3.5 w-3.5 text-[#9CA3AF] ml-auto shrink-0" />
              </div>

              <div className="hidden sm:block w-px h-9 bg-[#E5E7EB] shrink-0" />

              {/* Check Out */}
              <div className="flex items-center gap-2.5 flex-1 sm:px-4 py-1 cursor-pointer group">
                <Calendar className="h-5 w-5 text-[#2563EB] shrink-0" />
                <div>
                  <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider leading-none mb-0.5">
                    Check Out
                  </p>
                  <p className="text-[13px] text-[#9CA3AF]">Select Date</p>
                </div>
                <ChevronDown className="h-3.5 w-3.5 text-[#9CA3AF] ml-auto shrink-0" />
              </div>

              <div className="hidden sm:block w-px h-9 bg-[#E5E7EB] shrink-0" />

              {/* Travelers */}
              <div className="flex items-center gap-2.5 flex-1 sm:px-4 py-1 cursor-pointer group">
                <Users className="h-5 w-5 text-[#2563EB] shrink-0" />
                <div>
                  <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider leading-none mb-0.5">
                    Travelers
                  </p>
                  <p className="text-[13px] text-[#9CA3AF]">2 Adults, 0 Children</p>
                </div>
                <ChevronDown className="h-3.5 w-3.5 text-[#9CA3AF] ml-auto shrink-0" />
              </div>

              {/* Search Button */}
              <div className="sm:ml-3 shrink-0">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold px-7 py-3 rounded-[10px] text-[14px] shadow-sm hover:shadow-md transition-all duration-200 whitespace-nowrap">
                  Search Packages
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8 py-3.5 text-[12px] text-[#9CA3AF]">
        <span className="hover:text-[#2563EB] cursor-pointer transition-colors">Home</span>
        <span className="mx-2">›</span>
        <span className="text-[#374151] font-semibold">Packages</span>
        {state && (
          <>
            <span className="mx-2">›</span>
            <span className="text-[#2563EB] font-semibold capitalize">{state.replace(/-/g, " ")}</span>
          </>
        )}
      </div>

      {/* Main Content */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col lg:flex-row gap-7">
          {/* Sidebar Filters */}
          <aside className="lg:w-[240px] shrink-0">
            <button
              className="lg:hidden w-full flex items-center justify-between bg-white rounded-[14px] border border-[#E5E7EB] px-4 py-3 mb-3 shadow-sm"
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            >
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 text-[#2563EB]" />
                <span className="font-semibold text-[#111827] text-sm">Filters</span>
              </div>
              <ChevronDown
                className={`h-4 w-4 text-[#9CA3AF] transition-transform ${mobileFilterOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`bg-white rounded-[20px] border border-[#E5E7EB] p-5 lg:sticky lg:top-[140px] shadow-[0_10px_30px_rgba(0,0,0,0.06)] ${
                mobileFilterOpen ? "block" : "hidden lg:block"
              }`}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4 text-[#2563EB]" />
                  <span className="font-bold text-[#111827] text-[15px]">Filter By</span>
                </div>
                <button
                  className="text-[12px] text-[#2563EB] hover:text-[#1D4ED8] font-semibold hover:underline transition-colors"
                  onClick={() => setSelectedCategory("all")}
                >
                  Reset All
                </button>
              </div>

              <div className="mb-6">
                <p className="text-[11px] font-extrabold text-[#374151] uppercase tracking-widest mb-3">
                  Destination
                </p>
                <div className="relative mb-3">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#9CA3AF]" />
                  <input
                    type="text"
                    placeholder="Search destination"
                    className="w-full pl-9 pr-3 py-2.5 text-sm border border-[#E5E7EB] rounded-[12px] bg-[#F8FAFC] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all placeholder-[#9CA3AF]"
                  />
                </div>
                {["India", "Maldives", "Bali", "Thailand", "Dubai"].map((dest) => (
                  <label key={dest} className="flex items-center gap-2.5 py-1.5 cursor-pointer group">
                    <input type="checkbox" className="accent-[#2563EB] w-3.5 h-3.5 rounded" />
                    <span className="text-[13px] text-[#374151] group-hover:text-[#111827] transition-colors">
                      {dest}
                    </span>
                  </label>
                ))}
              </div>

              <div className="h-px bg-[#E5E7EB] mb-5" />

              <div className="mb-6">
                <p className="text-[11px] font-extrabold text-[#374151] uppercase tracking-widest mb-3">
                  Category
                </p>
                {CATEGORIES.map(({ id, label }) => (
                  <label key={id} className="flex items-center gap-2.5 py-1.5 cursor-pointer group">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === id}
                      onChange={() => setSelectedCategory(id)}
                      className="accent-[#2563EB] w-3.5 h-3.5"
                    />
                    <span
                      className={`text-[13px] transition-colors ${
                        selectedCategory === id
                          ? "text-[#2563EB] font-semibold"
                          : "text-[#374151] group-hover:text-[#111827]"
                      }`}
                    >
                      {label}
                    </span>
                  </label>
                ))}
              </div>

              <div className="h-px bg-[#E5E7EB] mb-5" />

              <div>
                <p className="text-[11px] font-extrabold text-[#374151] uppercase tracking-widest mb-3">
                  Trip Duration
                </p>
                {["1 – 3 Days", "4 – 6 Days", "7 – 9 Days", "10+ Days"].map((d) => (
                  <label key={d} className="flex items-center gap-2.5 py-1.5 cursor-pointer group">
                    <input type="checkbox" className="accent-[#2563EB] w-3.5 h-3.5 rounded" />
                    <span className="text-[13px] text-[#374151] group-hover:text-[#111827] transition-colors">
                      {d}
                    </span>
                  </label>
                ))}
              </div>

              <div className="h-px bg-[#E5E7EB] my-5" />

              <button className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold py-3 rounded-[12px] text-sm transition-all duration-200 hover:shadow-md">
                Apply Filters
              </button>
            </div>
          </aside>

          {/* Package Grid */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
              <div>
                <h2 className="text-[24px] font-extrabold text-[#111827]">Travel Packages</h2>
                <p className="text-[13px] text-[#6B7280] mt-0.5">
                  Explore our best-selling travel packages across the world.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[12px] text-[#9CA3AF] whitespace-nowrap">
                  Showing 1–{Math.min(filteredPackages.length, 12)} of {filteredPackages.length} packages
                </span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="text-[13px] border border-[#E5E7EB] rounded-[12px] px-3.5 py-2.5 pr-9 appearance-none bg-white text-[#374151] focus:outline-none focus:border-[#2563EB] transition-colors cursor-pointer shadow-sm"
                  >
                    {SORT_OPTIONS.map(({ id, label }) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#9CA3AF] pointer-events-none" />
                </div>
              </div>
            </div>

            {filteredPackages.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-[20px] border border-[#E5E7EB]">
                <div className="text-5xl mb-4">🗺️</div>
                <h3 className="text-[18px] font-bold text-[#111827] mb-2">No packages found</h3>
                <p className="text-[#6B7280] text-sm mb-6">Try adjusting your filters or search terms.</p>
                <button
                  className="text-[#2563EB] hover:underline text-sm font-semibold"
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

            {filteredPackages.length > 0 && (
              <div className="flex items-center justify-center gap-2 mt-12">
                <button className="w-9 h-9 rounded-full flex items-center justify-center text-[#6B7280] border border-[#E5E7EB] bg-white hover:border-[#2563EB] hover:text-[#2563EB] transition-all duration-200">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                {[1, 2, 3, 4].map((p) => (
                  <button
                    key={p}
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-semibold transition-all duration-200 ${
                      p === 1
                        ? "bg-[#2563EB] text-white shadow-md shadow-blue-200"
                        : "text-[#6B7280] border border-[#E5E7EB] bg-white hover:border-[#2563EB] hover:text-[#2563EB]"
                    }`}
                  >
                    {p}
                  </button>
                ))}
                <button className="w-9 h-9 rounded-full flex items-center justify-center text-[#6B7280] border border-[#E5E7EB] bg-white hover:border-[#2563EB] hover:text-[#2563EB] transition-all duration-200">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Trust Bar */}
        <div className="mt-16 bg-white rounded-[20px] border border-[#E5E7EB] shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-8 grid grid-cols-2 sm:grid-cols-4 gap-7">
          {[
            { icon: "🛡️", title: "Best Price Guarantee", desc: "We ensure you get the best price on all our packages." },
            { icon: "🎧", title: "24/7 Customer Support", desc: "Our travel experts are always here to help you." },
            { icon: "🔒", title: "Safe & Secure Booking", desc: "Your booking is protected with secure payment." },
            { icon: "📋", title: "Flexible Packages", desc: "Customize your trip as per your needs." },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3.5">
              <span className="text-[28px] shrink-0">{icon}</span>
              <div>
                <p className="text-[13px] font-bold text-[#111827]">{title}</p>
                <p className="text-[12px] text-[#9CA3AF] mt-0.5 leading-relaxed">{desc}</p>
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
      <div className="min-h-screen flex items-center justify-center pt-[68px] bg-[#F8FAFC]">
        <div className="text-center">
          <div className="w-14 h-14 rounded-full border-4 border-[#E5E7EB] border-t-[#2563EB] animate-spin mx-auto mb-5" />
          <p className="text-[#6B7280] font-medium">Loading packages...</p>
        </div>
      </div>
    }
  >
    <PackagesContent />
  </Suspense>
);

export default Packages;
