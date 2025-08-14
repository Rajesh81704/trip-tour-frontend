"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Users, Mail, Phone, User, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import api from "@/lib/api";

interface InquiryFormProps {
  packageTitle: string;
  packageId: string;
  destination: string;
  onClose: () => void;
}

export const InquiryForm = ({
  packageTitle,
  packageId,
  onClose,
  destination,
}: InquiryFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    destination: destination,
    guests: "2",
    message: "",
    packageId: packageId,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post("/inquiries", {
        name: formData.name,
        mobileNumber: formData.mobileNumber,
        email: formData.email,
        destination: formData.destination,
        message: formData.message,
        packageId: formData.packageId,
        guests: formData.guests, // Added missing guests field
      });
      if (response.status === 200 || response.status === 201) {
        toast.success(
          "🎉 Inquiry submitted successfully! Our travel expert will contact you within 24 hours."
        );
      } else {
        toast.error("Failed to submit inquiry");
      }
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      toast.error("Failed to submit inquiry");
    }
    onClose();
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-6">
      <Card className="w-full max-w-2xl  py-0 shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
        <CardHeader className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white rounded-t-xl py-6">
          <div className="flex items-center justify-between px-6">
            <div>
              <CardTitle className="text-2xl font-bold mb-1">
                Get Your Custom Travel Quote
              </CardTitle>
              <p className="text-orange-100 text-sm">
                Let us create the perfect travel experience for you
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-full"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <div className="p-6 bg-gradient-to-r from-orange-50 to-pink-50 border-b border-orange-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-xl text-white">✨</span>
              </div>
              <div>
                <h3 className="font-semibold text-orange-900">
                  {packageTitle}
                </h3>
                <p className="text-orange-700 text-sm mt-1">
                  Fill the form below and unlock exclusive deals up to 20% off
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <User className="h-4 w-4 mr-2 text-orange-500" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <Mail className="h-4 w-4 mr-2 text-orange-500" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <Phone className="h-4 w-4 mr-2 text-orange-500" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="mobileNumber"
                  required
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <Users className="h-4 w-4 mr-2 text-orange-500" />
                  Number of Travelers *
                </label>
                <select
                  name="guests"
                  required
                  value={formData.guests}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-white"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Traveler" : "Travelers"}
                    </option>
                  ))}
                  <option value="5+">5+ Travelers</option>
                </select>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <MessageCircle className="h-4 w-4 mr-2 text-orange-500" />
                Special Requirements
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Tell us about your preferences, special occasions, or any specific requirements..."
              />
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="px-6 py-2.5 text-sm border-gray-200 hover:bg-gray-50"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="px-6 py-2.5 text-sm bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Submit Inquiry
              </Button>
            </div>
          </form>

          <div className="px-6 py-4 bg-gray-50 text-center rounded-b-xl border-t border-gray-100">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <p>
                🔒 Your information is secure and protected by industry-standard
                encryption
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
