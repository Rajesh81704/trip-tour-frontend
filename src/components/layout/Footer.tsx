import {
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold text-white">
              NatureVacation.in
            </span>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-gray-600 hover:bg-blue-600 p-3 rounded-full transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="bg-gray-600 hover:bg-pink-600 p-3 rounded-full transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="bg-gray-600 hover:bg-blue-400 p-3 rounded-full transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="bg-gray-600 hover:bg-blue-500 p-3 rounded-full transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="bg-gray-600 hover:bg-red-600 p-3 rounded-full transition-colors"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright Text */}
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">
              © 2025 NatureVacation.com All rights reserved.
            </p>
            <p className="text-gray-500 text-xs leading-relaxed max-w-4xl">
              The content and images used on this site are copyright protected
              and copyrights vests with the respective owners. The usage of the
              content and images on this website is intended to promote the
              works and no endorsement of the artist shall be implied.
              Unauthorized use is prohibited and punishable by law.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
