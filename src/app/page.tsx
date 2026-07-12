import { Hero } from "@/components/home/Hero";
import { FeaturedPackages } from "@/components/home/FeaturedPackages";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <FeaturedPackages />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}
