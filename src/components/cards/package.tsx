import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Heart, MapPin, Star, UtensilsCrossed } from "lucide-react";
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

  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
      onClick={handlePackageClick}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          fill
          src={pkg.images[0]?.url || "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"}
          alt={pkg.title}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Badges */}
        {pkg.features?.[0] && (
          <div className="absolute top-3 left-3">
            <span className="bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
              {pkg.features[0]}
            </span>
          </div>
        )}
        {pkg.discount > 0 && (
          <div className="absolute top-3 right-10">
            <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              SAVE {pkg.discount}%
            </span>
          </div>
        )}
        <button
          className="absolute top-3 right-3 w-7 h-7 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow transition-colors"
          onClick={(e) => e.stopPropagation()}
          aria-label="Save to wishlist"
        >
          <Heart className="h-3.5 w-3.5 text-gray-400 hover:text-red-500 transition-colors" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Location */}
        <div className="flex items-center gap-1 text-gray-500 text-xs mb-1.5">
          <MapPin className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">
            {pkg.location.destination}, {pkg.location.state}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-gray-900 text-base mb-2 line-clamp-2 leading-snug">
          {pkg.title}
        </h3>

        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {pkg.duration.day} Days / {pkg.duration.night} Nights
          </span>
          {pkg.inclusions?.includes("Breakfast") && (
            <span className="flex items-center gap-1">
              <UtensilsCrossed className="h-3.5 w-3.5" />
              Breakfast
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-xs text-gray-500 line-clamp-2 mb-3 leading-relaxed">
          {pkg.description}
        </p>

        {/* Price + CTA */}
        <div className="flex items-end justify-between pt-2 border-t border-gray-100">
          <div>
            {pkg.discount > 0 && (
              <p className="text-xs text-gray-400 line-through">
                ₹{pkg.price.toLocaleString("en-IN")}
              </p>
            )}
            <p className="text-lg font-bold text-gray-900">
              ₹{discountedPrice.toLocaleString("en-IN")}
              <span className="text-xs text-gray-500 font-normal"> / Person</span>
            </p>
          </div>
          <Button
            size="sm"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs px-4 h-9 shadow-sm"
            onClick={(e) => e.stopPropagation()}
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};
