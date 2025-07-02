"use client";

import {
  PackageHeader,
  ImageGallery,
  PackageDetails,
  InquiryForm,
  RelatedPackages,
  packageData,
  relatedPackages,
} from "@/components/packages";

export default function PackageDetailPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Package Header */}
            <PackageHeader
              title={packageData.title}
              location={packageData.location}
              duration={packageData.duration}
              rating={packageData.rating}
              reviews={packageData.reviews}
              features={packageData.features}
              discount={packageData.discount}
            />

            {/* Image Gallery */}
            <ImageGallery
              images={packageData.images}
              title={packageData.title}
            />

            {/* Package Details */}
            <PackageDetails
              description={packageData.description}
              highlights={packageData.highlights}
              itinerary={packageData.itinerary}
              inclusions={packageData.inclusions}
              exclusions={packageData.exclusions}
              rating={packageData.rating}
              reviews={packageData.reviews}
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Inquiry Form */}
            <InquiryForm
              price={packageData.price}
              originalPrice={packageData.originalPrice}
              discount={packageData.discount}
            />

            {/* Related Packages */}
            <RelatedPackages packages={relatedPackages} />
          </div>
        </div>
      </div>
    </div>
  );
}
