import {
  Users,
  Award,
  Globe,
  Heart,
  Star,
  MapPin,
  Calendar,
  Shield,
} from "lucide-react";
import Image from "next/image";

const About = () => {
  const stats = [
    { icon: Users, label: "Happy Travelers", value: "50,000+", bg: "bg-blue-100", color: "text-[#2563EB]" },
    { icon: Globe, label: "Destinations", value: "100+", bg: "bg-green-100", color: "text-[#22C55E]" },
    { icon: Award, label: "Awards Won", value: "25+", bg: "bg-purple-100", color: "text-purple-600" },
    { icon: Heart, label: "Years Experience", value: "15+", bg: "bg-orange-100", color: "text-[#F59E0B]" },
  ];

  const features = [
    {
      icon: Shield,
      title: "100% Safe & Secure",
      description: "Your safety is our priority with verified accommodations and 24/7 support",
      bg: "bg-blue-100",
      color: "text-[#2563EB]",
    },
    {
      icon: Star,
      title: "Expert Guidance",
      description: "Our travel experts craft personalized itineraries for unforgettable experiences",
      bg: "bg-amber-100",
      color: "text-[#F59E0B]",
    },
    {
      icon: MapPin,
      title: "Local Insights",
      description: "Discover hidden gems and authentic experiences with our local knowledge",
      bg: "bg-rose-100",
      color: "text-rose-500",
    },
    {
      icon: Calendar,
      title: "Flexible Booking",
      description: "Easy booking with flexible cancellation and customizable travel dates",
      bg: "bg-green-100",
      color: "text-[#22C55E]",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8",
      description: "Passionate traveler with 20+ years in the industry, visited 80+ countries",
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      description: "Expert in logistics and customer experience, ensuring seamless journeys",
    },
    {
      name: "Emily Rodriguez",
      role: "Travel Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Specialist in crafting unique travel experiences and cultural immersion",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Banner */}
      <section className="relative h-[280px] overflow-hidden pt-[68px]">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/40 to-black/65" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-[1320px] mx-auto w-full px-6 lg:px-8">
            <p className="text-[11px] font-bold text-[#F59E0B] uppercase tracking-widest mb-2">Our Story</p>
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-white leading-tight mb-3 drop-shadow-lg">
              About{" "}
              <span className="text-[#F59E0B] italic">TripToo Travels</span>
            </h1>
            <p className="text-white/80 text-[15px] max-w-lg font-medium">
              Turning your travel dreams into extraordinary adventures since 2008.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#F8FAFC] rounded-[20px] border border-[#E5E7EB] p-6 flex flex-col items-center text-center hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`${stat.bg} w-14 h-14 rounded-2xl flex items-center justify-center mb-4`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-[28px] font-extrabold text-[#111827] leading-none mb-1">
                  {stat.value}
                </div>
                <div className="text-[13px] text-[#6B7280] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-label mb-2">Who We Are</p>
              <h2 className="text-[36px] font-extrabold text-[#111827] leading-tight mb-4">
                Our Journey
              </h2>
              <div className="w-14 h-1 bg-[#F59E0B] rounded-full mb-7" />
              <div className="space-y-5 text-[15px] text-[#374151] leading-relaxed">
                <p>
                  🌟 <strong>Founded in 2008</strong>, TripToo Travels began as a small dream to make extraordinary travel accessible to everyone. What started as a passion project has grown into India&apos;s most trusted travel companion.
                </p>
                <p>
                  🎯 We believe that travel is more than just visiting places – it&apos;s about <strong>connecting with cultures</strong>, creating lasting memories, and discovering new perspectives that enrich your life forever.
                </p>
                <p>
                  ✨ Today, we continue to craft <strong>personalized journeys</strong> that go beyond the ordinary, ensuring every trip is as unique as the travelers who take them.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                width={800}
                height={600}
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828"
                alt="Our Story"
                className="rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] w-full object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.12)] p-4 border border-[#E5E7EB]">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>
                  <span className="font-bold text-[#111827] text-[14px]">4.9/5</span>
                </div>
                <p className="text-[12px] text-[#6B7280] mt-0.5">Based on 3,200+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-2">Why Choose Us</p>
            <h2 className="text-[36px] font-extrabold text-[#111827] leading-tight">
              Why Choose TripToo Travels?
            </h2>
            <div className="w-14 h-1 bg-[#F59E0B] rounded-full mt-3 mx-auto" />
            <p className="text-[#6B7280] text-[16px] mt-5 max-w-xl mx-auto leading-relaxed">
              We don&apos;t just plan trips, we create life-changing experiences that stay with you forever.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#F8FAFC] rounded-[20px] border border-[#E5E7EB] p-6 flex flex-col items-center text-center hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`${feature.bg} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="font-bold text-[#111827] text-[15px] mb-2">{feature.title}</h3>
                <p className="text-[13px] text-[#6B7280] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-2">The People Behind</p>
            <h2 className="text-[36px] font-extrabold text-[#111827] leading-tight">
              Meet Our Dream Team
            </h2>
            <div className="w-14 h-1 bg-[#F59E0B] rounded-full mt-3 mx-auto" />
            <p className="text-[#6B7280] text-[16px] mt-5 max-w-xl mx-auto leading-relaxed">
              The passionate people behind your perfect journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-[20px] border border-[#E5E7EB] overflow-hidden hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="relative overflow-hidden h-64">
                  <Image
                    width={400}
                    height={256}
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-[18px] font-extrabold text-[#111827] mb-1">{member.name}</h3>
                  <p className="text-[#2563EB] font-semibold text-[13px] mb-3">{member.role}</p>
                  <p className="text-[13px] text-[#6B7280] leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
