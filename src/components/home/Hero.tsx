"use client";
import { Button } from "@/components/ui/button";
import { FloatingInquiryForm } from "./FloatingInquiryForm";
import { ArrowRight, Calendar } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover brightness-75"
        >
          <source
            src="https://videos.pexels.com/video-files/2169880/2169880-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl px-3 sm:px-4 md:px-8 py-8 sm:py-16 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left space-y-6 sm:space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-white text-xs sm:text-sm font-medium">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="hidden xs:inline">
              Trusted by 10,000+ travelers
            </span>
            <span className="xs:hidden">10,000+ travelers</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight font-playfair drop-shadow-2xl">
              <span className="block text-white">Discover Your</span>
              <span className="block bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                Dream Escape
              </span>
            </h1>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 text-white">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-orange-400">
                500+
              </div>
              <div className="text-xs sm:text-sm text-gray-300">
                Destinations
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-pink-400">
                50K+
              </div>
              <div className="text-xs sm:text-sm text-gray-300">
                Happy Travelers
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400">
                24/7
              </div>
              <div className="text-xs sm:text-sm text-gray-300">Support</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <Button className="group h-12 sm:h-14 px-8 sm:px-16 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-base sm:text-lg font-semibold shadow-2xl transition-all duration-300 rounded-full">
              <span>Explore Packages</span>
              <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="group h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-semibold bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 transition-all duration-300 rounded-full"
            >
              <span className="hidden sm:inline">Call: +91-9876543210</span>
              <span className="sm:hidden">Call Now</span>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1 sm:-space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 border-2 border-white"
                  />
                ))}
              </div>
              <span className="text-xs sm:text-sm">Join 10K+ travelers</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-orange-400" />
              <span className="text-xs sm:text-sm">Free cancellation</span>
            </div>
          </div>
        </div>
        <FloatingInquiryForm />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-0.5 sm:w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-1.5 sm:mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
