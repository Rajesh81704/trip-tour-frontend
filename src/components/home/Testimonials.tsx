"use client";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai, India",
    rating: 5,
    text: "NatureVacation made our Kerala trip absolutely magical. Every detail was taken care of — from the houseboat to the hill stations. Truly a 5-star experience!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    trip: "Kerala Trip",
  },
  {
    name: "Arjun Mehta",
    location: "Delhi, India",
    rating: 5,
    text: "Best Manali trip I've ever had. The guides were knowledgeable, hotels excellent, and the itinerary was perfectly planned. Will definitely book again!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    trip: "Manali Adventure",
  },
  {
    name: "Sneha Patel",
    location: "Ahmedabad, India",
    rating: 5,
    text: "Our Goa beach holiday was unforgettable. Great value for money, seamless bookings, and the team was always available for support. Highly recommended!",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    trip: "Goa Beach Holiday",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-2">Traveler Reviews</p>
          <h2 className="text-[36px] font-extrabold text-[#111827] leading-tight">
            What Our Travelers Say
          </h2>
          <div className="w-14 h-1 bg-[#F59E0B] rounded-full mt-3 mx-auto" />
          <p className="text-[#6B7280] text-[16px] mt-5 max-w-xl mx-auto leading-relaxed">
            Real stories from real travelers who explored the world with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#F8FAFC] rounded-[20px] p-7 flex flex-col hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 border border-[#E5E7EB] relative overflow-hidden group"
            >
              {/* Decorative quote icon */}
              <div className="absolute top-5 right-5 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="h-16 w-16 text-[#2563EB]" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>

              {/* Trip label */}
              <span className="text-[11px] font-bold text-[#2563EB] uppercase tracking-widest mb-3 bg-blue-50 self-start px-2.5 py-1 rounded-full">
                {t.trip}
              </span>

              {/* Review text */}
              <p className="text-[#374151] text-[14px] leading-relaxed flex-1 mb-6 relative z-10">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-[#E5E7EB] pt-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={44}
                  height={44}
                  className="rounded-full object-cover w-11 h-11 ring-2 ring-[#E5E7EB]"
                />
                <div>
                  <p className="font-bold text-[#111827] text-[14px]">{t.name}</p>
                  <p className="text-[12px] text-[#9CA3AF]">{t.location}</p>
                </div>
                <div className="ml-auto">
                  <div className="bg-[#22C55E]/10 text-[#16A34A] text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Verified
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating summary */}
        <div className="mt-12 bg-[#F8FAFC] rounded-[20px] border border-[#E5E7EB] p-8 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          <div className="text-center">
            <div className="text-[48px] font-extrabold text-[#111827] leading-none">4.8</div>
            <div className="flex items-center justify-center gap-0.5 mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" />
              ))}
            </div>
            <div className="text-[13px] text-[#6B7280] mt-1">Average Rating</div>
          </div>

          <div className="hidden sm:block w-px h-16 bg-[#E5E7EB]" />

          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              { platform: "Google", score: "4.8/5", color: "text-[#4285F4]" },
              { platform: "TripAdvisor", score: "4.7/5", color: "text-[#00AF87]" },
              { platform: "TrustPilot", score: "4.6/5", color: "text-[#00B67A]" },
            ].map((r) => (
              <div key={r.platform} className="text-center">
                <div className={`text-[20px] font-extrabold ${r.color}`}>{r.score}</div>
                <div className="text-[12px] text-[#9CA3AF] mt-0.5 font-medium">{r.platform}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
