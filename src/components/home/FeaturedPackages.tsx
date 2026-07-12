"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PackageCard } from "../cards/package";
import api from "@/lib/api";
import { PackageData } from "../packages";
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight, ChevronRight } from "lucide-react";

/* eslint-disable */

const trendingDestinations = [
  {
    name: "Santorini, Greece",
    country: "Greece",
    rating: 4.8,
    price: 59999,
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
  },
  {
    name: "Bali, Indonesia",
    country: "Indonesia",
    rating: 4.7,
    price: 34999,
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
  },
  {
    name: "Switzerland",
    country: "Switzerland",
    rating: 4.9,
    price: 89999,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
  },
  {
    name: "Maldives",
    country: "Maldives",
    rating: 4.8,
    price: 44999,
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
  },
  {
    name: "Dubai, UAE",
    country: "United Arab Emirates",
    rating: 4.6,
    price: 29999,
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
  },
];

const exclusiveDeals = [
  {
    name: "Thailand Getaway",
    duration: "5 Days / 4 Nights",
    price: 24999,
    originalPrice: 31999,
    savePct: 20,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    name: "Himachal Escape",
    duration: "4 Days / 3 Nights",
    price: 12999,
    originalPrice: 15299,
    savePct: 15,
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    name: "Goa Beach Holiday",
    duration: "3 Days / 2 Nights",
    price: 8999,
    originalPrice: 11999,
    savePct: 25,
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
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

  const handlePackageClick = (id: string) => {
    router.push(`/packages/${id}`);
  };

  return (
    <>
      {/* ── Trending Destinations ─────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-1">
                Popular Destinations
              </p>
              <h2 className="text-3xl font-bold text-gray-900">Trending Destinations</h2>
              <div className="w-12 h-1 bg-orange-500 rounded-full mt-2" />
            </div>
            <Link
              href="/packages"
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 border border-blue-200 hover:border-blue-400 rounded-lg px-4 py-2 transition-colors"
            >
              View All
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-hide">
            {trendingDestinations.map((dest, i) => (
              <Link
                key={dest.name}
                href={`/packages?state=${dest.country.toLowerCase().replace(/\s+/g, "-")}`}
                className="shrink-0 w-48 group"
              >
                <div className="relative h-44 rounded-xl overflow-hidden mb-2">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="192px"
                    priority={i < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {/* Rating badge */}
                  <div className="absolute top-2 left-2 flex items-center gap-0.5 bg-white/90 text-gray-800 text-xs font-bold px-2 py-0.5 rounded-full">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    {dest.rating}
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm truncate">{dest.name}</p>
                  <p className="text-xs text-gray-500 mb-0.5">{dest.country}</p>
                  <p className="text-sm font-bold text-blue-700">
                    ₹{dest.price.toLocaleString("en-IN")}
                    <span className="text-xs text-gray-400 font-normal"> / Per Person</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Exclusive Travel Deals ────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left text */}
            <div className="lg:w-64 shrink-0">
              <p className="text-xs font-semibold text-orange-500 uppercase tracking-widest mb-2">
                Best Offers
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Exclusive Travel Deals
              </h2>
              <div className="w-10 h-1 bg-orange-500 rounded-full mb-4" />
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Grab the best offers on top destinations. Book now and travel more for less!
              </p>
              <Link
                href="/packages"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
              >
                View All Deals
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Deals cards */}
            <div className="flex flex-1 gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {exclusiveDeals.map((deal) => (
                <Link
                  key={deal.name}
                  href="/packages"
                  className="relative shrink-0 w-64 h-52 rounded-xl overflow-hidden group"
                >
                  <Image
                    src={deal.image}
                    alt={deal.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="256px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  {/* Save badge */}
                  <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    SAVE {deal.savePct}%
                  </div>
                  {/* Info */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-bold text-base leading-tight">{deal.name}</p>
                    <p className="text-xs text-white/80 mb-1">{deal.duration}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-orange-400">
                        ₹{deal.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs text-white/60 line-through">
                        ₹{deal.originalPrice.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Trending Tours (API packages) ─────────────────────────────── */}
      {packageData.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-1">
                  Our Packages
                </p>
                <h2 className="text-3xl font-bold text-gray-900">Trending Tours</h2>
                <div className="w-12 h-1 bg-orange-500 rounded-full mt-2" />
              </div>
              <Link
                href="/packages"
                className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 border border-blue-200 hover:border-blue-400 rounded-lg px-4 py-2 transition-colors"
              >
                View All
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {packageData.slice(0, 8).map((pkg) => (
                <PackageCard
                  key={pkg._id}
                  pkg={pkg}
                  handlePackageClick={() => handlePackageClick(pkg._id)}
                />
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/packages"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-sm"
              >
                Explore All Packages
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
