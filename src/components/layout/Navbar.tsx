"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

  const isHomePage = location === "/";

  useEffect(() => {
    let last = false;
    const handleScroll = () => {
      const scrolled = window.scrollY > 60;
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

  const navBg = isScrolled
    ? "bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
    : isHomePage
    ? "bg-transparent backdrop-blur-md"
    : "bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)]";

  const linkColor = (path: string) => {
    if (isActive(path)) return "text-[#2563EB] font-semibold";
    if (!isScrolled && isHomePage) return "text-white/90 hover:text-white font-medium";
    return "text-[#374151] hover:text-[#2563EB] font-medium";
  };

  const logoInvert = !isScrolled && isHomePage;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      >
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[68px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <Image
                src="/logo.png"
                alt="NatureVacation"
                width={130}
                height={44}
                className={`h-10 w-auto object-contain transition-all duration-300 ${logoInvert ? "brightness-0 invert" : ""}`}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-7">
              {navItems.map(({ name, path }) => (
                <Link
                  key={name}
                  href={path}
                  className={`text-[15px] transition-colors duration-200 relative pb-0.5 ${linkColor(path)}`}
                >
                  {name}
                  {isActive(path) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563EB] rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                className={`p-2 rounded-full transition-colors hover:bg-white/10 ${!isScrolled && isHomePage ? "text-white/80 hover:text-white" : "text-gray-500 hover:text-red-500 hover:bg-red-50"}`}
                aria-label="Wishlist"
              >
                <Heart className="h-5 w-5" />
              </button>

              <Link href="/b2b">
                <button
                  className={`text-sm font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
                    !isScrolled && isHomePage
                      ? "border-white/50 text-white hover:bg-white/10"
                      : "border-[#F59E0B] text-[#D97706] hover:bg-amber-50"
                  }`}
                >
                  B2B
                </button>
              </Link>

              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  disabled={isLoading}
                  className={`flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
                    !isScrolled && isHomePage
                      ? "border-white/50 text-white hover:bg-white/10"
                      : "border-gray-200 text-gray-700 hover:border-[#2563EB] hover:text-[#2563EB]"
                  }`}
                >
                  <LogOut className="h-4 w-4" />
                  {isLoading ? "..." : "Logout"}
                </button>
              ) : (
                <button
                  onClick={handleLoginOpen}
                  disabled={isLoading}
                  className={`flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
                    !isScrolled && isHomePage
                      ? "border-white/50 text-white hover:bg-white/10"
                      : "border-gray-200 text-gray-700 hover:border-[#2563EB] hover:text-[#2563EB]"
                  }`}
                >
                  <User className="h-4 w-4" />
                  {isLoading ? "..." : "Sign In"}
                </button>
              )}

              <Link href="/contact">
                <button className="flex items-center gap-1.5 bg-[#F59E0B] hover:bg-[#D97706] text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                  Book Now
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={handleMenuToggle}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                !isScrolled && isHomePage
                  ? "text-white hover:bg-white/10"
                  : "text-gray-700 hover:text-[#2563EB] hover:bg-blue-50"
              }`}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleMenuClose}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 w-72 h-full z-50 bg-white shadow-2xl transform transition-transform duration-300 ease-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <Image src="/logo.png" alt="NatureVacation" width={110} height={36} className="h-9 w-auto" />
            <button
              onClick={handleMenuClose}
              className="p-1.5 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 p-5 space-y-1 overflow-y-auto">
            {navItems.map(({ name, path }) => (
              <Link
                key={name}
                href={path}
                onClick={handleMenuClose}
                className={`flex items-center px-4 py-3 rounded-xl text-[15px] font-medium transition-all duration-200 ${
                  isActive(path)
                    ? "bg-blue-50 text-[#2563EB] font-semibold"
                    : "text-gray-700 hover:bg-gray-50 hover:text-[#2563EB]"
                }`}
              >
                {name}
              </Link>
            ))}
          </nav>

          <div className="p-5 border-t border-gray-100 space-y-2.5">
            <Link href="/b2b" onClick={handleMenuClose}>
              <button className="w-full py-2.5 rounded-full border border-[#F59E0B] text-[#D97706] text-sm font-semibold hover:bg-amber-50 transition-colors">
                B2B
              </button>
            </Link>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full border border-gray-200 text-gray-700 text-sm font-semibold hover:border-red-300 hover:text-red-600 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            ) : (
              <button
                onClick={handleLoginOpen}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full border border-gray-200 text-gray-700 text-sm font-semibold hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
              >
                <User className="h-4 w-4" />
                Sign In
              </button>
            )}
            <Link href="/contact" onClick={handleMenuClose}>
              <button className="w-full py-2.5 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-white text-sm font-semibold shadow-sm transition-all duration-200 mt-1">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {isLoginOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <Login onClose={handleLoginClose} />
        </div>
      )}
    </>
  );
};
