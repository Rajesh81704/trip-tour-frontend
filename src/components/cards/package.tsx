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
      key={pkg._id}
      className="group relative overflow-visible bg-white border border-gray-100 shadow-lg rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer w-full max-w-sm mx-auto"
      onClick={handlePackageClick}
    >
      {/* Image Section */}
      <div className="relative h-48 sm:h-56 rounded-t-2xl overflow-hidden">
        <Image
          width={400}
          height={300}
          src={pkg.images[0].url}
          alt={pkg.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Top badges container */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
          <Badge className="bg-blue-600/95 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
            {pkg.features[0]}
          </Badge>
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/90 hover:bg-white rounded-full shadow-lg border border-white/60 transition-all h-8 w-8"
            onClick={(e) => e.stopPropagation()}
          >
            <Heart className="h-4 w-4 text-red-500" />
          </Button>
        </div>

        {/* Duration badge */}
        <Badge className="absolute bottom-3 left-3 bg-green-600/95 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
          {pkg.duration.day}D {pkg.duration.night}N
        </Badge>
      </div>

      {/* Card Content */}
      <CardContent className="p-4 sm:p-5">
        {/* Title & Rating */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-gray-900">{pkg.rating}</span>
            <span className="text-gray-500">
              ({Array.isArray(pkg.reviews) ? pkg.reviews.length : pkg.reviews}{" "}
              reviews)
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-blue-600">
            <Clock className="h-4 w-4" />
            <span className="font-medium">
              {pkg.duration.day}D {pkg.duration.night}N
            </span>
          </div>
        </div>

        <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2 line-clamp-1">
          {pkg.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm text-gray-600 font-medium flex items-center">
            <span className="text-lg mr-1">📍</span>
            {pkg.location.destination}
          </span>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {pkg.features.slice(0, 3).map((feature, idx) => (
            <span
              key={idx}
              className="text-sm text-blue-700 font-medium bg-blue-50 px-3 py-1 rounded-full"
            >
              {feature}
            </span>
          ))}
          {pkg.features.length > 3 && (
            <span className="text-sm text-blue-700 font-medium px-2">
              +{pkg.features.length - 3} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-2">
          <Button
            variant="outline"
            className="h-10 text-sm flex-1 border-2 border-orange-200 text-orange-500 hover:bg-orange-50 font-semibold rounded-xl"
            onClick={(e) => {
              e.stopPropagation();
              window.location.href = "tel:9800087901";
            }}
          >
            <Phone className="h-4 w-4 mr-2" />
            Call Now
          </Button>

          <Button className="h-10 text-sm flex-1 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold shadow-lg shadow-orange-200/50 rounded-xl">
            Request Callback
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
