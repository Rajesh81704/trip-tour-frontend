import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Heart, Phone, Star } from "lucide-react";
import Image from "next/image";
import { PackageData } from "@/components/packages/types";
// import { InquiryForm } from "../packages";

interface PackageCardProps {
  pkg: PackageData;
  handlePackageClick: () => void;
}

export const PackageCard = ({ pkg, handlePackageClick }: PackageCardProps) => {
  // const [showInquiry, setShowInquiry] = useState(false);
  return (
    <Card
      key={pkg._id}
      className="group relative overflow-visible bg-white border-0 shadow-lg rounded-xl sm:rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-xl cursor-pointer w-full"
      onClick={handlePackageClick}
    >
      {/* Image Section */}
      <div className="relative h-32 sm:h-40 rounded-t-xl sm:rounded-t-2xl overflow-hidden">
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
        <Badge className="absolute top-2 left-2 bg-blue-600/90 text-white px-2 py-0.5 rounded-full text-xs font-semibold shadow-lg z-10">
          {pkg.features[0]}
        </Badge>
        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white/90 rounded-full shadow-lg border border-white/60 z-10 transition-all h-6 w-6"
          onClick={(e) => e.stopPropagation()}
        >
          <Heart className="h-3 w-3 text-orange-500" />
        </Button>
        {/* Duration Badge */}
        <Badge className="absolute bottom-2 left-2 bg-green-600/90 text-white px-2 py-0.5 rounded-full text-xs font-semibold shadow-lg z-10">
          {pkg.duration.day}D {pkg.duration.night}N
        </Badge>
      </div>

      {/* Card Content */}
      <CardContent className="p-3 pt-2">
        {/* Title & Rating */}
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-orange-400 text-orange-400" />
            <span className="font-semibold text-blue-900 text-xs">
              {pkg.rating}
            </span>
            <span className="text-gray-400 text-xs">({Array.isArray(pkg.reviews) ? pkg.reviews.length : pkg.reviews})</span>
          </div>
          <div className="flex items-center gap-1 text-blue-500">
            <Clock className="h-3 w-3" />
            <span className="text-xs font-medium">
              {pkg.duration.day}D {pkg.duration.night}N
            </span>
          </div>
        </div>
        <h3 className="font-bold text-sm sm:text-base text-black line-clamp-1">
          {pkg.title}
        </h3>
        {/* Location */}
        <div className="flex items-center gap-1 mb-1">
          <span className="text-xs text-gray-600 font-medium line-clamp-1">
            📍 {pkg.location.destination}
          </span>
        </div>
        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-2">
          {pkg.features.slice(0, 2).map((feature, idx) => (
            <span
              key={idx}
              className="text-xs text-blue-700 font-medium bg-blue-100/60 px-1.5 py-0.5 rounded"
            >
              {feature}
            </span>
          ))}
          {pkg.features.length > 2 && (
            <span className="text-xs text-blue-700 font-medium">
              +{pkg.features.length - 2}
            </span>
          )}
        </div>
        {/* Price Section */}
        {/* <div className="mb-2">
          <div className="flex items-end gap-1">
            <span className="text-base font-bold text-black">
              ₹{pkg.price.toLocaleString()}
            </span>
            <span className="text-xs text-gray-400 line-through">
              ₹{pkg.originalPrice.toLocaleString()}
            </span>
          </div>
          <div className="text-xs text-green-600 font-semibold">
            Save ₹{(pkg.originalPrice - pkg.price).toLocaleString()}
          </div>
        </div> */}
        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="h-8 text-xs flex-1 border-orange-200 text-orange-500 hover:bg-orange-50 font-semibold"
            onClick={(e) => e.stopPropagation()}
          >
            <Phone className="h-3 w-3 mr-1" />
            Call
          </Button>

          <Button className=" cursor-pointer h-8 text-xs flex-1 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold shadow">
            Request call
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
