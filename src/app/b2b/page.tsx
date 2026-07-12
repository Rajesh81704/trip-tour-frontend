"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import {
  Users,
  Clock,
  Shield,
  Star,
  CheckCircle,
  MessageCircle,
  Phone,
  Mail,
  Building,
  Globe,
  Award,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import api from "@/lib/api";

enum InquiryType {
  CorporatePackages = "Corporate Packages",
  GroupTours = "Group Tours",
  MICE = "MICE (Meetings, Incentives, Conferences, Events)",
  CustomItineraries = "Custom Itineraries",
  PartnershipOpportunities = "Partnership Opportunities",
  Other = "Other",
}

const B2B = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",

    email: "",
    phone: "",
    website: "",
    inquiryType: "",
    message: "",
  });

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const resposnse = await api.post("/b2b-requests", formData);
      if (resposnse.status === 201) {
        toast.success("Inquiry Submitted Successfully!", {
          description: "Our B2B team will contact you within 24 hours.",
        });
      }
    } catch (error) {
      console.error("Error submitting B2B inquiry:", error);
      toast.error("Failed to submit inquiry. Please try again later.");
      return;
    }

    toast.success("Inquiry Submitted Successfully!", {
      description: "Our B2B team will contact you within 24 hours.",
    });
    // Reset form
    setFormData({
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      website: "",
      inquiryType: "",
      message: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What are your B2B pricing structures?",
      answer:
        "We offer tiered volume discounts starting from 10% for 10+ bookings, with custom pricing for large-scale partnerships.",
    },
    {
      question: "How do billing cycles work?",
      answer:
        "We offer flexible payment terms including net 30 for established partners, with multiple payment options available.",
    },
    {
      question: "Do you offer white-label solutions?",
      answer:
        "Yes, we provide white-label tour packages that you can brand and sell under your company name.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Snow Background */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        {/* Snow Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-white/30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Partner with Us for Exclusive Travel Packages
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Grow Your Business through Our B2B Travel Solutions. Join 200+
                trusted travel agents and corporate partners.
              </p>

              {/* Trust Logos */}
              <div className="flex items-center space-x-6 mb-8">
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800"
                >
                  <Award className="h-4 w-4 mr-1" />
                  Trusted by 200+ Partners
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-800"
                >
                  <Globe className="h-4 w-4 mr-1" />
                  50+ Destinations
                </Badge>
              </div>
            </div>

            {/* Inquiry Form */}
            <Card className="shadow-2xl bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Request Partnership
                </CardTitle>
                <CardDescription className="text-center">
                  Get custom B2B quotes and exclusive pricing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="companyName">Company Name *</Label>
                      <Input
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) =>
                          handleInputChange("companyName", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="contactName">Contact Person *</Label>
                      <Input
                        id="contactName"
                        value={formData.contactName}
                        onChange={(e) =>
                          handleInputChange("contactName", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Business Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="website">Company Website</Label>
                      <Input
                        id="website"
                        value={formData.website}
                        onChange={(e) =>
                          handleInputChange("website", e.target.value)
                        }
                        placeholder="https://www.yourcompany.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="inquiryType">Inquiry Type *</Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("inquiryType", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value={InquiryType.CorporatePackages}>
                            {InquiryType.CorporatePackages}
                          </SelectItem>
                          <SelectItem value={InquiryType.GroupTours}>
                            {InquiryType.GroupTours}
                          </SelectItem>
                          <SelectItem value={InquiryType.MICE}>
                            {InquiryType.MICE}
                          </SelectItem>
                          <SelectItem value={InquiryType.CustomItineraries}>
                            {InquiryType.CustomItineraries}
                          </SelectItem>
                          <SelectItem
                            value={InquiryType.PartnershipOpportunities}
                          >
                            {InquiryType.PartnershipOpportunities}
                          </SelectItem>
                          <SelectItem value={InquiryType.Other}>
                            {InquiryType.Other}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Additional Requirements</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      placeholder="Tell us about your specific needs..."
                      rows={3}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3"
                  >
                    Request Partnership
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Submit Inquiry</h3>
              <p className="text-gray-600">
                Fill out our simple B2B form with your requirements
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                2. We Review & Plan
              </h3>
              <p className="text-gray-600">
                Our B2B team analyzes your needs and creates custom solutions
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Get Your Offer</h3>
              <p className="text-gray-600">
                Receive competitive pricing and partnership terms within 24
                hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our B2B Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Dedicated B2B Pricing</h3>
              <p className="text-gray-600 text-sm">
                Exclusive volume discounts and competitive rates for partners
              </p>
            </div>
            <div className="text-center">
              <Globe className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Customizable Itineraries</h3>
              <p className="text-gray-600 text-sm">
                Tailored group packages to meet your clients&apos; specific
                needs
              </p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Fast Response SLA</h3>
              <p className="text-gray-600 text-sm">
                24-hour response time with dedicated account managers
              </p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Reliable Support</h3>
              <p className="text-gray-600 text-sm">
                End-to-end support from booking to trip completion
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Partners Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  &ldquo;Excellent B2B support and competitive pricing. Our
                  clients love the customized packages.&ldquo;
                </p>
                <div className="font-semibold">Sarah Johnson</div>
                <div className="text-sm text-gray-500">
                  CEO, Adventure Travel Co.
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  &ldquo;TripToo Travels has been our reliable partner for
                  corporate travel. Highly recommended!&rdquo;
                </p>
                <div className="font-semibold">Michael Chen</div>
                <div className="text-sm text-gray-500">
                  Director, Global Events Ltd.
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  &ldquo;Fast response times and professional service. They
                  understand our business needs perfectly.&ldquo;
                </p>
                <div className="font-semibold">Emma Wilson</div>
                <div className="text-sm text-gray-500">
                  Manager, Business Tours Inc.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Collapsible
                key={index}
                open={openFAQ === index}
                onOpenChange={() => toggleFAQ(index)}
              >
                <Card className="overflow-hidden">
                  <CollapsibleTrigger className="w-full p-6 text-left hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-lg">{faq.question}</h3>
                      {openFAQ === index ? (
                        <ChevronUp className="h-5 w-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-6 pb-6">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Need Immediate Assistance?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Phone className="h-12 w-12 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p>1234567890</p>
            </div>
            <div>
              <Mail className="h-12 w-12 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p>b2b@triptootravels.com</p>
            </div>
            <div>
              <MessageCircle className="h-12 w-12 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p>Available 24/7</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default B2B;
