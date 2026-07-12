"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, User, LogOut, Heart } from "lucide-react";
import Login from "../forms/Login";
import { useAppSelector, useAppDispatch, logout } from "@/store";
import Image from "next/image";

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Packages", path: "/packages" },
  { name: "Destinations", path: "/packages" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const location = usePathname();
  const dispatch = useAppDispatch();
  const { isLoggedIn, isLoading } = useAppSelector((state) => state.auth);

  const isActive = useCallback((path: string) => location === path, [location]);
  const navItems = useMemo(() => NAV_ITEMS, []);

  useEffect(() => {
    let last = false;
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      if (scrolled !== last) {
        setIsScrolled(scrolled);
        last = scrolled;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const handleMenuToggle = useCallback(() => setIsMenuOpen((o) => !o), []);
  const handleMenuClose = useCallback(() => setIsMenuOpen(false), []);
  const handleLoginOpen = useCallback(() => setIsLoginOpen(true), []);
  const handleLoginClose = useCallback(() => setIsLoginOpen(false), []);
  const handleLogout = useCallback(() => dispatch(logout()), [dispatch]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo.png"
              alt="TripToo Travels"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map(({ name, path }) => (
              <Link
                key={name}
                href={path}
                className={`text-sm font-medium transition-colors duration-200 pb-1 ${
                  isActive(path)
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="p-2 text-gray-500 hover:text-red-500 transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            <Link href="/b2b">
              <Button
                variant="outline"
                size="sm"
                className="border-orange-500 text-orange-600 hover:bg-orange-50 font-semibold rounded-full px-4"
              >
                B2B
              </Button>
            </Link>
            {isLoggedIn ? (
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 px-4"
                onClick={handleLogout}
                disabled={isLoading}
              >
                <LogOut className="h-4 w-4 mr-1.5" />
                {isLoading ? "..." : "Logout"}
              </Button>
            ) : (
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 px-4"
                onClick={handleLoginOpen}
                disabled={isLoading}
              >
                <User className="h-4 w-4 mr-1.5" />
                {isLoading ? "..." : "Sign In"}
              </Button>
            )}
            <Link href="/contact">
              <Button
                size="sm"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full px-5 shadow-sm"
              >
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleMenuToggle}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleMenuClose}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-72 h-full z-50 bg-white shadow-2xl transform transition-transform duration-300 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-5 border-b">
            <Image src="/logo.png" alt="TripToo" width={100} height={32} className="h-8 w-auto" />
            <button onClick={handleMenuClose} className="p-1 text-gray-500 hover:text-gray-700">
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex-1 p-5 space-y-1">
            {navItems.map(({ name, path }) => (
              <Link
                key={name}
                href={path}
                onClick={handleMenuClose}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive(path)
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                }`}
              >
                {name}
              </Link>
            ))}
          </nav>
          <div className="p-5 border-t space-y-2">
            <Link href="/b2b" onClick={handleMenuClose}>
              <Button variant="outline" className="w-full border-orange-500 text-orange-600 rounded-full">
                B2B
              </Button>
            </Link>
            {isLoggedIn ? (
              <Button
                variant="outline"
                className="w-full border-gray-300 rounded-full"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            ) : (
              <Button
                variant="outline"
                className="w-full border-gray-300 rounded-full"
                onClick={handleLoginOpen}
              >
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            )}
            <Link href="/contact" onClick={handleMenuClose}>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {isLoginOpen && <Login onClose={handleLoginClose} />}
    </nav>
  );
};
