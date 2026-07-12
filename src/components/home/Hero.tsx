"use client";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar, Users, Search } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative">
      {/* Hero Image */}
      <div className="relative h-[650px] min-h-[560px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Travel destination"
          className="w-full h-full object-cover scale-105"
          style={{ objectPosition: "center 30%" }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/35 to-black/65" />
        <div className="absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-transparent" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="max-w-[1320px] mx-auto w-full px-6 lg:px-8">
            <div className="max-w-[640px]">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
                Trusted by 50,000+ Happy Travelers
              </div>

              {/* Headline */}
              <h1 className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold text-white leading-[1.1] tracking-tight drop-shadow-lg mb-5">
                Handpicked Packages<br />
                <span
                  className="text-[#F59E0B]"
                  style={{ fontStyle: "italic" }}
                >
                  For Your Dream Journey
                </span>
              </h1>

              <p className="text-white/85 text-[17px] leading-relaxed font-medium drop-shadow mb-8 max-w-[500px]">
                Curated experiences, unbeatable prices and memories that last a lifetime.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/packages"
                  className="inline-flex items-center gap-2.5 bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-8 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-250 hover:-translate-y-0.5 text-[15px]"
                >
                  Explore Packages
                  <ArrowRight className="h-4.5 w-4.5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold px-7 py-3.5 rounded-full border border-white/30 backdrop-blur-sm transition-all duration-250 text-[15px]"
                >
                  Talk to Expert
                </Link>
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap items-center gap-6 mt-10">
                {[
                  { value: "500+", label: "Packages" },
                  { value: "50K+", label: "Happy Travelers" },
                  { value: "100+", label: "Destinations" },
                  { value: "4.8★", label: "Rating" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-white font-extrabold text-xl leading-none">{stat.value}</div>
                    <div className="text-white/70 text-xs mt-0.5 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Search Bar */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 -mt-[34px] relative z-10">
        <div
          className="bg-white rounded-[22px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] px-4 sm:px-6 py-4 sm:py-5"
        >
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0">
            {/* Where to */}
            <div className="flex items-center gap-3 flex-1 min-w-0 sm:px-4 py-1 cursor-pointer group">
              <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <MapPin className="h-4.5 w-4.5 text-[#2563EB]" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-0.5">Where to?</p>
                <p className="text-sm text-gray-400 truncate group-hover:text-gray-600 transition-colors">All Destinations</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-gray-150 self-center shrink-0 mx-1" style={{background: '#e5e7eb'}} />

            {/* Check In */}
            <div className="flex items-center gap-3 flex-1 min-w-0 sm:px-4 py-1 cursor-pointer group">
              <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Calendar className="h-4.5 w-4.5 text-[#2563EB]" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-0.5">Check In</p>
                <p className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors">Select Date</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-gray-150 self-center shrink-0 mx-1" style={{background: '#e5e7eb'}} />

            {/* Check Out */}
            <div className="flex items-center gap-3 flex-1 min-w-0 sm:px-4 py-1 cursor-pointer group">
              <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Calendar className="h-4.5 w-4.5 text-[#2563EB]" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-0.5">Check Out</p>
                <p className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors">Select Date</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-gray-150 self-center shrink-0 mx-1" style={{background: '#e5e7eb'}} />

            {/* Travelers */}
            <div className="flex items-center gap-3 flex-1 min-w-0 sm:px-4 py-1 cursor-pointer group">
              <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Users className="h-4.5 w-4.5 text-[#2563EB]" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-0.5">Travelers</p>
                <p className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors">2 Adults, 0 Children</p>
              </div>
            </div>

            {/* Search Button */}
            <div className="sm:ml-3 shrink-0">
              <Link
                href="/packages"
                className="flex items-center justify-center gap-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold px-7 py-3.5 rounded-[14px] shadow-lg hover:shadow-xl transition-all duration-250 hover:-translate-y-0.5 text-[15px] w-full sm:w-auto whitespace-nowrap"
              >
                <Search className="h-4 w-4" />
                Search Packages
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
