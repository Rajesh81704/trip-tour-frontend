import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Heart, Phone, Star } from "lucide-react";
import Image from "next/image";
import { PackageData } from "@/components/packages/types";

interface PackageCardProps {
  pkg: PackageData;
  handlePackageClick: () => void;
}

export const PackageCard = ({ pkg, handlePackageClick }: PackageCardProps) => {
  return (
    <Card
      key={pkg.id}
      className="group relative overflow-visible bg-white border-0 shadow-xl rounded-2xl sm:rounded-3xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
      onClick={handlePackageClick}
    >
      {/* Image Section */}
      <div className="relative h-40 sm:h-52 rounded-t-2xl sm:rounded-t-3xl overflow-hidden">
        <Image
          width={100}
          height={100}
          src={pkg.images[0]}
          alt={pkg.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        {/* Category Badge */}
        <Badge className="absolute top-3 left-3 sm:top-5 sm:left-5 bg-blue-600/90 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-10">
          {pkg.features[0]}
        </Badge>
        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 sm:top-5 sm:right-5 bg-white/80 hover:bg-white/90 rounded-full shadow-lg border border-white/60 z-10 transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
        </Button>
        {/* Group Size Badge */}
        <Badge className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 bg-green-600/90 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-10">
          {pkg.duration}
        </Badge>
      </div>

      {/* Card Content */}
      <CardContent className="p-4 sm:p-7 pt-3 sm:pt-5">
        {/* Title & Rating */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-orange-400 text-orange-400" />
            <span className="font-semibold text-blue-900 text-xs sm:text-sm">
              {pkg.rating}
            </span>
            <span className="text-gray-400 text-xs">({pkg.reviews})</span>
          </div>
          <div className="flex items-center gap-1 text-blue-500">
            <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="text-xs font-medium">{pkg.duration}</span>
          </div>
        </div>
        <h3 className="font-extrabold text-base sm:text-lg md:text-xl text-black">
          {pkg.title}
        </h3>
        {/* Location */}
        <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
          <span className="text-xs sm:text-sm text-gray-600 font-medium">
            📍 {pkg.location}
          </span>
        </div>
        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
          {pkg.features.map((feature, idx) => (
            <span
              key={idx}
              className="text-xs text-blue-700 font-medium bg-blue-100/60 px-2 py-0.5 rounded"
            >
              {feature}
            </span>
          ))}
        </div>
        {/* Price Section */}
        <div className="mb-4 sm:mb-5">
          <div className="flex items-end gap-2">
            <span className="text-xl sm:text-2xl font-extrabold text-black">
              ₹{pkg.price.toLocaleString()}
            </span>
            <span className="text-xs sm:text-sm text-gray-400 line-through">
              ₹{pkg.originalPrice.toLocaleString()}
            </span>
          </div>
          <div className="text-xs text-green-600 font-semibold mt-1">
            Save ₹{(pkg.originalPrice - pkg.price).toLocaleString()}
          </div>
        </div>
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2">
          <Button
            variant="outline"
            className="flex-1 border-orange-200 text-orange-500 hover:bg-orange-50 font-semibold text-sm sm:text-base"
            onClick={(e) => e.stopPropagation()}
          >
            <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
            Call
          </Button>
          <Button
            className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold shadow text-sm sm:text-base"
            onClick={(e) => e.stopPropagation()}
          >
            Request Callback
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
