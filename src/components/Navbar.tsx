"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Plane, Calendar } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Packages", path: "/packages" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-600 p-2 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
              <Plane className="h-7 w-7 text-white drop-shadow-lg" />
            </div>
            <span className="text-2xl font-extrabold bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent tracking-tight drop-shadow-lg">
              TravelQuest
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`relative px-2 py-1 text-base font-semibold transition-all duration-200
                  ${
                    isActive(item.path)
                      ? "text-orange-400 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-orange-400"
                      : "text-white hover:text-orange-300 hover:after:absolute hover:after:left-0 hover:after:-bottom-1 hover:after:w-full hover:after:h-0.5 hover:after:bg-orange-300"
                  }
                `}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-6 py-2 rounded-full shadow-md transition-all duration-200">
              B2B
            </Button>
            <Button
              variant="outline"
              className="text-white border-white/30 bg-white/10 hover:bg-white/20 font-semibold rounded-full px-6 py-2 transition-all duration-200"
            >
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 flex items-center gap-2 text-white font-bold px-6 py-2 rounded-full shadow-md transition-all duration-200">
              <Calendar className="h-4 w-4" />
              Book
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full text-white hover:text-orange-400 hover:bg-white/10 transition"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      />

      <div
        className={`fixed top-0 right-0 w-4/5 max-w-xs h-full z-50 bg-gradient-to-b from-blue-900 via-purple-900 to-orange-900 shadow-2xl transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ borderTopLeftRadius: "2rem", borderBottomLeftRadius: "2rem" }}
      >
        <div className="flex flex-col h-full py-8 px-6">
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-600 p-2 rounded-2xl shadow-lg">
                <Plane className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-extrabold bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent tracking-tight">
                TravelQuest
              </span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full text-white hover:text-orange-400 hover:bg-white/10 transition"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`block px-4 py-3 rounded-xl text-lg font-semibold transition-all duration-200 ${
                  isActive(item.path)
                    ? "bg-orange-500/20 text-orange-400"
                    : "text-white hover:bg-orange-400/10 hover:text-orange-300"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pt-8 flex flex-col gap-3">
            <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold rounded-full shadow-md transition-all duration-200">
              B2B
            </Button>
            <Button
              variant="outline"
              className="w-full text-white border-white/30 bg-white/10 hover:bg-white/20 font-semibold rounded-full transition-all duration-200"
            >
              Sign In
            </Button>
            <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 flex items-center justify-center gap-2 text-white font-bold rounded-full shadow-md transition-all duration-200">
              <Calendar className="h-4 w-4" />
              Book
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
