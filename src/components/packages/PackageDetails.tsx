import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, X, MapPin } from "lucide-react";
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
  packageId: string;
}

export function PackageDetails({
  description,
  highlights,
  itinerary,
  inclusions,
  exclusions,
  packageId,
}: PackageDetailsProps) {
  return (
    <div className="bg-white rounded-[20px] border border-[#E5E7EB] shadow-[0_10px_30px_rgba(0,0,0,0.07)] overflow-hidden">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="w-full grid grid-cols-4 bg-[#F8FAFC] rounded-none border-b border-[#E5E7EB] h-auto p-0">
          {["overview", "itinerary", "inclusions", "reviews"].map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="py-3.5 rounded-none text-[13px] font-medium text-[#6B7280] capitalize border-b-2 border-transparent data-[state=active]:border-[#2563EB] data-[state=active]:text-[#2563EB] data-[state=active]:bg-white data-[state=active]:shadow-none transition-all"
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Overview */}
        <TabsContent value="overview" className="p-6 space-y-6">
          <div>
            <h3 className="text-[16px] font-bold text-[#111827] mb-3">About This Package</h3>
            <p className="text-[14px] text-[#374151] leading-relaxed">{description}</p>
          </div>

          <div>
            <h3 className="text-[16px] font-bold text-[#111827] mb-3">Highlights</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[12px] px-3.5 py-2.5">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#2563EB]" />
                  </div>
                  <span className="text-[13px] text-[#374151] font-medium">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>

        {/* Itinerary */}
        <TabsContent value="itinerary" className="p-6">
          <h3 className="text-[16px] font-bold text-[#111827] mb-5 flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[#F59E0B]" />
            Day-by-Day Itinerary
          </h3>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-[#E5E7EB]" />
            <div className="space-y-5">
              {itinerary.map((day, i) => (
                <div key={i} className="relative ml-12">
                  <div className="absolute -left-[2.1rem] top-1 w-8 h-8 bg-[#2563EB] rounded-full flex items-center justify-center shadow-sm shrink-0">
                    <span className="text-white font-bold text-[11px]">{day.day}</span>
                  </div>
                  <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[14px] p-4 hover:shadow-sm transition-shadow">
                    <h4 className="font-bold text-[#111827] text-[14px] mb-1.5">{day.title}</h4>
                    <p className="text-[13px] text-[#6B7280] leading-relaxed">{day.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Inclusions */}
        <TabsContent value="inclusions" className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div>
              <h3 className="text-[15px] font-bold text-[#16A34A] mb-3 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-[#16A34A]" />
                </div>
                Inclusions
              </h3>
              <ul className="space-y-2">
                {inclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 bg-green-50 border border-green-100 rounded-[10px] px-3 py-2.5">
                    <Check className="w-3.5 h-3.5 text-[#16A34A] shrink-0 mt-0.5" />
                    <span className="text-[13px] text-[#374151]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[15px] font-bold text-[#DC2626] mb-3 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                  <X className="w-3.5 h-3.5 text-[#DC2626]" />
                </div>
                Exclusions
              </h3>
              <ul className="space-y-2">
                {exclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 bg-red-50 border border-red-100 rounded-[10px] px-3 py-2.5">
                    <X className="w-3.5 h-3.5 text-[#DC2626] shrink-0 mt-0.5" />
                    <span className="text-[13px] text-[#374151]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TabsContent>

        {/* Reviews */}
        <TabsContent value="reviews" className="p-6">
          <ReviewSection packageId={packageId} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
