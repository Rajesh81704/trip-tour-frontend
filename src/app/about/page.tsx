import {
  Users,
  Star,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";

const About = () => {
  const stats = [
    { icon: "🌍", label: "Happy Travelers", value: "50,000+", description: "Trusted worldwide" },
    { icon: "🏆", label: "Destinations", value: "100+", description: "Across the globe" },
    { icon: "⭐", label: "Awards Won", value: "25+", description: "Industry recognized" },
    { icon: "📅", label: "Years Experience", value: "15+", description: "Industry leading" },
  ];

  const features = [
    {
      icon: "🛡️",
      title: "100% Safe & Secure",
      description: "Your safety is our priority with verified accommodations and 24/7 support",
      gradient: "from-blue-50 to-blue-100/50",
    },
    {
      icon: "✨",
      title: "Expert Guidance",
      description: "Our travel experts craft personalized itineraries for unforgettable experiences",
      gradient: "from-amber-50 to-amber-100/50",
    },
    {
      icon: "🗺️",
      title: "Local Insights",
      description: "Discover hidden gems and authentic experiences with our local knowledge",
      gradient: "from-rose-50 to-rose-100/50",
    },
    {
      icon: "📅",
      title: "Flexible Booking",
      description: "Easy booking with flexible cancellation and customizable travel dates",
      gradient: "from-green-50 to-green-100/50",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Banner - Premium Redesign */}
      <section className="relative min-h-[450px] overflow-hidden pt-[100px] pb-[80px] bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800">
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute -bottom-10 -left-20 w-[500px] h-[500px] bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        </div>
        <div className="relative z-10">
          <div className="max-w-[1320px] mx-auto w-full px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/12 backdrop-blur-md border border-white/20 text-white/90 text-[11px] font-semibold px-4 py-1.5 rounded-full mb-8 tracking-widest uppercase hover-lift-premium cursor-pointer">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#EF4444] animate-pulse shrink-0" />
                ✨ Our Story & Mission
              </div>
              <h1 className="heading-premium text-[clamp(2.4rem,6vw,4rem)] text-white leading-tight mb-6 drop-shadow-2xl font-black">
                Turning Dreams Into<br/>
                <span className="text-white">Extraordinary Adventures</span>
              </h1>
              <p className="text-white/85 text-lg max-w-2xl font-normal leading-relaxed">
                For over 15 years, we've been crafting transformative travel experiences that connect cultures, create memories, and inspire wanderlust in every traveler we meet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative group bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-[24px] border-2 border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-premium-hover hover-lift-premium transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-[24px]" />
                </div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4 group-hover:animate-bounce transition-all duration-300">{stat.icon}</div>
                  <div className="text-[36px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#7C3AED] leading-none mb-2">
                    {stat.value}
                  </div>
                  <p className="text-[14px] font-bold text-gray-700 mb-1">{stat.label}</p>
                  <p className="text-[12px] text-gray-500 font-medium">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section - Premium Layout */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#2563EB] to-[#F59E0B]"></div>
                <p className="section-label-premium">Who We Are</p>
              </div>
              <h2 className="heading-premium text-[40px] text-gray-900 leading-tight mb-6">
                Redefining Travel<br/>
                <span className="text-gradient-premium">One Journey at a Time</span>
              </h2>
              <div className="flex gap-2 mb-8">
                <div className="w-12 h-1 bg-gradient-to-r from-[#2563EB] to-[#F59E0B] rounded-full" />
                <div className="w-8 h-1 bg-gradient-to-r from-[#F59E0B] to-[#7C3AED] rounded-full" />
              </div>
              <div className="space-y-6 text-[15px] text-gray-700 leading-relaxed">
                <p className="flex gap-3">
                  <span className="text-2xl shrink-0">🌟</span>
                  <span><strong>Founded in 2008</strong>, Book Itinerary began as a small dream to make extraordinary travel accessible to everyone. What started as a passion project has grown into one of India&apos;s most trusted travel companions.</span>
                </p>
                <p className="flex gap-3">
                  <span className="text-2xl shrink-0">🎯</span>
                  <span>We believe travel is more than visiting places – it&apos;s about <strong>connecting with cultures</strong>, creating lasting memories, and discovering perspectives that enrich your life forever.</span>
                </p>
                <p className="flex gap-3">
                  <span className="text-2xl shrink-0">✨</span>
                  <span>Today, we craft <strong>personalized journeys</strong> that transcend the ordinary, ensuring every trip is as unique as the travelers who embark on them.</span>
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2">
                  <Star className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" />
                  <span className="text-sm font-semibold text-blue-900">4.9/5 Rated</span>
                </div>
                <div className="flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-4 py-2">
                  <Users className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-900">50K+ Travelers</span>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#2563EB] to-[#F59E0B] rounded-[24px] opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
              <Image
                width={500}
                height={600}
                src="/bg-image/image.png"
                alt="Our Story"
                className="relative rounded-[24px] shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-[20px] shadow-2xl border border-gray-100 p-6 max-w-xs backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-4xl">🏆</div>
                  <div>
                    <p className="font-bold text-gray-900">Industry Leader</p>
                    <p className="text-sm text-gray-600">25+ Awards & Recognition</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Premium Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#2563EB] to-[#F59E0B]"></div>
              <p className="section-label-premium">Why Choose Us</p>
            </div>
            <h2 className="heading-premium text-[40px] text-gray-900 leading-tight mb-3">
              Why Travelers<br/>
              <span className="text-gradient-premium">Trust Us</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-6">
              We don't just plan trips, we create life-changing experiences that stay with you forever.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative group bg-gradient-to-br ${feature.gradient} rounded-[24px] border-2 border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-premium-hover hover-lift-premium transition-all duration-300 overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-[24px]" />
                </div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4 group-hover:animate-bounce transition-all duration-300">{feature.icon}</div>
                  <h3 className="font-bold text-gray-900 text-[16px] mb-3 heading-premium">{feature.title}</h3>
                  <p className="text-[14px] text-gray-700 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] font-extrabold text-[#2563EB] uppercase tracking-widest mb-2">Get In Touch</p>
            <h2 className="text-[36px] font-extrabold text-[#111827] leading-tight">
              Contact & Our Offices
            </h2>
            <div className="w-14 h-1 bg-[#F59E0B] rounded-full mt-3 mx-auto" />
          </div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12 max-w-2xl mx-auto">
            <a
              href="tel:+919315666960"
              className="flex items-center gap-4 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[20px] p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="bg-amber-100 w-12 h-12 rounded-2xl flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-[#F59E0B]" />
              </div>
              <div>
                <p className="text-[12px] text-[#6B7280] font-medium mb-0.5">Support Number</p>
                <p className="text-[15px] font-bold text-[#111827]">+91 9315666960</p>
              </div>
            </a>
            <a
              href="mailto:info@bookitinerary.com"
              className="flex items-center gap-4 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[20px] p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-2xl flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-[#2563EB]" />
              </div>
              <div>
                <p className="text-[12px] text-[#6B7280] font-medium mb-0.5">Email Us</p>
                <p className="text-[15px] font-bold text-[#111827]">info@bookitinerary.com</p>
              </div>
            </a>
          </div>

          {/* Offices grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                flag: "🇮🇳",
                country: "India (HQ)",
                name: "Book Itinerary Tours & Travel",
                address: "SCF-37, Sector 11D, Haryana – 121006",
                badge: null,
              },
              {
                flag: "🇦🇪",
                country: "Dubai, UAE",
                name: "Dubai Office",
                address: "Shop #03, AL Souq Al Kabeer, Meena Bazar, Burdubai, Dubai, UAE",
                badge: "PO Box: 87867",
              },
              {
                flag: "🇸🇬",
                country: "Singapore",
                name: "Singapore Office",
                address: "291, Seragoon Road #01-01, Seragoon Building, Singapore 218107",
                badge: "Near Sitara Restaurant",
              },
              {
                flag: "🇭🇰",
                country: "Hong Kong",
                name: "Hong Kong Office",
                address: "Cheung Lee Commercial Building, 25 Kimberley Road, Tsim Sha Tsui, Kowloon",
                badge: "Licence No: 350318",
              },
            ].map(({ flag, country, name, address, badge }) => (
              <div
                key={country}
                className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[20px] p-6 hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-3">{flag}</div>
                <p className="text-[11px] font-extrabold text-[#2563EB] uppercase tracking-widest mb-1">{country}</p>
                <p className="text-[15px] font-bold text-[#111827] mb-2">{name}</p>
                <p className="text-[13px] text-[#6B7280] leading-relaxed mb-3">{address}</p>
                {badge && (
                  <span className="inline-block text-[11px] font-semibold bg-amber-100 text-[#D97706] px-2.5 py-1 rounded-full">
                    {badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
