"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  Shield,
  Headphones,
} from "lucide-react";
import { toast } from "sonner";
import api from "@/lib/api";

const benefits = [
  { icon: CheckCircle2, text: "Personalized travel recommendations", color: "text-[#22C55E]" },
  { icon: CheckCircle2, text: "Exclusive discounts & offers", color: "text-[#F59E0B]" },
  { icon: CheckCircle2, text: "Customized itineraries", color: "text-[#2563EB]" },
  { icon: CheckCircle2, text: "Expert travel support", color: "text-purple-500" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post("/contacts", formData);
      if (response.status === 201) {
        toast.success(
          "Message sent successfully! We will get back to you within 24 hours. 🎉"
        );
      }
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again." + error);
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

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* ── Hero Banner ── */}
      <section className="relative overflow-visible pt-[68px]">
        <div className="relative h-[240px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Contact us"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 35%" }}
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/65" />

          {/* Hero text — left aligned exactly as reference */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-[1320px] mx-auto w-full px-6 lg:px-16">
              <h1 className="text-[2.2rem] sm:text-[2.6rem] font-extrabold leading-tight drop-shadow-lg">
                <span className="text-white block">Let&apos;s Plan Your</span>
                <span
                  className="block"
                  style={{
                    color: "#F59E0B",
                    fontStyle: "italic",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  Perfect Getaway
                </span>
              </h1>
              <p className="text-white/85 text-[15px] mt-3 font-medium max-w-[440px] leading-relaxed drop-shadow">
                Share your travel plans with us and our experts will craft the best experience for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8 py-3.5 text-[12px] text-[#9CA3AF]">
        <span className="hover:text-[#2563EB] cursor-pointer transition-colors">Home</span>
        <span className="mx-2">›</span>
        <span className="hover:text-[#2563EB] cursor-pointer transition-colors">Packages</span>
        <span className="mx-2">›</span>
        <span className="text-[#F59E0B] font-semibold">Submit Inquiry</span>
      </div>

      {/* Main Content */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-7">

          {/* ── Left: Form ── */}
          <div className="bg-white rounded-[20px] border border-[#E5E7EB] shadow-[0_10px_30px_rgba(0,0,0,0.07)] overflow-hidden">
            {/* Package banner */}
            <div className="bg-[#FFF7ED] border-b border-[#FED7AA] p-5 flex items-center gap-4">
              <div className="w-10 h-10 bg-[#F59E0B] rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                <span className="text-lg">✈️</span>
              </div>
              <div>
                <h3 className="font-bold text-[#92400E] text-[15px]">
                  Submit an Inquiry
                </h3>
                <p className="text-[12px] text-[#B45309] mt-0.5">
                  Fill the form below and unlock exclusive deals up to 20% off
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 lg:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 text-[13px] font-semibold text-[#374151]">
                    <Phone className="h-3.5 w-3.5 text-[#F59E0B]" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[#E5E7EB] rounded-[12px] text-[14px] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all bg-[#F8FAFC] hover:border-[#D1D5DB]"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 text-[13px] font-semibold text-[#374151]">
                    <Mail className="h-3.5 w-3.5 text-[#F59E0B]" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[#E5E7EB] rounded-[12px] text-[14px] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all bg-[#F8FAFC] hover:border-[#D1D5DB]"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 text-[13px] font-semibold text-[#374151]">
                    <Phone className="h-3.5 w-3.5 text-[#F59E0B]" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[#E5E7EB] rounded-[12px] text-[14px] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all bg-[#F8FAFC] hover:border-[#D1D5DB]"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 text-[13px] font-semibold text-[#374151]">
                    <MessageCircle className="h-3.5 w-3.5 text-[#F59E0B]" />
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[#E5E7EB] rounded-[12px] text-[14px] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all bg-[#F8FAFC] hover:border-[#D1D5DB]"
                    placeholder="Trip to Goa, Manali, Kashmir..."
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mt-5 space-y-1.5">
                <label className="flex items-center gap-1.5 text-[13px] font-semibold text-[#374151]">
                  <MessageCircle className="h-3.5 w-3.5 text-[#F59E0B]" />
                  Special Requirements
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-[#E5E7EB] rounded-[12px] text-[14px] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all bg-[#F8FAFC] hover:border-[#D1D5DB] resize-none"
                  placeholder="Tell us about your preferences, special occasions, or any specific requirements..."
                />
              </div>

              {/* Actions */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-end">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setFormData({ name: "", phone: "", email: "", subject: "", message: "" })}
                  className="px-8 py-3 text-[14px] border-[#E5E7EB] text-[#374151] hover:bg-[#F8FAFC] rounded-[12px] font-semibold"
                >
                  Cancel
                </Button>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-8 py-3 bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold rounded-[12px] text-[14px] shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Send className="h-4 w-4" />
                  Submit Inquiry
                </button>
              </div>

              {/* Security notice */}
              <div className="mt-4 flex items-center justify-center gap-2 text-[12px] text-[#9CA3AF]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                <span>🔒 Your information is secure and protected by industry-standard encryption</span>
              </div>
            </form>
          </div>

          {/* ── Right: Info Cards ── */}
          <div className="space-y-4">
            {/* Why Submit */}
            <div className="bg-white rounded-[20px] border border-[#E5E7EB] shadow-[0_10px_30px_rgba(0,0,0,0.07)] p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#FEE2E2] flex items-center justify-center shrink-0">
                  <span className="text-base">💝</span>
                </div>
                <h4 className="font-bold text-[#111827] text-[15px]">Why Submit an Inquiry?</h4>
              </div>
              <ul className="space-y-3">
                {benefits.map(({ icon: Icon, text, color }) => (
                  <li key={text} className="flex items-start gap-2.5">
                    <Icon className={`h-4 w-4 ${color} shrink-0 mt-0.5`} />
                    <span className="text-[13px] text-[#374151]">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Need Help */}
            <div className="bg-white rounded-[20px] border border-[#E5E7EB] shadow-[0_10px_30px_rgba(0,0,0,0.07)] p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                  <Headphones className="h-4 w-4 text-[#2563EB]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#111827] text-[15px]">Need Help?</h4>
                  <p className="text-[11px] text-[#9CA3AF]">Our travel experts are ready to assist you!</p>
                </div>
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5 text-[13px] text-[#374151]">
                  <Phone className="h-3.5 w-3.5 text-[#F59E0B] shrink-0" />
                  +91 98765 43210
                </div>
                <div className="flex items-center gap-2.5 text-[13px] text-[#374151]">
                  <Mail className="h-3.5 w-3.5 text-[#F59E0B] shrink-0" />
                  support@naturevacation.in
                </div>
                <div className="flex items-center gap-2.5 text-[13px] text-[#374151]">
                  <Clock className="h-3.5 w-3.5 text-[#F59E0B] shrink-0" />
                  Mon - Sat: 9:00 AM - 7:00 PM
                </div>
              </div>
            </div>

            {/* Office Location */}
            <div className="bg-white rounded-[20px] border border-[#E5E7EB] shadow-[0_10px_30px_rgba(0,0,0,0.07)] p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4 text-[#F59E0B]" />
                </div>
                <h4 className="font-bold text-[#111827] text-[15px]">Our Office</h4>
              </div>
              <p className="text-[13px] text-[#374151] leading-relaxed">
                Gate Bazar, Old Matigara Rd, Ward 1,<br />
                Siliguri, Darjeeling, WB – 734003
              </p>
            </div>

            {/* Privacy */}
            <div className="bg-[#F0FDF4] rounded-[20px] border border-[#BBF7D0] p-5 flex items-start gap-3">
              <Shield className="h-5 w-5 text-[#22C55E] shrink-0 mt-0.5" />
              <p className="text-[12px] text-[#166534] leading-relaxed font-medium">
                We respect your privacy. Your details will never be shared with third parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
