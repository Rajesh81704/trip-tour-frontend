import { Hero } from "@/components/home/Hero";
import { FeaturedPackages } from "@/components/home/FeaturedPackages";
import { Destinations } from "@/components/home/Destinations";
import Testimonials from "@/components/home/Testimonials";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import DestinationPackages from "@/components/DestinationPackages";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <FeaturedPackages />
      <Destinations />
      <DestinationPackages />

      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}
