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
  },
  {
    name: "Arjun Mehta",
    location: "Delhi, India",
    rating: 5,
    text: "Best Manali trip I've ever had. The guides were knowledgeable, hotels excellent, and the itinerary was perfectly planned. Will definitely book again!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Sneha Patel",
    location: "Ahmedabad, India",
    rating: 5,
    text: "Our Goa beach holiday was unforgettable. Great value for money, seamless bookings, and the team was always available for support. Highly recommended!",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">
            Traveler Reviews
          </p>
          <h2 className="text-3xl font-bold text-gray-900">What Our Travelers Say</h2>
          <div className="w-12 h-1 bg-orange-500 rounded-full mt-3 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col hover:shadow-md transition-shadow"
            >
              <Quote className="h-7 w-7 text-orange-400 mb-4" />
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">{t.text}</p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={44}
                  height={44}
                  className="rounded-full object-cover w-11 h-11"
                />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
