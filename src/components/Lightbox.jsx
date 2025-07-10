"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { FiX, FiMaximize } from "react-icons/fi";

export default function Lightbox({ images = [], index = 0, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(index);
  const [isLoading, setIsLoading] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoom, setZoom] = useState(1);

  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const imageContainerRef = useRef(null);
  const thumbnailRefs = useRef([]);

  const navigate = (dir) => {
    setIsLoading(true);
    setZoom(1);
    setCurrentIndex((i) =>
      dir === "next"
        ? (i + 1) % images.length
        : (i - 1 + images.length) % images.length
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => navigate("next"),
    onSwipedRight: () => navigate("prev"),
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: true,
  });

  const handleFullscreen = async () => {
    const el = imageContainerRef.current;
    if (!isFullscreen && el?.requestFullscreen) {
      await el.requestFullscreen();
    }
  };

  const handleExitFullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen();
  };

  const handleWheel = (e) => {
    if (!isFullscreen) return;
    e.preventDefault();
    const delta = -e.deltaY * 0.005;
    setZoom((z) => Math.min(Math.max(z + delta, 1), 3));
  };

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
      if (!document.fullscreenElement) setZoom(1);
    };
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        if (document.fullscreenElement) {
          handleExitFullscreen();
        } else {
          onClose();
        }
      }
      if (e.key === "ArrowLeft") navigate("prev");
      if (e.key === "ArrowRight") navigate("next");
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  useEffect(() => {
    const currentThumb = thumbnailRefs.current[currentIndex];
    if (currentThumb?.scrollIntoView) {
      currentThumb.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [currentIndex]);

  useEffect(() => {
    setCurrentIndex(index);
  }, [index]);

  const isMobile = windowSize.width < 768;

  if (!images.length) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between items-center"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      aria-describedby="lightbox-description"
    >
      {/* Screen reader description */}
      <p id="lightbox-description" className="sr-only">
        Use arrow keys to navigate images. Press Escape to close. Scroll to zoom
        when in fullscreen.
      </p>

      {/* Top bar */}
      <div className="w-full px-4 pt-4 pb-2 flex justify-between items-center">
        <div className="text-white/80 text-sm tracking-widest">
          {currentIndex + 1} / {images.length}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleFullscreen}
            className="text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Fullscreen image"
          >
            <FiMaximize size={isMobile ? 20 : 22} />
          </button>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close lightbox"
          >
            <FiX size={isMobile ? 20 : 26} />
          </button>
        </div>
      </div>

      {/* Image view */}
      <div
        {...swipeHandlers}
        className="w-full flex justify-center items-center flex-grow max-h-[calc(100vh-200px)] px-4"
        onWheel={handleWheel}
      >
        <div
          ref={imageContainerRef}
          className="relative w-full max-w-screen-lg h-full flex items-center justify-center"
        >
          {isFullscreen && (
            <button
              onClick={handleExitFullscreen}
              className="absolute top-4 right-4 z-50 text-white/90 hover:text-white bg-black/40 p-2 rounded-full backdrop-blur-sm transition"
              aria-label="Exit fullscreen"
            >
              <FiX size={24} />
            </button>
          )}

          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-md">
              <div className="animate-spin rounded-full h-8 w-8 border-2 border-white border-t-transparent"></div>
            </div>
          )}

          <Image
            ref={imageRef}
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1} of ${images.length}`}
            width={1600}
            height={1200}
            quality={85}
            className="max-w-full max-h-full object-contain rounded-md shadow-lg transition-opacity duration-200"
            style={{
              transform: `scale(${zoom})`,
              transition: "transform 0.2s ease",
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 80vw"
            priority
            onLoad={() => setIsLoading(false)}
            onError={() => setIsLoading(false)}
          />
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="w-full px-4 pb-4 overflow-x-auto no-scrollbar">
          <div className="flex gap-2 w-max min-w-full items-center justify-center">
            {images.map((src, i) => (
              <div key={i} className="shrink-0 h-24 w-15 flex items-center">
                <button
                  ref={(el) => (thumbnailRefs.current[i] = el)}
                  onClick={() => setCurrentIndex(i)}
                  className={`object-contain rounded-md cursor-pointer border-2 transition-all duration-200 hover:scale-105 ${
                    i === currentIndex
                      ? "border-white shadow-md"
                      : "border-transparent hover:border-white/40"
                  }`}
                  style={{ maxHeight: "96px", width: "auto" }}
                  aria-label={`Go to image ${i + 1}`}
                >
                  <Image
                    src={src}
                    alt={`Thumbnail ${i + 1}`}
                    width={120}
                    height={90}
                    className="object-cover rounded-md"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Hide scrollbars */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
      `}</style>
    </div>
  );
}
