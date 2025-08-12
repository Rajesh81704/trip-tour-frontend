"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import api from "@/lib/api";
import { setUser } from "@/store/slice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

const RATINGS = [
  {
    label: "TRIP ADVISER",
    score: "4.5/5",
    color: "text-green-600",
    icon: "/tripadvisor.svg",
  },
  {
    label: "TRUST PILOT",
    score: "4.0/5",
    color: "text-blue-700",
    icon: "/trustpilot.svg",
  },
  {
    label: "GOOGLE",
    score: "4.4/5",
    color: "text-yellow-500",
    icon: "/google.svg",
  },
  {
    label: "REVIEWS.IO",
    score: "4.3/5",
    color: "text-green-700",
    icon: "/reviewsio.png",
  },
];

export default function Login({ onClose }: { onClose?: () => void }) {
  const [tab, setTab] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // For signup
  const [confirmPassword, setConfirmPassword] = useState(""); // For signup

  const dispatch = useDispatch();
  const router = useRouter();
  // Placeholder handlers
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    api.post("/auth/login", { email, password }).then((res) => {
      if (res.status === 200) {
        onClose?.();
        const user = (res.data as { user: User }).user;
        dispatch(setUser(user));
        router.push("/");
      }
    });
  };
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    api.post("/auth/register", { name, email, password }).then((res) => {
      if (res.status === 200) {
        onClose?.();
        const user = (res.data as { user: User }).user;
        dispatch(setUser(user));
        router.push("/");
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent z-50">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl flex overflow-hidden relative">
        {/* Close Button at Top Left */}
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-4 left-4 z-50 bg-white/80 hover:bg-white text-gray-500 hover:text-orange-600 rounded-full p-2 shadow transition-all duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {/* Left Side Image */}
        <div className="hidden md:flex flex-col justify-between w-1/2 bg-gray-100 relative">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Adventure"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
          <div className="relative z-10 p-10 flex flex-col h-full justify-end">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
              Your Adventure Starts Here
            </h2>
            <p className="text-white text-lg font-medium drop-shadow">
              Experience 20,000+ Tours And Activities from 1,200+ Suppliers
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {RATINGS.map((r) => (
                <div
                  key={r.label}
                  className="flex items-center gap-2 bg-white/80 rounded-lg px-3 py-1 shadow"
                >
                  <Image src={r.icon} alt={r.label} width={24} height={24} />
                  <span className={`font-bold ${r.color}`}>{r.score}</span>
                  <span className="text-xs text-gray-700 font-medium">
                    {r.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right Side Form */}
        <div className="w-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-between">
          {/* Tabs */}
          <div className="flex border-b mb-8">
            <button
              className={cn(
                "flex-1 py-3 text-lg font-semibold border-b-2 transition-colors",
                tab === "login"
                  ? "border-orange-500 text-orange-500"
                  : "border-transparent text-gray-400"
              )}
              onClick={() => setTab("login")}
              type="button"
            >
              Login
            </button>
            <button
              className={cn(
                "flex-1 py-3 text-lg font-semibold border-b-2 transition-colors",
                tab === "signup"
                  ? "border-orange-500 text-orange-500"
                  : "border-transparent text-gray-400"
              )}
              onClick={() => setTab("signup")}
              type="button"
            >
              Sign Up
            </button>
          </div>
          {/* Form */}
          <form
            onSubmit={tab === "login" ? handleLogin : handleSignup}
            className="flex flex-col gap-6"
            autoComplete="off"
          >
            <div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">
                {tab === "login"
                  ? "Log into Your Account"
                  : "Create Your Account"}
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              {tab === "signup" && (
                <div>
                  <Label htmlFor="name" className="mb-1 block">
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              )}
              <div>
                <Label htmlFor="email" className="mb-1 block">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="username"
                />
              </div>
              <div>
                <Label htmlFor="password" className="mb-1 block">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete={
                    tab === "login" ? "current-password" : "new-password"
                  }
                />
              </div>
              {tab === "signup" && (
                <div>
                  <Label htmlFor="confirm-password" className="mb-1 block">
                    Confirm Password
                  </Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    autoComplete="new-password"
                  />
                </div>
              )}
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-3 rounded-lg shadow-lg transition-all duration-300"
            >
              {tab === "login" ? "Login" : "Sign Up"}
            </Button>
            <Separator className="my-2" />
            <Link href={"https:api.naturevacation.in/auth/google"}>
              <Button
                type="button"
                variant="outline"
                className="w-full flex items-center justify-center gap-2 font-semibold"
                // TODO: Add Google OAuth handler
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 48 48"
                  className="inline-block"
                  aria-hidden="true"
                >
                  <g>
                    <path
                      fill="#4285F4"
                      d="M43.6 20.5h-1.9V20H24v8h11.3c-1.6 4.3-5.7 7-11.3 7-6.6 0-12-5.4-12-12s5.4-12 12-12c2.6 0 5 .8 7 2.3l5.7-5.7C34.1 6.5 29.3 4.5 24 4.5 12.7 4.5 3.5 13.7 3.5 25S12.7 45.5 24 45.5c10.5 0 20-8.5 20-20 0-1.3-.1-2.2-.4-3z"
                    />
                    <path
                      fill="#34A853"
                      d="M6.3 14.1l6.6 4.8C14.5 16.1 18.8 13 24 13c2.6 0 5 .8 7 2.3l5.7-5.7C34.1 6.5 29.3 4.5 24 4.5c-7.1 0-13.2 4.1-16.3 10.1z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M24 45.5c5.3 0 10.1-1.8 13.8-4.9l-6.4-5.2c-2 1.4-4.5 2.2-7.4 2.2-5.6 0-10.3-3.7-12-8.7l-6.6 5.1C7.1 41.1 14.9 45.5 24 45.5z"
                    />
                    <path
                      fill="#EA4335"
                      d="M43.6 20.5h-1.9V20H24v8h11.3c-1.1 3-3.6 5.2-6.6 6.1l6.4 5.2c3.7-3.4 6-8.4 6-14.3 0-1.3-.1-2.2-.4-3z"
                    />
                  </g>
                </svg>
                Continue with Google
              </Button>
            </Link>
            {tab === "login" && (
              <div className="text-right text-sm mt-2">
                <a href="#" className="text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>
            )}
          </form>
          <div className="mt-8 text-center text-gray-500 text-xs">
            By continuing, you agree to our{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
}
