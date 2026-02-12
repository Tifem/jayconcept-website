"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const backgroundImages = [
  "/images/mugcup.jpg",
  "/images/branded tshirt.jpg",
  "/images/framee.jpg",
  "/images/jotter.jpg"
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[80vh] flex items-center">
      {/* Background Carousel */}
      {backgroundImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Hero Background ${index + 1}`}
            fill
            className="object-cover object-center"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 animate-fade-in-up">
          Elevate Your Brand with <span className="text-blue-400">Jay Concept</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-200 mb-10 animate-fade-in-up delay-100">
          Exceptional printing services for souvenirs, customized gifts, corporate branding, and awards. We bring your vision to life with precision and style.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-200">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get Your Custom Print Today
          </Link>
          <Link
            href="#portfolio"
            className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-full text-white hover:bg-white/10 md:py-4 md:text-lg md:px-10 transition-all hover:scale-105 shadow-sm hover:shadow-md"
          >
            View Our Work
          </Link>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-3">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? "bg-blue-500 scale-125" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
