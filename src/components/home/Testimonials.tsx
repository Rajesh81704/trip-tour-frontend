"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    text: "TravelQuest made our Himalayan trek absolutely unforgettable. The guides were knowledgeable, the accommodations perfect, and every detail was handled with care.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Michael Chen",
    location: "London, UK",
    rating: 5,
    text: "The African Safari exceeded all expectations. From the wildlife encounters to the luxury camps, everything was perfectly organized. Highly recommend!",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Emily Rodriguez",
    location: "Barcelona, Spain",
    rating: 5,
    text: "Our desert expedition in Morocco was magical. The team's attention to detail and cultural insights made this journey truly special and memorable.",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-3 tracking-tight">
            What Our Travelers Say
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            Inspiring journeys, unforgettable memories. Hear from our explorers!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <Card
              key={i}
              className="relative bg-white rounded-3xl shadow-xl border-0 p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-tr from-orange-400 to-pink-500 rounded-full p-2 shadow-lg">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={64}
                  height={64}
                  className="rounded-full border-4 border-white object-cover w-16 h-16"
                />
              </div>
              <CardContent className="mt-10 flex flex-col items-center">
                <Quote className="h-8 w-8 text-orange-400 mb-4" />
                <p className="text-gray-700 text-base mb-6 font-medium">
                  {t.text}
                </p>
                <div className="flex items-center justify-center mb-2">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-5 w-5 text-orange-400 fill-orange-400"
                    />
                  ))}
                </div>
                <div className="font-bold text-blue-900 text-lg">{t.name}</div>
                <div className="text-sm text-gray-500">{t.location}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
