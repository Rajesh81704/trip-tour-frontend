"use client";
import { Star, Quote } from "lucide-react";
import { memo } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai, India",
    rating: 5,
    text: "Book Itinerary transformed our family vacation into the most memorable experience ever. The personalized itinerary perfectly balanced adventure and relaxation. Absolutely outstanding service!",
    trip: "Kerala Backwaters",
  },
  {
    name: "Arjun Mehta",
    location: "Delhi, India",
    rating: 5,
    text: "From booking to return, everything was seamless. The guides were incredibly knowledgeable and passionate. We discovered hidden gems we'd never find on our own. Highly recommend!",
    trip: "Manali Mountain Trek",
  },
  {
    name: "Sneha Patel",
    location: "Ahmedabad, India",
    rating: 5,
    text: "The attention to detail is remarkable. Every accommodation was carefully selected, meals were delicious, and the entire team went above and beyond. Best travel investment ever!",
    trip: "Goa Beach Escape",
  },
  {
    name: "Rajesh Kumar",
    location: "Bangalore, India",
    rating: 5,
    text: "Book Itinerary created a custom adventure that exceeded all expectations. The 24/7 support was incredibly helpful. We felt safe and cared for throughout the entire journey. Coming back soon!",
    trip: "Himalayan Adventure",
  },
  {
    name: "Divya Singh",
    location: "Pune, India",
    rating: 5,
    text: "Incredible value for money with premium experiences. The team listened to our preferences and designed something truly unique. We're already planning our next trip with them!",
    trip: "Northeast Explorer",
  },
  {
    name: "Vikram Gupta",
    location: "Jaipur, India",
    rating: 5,
    text: "Professional, reliable, and genuinely passionate about travel. Every moment was perfectly orchestrated. The flexibility to make changes on the go was a huge plus. Five stars all the way!",
    trip: "Rajasthan Cultural Tour",
  },
];

export default memo(function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label-premium mb-3">⭐ Traveler Reviews</p>
          <h2 className="heading-premium text-[32px] sm:text-[40px] text-gradient-premium mb-3">
            Stories from Our Happy Travelers
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-4">
            Discover why thousands of travelers choose us for their dream vacations
          </p>
          <div className="flex gap-2 justify-center">
            <div className="w-12 h-1 bg-gradient-to-r from-[#2563EB] to-[#F59E0B] rounded-full" />
            <div className="w-8 h-1 bg-gradient-to-r from-[#F59E0B] to-[#7C3AED] rounded-full" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{testimonials.map((t, i) => (
            <div
              key={i}
              className="relative group bg-white rounded-[24px] p-7 flex flex-col hover:shadow-premium-hover border-2 border-gray-100 transition-all duration-300 hover-lift-premium overflow-hidden"
            >
              {/* Gradient top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563EB] via-[#F59E0B] to-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Watermark quote */}
              <div className="absolute top-4 right-4 opacity-[0.08]">
                <Quote className="h-16 w-16 text-[#2563EB]" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4 relative z-10">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>

              {/* Trip badge */}
              <span className="text-[11px] font-bold text-white uppercase tracking-widest mb-4 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] self-start px-3 py-1.5 rounded-full relative z-10">
                ✈️ {t.trip}
              </span>

              {/* Review */}
              <p className="text-[#374151] text-[14px] leading-relaxed flex-1 mb-6 relative z-10">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100 relative z-10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-[#111827] text-[13px] leading-none">{t.name}</p>
                  <p className="text-[11px] text-[#9CA3AF] mt-0.5">{t.location}</p>
                </div>
                <span className="text-[10px] font-bold text-[#16A34A] bg-green-50 px-2 py-0.5 rounded-full border border-green-100 shrink-0">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Compact rating summary */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 bg-white rounded-[18px] border border-[#E5E7EB] px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="text-[42px] font-extrabold text-[#111827] leading-none">4.8</div>
            <div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
              <div className="text-[12px] text-[#9CA3AF] mt-0.5">Based on 5,000+ reviews</div>
            </div>
          </div>

          <div className="hidden sm:block w-px h-12 bg-[#E5E7EB]" />

          <div className="flex items-center gap-8">
            {[
              { platform: "Google", score: "4.8", color: "text-[#4285F4]" },
              { platform: "TripAdvisor", score: "4.7", color: "text-[#00AF87]" },
              { platform: "TrustPilot", score: "4.6", color: "text-[#00B67A]" },
            ].map((r) => (
              <div key={r.platform} className="text-center">
                <div className={`text-[18px] font-extrabold ${r.color} leading-none`}>{r.score}/5</div>
                <div className="text-[11px] text-[#9CA3AF] mt-0.5">{r.platform}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
