"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";
import DigitalVideoSplit from "./DigitalVideoSplit";

export default function DigitalsSection() {
  const [loadedCount, setLoadedCount] = useState(12);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const observerRef = useRef(null);

  const allImages = [
    "/images/april17627.jpg",
    "/images/april17633.jpg",
    "/images/april17646.jpg",
    "/images/april17657.jpg",
    "/images/april17716.jpg",
    "/images/april18009.jpg",
    "/images/april18030.jpg",
    "/images/DSC00348.jpg",
    "/images/DSC00353.jpg",
    "/images/DSC00364.jpg",
    "/images/DSC00369.jpg",
    "/images/DSC00406.jpg",
    "/images/DSC00426.jpg",
    "/images/DSC00428.jpg",
    "/images/DSC00446.jpg",
    "/images/DSC00450.jpg",
    "/images/DSC00455.jpg",
    "/images/DSC00475.jpg",
    "/images/DSC00486.jpg",
    "/images/DSC00492.jpg",
    "/images/DSC00496.jpg",
    "/images/DSC00499.jpg",
    "/images/DSC00502.jpg",
    "/images/DSC00511.jpg",
    "/images/DSC00518.jpg",
    "/images/DSC00531.jpg",
    "/images/DSC00558.jpg",
  ];

  const loadImages = () => {
    setLoadedCount((prev) => Math.min(prev + 6, allImages.length));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadImages();
      },
      { threshold: 1 }
    );

    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [loadedCount]);

  return (
    <section id="digitals" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-light tracking-wide text-center text-peach mb-2">
        Digitals
      </h2>
      <p className="text-gray-600 text-lg text-center mb-10">
        Explore our stunning collection
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {allImages.slice(0, loadedCount).map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="relative aspect-[3/4] rounded-xl overflow-hidden focus:outline-none"
            aria-label={`View full image ${index + 1}`}
          >
            <Image
              src={img}
              alt={`Digital look ${index + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
              quality={85}
            />
          </button>
        ))}
      </div>

      {loadedCount < allImages.length && (
        <div
          ref={observerRef}
          className="w-full h-16 flex items-center justify-center text-white/60 text-sm tracking-widest mt-6"
        >
          Loading more...
        </div>
      )}

      {selectedIndex !== null && (
        <Lightbox
          images={allImages}
          index={selectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}

      <DigitalVideoSplit />
    </section>
  );
}
