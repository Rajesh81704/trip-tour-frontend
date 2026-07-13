"use client";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar, Users, Search, Star, Shield, Clock } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative">
      {/* ── Full-screen Hero Image ── */}
      <div className="relative h-[88vh] min-h-[620px] max-h-[860px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Travel destination"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 35%" }}
        />

        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/50" />

        {/* ── Hero Content ── */}
        <div className="absolute inset-0 flex flex-col justify-center pb-16">
          <div className="max-w-[1320px] mx-auto w-full px-6 lg:px-16">
            <div className="max-w-[600px]">

              {/* Trust pill */}
              <div className="inline-flex items-center gap-2 bg-white/12 backdrop-blur-md border border-white/20 text-white/90 text-[11px] font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse shrink-0" />
                Trusted by 50,000+ Happy Travelers
              </div>

              {/* Headline */}
              <h1
                className="font-extrabold text-white leading-[1.1] tracking-tight drop-shadow-2xl mb-4"
                style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)" }}
              >
                Explore The World<br />
                <span style={{ color: "#F59E0B", fontStyle: "italic", fontFamily: "Georgia, 'Times New Roman', serif" }}>
                  With Unforgettable Journeys
                </span>
              </h1>

              <p className="text-white/75 text-[15px] sm:text-[17px] leading-relaxed font-normal mb-7 max-w-[460px]">
                Handpicked travel packages for your dream vacation. Best price guaranteed — every time.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <Link
                  href="/packages"
                  className="inline-flex items-center gap-2.5 bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-7 py-3 rounded-full shadow-[0_8px_24px_rgba(245,158,11,0.4)] hover:shadow-[0_12px_32px_rgba(245,158,11,0.5)] transition-all duration-300 hover:-translate-y-0.5 text-[14px]"
                >
                  Explore Packages
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/12 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full border border-white/30 backdrop-blur-sm transition-all duration-300 text-[14px]"
                >
                  Talk to Expert
                </Link>
              </div>

              {/* Mini trust chips */}
              <div className="flex flex-wrap gap-2.5">
                {[
                  { icon: Shield, text: "Best Price Guarantee" },
                  { icon: Star, text: "4.8★ Rated" },
                  { icon: Clock, text: "24/7 Support" },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 text-white/80 text-[11px] font-medium px-3 py-1.5 rounded-full"
                  >
                    <Icon className="h-3 w-3 text-[#F59E0B]" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats bar — bottom of image ── */}
        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/75 to-transparent">
          <div className="max-w-[1320px] mx-auto px-6 lg:px-16 pb-6 pt-8">
            <div className="flex flex-wrap gap-6 sm:gap-10">
              {[
                { value: "500+", label: "Packages" },
                { value: "50K+", label: "Happy Travelers" },
                { value: "100+", label: "Destinations" },
                { value: "15+", label: "Years Experience" },
              ].map((s) => (
                <div key={s.label} className="flex items-baseline gap-1.5">
                  <div className="text-white font-extrabold text-[20px] leading-none">{s.value}</div>
                  <div className="text-white/55 text-[12px] font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Floating Search Bar ── */}
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 mt-[-24px] relative z-20">
        <div className="bg-white rounded-[16px] shadow-[0_16px_50px_rgba(0,0,0,0.14)] px-3 sm:px-4 py-3.5 border border-gray-100/80">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-0">

            {/* Where to */}
            <div className="flex items-center gap-2.5 flex-1 sm:px-3 py-1 cursor-pointer min-w-0">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <MapPin className="h-[15px] w-[15px] text-[#2563EB]" />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] font-bold text-[#9CA3AF] uppercase tracking-wider leading-none mb-0.5">Where to?</p>
                <p className="text-[13px] text-[#374151] font-medium truncate">All Destinations</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-8 bg-[#F3F4F6] shrink-0" />

            {/* Check In */}
            <div className="flex items-center gap-2.5 flex-1 sm:px-3 py-1 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Calendar className="h-[15px] w-[15px] text-[#2563EB]" />
              </div>
              <div>
                <p className="text-[9px] font-bold text-[#9CA3AF] uppercase tracking-wider leading-none mb-0.5">Check In</p>
                <p className="text-[13px] text-[#374151] font-medium">Select Date</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-8 bg-[#F3F4F6] shrink-0" />

            {/* Check Out */}
            <div className="flex items-center gap-2.5 flex-1 sm:px-3 py-1 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Calendar className="h-[15px] w-[15px] text-[#2563EB]" />
              </div>
              <div>
                <p className="text-[9px] font-bold text-[#9CA3AF] uppercase tracking-wider leading-none mb-0.5">Check Out</p>
                <p className="text-[13px] text-[#374151] font-medium">Select Date</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-8 bg-[#F3F4F6] shrink-0" />

            {/* Travelers */}
            <div className="flex items-center gap-2.5 flex-1 sm:px-3 py-1 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Users className="h-[15px] w-[15px] text-[#2563EB]" />
              </div>
              <div>
                <p className="text-[9px] font-bold text-[#9CA3AF] uppercase tracking-wider leading-none mb-0.5">Travelers</p>
                <p className="text-[13px] text-[#374151] font-medium">2 Adults, 0 Children</p>
              </div>
            </div>

            {/* Search Button */}
            <div className="sm:ml-2.5 shrink-0">
              <Link
                href="/packages"
                className="flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold px-6 py-2.5 rounded-[11px] text-[13px] shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto whitespace-nowrap"
              >
                <Search className="h-3.5 w-3.5" />
                Search Packages
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
