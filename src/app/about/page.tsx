import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
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
    {
      icon: Users,
      label: "Happy Travelers",
      value: "50,000+",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      label: "Destinations",
      value: "100+",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Award,
      label: "Awards Won",
      value: "25+",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Heart,
      label: "Years Experience",
      value: "15+",
      color: "from-orange-500 to-red-500",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "100% Safe & Secure",
      description:
        "Your safety is our priority with verified accommodations and 24/7 support",
    },
    {
      icon: Star,
      title: "Expert Guidance",
      description:
        "Our travel experts craft personalized itineraries for unforgettable experiences",
    },
    {
      icon: MapPin,
      title: "Local Insights",
      description:
        "Discover hidden gems and authentic experiences with our local knowledge",
    },
    {
      icon: Calendar,
      title: "Flexible Booking",
      description:
        "Easy booking with flexible cancellation and customizable travel dates",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image:
        "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8",
      description:
        "Passionate traveler with 20+ years in the industry, visited 80+ countries",
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      description:
        "Expert in logistics and customer experience, ensuring seamless journeys",
    },
    {
      name: "Emily Rodriguez",
      role: "Travel Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "Specialist in crafting unique travel experiences and cultural immersion",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section with Video Background */}
      <section className="relative h-[60vh] overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
              About{" "}
              <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                TravelQuest
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed animate-fade-in">
              Turning your travel dreams into extraordinary adventures since
              2008
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div
                  className={`bg-gradient-to-r ${stat.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}
                >
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Why Choose TravelQuest?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don&apos;t just plan trips, we create life-changing experiences
              that stay with you forever
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-2xl transition-all duration-300 group border-0 shadow-lg"
              >
                <CardContent className="p-8">
                  <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                Our Journey
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  🌟 <strong>Founded in 2008</strong>, TravelQuest began as a
                  small dream to make extraordinary travel accessible to
                  everyone. What started as a passion project has grown into
                  India&apos;s most trusted travel companion.
                </p>
                <p>
                  🎯 We believe that travel is more than just visiting places –
                  it&apos;s about <strong>connecting with cultures</strong>,
                  creating lasting memories, and discovering new perspectives
                  that enrich your life forever.
                </p>
                <p>
                  ✨ Today, we continue to craft{" "}
                  <strong>personalized journeys</strong> that go beyond the
                  ordinary, ensuring every trip is as unique as the travelers
                  who take them. From solo adventures to family vacations, we
                  make dreams come true.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                width={800}
                height={600}
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828"
                alt="Our Story"
                className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Meet Our Dream Team
            </h2>
            <p className="text-xl text-gray-600">
              The passionate people behind your perfect journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-2xl transition-all duration-300 group border-0 shadow-lg overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      width={400}
                      height={400}
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-4 text-lg">
                      {member.role}
                    </p>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
