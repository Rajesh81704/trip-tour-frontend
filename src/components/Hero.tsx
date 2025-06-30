"use client";
import { Button } from "@/components/ui/button";
import { FloatingInquiryForm } from "./FloatingInquiryForm";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
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
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-8 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight font-playfair drop-shadow-lg">
            <span className="block">Discover Your</span>
            <span className="block bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient-x">
              Dream Escape
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow">
            Unforgettable journeys, handpicked destinations, and seamless
            experiences. Let us craft your next adventure.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button className="h-12 px-8 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-lg font-semibold shadow-2xl transition-all duration-200">
              Explore Packages
            </Button>
            <Button
              variant="outline"
              className="h-12 px-8 text-lg font-semibold bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 transition-all duration-200"
            >
              Call: +91-9876543210
            </Button>
          </div>
        </div>
        {/* Right Side - Inquiry Form */}
        <div className="flex-1 flex justify-center lg:justify-end w-full">
          {/* <div className="bg-white/80 rounded-3xl shadow-2xl p-6 sm:p-8 backdrop-blur-md max-w-md w-full animate-fade-in-up"> */}
          <FloatingInquiryForm />
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};
