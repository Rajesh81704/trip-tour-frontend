import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Star, X } from "lucide-react";
import type { ItineraryDay } from "./types";

interface PackageDetailsProps {
  description: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  rating: number;
  reviews: number;
}

export function PackageDetails({
  description,
  highlights,
  itinerary,
  inclusions,
  exclusions,
  rating,
  reviews,
}: PackageDetailsProps) {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100/50">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-gradient-to-r from-blue-50 to-orange-50 p-1.5 h-12 rounded-2xl border border-gray-200/50">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-blue-600 rounded-xl transition-all duration-300"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="itinerary"
            className="data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-blue-600 rounded-xl transition-all duration-300"
          >
            Itinerary
          </TabsTrigger>
          <TabsTrigger
            value="inclusions"
            className="data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-blue-600 rounded-xl transition-all duration-300"
          >
            Inclusions
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-blue-600 rounded-xl transition-all duration-300"
          >
            Reviews
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-8">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                About This Package
              </h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Highlights
              </h3>
              <ul className="space-y-4">
                {highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-700 bg-gray-50 rounded-lg p-4"
                  >
                    <div className="bg-gray-600 p-2 rounded-full mr-4">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="itinerary" className="mt-8">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">
              🗺️ Day-by-Day Itinerary
            </h3>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-300 rounded-full"></div>
              {itinerary.map((day, index) => (
                <div
                  key={index}
                  className="relative ml-12 mb-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute -left-16 top-6 w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">
                      {day.day}
                    </span>
                  </div>
                  <h4 className="font-bold text-2xl text-gray-900 mb-3">
                    {day.title}
                  </h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {day.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="inclusions" className="mt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100/50">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 flex items-center">
                <Check className="w-6 h-6 mr-3" />
                Inclusions
              </h3>
              <ul className="space-y-4">
                {inclusions.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start bg-white/70 rounded-xl p-4 shadow-sm border border-green-100/50"
                  >
                    <div className="bg-green-500 p-1.5 rounded-full mr-4 mt-1 shadow-md">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border border-red-100/50">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600 flex items-center">
                <X className="w-6 h-6 mr-3" />
                Exclusions
              </h3>
              <ul className="space-y-4">
                {exclusions.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start bg-white/70 rounded-xl p-4 shadow-sm border border-red-100/50"
                  >
                    <div className="bg-red-500 p-1.5 rounded-full mr-4 mt-1 shadow-md">
                      <X className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="reviews" className="mt-8">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-100/50">
              <div className="flex items-center space-x-6">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
                  {rating}
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1"
                      />
                    ))}
                  </div>
                  <div className="text-lg text-gray-600 font-medium">
                    {reviews} verified reviews
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200/50">
              <p className="text-gray-600 text-center text-lg">
                🌟 Reviews component would go here...
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
