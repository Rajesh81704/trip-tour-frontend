"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export function ImageGallery({ images, title }: ImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
      {/* Main Image Display */}
      <div className="relative group">
        <Image
          src={images[currentImageIndex] || "/placeholder.svg"}
          alt={title}
          className="w-full h-[500px] object-cover transition-all duration-500 group-hover:scale-105"
          width={800}
          height={500}
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-0 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
          onClick={prevImage}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-0 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
          onClick={nextImage}
        >
          <ChevronRight className="w-5 h-5" />
        </Button>

        {/* Image Counter */}
        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
          {currentImageIndex + 1} / {images.length}
        </div>

        {/* Fullscreen Button */}
        <Button
          variant="outline"
          size="icon"
          className="absolute top-4 left-4 bg-black/70 hover:bg-black/90 text-white border-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <Maximize2 className="w-4 h-4" />
        </Button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-white shadow-lg scale-125"
                  : "bg-white/60 hover:bg-white/80"
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail Grid */}
      <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="grid grid-cols-5 gap-3">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentImageIndex
                  ? "ring-3 ring-orange-500 ring-offset-2"
                  : "hover:ring-2 hover:ring-orange-300"
              }`}
              onClick={() => setCurrentImageIndex(index)}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${title} ${index + 1}`}
                className="w-full h-24 object-cover transition-transform duration-300 group-hover:scale-110"
                width={150}
                height={96}
              />
              {index === currentImageIndex && (
                <div className="absolute inset-0 bg-orange-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
