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
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[11px] font-extrabold text-[#2563EB] uppercase tracking-widest mb-2">
            Traveler Reviews
          </p>
          <h2 className="text-[28px] sm:text-[32px] font-extrabold text-[#111827] leading-tight">
            What Our Travelers Say
          </h2>
          <div className="w-12 h-1 bg-[#F59E0B] rounded-full mt-2.5 mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-[20px] p-6 flex flex-col hover:shadow-[0_12px_40px_rgba(0,0,0,0.09)] transition-all duration-300 hover:-translate-y-1 border border-[#E5E7EB] relative overflow-hidden group"
            >
              {/* Watermark quote */}
              <div className="absolute top-4 right-4 opacity-[0.06]">
                <Quote className="h-14 w-14 text-[#2563EB]" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-3.5 w-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>

              {/* Trip badge */}
              <span className="text-[10px] font-bold text-[#2563EB] uppercase tracking-widest mb-3 bg-blue-50 self-start px-2.5 py-1 rounded-full">
                {t.trip}
              </span>

              {/* Review */}
              <p className="text-[#374151] text-[13px] leading-relaxed flex-1 mb-5">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-2.5 pt-4 border-t border-[#F3F4F6]">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover w-10 h-10 ring-2 ring-[#E5E7EB]"
                />
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
              <div className="text-[12px] text-[#9CA3AF] mt-0.5">Based on 3,200+ reviews</div>
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
}
