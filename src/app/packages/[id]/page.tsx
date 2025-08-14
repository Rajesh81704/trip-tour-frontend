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
  const [showInquiryForm, setShowInquiryForm] = useState(true);

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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center py-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading package details...</p>
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 mt-20">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="xl:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8">
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
            />
          </div>

          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {!showInquiryForm && (
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-xl border border-gray-100">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Interested in this package?
                </h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  Get detailed information, pricing, and book your dream
                  vacation.
                </p>
                <button
                  onClick={() => setShowInquiryForm(true)}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
                >
                  Get Quote & Book Now
                </button>
              </div>
            )}

            {showInquiryForm && (
              <div className="sticky top-24">
                <InquiryForm
                  packageTitle={packageData.title}
                  packageId={packageData._id}
                  destination={`${packageData.location.city}, ${packageData.location.state}, ${packageData.location.destination}`}
                  onClose={() => setShowInquiryForm(false)}
                />
              </div>
            )}

            {/* <RelatedPackages packages={relatedPackages} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
