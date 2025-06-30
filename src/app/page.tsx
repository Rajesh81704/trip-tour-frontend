import { Hero } from "@/components/Hero";
import { FeaturedPackages } from "@/components/FeaturedPackages";
import { Destinations } from "@/components/Destinations";
import Testimonials from "@/components/Testimonials";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeaturedPackages />
      <Destinations />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </div>
  );
}
