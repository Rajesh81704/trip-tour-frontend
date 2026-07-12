"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PackageCard } from "../cards/package";
import api from "@/lib/api";
import { PackageData } from "../packages";
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight, ChevronRight, MapPin } from "lucide-react";

const trendingDestinations = [
  {
    name: "Santorini, Greece",
    country: "Greece",
    rating: 4.8,
    packages: 12,
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
  },
  {
    name: "Bali, Indonesia",
    country: "Indonesia",
    rating: 4.7,
    packages: 18,
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
  },
  {
    name: "Switzerland",
    country: "Switzerland",
    rating: 4.9,
    packages: 9,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
  },
  {
    name: "Maldives",
    country: "Maldives",
    rating: 4.8,
    packages: 15,
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
  },
  {
    name: "Dubai, UAE",
    country: "UAE",
    rating: 4.6,
    packages: 21,
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
  },
  {
    name: "Thailand",
    country: "Thailand",
    rating: 4.7,
    packages: 24,
    image:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
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
      {/* ── Popular Destinations ─────────────────────────────────────── */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-label mb-2">Popular Destinations</p>
              <h2 className="text-[36px] font-extrabold text-[#111827] leading-tight">
                Explore Top Destinations
              </h2>
              <div className="w-14 h-1 bg-[#F59E0B] rounded-full mt-3" />
            </div>
            <Link
              href="/packages"
              className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] border border-[#DBEAFE] hover:border-[#2563EB] rounded-full px-5 py-2.5 transition-all duration-200 hover:bg-blue-50"
            >
              View All
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {trendingDestinations.map((dest, i) => (
              <Link
                key={dest.name}
                href={`/packages?state=${dest.country.toLowerCase().replace(/\s+/g, "-")}`}
                className="group relative rounded-[18px] overflow-hidden aspect-[3/4] block"
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  priority={i < 3}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />

                {/* Rating badge */}
                <div className="absolute top-2.5 left-2.5 flex items-center gap-0.5 bg-white/90 backdrop-blur-sm text-[#111827] text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                  <Star className="h-2.5 w-2.5 fill-[#F59E0B] text-[#F59E0B]" />
                  {dest.rating}
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="font-bold text-white text-[13px] leading-snug truncate">{dest.name}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <MapPin className="h-2.5 w-2.5 text-white/70" />
                    <p className="text-[11px] text-white/75">{dest.packages} packages</p>
                  </div>
                </div>

                {/* Hover CTA */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold px-4 py-2 rounded-full">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Packages (API) ────────────────────────────────────── */}
      {packageData.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
            {/* Section Header */}
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="section-label mb-2">Our Packages</p>
                <h2 className="text-[36px] font-extrabold text-[#111827] leading-tight">
                  Featured Travel Packages
                </h2>
                <div className="w-14 h-1 bg-[#F59E0B] rounded-full mt-3" />
              </div>
              <Link
                href="/packages"
                className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] border border-[#DBEAFE] hover:border-[#2563EB] rounded-full px-5 py-2.5 transition-all duration-200 hover:bg-blue-50"
              >
                View All
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Package Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {packageData.slice(0, 8).map((pkg) => (
                <PackageCard
                  key={pkg._id}
                  pkg={pkg}
                  handlePackageClick={() => handlePackageClick(pkg._id)}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/packages"
                className="inline-flex items-center gap-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-250 hover:-translate-y-0.5 text-[15px]"
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
