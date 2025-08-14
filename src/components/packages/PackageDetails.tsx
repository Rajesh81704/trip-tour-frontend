import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, X } from "lucide-react";
import type { ItineraryDay } from "./types";
import ReviewSection from "./ReviewSection";

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
}: // rating,
// reviews,
PackageDetailsProps) {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-gray-100/50">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 bg-gradient-to-r from-blue-50 to-orange-50 p-1 sm:p-1.5 h-auto sm:h-12 rounded-xl sm:rounded-2xl border border-gray-200/50">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-blue-600 rounded-lg sm:rounded-xl transition-all duration-300 text-xs sm:text-sm py-2 sm:py-0"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="itinerary"
            className="data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-blue-600 rounded-lg sm:rounded-xl transition-all duration-300 text-xs sm:text-sm py-2 sm:py-0"
          >
            Itinerary
          </TabsTrigger>
          <TabsTrigger
            value="inclusions"
            className="data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-blue-600 rounded-lg sm:rounded-xl transition-all duration-300 text-xs sm:text-sm py-2 sm:py-0"
          >
            Inclusions
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-blue-600 rounded-lg sm:rounded-xl transition-all duration-300 text-xs sm:text-sm py-2 sm:py-0"
          >
            Reviews
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-4 sm:mt-6 lg:mt-8">
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About This Package
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                {description}
              </p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Highlights
              </h3>
              <ul className="space-y-2 sm:space-y-3 lg:space-y-4">
                {highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-700 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-blue-100/50 hover:border-blue-200/50 hover:shadow-md transition-all duration-300"
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-1.5 sm:p-2 rounded-full mr-3 sm:mr-4 flex-shrink-0 shadow-md">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium text-sm sm:text-base lg:text-lg">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="itinerary" className="mt-6 sm:mt-8">
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">
              🗺️ Day-by-Day Itinerary
            </h3>
            <div className="relative">
              <div className="absolute left-3 sm:left-6 top-0 bottom-0 w-0.5 sm:w-1 bg-gray-300 rounded-full"></div>
              {itinerary.map((day, index) => (
                <div
                  key={index}
                  className="relative ml-8 sm:ml-12 mb-6 sm:mb-8 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute -left-12 sm:-left-16 top-4 sm:top-6 w-8 h-8 sm:w-12 sm:h-12 bg-gray-700 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm sm:text-lg">
                      {day.day}
                    </span>
                  </div>
                  <h4 className="font-bold text-lg sm:text-xl lg:text-2xl text-gray-900 mb-2 sm:mb-3">
                    {day.title}
                  </h4>
                  <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                    {day.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="inclusions" className="mt-6 sm:mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-green-100/50">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 flex items-center">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3" />
                Inclusions
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {inclusions.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start bg-white/70 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm border border-green-100/50"
                  >
                    <div className="bg-green-500 p-1 sm:p-1.5 rounded-full mr-3 sm:mr-4 mt-0.5 sm:mt-1 shadow-md flex-shrink-0">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-red-100/50">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600 flex items-center">
                <X className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3" />
                Exclusions
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {exclusions.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start bg-white/70 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm border border-red-100/50"
                  >
                    <div className="bg-red-500 p-1 sm:p-1.5 rounded-full mr-3 sm:mr-4 mt-0.5 sm:mt-1 shadow-md flex-shrink-0">
                      <X className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="reviews" className="mt-6 sm:mt-8">
          <ReviewSection />
        </TabsContent>
      </Tabs>
    </div>
  );
}
