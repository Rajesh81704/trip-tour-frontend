import { Hero } from "@/components/home/Hero";
import { FeaturedPackages } from "@/components/home/FeaturedPackages";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";

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
