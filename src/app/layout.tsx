import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { UserWrapper } from "@/components/layout/UserWrapper";
import { ReduxStoreProvider } from "@/store";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TripToo Travels - Curated Journeys. Lasting Memories.",
  description:
    "Discover breathtaking destinations and unforgettable experiences with TripToo Travels. Curated journeys, lasting memories.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300`}
      >
        <ReduxStoreProvider>
          <UserWrapper>
            <Navbar />
            {children}
            <Footer />
            <Toaster />
          </UserWrapper>
        </ReduxStoreProvider>
      </body>
    </html>
  );
}
