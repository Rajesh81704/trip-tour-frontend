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
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-gray-900 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text">
            {title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-600">
            <div className="flex items-center bg-gray-50 px-3 py-1 rounded-full">
              <MapPin className="w-4 h-4 mr-2 text-orange-500" />
              <span className="font-medium">{location}</span>
            </div>
            <div className="flex items-center bg-gray-50 px-3 py-1 rounded-full">
              <Clock className="w-4 h-4 mr-2 text-blue-500" />
              <span className="font-medium">{duration}</span>
            </div>
            <div className="flex items-center bg-gray-50 px-3 py-1 rounded-full">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-2" />
              <span className="font-medium">{rating}</span>
              <span className="text-sm ml-1">({reviews} reviews)</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-3 mt-6 md:mt-0">
          <Button
            variant="outline"
            size="icon"
            className="hover:bg-red-50 hover:border-red-200 hover:text-red-500 transition-all duration-200"
          >
            <Heart className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="hover:bg-blue-50 hover:border-blue-200 hover:text-blue-500 transition-all duration-200"
          >
            <Share2 className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="hover:bg-green-50 hover:border-green-200 hover:text-green-500 transition-all duration-200"
          >
            <Phone className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {features.map((feature, index) => (
          <Badge key={index} variant="secondary">
            {feature}
          </Badge>
        ))}
        <Badge className="bg-orange-500 hover:bg-orange-600">{discount}</Badge>
      </div>
    </div>
  );
}
