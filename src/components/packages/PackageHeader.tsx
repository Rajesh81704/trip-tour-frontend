import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Heart, MapPin, Phone, Share2, Star } from "lucide-react";

interface PackageHeaderProps {
  title: string;
  location: string;
  duration: string;
  rating: number;
  reviews: number;
  features: string[];
  discount: string;
}

export function PackageHeader({
  title,
  location,
  duration,
  rating,
  reviews,
  features,
  discount,
}: PackageHeaderProps) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-gray-100">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 sm:mb-6">
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text leading-tight">
            {title}
          </h1>
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-3 lg:gap-6 text-gray-600">
            <div className="flex items-center bg-gray-50 px-2 sm:px-3 py-1.5 rounded-full text-xs sm:text-sm lg:text-base">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-orange-500 flex-shrink-0" />
              <span className="font-medium truncate">{location}</span>
            </div>
            <div className="flex items-center bg-gray-50 px-2 sm:px-3 py-1.5 rounded-full text-xs sm:text-sm lg:text-base">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-blue-500 flex-shrink-0" />
              <span className="font-medium">{duration}</span>
            </div>
            <div className="flex items-center bg-gray-50 px-2 sm:px-3 py-1.5 rounded-full text-xs sm:text-sm lg:text-base">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400 mr-1.5 sm:mr-2 flex-shrink-0" />
              <span className="font-medium">{rating}</span>
              <span className="text-xs sm:text-sm ml-1">
                ({reviews} reviews)
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center sm:justify-end space-x-2 sm:space-x-3 mt-4 sm:mt-6 lg:mt-0">
          <Button
            variant="outline"
            size="icon"
            className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 hover:bg-red-50 hover:border-red-200 hover:text-red-500 transition-all duration-200"
          >
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-500 transition-all duration-200"
          >
            <Share2 className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 hover:bg-green-50 hover:border-green-200 hover:text-green-500 transition-all duration-200"
          >
            <Phone className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {features.map((feature, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5"
          >
            {feature}
          </Badge>
        ))}
        <Badge className="bg-orange-500 hover:bg-orange-600 text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5">
          {discount}
        </Badge>
      </div>
    </div>
  );
}
