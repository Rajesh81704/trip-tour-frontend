"use client";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Packages", href: "/packages" },
  { name: "Destinations", href: "/packages" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

const topDestinations = [
  { name: "Bali", href: "/packages?state=bali" },
  { name: "Maldives", href: "/packages?state=maldives" },
  { name: "Switzerland", href: "/packages?state=switzerland" },
  { name: "Thailand", href: "/packages?state=thailand" },
  { name: "Dubai", href: "/packages?state=dubai" },
];

const supportLinks = [
  { name: "FAQs", href: "/contact" },
  { name: "Booking Policy", href: "/contact" },
  { name: "Terms & Conditions", href: "/contact" },
  { name: "Privacy Policy", href: "/contact" },
  { name: "Cancellation Policy", href: "/contact" },
];

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/logo.png"
              alt="TripToo Travels"
              width={130}
              height={44}
              className="h-11 w-auto brightness-0 invert"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              Explore the world with us. Creating memories and lasting journeys, one destination at a time.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-gray-700 hover:bg-blue-600 flex items-center justify-center transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-gray-700 hover:bg-pink-600 flex items-center justify-center transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-full bg-gray-700 hover:bg-sky-500 flex items-center justify-center transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" aria-label="YouTube" className="w-8 h-8 rounded-full bg-gray-700 hover:bg-red-600 flex items-center justify-center transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ name, href }) => (
                <li key={name}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Destinations */}
          <div>
            <h4 className="text-white font-semibold mb-4">Top Destinations</h4>
            <ul className="space-y-2.5">
              {topDestinations.map(({ name, href }) => (
                <li key={name}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support + Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2.5 mb-6">
              {supportLinks.map(({ name, href }) => (
                <li key={name}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-semibold mb-3">Subscribe to newsletter</h4>
            <p className="text-xs text-gray-400 mb-3">Get the best travel deals &amp; updates</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 min-w-0 px-3 py-2 text-sm rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm font-semibold bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © 2024 TripToo Travels. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500">Payment methods:</span>
            <span className="text-xs font-bold text-gray-400 tracking-wide">VISA</span>
            <span className="text-xs font-bold text-gray-400">Mastercard</span>
            <span className="text-xs font-bold text-gray-400">UPI</span>
            <span className="text-xs font-bold text-orange-400">Paytm</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
