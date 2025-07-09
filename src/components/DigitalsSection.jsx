"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import DigitalVideoSplit from "@/components/DigitalVideoSplit";
import Lightbox from "@/components/Lightbox"; // External Lightbox component

export default function DigitalsSection() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [imageMeta, setImageMeta] = useState([]);

  const images = useMemo(
    () => [
      "/images/april17627.jpg",
      "/images/april17633.jpg",
      "/images/april17646.jpg",
      "/images/april17657.jpg",
      "/images/april17716.jpg",
      "/images/april18009.jpg",
      "/images/april18030.jpg",
      "/images/DSC00339.jpg",
      "/images/DSC00345.jpg",
      "/images/DSC00348.jpg",
      "/images/DSC00353.jpg",
      "/images/DSC00364.jpg",
      "/images/DSC00368.jpg",
      "/images/DSC00369.jpg",
      "/images/DSC00372.jpg",
      "/images/DSC00374.jpg",
      "/images/DSC00394.jpg",
      "/images/DSC00406.jpg",
      "/images/DSC00418.jpg",
      "/images/DSC00419.jpg",
      "/images/DSC00426.jpg",
      "/images/DSC00428.jpg",
      "/images/DSC00431.jpg",
      "/images/DSC00446.jpg",
      "/images/DSC00450.jpg",
      "/images/DSC00455.jpg",
      "/images/DSC00462.jpg",
      "/images/DSC00464.jpg",
      "/images/DSC00465.jpg",
      "/images/DSC00470.jpg",
      "/images/DSC00475.jpg",
      "/images/DSC00479.jpg",
      "/images/DSC00486.jpg",
      "/images/DSC00488.jpg",
      "/images/DSC00492.jpg",
      "/images/DSC00496.jpg",
      "/images/DSC00499.jpg",
      "/images/DSC00502.jpg",
      "/images/DSC00509.jpg",
      "/images/DSC00511.jpg",
      "/images/DSC00514.jpg",
      "/images/DSC00518.jpg",
      "/images/DSC00528.jpg",
      "/images/DSC00531.jpg",
      "/images/DSC00537.jpg",
      "/images/DSC00540.jpg",
      "/images/DSC00558.jpg",
    ],
    []
  );

  useEffect(() => {
    Promise.all(
      images.map(
        (src) =>
          new Promise((resolve) => {
            const img = new window.Image();
            img.src = src;
            img.onload = () => {
              resolve({
                src,
                width: img.width,
                height: img.height,
                ratio: img.width / img.height,
              });
            };
          })
      )
    ).then((meta) => {
      setImageMeta(meta);
    });
  }, [images]);

  const sortedImages = useMemo(() => {
    const portrait = imageMeta.filter((img) => img.width <= img.height);
    const landscape = imageMeta.filter((img) => img.width > img.height);
    return [...portrait, ...landscape];
  }, [imageMeta]);

  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <section
      id="digitals"
      className="w-full bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-16"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Digital Gallery
          </h2>
          <p className="text-gray-600 text-lg">
            Explore our stunning collection
          </p>
        </div>

        <div className="columns-2 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {sortedImages.map((img, index) => (
            <div
              key={img.src}
              className="break-inside-avoid cursor-pointer transition-transform duration-500 hover:scale-105"
              onClick={() =>
                setSelectedIndex(images.findIndex((s) => s === img.src))
              }
            >
              <Image
                src={img.src}
                alt={`Digital ${index + 1}`}
                width={1200}
                height={800}
                quality={75}
                className="w-full h-auto object-contain rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <Lightbox
          images={images}
          index={selectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}

      <DigitalVideoSplit />
    </section>
  );
}
