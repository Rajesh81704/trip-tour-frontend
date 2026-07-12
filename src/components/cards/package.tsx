import { Button } from "@/components/ui/button";
import { Clock, Heart, MapPin, UtensilsCrossed } from "lucide-react";
import Image from "next/image";
import { PackageData } from "@/components/packages/types";

interface PackageCardProps {
  pkg: PackageData;
  handlePackageClick: () => void;
}

export const PackageCard = ({ pkg, handlePackageClick }: PackageCardProps) => {
  const discountedPrice = pkg.discount
    ? Math.round(pkg.price * (1 - pkg.discount / 100))
    : pkg.price;

  const featureLabel = pkg.features?.[0];
  const featureLower = featureLabel?.toLowerCase() || "";
  const badgeClass =
    featureLower.includes("best") || featureLower.includes("bestseller")
      ? "bg-[#22C55E]"
      : featureLower.includes("popular")
      ? "bg-[#F59E0B]"
      : "bg-[#2563EB]";

  return (
    <div
      className="group bg-white rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer border border-gray-100 hover:-translate-y-1"
      onClick={handlePackageClick}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden rounded-t-[20px]">
        <Image
          fill
          src={
            pkg.images[0]?.url ||
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
          }
          alt={pkg.title}
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Dark gradient at bottom */}
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Feature badge */}
        {featureLabel && (
          <div className="absolute top-3 left-3">
            <span
              className={`${badgeClass} text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-widest shadow-sm`}
            >
              {featureLabel}
            </span>
          </div>
        )}

        {/* Discount badge */}
        {pkg.discount > 0 && (
          <div className="absolute top-3 right-10">
            <span className="bg-[#EF4444] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wide shadow-sm">
              SALE {pkg.discount}% OFF
            </span>
          </div>
        )}

        {/* Wishlist button */}
        <button
          className="absolute top-3 right-3 w-8 h-8 bg-white/95 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110 group/heart"
          onClick={(e) => e.stopPropagation()}
          aria-label="Save to wishlist"
        >
          <Heart className="h-3.5 w-3.5 text-gray-400 group-hover/heart:text-red-500 transition-colors" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Location */}
        <div className="flex items-center gap-1 text-gray-500 text-xs mb-1.5">
          <MapPin className="h-3 w-3 shrink-0 text-[#F59E0B]" />
          <span className="truncate font-medium">
            {pkg.location.destination}, {pkg.location.state}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-[#111827] text-[15px] mb-2 line-clamp-2 leading-snug">
          {pkg.title}
        </h3>

        {/* Meta row */}
        <div className="flex items-center gap-3 text-xs text-[#6B7280] mb-3">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {pkg.duration.day} Days / {pkg.duration.night} Nights
          </span>
          {pkg.inclusions?.includes("Breakfast") && (
            <span className="flex items-center gap-1">
              <UtensilsCrossed className="h-3 w-3" />
              Breakfast
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-xs text-[#9CA3AF] line-clamp-2 mb-3 leading-relaxed">
          {pkg.description}
        </p>

        {/* Price + CTA */}
        <div className="flex items-end justify-between pt-3 border-t border-[#E5E7EB]">
          <div>
            {pkg.discount > 0 && (
              <p className="text-xs text-[#9CA3AF] line-through mb-0.5">
                ₹{pkg.price.toLocaleString("en-IN")}
              </p>
            )}
            <p className="text-[18px] font-extrabold text-[#111827] leading-none">
              ₹{discountedPrice.toLocaleString("en-IN")}
              <span className="text-xs text-[#6B7280] font-normal ml-0.5">/ Person</span>
            </p>
          </div>
          <Button
            size="sm"
            className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-[14px] text-xs font-bold px-4 h-9 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            onClick={(e) => e.stopPropagation()}
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};
