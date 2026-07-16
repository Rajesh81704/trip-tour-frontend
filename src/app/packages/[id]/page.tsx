"use client";

import {
  PackageHeader,
  ImageGallery,
  PackageDetails,
  // InquiryForm,
  // RelatedPackages,
  PackageData,
  IReview,
} from "@/components/packages";
import { InquiryForm } from "@/components/home/InquiryForm";
import api from "@/lib/api";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

interface PackageDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function PackageDetailPage({ params }: PackageDetailPageProps) {
  const [packageData, setPackageData] = useState<PackageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showInquiryForm, setShowInquiryForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const { id } = await params;
        console.log("Fetching package with ID:", id);

        const response = await api.get<{
          success: boolean;
          package: PackageData;
          reviews: IReview[];
        }>(`/packages/${id}`);
        console.log("API Response:", response);

        if (response.data.success && response.data.package) {
          setPackageData(response.data.package);
          console.log("Package data set:", response.data.package);
        } else {
          throw new Error("Package not found");
        }
      } catch (error) {
        console.error("Error fetching package data:", error);
        setError("Failed to load package");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] pt-[68px]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8 py-16">
          <div className="flex justify-center items-center py-24">
            <div className="text-center">
              <div className="w-14 h-14 rounded-full border-4 border-[#E5E7EB] border-t-[#F59E0B] animate-spin mx-auto mb-5" />
              <p className="text-[#6B7280] font-medium">Loading package details...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !packageData) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-[68px]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
          <div className="xl:col-span-2 space-y-5 lg:space-y-7">
            <PackageHeader
              title={packageData.title}
              location={packageData.location.destination}
              duration={`${packageData.duration.day} Days ${packageData.duration.night} Nights`}
              rating={packageData.rating || 0}
              reviews={
                Array.isArray(packageData.reviews)
                  ? packageData.reviews.length
                  : packageData.reviews || 0
              }
              features={packageData.features}
              discount={`${packageData.discount}% OFF`}
            />

            <ImageGallery
              images={packageData.images.map((image) => image.url)}
              title={packageData.title}
            />

            <PackageDetails
              description={packageData.description}
              highlights={packageData.highlights}
              itinerary={packageData.itinerary}
              inclusions={packageData.inclusions}
              exclusions={packageData.exclusions}
              rating={packageData.rating || 0}
              reviews={
                Array.isArray(packageData.reviews)
                  ? packageData.reviews.length
                  : packageData.reviews || 0
              }
              packageId={packageData._id}
            />
          </div>

          {/* Booking sidebar — always visible */}
          <div className="space-y-5 lg:space-y-6">
            <div className="bg-white rounded-[20px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-[#E5E7EB] sticky top-[88px]">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-bold text-[#F59E0B] uppercase tracking-widest">Special Offer</span>
                {packageData.discount > 0 && (
                  <span className="bg-[#EF4444] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {packageData.discount}% OFF
                  </span>
                )}
              </div>
              {packageData.discount > 0 && (
                <div className="mb-1">
                  <span className="text-[13px] text-[#9CA3AF] line-through">
                    ₹{packageData.price?.toLocaleString("en-IN")}
                  </span>
                </div>
              )}
              <div className="text-[32px] font-extrabold text-[#111827] leading-none mb-1">
                ₹{Math.round(packageData.price * (1 - (packageData.discount || 0) / 100)).toLocaleString("en-IN")}
                <span className="text-[14px] text-[#6B7280] font-normal ml-1">/ Person</span>
              </div>
              <p className="text-[13px] text-[#6B7280] mb-5 mt-2 leading-relaxed">
                Get detailed information, pricing, and book your dream vacation.
              </p>

              <button
                onClick={() => setShowInquiryForm(true)}
                className="w-full flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold py-4 px-6 rounded-[14px] shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 text-[15px]"
              >
                ✈️ Get Quote &amp; Book Now
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-[12px] text-[#9CA3AF]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                Free cancellation available
              </div>

              {/* Quick info */}
              <div className="mt-5 pt-5 border-t border-[#E5E7EB] grid grid-cols-2 gap-3">
                <div className="bg-[#F8FAFC] rounded-[10px] p-3 text-center">
                  <div className="text-[11px] text-[#9CA3AF] mb-0.5">Duration</div>
                  <div className="text-[13px] font-bold text-[#111827]">
                    {packageData.duration.day}D / {packageData.duration.night}N
                  </div>
                </div>
                <div className="bg-[#F8FAFC] rounded-[10px] p-3 text-center">
                  <div className="text-[11px] text-[#9CA3AF] mb-0.5">Rating</div>
                  <div className="text-[13px] font-bold text-[#111827]">
                    {packageData.rating ? `${packageData.rating}★` : "N/A"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inquiry Form Modal — rendered at page root so fixed overlay works correctly */}
      {showInquiryForm && (
        <InquiryForm
          packageTitle={packageData.title}
          packageId={packageData._id}
          destination={`${packageData.location.city}, ${packageData.location.state}, ${packageData.location.destination}`}
          onClose={() => setShowInquiryForm(false)}
        />
      )}
    </div>
  );
}
