import { Hero } from "@/components/home/Hero";
import { FeaturedPackages } from "@/components/home/FeaturedPackages";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TripToo Travels - Explore Your Dream Destinations | Travel Packages",
  description:
    "Discover curated travel packages across India and world. Book your next adventure with TripToo Travels. Best deals on tours, hotels, and flights. Plan your dream vacation today!",
  keywords: ["travel packages", "tour deals", "vacation", "adventure", "travel agencies"],
  openGraph: {
    title: "TripToo Travels - Book Your Dream Vacation",
    description: "Curated travel packages and experiences tailored for you",
    type: "website",
  },
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <Hero />
      <FeaturedPackages />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}
