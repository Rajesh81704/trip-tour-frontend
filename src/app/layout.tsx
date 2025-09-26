import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { UserWrapper } from "@/components/layout/UserWrapper";
import { ReduxStoreProvider } from "@/store";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nature Vacation - Explore the Beauty of Nature",
  description:
    "Discover breathtaking destinations and unforgettable experiences with Nature Vacation. Your adventure starts here!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased 
           [&::-webkit-scrollbar]:w-1
         [&::-webkit-scrollbar-track]:bg-gray-100
         [&::-webkit-scrollbar-thumb]:bg-gray-300`}
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
