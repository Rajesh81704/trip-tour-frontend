"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import api from "@/lib/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
   
    subject: "",
    message: "",
  });

   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

   try {
    const response = await api.post("/contacts", formData);
    if(response.status === 201){
      toast.success("Message sent successfully! We'll get back to you within 24 hours. 🎉");
    }
   
    setFormData({ name: "", email: "", subject: "", message: "" });
   } catch (error) {
    toast.error("Failed to send message. Please try again."+error);
    
   }

    
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["123 Travel Street, Adventure City", "Delhi, India - 110001"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Call Us Now",
      details: ["+91-9876543210", "+91-9876543211"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@travelquest.com", "support@travelquest.com"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Mon - Fri: 9:00 AM - 8:00 PM",
        "Sat - Sun: 10:00 AM - 6:00 PM",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
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
              src="https://videos.pexels.com/video-files/2736469/2736469-uhd_2560_1440_30fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
              Let&apos;s Plan Your{" "}
              <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                Dream Trip
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed animate-fade-in">
              Ready to start your next adventure? We&apos;re here 24/7 to make
              it happen
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Multiple ways to reach us - choose what works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-2xl transition-all duration-300 group border-0 shadow-lg"
              >
                <CardContent className="p-8">
                  <div
                    className={`bg-gradient-to-r ${info.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <info.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {info.title}
                  </h3>
                  {info.details.map((detail, detailIndex) => (
                    <p
                      key={detailIndex}
                      className="text-gray-600 mb-2 font-medium"
                    >
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Send us a Message
                </h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours with a personalized travel plan.
                </p>
              </div>

              <Card className="shadow-2xl border-0">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Phone Number *
                        </label>
                        {/* <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                          placeholder="+91-9876543210"
                        /> */}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                        placeholder="Trip to Goa, Manali, Kashmir..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Tell us about your dream trip *
                      </label>
                      <textarea
                        name="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg resize-none"
                        placeholder="Describe your ideal destination, travel dates, group size, and any special requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-14 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      <Send className="h-5 w-5" />
                      Send Message & Get Free Quote
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Right Side - Map & Quick Contact */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Find Us
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Visit our office or reach out through any of these quick
                  options.
                </p>
              </div>

              {/* Map Placeholder */}
              <Card className="shadow-2xl border-0">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                      <p className="text-gray-600 text-lg font-medium">
                        Interactive Map Coming Soon
                      </p>
                      <p className="text-gray-500">
                        123 Travel Street, Adventure City
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button className="h-16 bg-green-600 hover:bg-green-700 text-lg font-semibold rounded-xl shadow-lg flex items-center justify-center gap-3">
                  <Phone className="h-5 w-5" />
                  Call Now
                </Button>
                <Button className="h-16 bg-blue-600 hover:bg-blue-700 text-lg font-semibold rounded-xl shadow-lg flex items-center justify-center gap-3">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </Button>
              </div>

              {/* Trust Badges */}
              <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-0">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-5 h-5 bg-yellow-400 rounded-full"
                        ></div>
                      ))}
                    </div>
                    <span className="font-bold text-lg">4.9/5</span>
                  </div>
                  <p className="text-gray-600 font-medium">
                    Based on 3,200+ reviews
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    🔒 Your information is 100% secure with us
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
