"use client";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar, Users } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-16">
      {/* Hero image */}
      <div className="relative h-[85vh] min-h-[560px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Travel destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

        {/* Hero text */}
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg mb-4">
              Explore The World<br />
              With{" "}
              <span className="text-orange-400">Unforgettable</span>
              <br />Journeys
            </h1>
            <p className="text-base sm:text-lg text-white/90 mb-8 font-medium drop-shadow">
              Handpicked travel packages for your dream vacation. Best price guaranteed!
            </p>
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3.5 rounded-full shadow-lg transition-colors duration-200"
            >
              Explore Packages
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Search bar */}
      <div className="max-w-5xl mx-auto px-4 -mt-10 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          {/* Where to */}
          <div className="flex items-start gap-3 flex-1 min-w-0">
            <MapPin className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
            <div className="min-w-0">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">Where to?</p>
              <p className="text-sm text-gray-400 truncate">Search Destinations</p>
            </div>
          </div>
          <div className="hidden sm:block w-px bg-gray-200 self-stretch" />
          {/* Check In */}
          <div className="flex items-start gap-3 flex-1 min-w-0">
            <Calendar className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">Check In</p>
              <p className="text-sm text-gray-400">Select Date</p>
            </div>
          </div>
          <div className="hidden sm:block w-px bg-gray-200 self-stretch" />
          {/* Check Out */}
          <div className="flex items-start gap-3 flex-1 min-w-0">
            <Calendar className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">Check Out</p>
              <p className="text-sm text-gray-400">Select Date</p>
            </div>
          </div>
          <div className="hidden sm:block w-px bg-gray-200 self-stretch" />
          {/* Travelers */}
          <div className="flex items-start gap-3 flex-1 min-w-0">
            <Users className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">Travelers</p>
              <p className="text-sm text-gray-400">2 Adults, 0 Children</p>
            </div>
          </div>
          <Link
            href="/packages"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-xl transition-colors text-sm whitespace-nowrap shadow-sm"
          >
            Search Packages
          </Link>
        </div>
      </div>
    </section>
  );
};
