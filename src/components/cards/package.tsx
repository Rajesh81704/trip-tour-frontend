import { Clock, Heart, MapPin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PackageData } from "@/components/packages/types";

interface PackageCardProps {
  pkg: PackageData;
  handlePackageClick: () => void;
}

export const PackageCard = ({ pkg, handlePackageClick }: PackageCardProps) => {
  const discountedPrice = pkg.discount
    ? Math.round(pkg.price * (1 - pkg.discount / 100))
    : pkg.price;

  const category = pkg.category || pkg.features?.[0] || "";

  return (
    <div
      className="group bg-slate-700 rounded-2xl overflow-hidden border border-slate-600 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
      onClick={handlePackageClick}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden shrink-0">
        <Image
          fill
          src={
            pkg.images[0]?.url ||
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
          }
          alt={pkg.title}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Category badge */}
        {category && (
          <div className="absolute top-3 left-3">
            <span className="bg-[#2563EB] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide shadow-sm">
              {category}
            </span>
          </div>
        )}

        {/* Discount badge */}
        {pkg.discount > 0 && (
          <div className="absolute top-3 right-10">
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 text-amber-900 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide shadow-md">
              {pkg.discount}% OFF
            </span>
          </div>
        )}

        {/* Wishlist */}
        <button
          className="absolute top-3 right-3 w-8 h-8 bg-slate-600/90 hover:bg-slate-500 rounded-full flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110"
          onClick={(e) => e.stopPropagation()}
          aria-label="Save to wishlist"
        >
          <Heart className="h-3.5 w-3.5 text-slate-300 hover:text-red-400 transition-colors" />
        </button>

        {/* Duration pill — bottom left */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
          <Clock className="h-3 w-3" />
          {pkg.duration.day}D / {pkg.duration.night}N
        </div>

        {/* Rating — bottom right */}
        {pkg.reviews && pkg.reviews.length > 0 && (
          <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
            <Star className="h-3 w-3 fill-[#F59E0B] text-[#F59E0B]" />
            {pkg.reviews.length}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Location */}
        <div className="flex items-center gap-1 text-[#F59E0B] text-[11px] font-semibold mb-1.5">
          <MapPin className="h-3 w-3 shrink-0" />
          <span className="truncate">{pkg.location.destination}, {pkg.location.state}</span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-slate-100 text-[14.5px] leading-snug line-clamp-2 mb-2 flex-1">
          {pkg.title}
        </h3>

        {/* Description */}
        <p className="text-[12px] text-slate-400 line-clamp-2 leading-relaxed mb-4">
          {pkg.description}
        </p>

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-600 mt-auto">
          <div>
            {pkg.discount > 0 && pkg.price > 0 && (
              <p className="text-[11px] text-slate-500 line-through leading-none mb-0.5">
                ₹{pkg.price.toLocaleString("en-IN")}
              </p>
            )}
            <div className="flex items-baseline gap-1">
              <span className="text-[17px] font-extrabold text-slate-100">
                {discountedPrice > 0 ? `₹${discountedPrice.toLocaleString("en-IN")}` : "Contact Us"}
              </span>
              {discountedPrice > 0 && (
                <span className="text-[11px] text-slate-400 font-normal">/ person</span>
              )}
            </div>
          </div>

          <Link
            href={`/packages/${pkg._id}`}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[12px] font-bold px-4 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-px whitespace-nowrap"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
