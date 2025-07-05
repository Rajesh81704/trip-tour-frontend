"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Plane, Calendar, User, Globe } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = usePathname();

  const navItems = [
    { name: "Home", path: "/", icon: Plane },
    { name: "Packages", path: "/packages", icon: Globe },
    { name: "About", path: "/about", icon: User },
    { name: "Contact", path: "/contact", icon: Calendar },
  ];

  const isActive = (path: string) => location === path;
  // const isHomePage = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-white/98 backdrop-blur-xl shadow-2xl border-b border-gray-200/30"
          : "bg-black/20 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center gap-2 lg:gap-3 group">
            <div className="relative">
              <div className="bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-600 p-1.5 lg:p-2 rounded-xl lg:rounded-2xl shadow-lg group-hover:scale-110 transition-all duration-300 ease-out">
                <Plane className="h-5 w-5 lg:h-7 lg:w-7 text-white drop-shadow-lg" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-600 rounded-xl lg:rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
            </div>
            <span className="text-xl lg:text-2xl font-extrabold text-white drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
              TravelQuest
            </span>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ease-out group flex items-center gap-2
                    ${
                      isActive(item.path)
                        ? "text-orange-400 bg-orange-100/20 shadow-md"
                        : "text-white hover:text-orange-300 hover:bg-white/20"
                    }
                  `}
                >
                  <IconComponent className="h-4 w-4" />
                  {item.name}
                  {isActive(item.path) && (
                    <div className="absolute inset-0 bg-orange-500/20 rounded-full animate-pulse" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Enhanced Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/b2b">
              <Button
                size="sm"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-out transform hover:scale-105"
              >
                <Globe className="h-4 w-4 mr-1" />
                B2B
              </Button>
            </Link>

            <div className="w-px h-6 bg-white/30" />

            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-2 border-orange-300 text-gray-800  hover:shadow-md transition-all duration-300 ease-out transform hover:scale-105"
            >
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>

            <Button
              size="sm"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-out transform hover:scale-105 flex items-center gap-2"
            >
              <Calendar className="h-4 w-4" />
              Book Now
            </Button>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full text-white hover:text-orange-300 hover:bg-white/20 hover:shadow-md transition-all duration-300 ease-out"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-md transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      />

      {/* Enhanced Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 w-80 h-full z-50 bg-white/95 backdrop-blur-xl shadow-2xl transform transition-all duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Enhanced Mobile Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200/50 bg-gradient-to-r from-orange-50 to-pink-50">
            <Link
              href="/"
              className="flex items-center gap-2 group"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-600 p-2 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Plane className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-extrabold text-gray-800">
                TravelQuest
              </span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full text-gray-500 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300 ease-out"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Navigation Items */}
          <nav className="flex-1 p-6">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? "bg-orange-500 text-white shadow-md"
                      : "text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile Actions */}
          <div className="p-6 border-t border-gray-100 space-y-3">
            <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2">
              <Calendar className="h-4 w-4" />
              Book Now
            </Button>
            <Button
              variant="outline"
              className="w-full text-gray-500 border-gray-300 bg-white/10 hover:bg-white/20 font-semibold rounded-xl transition-all duration-200"
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
