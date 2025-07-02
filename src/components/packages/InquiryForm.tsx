import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type React from "react";
import { useState } from "react";

interface InquiryFormProps {
  price: number;
  originalPrice: number;
  discount: string;
}

interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  adults: string;
  children: string;
  message: string;
}

export function InquiryForm({
  price,
  originalPrice,
  discount,
}: InquiryFormProps) {
  const [inquiryForm, setInquiryForm] = useState<InquiryFormData>({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    adults: "",
    children: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setInquiryForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Inquiry submitted:", inquiryForm);
    // Handle form submission
  };

  return (
    <Card className="sticky top-28">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold text-orange-500">${price}</div>
            <div className="text-sm text-gray-500 line-through">
              ${originalPrice}
            </div>
          </div>
          <Badge className="bg-orange-500 hover:bg-orange-600">
            {discount}
          </Badge>
        </div>
        <div className="text-sm text-gray-600">per person</div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="checkIn">Check In</Label>
              <Input
                id="checkIn"
                type="date"
                value={inquiryForm.checkIn}
                onChange={(e) => handleInputChange("checkIn", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="checkOut">Check Out</Label>
              <Input
                id="checkOut"
                type="date"
                value={inquiryForm.checkOut}
                onChange={(e) => handleInputChange("checkOut", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="adults">Adults</Label>
              <Select
                value={inquiryForm.adults}
                onValueChange={(value) => handleInputChange("adults", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Adults" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Adult</SelectItem>
                  <SelectItem value="2">2 Adults</SelectItem>
                  <SelectItem value="3">3 Adults</SelectItem>
                  <SelectItem value="4">4+ Adults</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="children">Children</Label>
              <Select
                value={inquiryForm.children}
                onValueChange={(value) => handleInputChange("children", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Children" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0 Children</SelectItem>
                  <SelectItem value="1">1 Child</SelectItem>
                  <SelectItem value="2">2 Children</SelectItem>
                  <SelectItem value="3">3+ Children</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={inquiryForm.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Your full name"
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={inquiryForm.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              value={inquiryForm.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="Your phone number"
              required
            />
          </div>

          <div>
            <Label htmlFor="message">Special Requests</Label>
            <Textarea
              id="message"
              value={inquiryForm.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Any special requests or questions..."
              rows={3}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600"
          >
            Send Inquiry
          </Button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Free cancellation up to 24 hours before departure
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
