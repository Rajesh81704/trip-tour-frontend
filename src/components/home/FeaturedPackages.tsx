"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PackageCard } from "../cards/package";
import api from "@/lib/api";
import { PackageData } from "../packages";
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight, ChevronRight, MapPin, Send } from "lucide-react";

const trendingDestinations = [
  {
    name: "Bali",
    country: "Indonesia",
    rating: 4.7,
    packages: 18,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    name: "Maldives",
    country: "Maldives",
    rating: 4.8,
    packages: 15,
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    name: "Switzerland",
    country: "Switzerland",
    rating: 4.9,
    packages: 9,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    name: "Thailand",
    country: "Thailand",
    rating: 4.7,
    packages: 24,
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    name: "Dubai",
    country: "UAE",
    rating: 4.6,
    packages: 21,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    name: "Santorini",
    country: "Greece",
    rating: 4.8,
    packages: 12,
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  },
];

export const FeaturedPackages = () => {
  const [packageData, setPackageData] = useState<PackageData[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get<{ success: boolean; packages: PackageData[] }>("/packages");
        if (response.data.success && response.data.packages) {
          setPackageData(response.data.packages);
        }
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };
    fetchData();
  }, []);

  const handlePackageClick = (id: string) => router.push(`/packages/${id}`);

  return (
    <>
      {/* ══════════════════════════════════════════════════════
          SECTION 1 — Popular Destinations
      ══════════════════════════════════════════════════════ */}
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8">

          {/* Header */}
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[11px] font-extrabold text-[#2563EB] uppercase tracking-widest mb-2">
                Popular Destinations
              </p>
              <h2 className="text-[28px] sm:text-[32px] font-extrabold text-[#111827] leading-tight">
                Where Do You Want to Go?
              </h2>
              <div className="w-12 h-1 bg-[#F59E0B] rounded-full mt-2.5" />
            </div>
            <Link
              href="/packages"
              className="hidden sm:flex items-center gap-1 text-[13px] font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
            >
              View all destinations
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Destination Cards — horizontal landscape grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {trendingDestinations.map((dest, i) => (
              <Link
                key={dest.name}
                href={`/packages?state=${dest.country.toLowerCase().replace(/\s+/g, "-")}`}
                className="group relative rounded-[16px] overflow-hidden block"
                style={{ aspectRatio: "4/5" }}
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  priority={i < 3}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />

                {/* Rating */}
                <div className="absolute top-2.5 left-2.5 flex items-center gap-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm text-[#111827]">
                  <Star className="h-2.5 w-2.5 fill-[#F59E0B] text-[#F59E0B]" />
                  {dest.rating}
                </div>

                {/* Name + count */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="font-bold text-white text-[14px] leading-tight">{dest.name}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <MapPin className="h-2.5 w-2.5 text-white/60" />
                    <p className="text-[11px] text-white/70">{dest.packages} packages</p>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#2563EB]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white text-[#2563EB] text-[11px] font-bold px-3 py-1.5 rounded-full shadow-md">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — Featured Packages
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8">

          {/* Header */}
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[11px] font-extrabold text-[#2563EB] uppercase tracking-widest mb-2">
                Our Packages
              </p>
              <h2 className="text-[28px] sm:text-[32px] font-extrabold text-[#111827] leading-tight">
                Featured Travel Packages
              </h2>
              <div className="w-12 h-1 bg-[#F59E0B] rounded-full mt-2.5" />
            </div>
            <Link
              href="/packages"
              className="hidden sm:flex items-center gap-1.5 text-[13px] font-semibold text-[#2563EB] border border-[#DBEAFE] hover:border-[#2563EB] hover:bg-blue-50 rounded-full px-4 py-2 transition-all duration-200"
            >
              View All
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Package grid — always visible, shows skeletons while loading */}
          {packageData.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {packageData.slice(0, 8).map((pkg) => (
                <PackageCard
                  key={pkg._id}
                  pkg={pkg}
                  handlePackageClick={() => handlePackageClick(pkg._id)}
                />
              ))}
            </div>
          ) : (
            /* Skeleton placeholders while API loads */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="bg-white rounded-[20px] overflow-hidden border border-[#E5E7EB] animate-pulse">
                  <div className="h-52 bg-[#F3F4F6]" />
                  <div className="p-4 space-y-3">
                    <div className="h-3 bg-[#F3F4F6] rounded w-2/3" />
                    <div className="h-4 bg-[#F3F4F6] rounded w-full" />
                    <div className="h-3 bg-[#F3F4F6] rounded w-1/2" />
                    <div className="flex justify-between items-end pt-2 border-t border-[#F3F4F6]">
                      <div className="h-5 bg-[#F3F4F6] rounded w-1/3" />
                      <div className="h-8 bg-[#F3F4F6] rounded w-1/4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {packageData.length > 0 && (
            <div className="text-center mt-10">
              <Link
                href="/packages"
                className="inline-flex items-center gap-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold px-10 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 text-[15px]"
              >
                View All Packages
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — Newsletter CTA Banner
      ══════════════════════════════════════════════════════ */}
      <section className="relative py-0 overflow-hidden">
        <div className="relative h-[280px] sm:h-[320px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Travel newsletter"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 60%" }}
          />
          <div className="absolute inset-0 bg-[#2563EB]/80" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-[1320px] mx-auto w-full px-6 lg:px-8">
              <div className="max-w-[580px]">
                <p className="text-blue-200 text-[11px] font-extrabold uppercase tracking-widest mb-2">
                  Stay Updated
                </p>
                <h2 className="text-white font-extrabold text-[26px] sm:text-[32px] leading-tight mb-2">
                  Get Exclusive Travel Deals
                </h2>
                <p className="text-blue-100 text-[14px] mb-6 leading-relaxed">
                  Subscribe and be the first to know about our best offers, new destinations, and travel tips.
                </p>
                <form className="flex gap-2.5 max-w-[440px]" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 min-w-0 px-4 py-3 rounded-[12px] bg-white/15 border border-white/25 text-white placeholder-blue-200/70 text-[14px] focus:outline-none focus:border-white/60 focus:bg-white/20 transition-all"
                  />
                  <button
                    type="submit"
                    className="flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-5 py-3 rounded-[12px] text-[14px] transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shadow-md"
                  >
                    <Send className="h-4 w-4" />
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
