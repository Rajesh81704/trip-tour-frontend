import {
  PackageHeader,
  ImageGallery,
  PackageDetails,
  InquiryForm,
  RelatedPackages,
  relatedPackages,
} from "@/components/packages";
import { packageData } from "@/data";
import { notFound } from "next/navigation";

interface PackageDetailPageProps {
  params: {
    id: string;
  };
}

export default async function PackageDetailPage({
  params,
}: PackageDetailPageProps) {
  const { id } = await params;

  const package_data = packageData.find((p) => p.id === parseInt(id));
  if (!package_data) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <PackageHeader
              title={package_data.title}
              location={package_data.location}
              duration={package_data.duration}
              rating={package_data.rating}
              reviews={package_data.reviews}
              features={package_data.features}
              discount={package_data.discount}
            />

            <ImageGallery
              images={package_data.images}
              title={package_data.title}
            />

            <PackageDetails
              description={package_data.description}
              highlights={package_data.highlights}
              itinerary={package_data.itinerary}
              inclusions={package_data.inclusions}
              exclusions={package_data.exclusions}
              rating={package_data.rating}
              reviews={package_data.reviews}
            />
          </div>

          <div className="space-y-6">
            <InquiryForm
              price={package_data.price}
              originalPrice={package_data.originalPrice}
              discount={package_data.discount}
            />

            <RelatedPackages packages={relatedPackages} />
          </div>
        </div>
      </div>
    </div>
  );
}
