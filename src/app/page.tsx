import { Hero } from "@/components/home/Hero";
import { FeaturedPackages } from "@/components/home/FeaturedPackages";
import { Destinations } from "@/components/home/Destinations";
import Testimonials from "@/components/home/Testimonials";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import DestinationPackages from "@/components/home/DestinationPackages";
import { WhatsSpecial } from "@/components/home/WhatsSpecial";
import { IndianCities } from "@/components/home/IndianCities";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <FeaturedPackages />
      <Destinations />
      <DestinationPackages />
      <WhatsSpecial />

      <IndianCities />

      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}
