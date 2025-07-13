"use client";

import {
  PackageHeader,
  ImageGallery,
  PackageDetails,
  InquiryForm,
  // RelatedPackages,
  PackageData,
} from "@/components/packages";
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const { id } = await params;
        console.log("Fetching package with ID:", id);
        
        const response = await api.get<{ success: boolean; package: PackageData; reviews: any[] }>(`/packages/${id}`);
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
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <PackageHeader
              title={packageData.title}
              location={packageData.location.destination}
              duration={`${packageData.duration.day} Days ${packageData.duration.night} Nights`}
              rating={packageData.rating || 0}
              reviews={Array.isArray(packageData.reviews) ? packageData.reviews.length : (packageData.reviews || 0)}
              features={packageData.features}
              discount={`${packageData.discount}% OFF`}
            />

            <ImageGallery
              images={packageData.images}
              title={packageData.title}
            />

            <PackageDetails
              description={packageData.description}
              highlights={packageData.highlights}
              itinerary={packageData.itinerary}
              inclusions={packageData.inclusions}
              exclusions={packageData.exclusions}
              rating={packageData.rating || 0}
              reviews={Array.isArray(packageData.reviews) ? packageData.reviews.length : (packageData.reviews || 0)}
            />
          </div>

          <div className="space-y-6">
            {/* <InquiryForm
              packageTitle={packageData.title}
              onClose={() => {}}
            /> */}

            {/* <RelatedPackages packages={relatedPackages} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
