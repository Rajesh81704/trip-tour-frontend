"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Plane,
  Calendar,
  User,
  Globe,
  Sparkles,
  MountainSnow,
  LogOut,
} from "lucide-react";
import Login from "../forms/Login";
import { useAppSelector, useAppDispatch, logout } from "@/store";
import Image from "next/image";

const NAV_ITEMS = [
  { name: "Home", path: "/", icon: Plane },
  { name: "Packages", path: "/packages", icon: Globe },
  { name: "About", path: "/about", icon: User },
  { name: "Contact", path: "/contact", icon: Calendar },
];

const DESKTOP_NAV_CLASSES =
  "relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ease-out group flex items-center gap-2";
const DESKTOP_NAV_ACTIVE = "text-orange-400 bg-orange-100/20 shadow-md";
const DESKTOP_NAV_SCROLLED =
  "text-gray-700 hover:text-orange-500 hover:bg-orange-50/50";
const DESKTOP_NAV_DEFAULT =
  "text-white hover:text-orange-300 hover:bg-white/20";

const DESKTOP_ACTION_BTN =
  "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-out transform hover:scale-105";
const DESKTOP_SIGNIN_BTN =
  "rounded-full border-2 font-semibold bg-white/20 hover:bg-white/30 shadow-lg hover:shadow-xl transition-all duration-300 ease-out transform hover:scale-105";
const DESKTOP_SIGNIN_SCROLLED =
  "border-orange-500 text-black bg-white hover:border-orange-600";
const DESKTOP_SIGNIN_DEFAULT =
  "border-white/50 text-white hover:bg-white/20 hover:border-white";

const MOBILE_NAV_CLASSES =
  "flex items-center gap-3 p-4 rounded-xl transition-all duration-300 ease-out font-medium";
const MOBILE_NAV_ACTIVE =
  "text-orange-600 bg-orange-50 shadow-md border-l-4 border-orange-500";
const MOBILE_NAV_DEFAULT =
  "text-gray-700 hover:text-orange-600 hover:bg-orange-50 hover:shadow-md";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const location = usePathname();
  const dispatch = useAppDispatch();
  const { isLoggedIn, isLoading } = useAppSelector((state) => state.auth);

  const isActive = useCallback((path: string) => location === path, [location]);

  // Memoize nav items to avoid unnecessary re-renders
  const navItems = useMemo(() => NAV_ITEMS, []);

  // Optimize scroll event with passive listener and only update on threshold change
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

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Handlers
  const handleMenuToggle = useCallback(
    () => setIsMenuOpen((open) => !open),
    []
  );
  const handleMenuClose = useCallback(() => setIsMenuOpen(false), []);
  const handleLoginOpen = useCallback(() => setIsLoginOpen(true), []);
  const handleLoginClose = useCallback(() => setIsLoginOpen(false), []);
  const handleLogout = useCallback(() => dispatch(logout()), [dispatch]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-transparent/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/30"
          : "bg-gradient-to-r from-black/40 via-black/30 to-black/40 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 lg:gap-3 group">
            <div className="relative">
              <div className=" p-1.5 lg:p-2 rounded- lg:rounded-2xl ">
                {/* <MountainSnow className="h-5 w-5 lg:h-7 lg:w-7 text-white drop-shadow-lg" /> */}
                <Image
                  alt="logo"
                  src={"/logo-new.png"}
                  height={64}
                  width={64}
                />
              </div>
              {/* <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-600 rounded-xl lg:rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" /> */}
            </div>
            <span
              className={`text-xl lg:text-2xl font-extrabold drop-shadow-lg group-hover:scale-105 transition-transform duration-300 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              NatureVacation
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 bg-black/20 backdrop-blur-md px-2 py-1 rounded-full border border-white/20">
            {navItems.map(({ name, path, icon: Icon }) => (
              <Link
                key={name}
                href={path}
                className={`${DESKTOP_NAV_CLASSES} ${
                  isActive(path)
                    ? DESKTOP_NAV_ACTIVE
                    : isScrolled
                    ? DESKTOP_NAV_SCROLLED
                    : DESKTOP_NAV_DEFAULT
                }`}
              >
                <Icon className="h-4 w-4" />
                {name}
                {isActive(path) && (
                  <div className="absolute inset-0 bg-orange-500/20 rounded-full animate-pulse" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/b2b">
              <Button size="sm" className={DESKTOP_ACTION_BTN}>
                <Globe className="h-4 w-4 mr-1" />
                B2B
              </Button>
            </Link>
            <div
              className={`w-px h-6 ${
                isScrolled ? "bg-gray-300" : "bg-white/30"
              }`}
            />
            {isLoggedIn ? (
              <Button
                variant="outline"
                size="sm"
                className={`${DESKTOP_SIGNIN_BTN} ${
                  isScrolled ? DESKTOP_SIGNIN_SCROLLED : DESKTOP_SIGNIN_DEFAULT
                }`}
                onClick={handleLogout}
                disabled={isLoading}
              >
                <LogOut className="h-4 w-4 mr-2" />
                {isLoading ? "Loading..." : "Logout"}
              </Button>
            ) : (
              <Button
                variant="outline"
                size="sm"
                className={`${DESKTOP_SIGNIN_BTN} ${
                  isScrolled ? DESKTOP_SIGNIN_SCROLLED : DESKTOP_SIGNIN_DEFAULT
                }`}
                onClick={handleLoginOpen}
                disabled={isLoading}
              >
                <User className="h-4 w-4 mr-2" />
                {isLoading ? "Loading..." : "Sign In"}
              </Button>
            )}
            <Button
              size="sm"
              className={`${DESKTOP_ACTION_BTN} flex items-center gap-2`}
            >
              <Sparkles className="h-4 w-4" />
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={handleMenuToggle}
              className={`p-2 rounded-full hover:shadow-md transition-all duration-300 ease-out ${
                isScrolled
                  ? "text-gray-800 hover:text-orange-600 hover:bg-orange-50"
                  : "text-white hover:text-orange-300 hover:bg-white/20"
              }`}
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

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-md transition-all duration-500 ease-in-out lg:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={handleMenuClose}
        aria-hidden={!isMenuOpen}
      />

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 w-80 h-full z-50 bg-white/95 backdrop-blur-xl shadow-2xl transform transition-all duration-500 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full bg-white">
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200/50 bg-gradient-to-r from-orange-50 to-pink-50">
            <Link
              href="/"
              className="flex items-center gap-2 group"
              onClick={handleMenuClose}
            >
              <div className="bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-600 p-2 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Plane className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-extrabold text-gray-800">
                NatureVAcation
              </span>
            </Link>
            <button
              onClick={handleMenuClose}
              className="p-2 rounded-full text-gray-500 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300 ease-out"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Navigation Items */}
          <nav className="flex-1 p-6 bg-white">
            <div className="space-y-2">
              {navItems.map(({ name, path, icon: Icon }) => (
                <Link
                  key={name}
                  href={path}
                  onClick={handleMenuClose}
                  className={`${MOBILE_NAV_CLASSES} ${
                    isActive(path) ? MOBILE_NAV_ACTIVE : MOBILE_NAV_DEFAULT
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile Actions Footer */}
          <div className="p-6 border-t border-gray-200/50 bg-white">
            <div className="space-y-2">
              <Link href="/b2b" onClick={handleMenuClose}>
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-out"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  B2B Solutions
                </Button>
              </Link>
              <div className="flex gap-2 mt-2">
                {isLoggedIn ? (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-2 border-orange-500 text-orange-600 bg-orange-50 hover:border-orange-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-out"
                    onClick={handleLogout}
                    disabled={isLoading}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    {isLoading ? "Loading..." : "Logout"}
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-2 border-orange-500 text-orange-600 bg-orange-50 hover:border-orange-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-out"
                    onClick={handleLoginOpen}
                    disabled={isLoading}
                  >
                    <User className="h-4 w-4 mr-2" />
                    {isLoading ? "Loading..." : "Sign In"}
                  </Button>
                )}
                <Button
                  size="sm"
                  className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-out"
                >
                  <Sparkles className="h-4 w-4 mr-2" />
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isLoginOpen && <Login onClose={handleLoginClose} />}
    </nav>
  );
};
