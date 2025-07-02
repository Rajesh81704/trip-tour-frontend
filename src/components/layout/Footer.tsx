"use client";

import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-blue-950 via-blue-900 to-blue-800 text-white pt-16 pb-8 overflow-hidden px-10 w-[95%] mx-auto rounded-t-4xl shadow-2xl shadow-black/60 relative">
      <div className="relative z-10 max-w- mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand & Social */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-orange-400 to-pink-500 shadow-lg">
                  <MapPin className="h-7 w-7 text-white" />
                </span>
                <span className="text-3xl font-extrabold tracking-tight font-playfair bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                  TravelQuest
                </span>
              </div>
              <p className="text-gray-200 mb-6 leading-relaxed max-w-md">
                Creating extraordinary travel experiences that inspire and
                transform lives through authentic adventures around the globe.
              </p>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                aria-label="Facebook"
                className="bg-white/10 hover:bg-blue-600/80 transition-colors rounded-full p-2 shadow-md"
              >
                <Facebook className="h-5 w-5 text-blue-400" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="bg-white/10 hover:bg-pink-500/80 transition-colors rounded-full p-2 shadow-md"
              >
                <Instagram className="h-5 w-5 text-pink-400" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="bg-white/10 hover:bg-blue-400/80 transition-colors rounded-full p-2 shadow-md"
              >
                <Twitter className="h-5 w-5 text-blue-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-orange-300 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-400 transition-colors font-medium"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-400 transition-colors font-medium"
                >
                  Our Tours
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-400 transition-colors font-medium"
                >
                  Destinations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-400 transition-colors font-medium"
                >
                  Travel Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-400 transition-colors font-medium"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-orange-300 tracking-wide">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-400 transition-colors font-medium"
                >
                  Adventure Tours
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-400 transition-colors font-medium"
                >
                  Cultural Experiences
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-400 transition-colors font-medium"
                >
                  Wildlife Safari
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-400 transition-colors font-medium"
                >
                  Custom Packages
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-400 transition-colors font-medium"
                >
                  Travel Insurance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-orange-300 tracking-wide">
              Contact Info
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-900/60">
                  <MapPin className="h-5 w-5 text-orange-300" />
                </span>
                <div>
                  <p className="text-gray-200 font-medium">
                    123 Adventure Street
                  </p>
                  <p className="text-gray-400 text-sm">Travel City, TC 12345</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-900/60">
                  <Phone className="h-5 w-5 text-orange-300" />
                </span>
                <a
                  href="tel:+15551234567"
                  className="text-gray-200 font-medium hover:text-orange-400 transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-900/60">
                  <Mail className="h-5 w-5 text-orange-300" />
                </span>
                <a
                  href="mailto:hello@travelquest.com"
                  className="text-gray-200 font-medium hover:text-orange-400 transition-colors"
                >
                  hello@travelquest.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        {/* <div className="relative z-10 max-w-2xl mx-auto mt-16 mb-8 bg-gradient-to-r from-orange-500/90 to-pink-500/90 rounded-2xl shadow-2xl px-8 py-8 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h4 className="text-2xl font-extrabold mb-2 text-white drop-shadow">
              Subscribe to our Newsletter
            </h4>
            <p className="text-orange-100 text-sm font-medium">
              Get exclusive travel deals, tips, and inspiration delivered to
              your inbox.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <input
              type="email"
              required
              placeholder="Your Email Address"
              className="rounded-full px-5 py-3 text-base bg-white/90 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition w-full sm:w-64"
            />
            <button
              type="submit"
              className="rounded-full px-7 py-3 bg-blue-900 text-white font-bold shadow-lg hover:bg-blue-700 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div> */}

        {/* Bottom Bar */}
        <div className="relative z-10 border-t border-blue-800/60 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024{" "}
            <span className="font-bold text-orange-300">TravelQuest</span>. All
            rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-orange-300 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-orange-300 text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-orange-300 text-sm transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
